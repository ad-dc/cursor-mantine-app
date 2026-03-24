#!/usr/bin/env node

/**
 * Build script for @appdirect/ds-prototype-kit
 *
 * Copies DS component source files to dist/, excluding stories, tests,
 * and figma-specific files. The package is distributed as TypeScript source
 * that consumers compile with their own build tooling.
 *
 * Why source distribution?
 * - DS components are thin wrappers; pre-compiling adds complexity for
 *   minimal gain.
 * - Consumers (Next.js, Rspack) already have TypeScript compilation.
 * - Source enables tree-shaking and lets consumers see exactly what they get.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PROJECT_ROOT = path.resolve(ROOT, '..');
const SOURCE_DIR = path.join(PROJECT_ROOT, 'components', 'DesignSystem');
const DIST_DIR = path.join(ROOT, 'dist');

const SKIP_PATTERNS = [
  /\.stories\.[tj]sx?$/,
  /\.test\.[tj]sx?$/,
  /\.spec\.[tj]sx?$/,
  /\.figma\.[tj]sx?$/,
  /FIGMA_PROPS_REGISTRY\.md$/,
  /LAYOUT_GUIDE\.md$/,
  /README\.md$/,
];

function shouldSkip(filename) {
  return SKIP_PATTERNS.some((pattern) => pattern.test(filename));
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else if (!shouldSkip(entry.name)) {
      let content = fs.readFileSync(srcPath, 'utf-8');

      // Rewrite internal DS relative imports (e.g., '../Layout/Stack')
      // These stay as relative imports within the package.
      // No rewriting needed since the directory structure is preserved.

      // Rewrite next/image and next/link to optional peer imports
      // so the package works without Next.js (falls back gracefully)
      if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
        content = content.replace(
          /from\s+['"]@\/components\/DesignSystem\//g,
          "from '../"
        );
      }

      fs.writeFileSync(destPath, content, 'utf-8');
    }
  }
}

function main() {
  console.log('Building @appdirect/ds-prototype-kit...\n');

  // Clean
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true });
  }

  // Copy source files
  copyDirSync(SOURCE_DIR, DIST_DIR);

  // Count files
  let fileCount = 0;
  function countFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        countFiles(path.join(dir, entry.name));
      } else {
        fileCount++;
      }
    }
  }
  countFiles(DIST_DIR);

  console.log(`  Copied ${fileCount} files to dist/`);
  console.log('  Done.\n');
}

main();
