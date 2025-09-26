#!/usr/bin/env node

/**
 * Generate Mantine token subset from full theme
 *
 * - Reads design/tokens/mantine-theme-full.json (source of truth from Mantine)
 * - Writes design/tokens/mantine-tokens-subset.json (app baseline subset)
 * - Optional: --emit-open-color writes design/tokens/open-color.tokens.json for Tokens Studio
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TOKENS_DIR = path.join(ROOT, 'design', 'tokens');
const INPUT_FILE = path.join(TOKENS_DIR, 'mantine-theme-full.json');
const OUTPUT_SUBSET = path.join(TOKENS_DIR, 'mantine-tokens-subset.json');
const OUTPUT_OPEN_COLOR = path.join(TOKENS_DIR, 'open-color.tokens.json');
const OUTPUT_TOKENS_JSON = path.join(TOKENS_DIR, 'tokens.json');

const EMIT_OPEN_COLOR = process.argv.includes('--emit-open-color');
const EMIT_TOKENS_JSON = process.argv.includes('--emit-tokens-json');
const OVERRIDE_FONT_FAMILY = process.env.TOKENS_FONT_FAMILY || 'Inter';
const OVERRIDE_MONO_FAMILY = process.env.TOKENS_MONO_FAMILY || 'Roboto Mono';
const REM_BASE_PX = Number(process.env.REM_BASE_PX || 16);
const SCALE = Number(process.env.MANTINE_SCALE || 1);
const DEFAULT_OPEN_COLOR_OVERRIDES = path.join(TOKENS_DIR, 'open-color.overrides.json');

function getArgValue(flagName) {
  const prefix = `${flagName}=`;
  const arg = process.argv.find(a => a.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : undefined;
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function writeJson(filePath, data) {
  const json = JSON.stringify(data, null, 2) + '\n';
  fs.writeFileSync(filePath, json, 'utf8');
}

function toSubset(full) {
  // Keep only the primitives and pieces we mirror in the subset file
  const subset = {
    colors: full.colors,
    fontSizes: full.fontSizes,
    lineHeights: full.lineHeights,
    radius: full.radius,
    spacing: full.spacing,
    shadows: full.shadows,
    headings: full.headings,
    breakpoints: full.breakpoints,
    primaryColor: full.primaryColor,
    primaryShade: full.primaryShade,
  };
  return subset;
}

function toOpenColorTokens(colors) {
  // Convert Mantine color arrays into Tokens Studio color objects
  // { blue: ["#...", ...] } -> { blue: { "0": {value, type}, ... } }
  const result = {};
  Object.entries(colors || {}).forEach(([paletteName, scaleArray]) => {
    if (!Array.isArray(scaleArray)) return;
    const scaleObj = {};
    scaleArray.forEach((hex, idx) => {
      if (typeof hex !== 'string') return;
      scaleObj[String(idx)] = { value: hex, type: 'color' };
    });
    result[paletteName] = scaleObj;
  });
  return result;
}

function loadOpenColorOverrides(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    return data;
  } catch (e) {
    return undefined;
  }
}

function applyOpenColorOverrides(openColorTokens, overrides) {
  if (!overrides) return openColorTokens;
  Object.entries(overrides).forEach(([palette, shades]) => {
    if (!openColorTokens[palette]) openColorTokens[palette] = {};
    Object.entries(shades || {}).forEach(([shadeKey, value]) => {
      const hex = typeof value === 'string' ? value : value?.value;
      if (!hex) return;
      if (!openColorTokens[palette][shadeKey]) {
        openColorTokens[palette][shadeKey] = { value: hex, type: 'color' };
      } else {
        openColorTokens[palette][shadeKey].value = hex;
        openColorTokens[palette][shadeKey].type = 'color';
      }
    });
  });
  return openColorTokens;
}

// ---- Tokens Studio core (Figma) emitter ----
function convertCalcToPx(value) {
  // Handles strings like: calc(0.75rem * var(--mantine-scale))
  if (typeof value !== 'string') return value;
  return value.replace(/calc\(([-\d.]+)rem\s*\*\s*var\(--mantine-scale\)\)/g, (_, remVal) => {
    const px = Number(remVal) * REM_BASE_PX * SCALE;
    return `${px}px`;
  });
}

function convertEmToPx(value) {
  if (typeof value !== 'string') return value;
  return value.replace(/([-\d.]+)em/g, (_, emVal) => `${Number(emVal) * REM_BASE_PX}px`);
}

function stringifyPx(val) {
  if (typeof val === 'number') return `${val}px`;
  return val;
}

function convertDimensionsObj(obj) {
  const out = {};
  Object.entries(obj || {}).forEach(([k, v]) => {
    const pxVal = stringifyPx(convertCalcToPx(v));
    out[k] = { value: pxVal, type: 'dimension' };
  });
  return out;
}

function convertLineHeightsObj(obj) {
  const out = {};
  Object.entries(obj || {}).forEach(([k, v]) => {
    out[k] = { value: Number(v), type: 'number' };
  });
  return out;
}

function parseShadowPart(part) {
  // Supports both orders: geometry-first and color-first
  // Example segments:
  //  - "0 1px 3px rgba(0,0,0,0.05)"
  //  - "rgba(0,0,0,0.05) 0 10px 15px -5px"
  const cleaned = convertCalcToPx(part.trim());
  const colorMatch = cleaned.match(/rgba?\([^\)]+\)/);
  const color = colorMatch ? colorMatch[0] : undefined;
  const withoutColor = colorMatch ? cleaned.replace(colorMatch[0], '').trim() : cleaned;
  const pieces = withoutColor.split(/\s+/).filter(Boolean);
  let x, y, blur, spread;
  if (pieces.length >= 4) {
    [x, y, blur, spread] = pieces;
  } else if (pieces.length === 3) {
    [x, y, blur] = pieces; spread = '0px';
  } else {
    // Fallback to zeros if malformed
    x = '0px'; y = '0px'; blur = '0px'; spread = '0px';
  }
  const toPx = (v) => {
    if (!v) return '0px';
    if (/px$/.test(v)) return v;
    if (/^-?[\d.]+$/.test(v)) return `${v}px`;
    return v;
  };
  return {
    x: toPx(x),
    y: toPx(y),
    blur: toPx(blur),
    spread: toPx(spread),
    color: color || 'rgba(0,0,0,0.05)',
  };
}

function splitShadowString(shadowStr) {
  // Split by commas not inside parentheses
  const parts = [];
  let depth = 0, start = 0;
  for (let i = 0; i < shadowStr.length; i++) {
    const ch = shadowStr[i];
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      parts.push(shadowStr.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(shadowStr.slice(start));
  return parts.map(p => p.trim()).filter(Boolean);
}

function convertShadows(shadows) {
  const out = {};
  Object.entries(shadows || {}).forEach(([tier, css]) => {
    if (typeof css !== 'string') return;
    const segments = splitShadowString(css);
    const value = segments.map(seg => {
      const s = convertCalcToPx(seg);
      const parsed = parseShadowPart(s);
      // Ensure px units
      const ensurePx = (v) => {
        if (!v) return '0px';
        if (/px$/.test(v)) return v;
        if (/^[-\d.]+$/.test(v)) return `${v}px`;
        return v;
      };
      return {
        x: ensurePx(parsed.x),
        y: ensurePx(parsed.y),
        blur: ensurePx(parsed.blur),
        spread: ensurePx(parsed.spread),
        color: parsed.color,
        inset: false,
        type: 'dropShadow',
      };
    });
    out[tier] = { type: 'boxShadow', value };
  });
  return out;
}

function toTokensStudioCore(full) {
  const fontSizes = convertDimensionsObj(full.fontSizes);
  const radius = convertDimensionsObj(full.radius);
  const spacing = convertDimensionsObj(full.spacing);
  const lineHeights = convertLineHeightsObj(full.lineHeights);

  // Headings sizes to px
  const hSizes = full.headings?.sizes || {};
  const headingsSizes = {};
  Object.entries(hSizes).forEach(([tag, cfg]) => {
    headingsSizes[tag] = {
      fontSize: { value: stringifyPx(convertCalcToPx(cfg.fontSize)), type: 'dimension' },
      lineHeight: { value: Number(cfg.lineHeight), type: 'number' },
    };
  });

  // Breakpoints em -> px
  const breakpoints = {};
  Object.entries(full.breakpoints || {}).forEach(([k, v]) => {
    breakpoints[k] = { value: convertEmToPx(v), type: 'dimension' };
  });

  const tokens = {
    fontFamilies: {
      inter: { value: OVERRIDE_FONT_FAMILY, type: 'fontFamily' },
      mono: { value: OVERRIDE_MONO_FAMILY, type: 'fontFamily' },
    },
    fontFamily: {
      body: { value: '{fontFamilies.inter}', type: 'fontFamily' },
      monospace: { value: '{fontFamilies.mono}', type: 'fontFamily' },
    },
    fontSizes,
    lineHeights,
    radius,
    spacing,
    shadows: convertShadows(full.shadows),
    headings: {
      fontFamily: { value: '{fontFamilies.inter}', type: 'fontFamily' },
      fontWeight: { value: Number(full.headings?.fontWeight || 700), type: 'fontWeight' },
      textWrap: { value: String(full.headings?.textWrap || 'wrap'), type: 'string' },
      sizes: headingsSizes,
    },
    breakpoints,
    primaryColor: { value: String(full.primaryColor || 'blue'), type: 'string' },
    primaryShade: {
      light: { value: Number(full.primaryShade?.light ?? 6), type: 'number' },
      dark: { value: Number(full.primaryShade?.dark ?? 8), type: 'number' },
    },
  };
  return tokens;
}

function main() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`❌ Input file not found: ${INPUT_FILE}`);
    process.exit(1);
  }

  console.log('🔄 Reading full theme…');
  const full = readJson(INPUT_FILE);

  console.log('📝 Building subset…');
  const subset = toSubset(full);
  writeJson(OUTPUT_SUBSET, subset);
  console.log(`✅ Wrote subset: ${path.relative(ROOT, OUTPUT_SUBSET)}`);

  if (EMIT_OPEN_COLOR) {
    console.log('🎨 Emitting Open Color tokens for Tokens Studio…');
    let openColor = toOpenColorTokens(full.colors);
    const overridesPath = getArgValue('--open-color-overrides') || process.env.OPEN_COLOR_OVERRIDES || (fs.existsSync(DEFAULT_OPEN_COLOR_OVERRIDES) ? DEFAULT_OPEN_COLOR_OVERRIDES : undefined);
    if (overridesPath) {
      console.log(`🧩 Applying Open Color overrides from ${path.relative(ROOT, overridesPath)}`);
      const overrides = loadOpenColorOverrides(overridesPath);
      openColor = applyOpenColorOverrides(openColor, overrides);
    }
    writeJson(OUTPUT_OPEN_COLOR, openColor);
    console.log(`✅ Wrote open color tokens: ${path.relative(ROOT, OUTPUT_OPEN_COLOR)}`);
  }

  if (EMIT_TOKENS_JSON) {
    console.log('📦 Emitting Tokens Studio core tokens…');
    const tokensCore = toTokensStudioCore(full);
    writeJson(OUTPUT_TOKENS_JSON, tokensCore);
    console.log(`✅ Wrote tokens: ${path.relative(ROOT, OUTPUT_TOKENS_JSON)}`);
  }
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('❌ Failed to generate token subset');
    console.error(err);
    process.exit(1);
  }
}

module.exports = { toSubset, toOpenColorTokens };


