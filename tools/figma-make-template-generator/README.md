## Figma Make Template Generator

This project generates a Figma Make‑compatible template zip.

### Usage

- `npm run build` – copies `templates/base` to `output/figma-make-template/` and creates `figma-make-template.zip`.

### Goals

- Keep the output Make‑safe (no path aliases, no Node APIs, bare npm specifiers for Mantine packages).
- Automate asset placement in `public/` and CSS imports for Mantine packages.

### Status

- Base template ready (Phase 1–3): core layout, inputs, data, feedback, navigation, overlays, dates, workflow
- Make integrations: `data-make-id` annotations, inline logo asset, JSON from `./data`, globals.css
- Generators: copies `templates/base/` and zips with correct root structure

### Plan (next steps)

1) Component import automation
- Select finished DS components; exclude stories/decorators
- Copy into `templates/base/components/DS/` or equivalent
- Rewrite imports:
  - path aliases → relative paths
  - `@mantine/*` → `@mantine/*@7`
- Assets: convert referenced images to data URLs or local module exports; rewrite paths
- Styles: prefer plain CSS; warn on CSS Modules/SCSS

2) Provider/style injection
- Detect usage (notifications, modals, dates)
- Ensure providers and package CSS are imported in `App.tsx`

3) Make IDs
- Provide a helper/HOC to standardize `data-make-id`
- Expand coverage across imported components

4) Theming
- Wire tokens from `design/tokens/*` into `createTheme` or CSS variables
- Optional `ThemeProvider` adapter

5) Demos and docs
- Add modals/notifications triggers in galleries
- Extend `guidelines.md` with Make caveats, asset/JSON rules, `makeId` conventions, integration notes

6) CI and releases
- GitHub Action: run build on push/tag, attach `figma-make-template-vX.Y.Z.zip`
- Centralize Mantine version pins

### Milestones
- M1: Script copies DS components, rewrites imports, and builds zip
- M2: Provider detection + `data-make-id` standardization
- M3: Token theming + CI release pipeline
