## Scripts

### generate-token-subset.js

Generate a Mantine token subset from the full theme, and optionally emit Tokens Studio–compatible files.

Inputs
- design/tokens/mantine-theme-full.json (source of truth from Mantine)

Outputs
- design/tokens/mantine-tokens-subset.json (baseline subset for app)
- design/tokens/open-color.tokens.json (optional, for Tokens Studio color import)
- design/tokens/tokens.json (optional, Tokens Studio core import)

Usage

```bash
# Subset only
node scripts/generate-token-subset.js

# Subset + Tokens Studio core (tokens.json)
node scripts/generate-token-subset.js --emit-tokens-json

# Subset + Open Color (separate color primitives)
node scripts/generate-token-subset.js --emit-open-color

# All outputs
node scripts/generate-token-subset.js --emit-open-color --emit-tokens-json
```

Open Color overrides
- Default overrides file (auto-applied if present): `design/tokens/open-color.overrides.json`
- Flag: `--open-color-overrides=PATH`
- Env var: `OPEN_COLOR_OVERRIDES=/abs/path/to/overrides.json`

Example overrides file
```json
{
  "blue": {
    "6": "#326FDE"
  }
}
```

Environment variables (optional)
- TOKENS_FONT_FAMILY: default Inter
- TOKENS_MONO_FAMILY: default Roboto Mono
- REM_BASE_PX: default 16 (used when converting rem calc() to px)
- MANTINE_SCALE: default 1 (used when resolving var(--mantine-scale))

Notes
- The core tokens (tokens.json) include fontFamilies (Inter/Mono), fontFamily aliases (body/monospace), typography for headings, spacing/radius/fontSizes/lineHeights/breakpoints, and normalized box shadows (with boolean inset: false).
- Open Color output maps Mantine color arrays (0–9) to Tokens Studio color objects per shade key.
- Treat this as a controlled one-way sync from Mantine → Tokens Studio to avoid overwriting designer changes unintentionally.

---

### migrate-layout-primitives.js

Automates migration from Mantine layout components to Design System primitives.

What it does
- Updates imports and usage:
  - Group → Inline
  - SimpleGrid → Grid

Scanned paths
- components/**/*.{ts,tsx}
- app/**/*.{ts,tsx}
(ignores node_modules, .next, dist)

Usage

```bash
# Live mode (writes changes)
node scripts/migrate-layout-primitives.js

# Dry run (preview only)
node scripts/migrate-layout-primitives.js --dry-run

# Verbose logging
node scripts/migrate-layout-primitives.js --verbose
```

After running
- Review changes
- Run linter/tests
- Manually fix any remaining imports/usages not covered by the automated rules



