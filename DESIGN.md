---
version: alpha
name: AppDirect Admin
description: Design tokens for AppDirect admin-facing web UIs built on Mantine 9. Values derived from design/tokens/mantine-tokens-subset.json and styles/theme.ts.
colors:
  # Brand + interaction
  primary: "#326FDE"            # blue.6 — A11y-compliant override of Mantine/Open Color blue
  primary-hover: "#1c7ed6"      # blue.7
  primary-active: "#1971c2"     # blue.8
  on-primary: "#ffffff"
  # Surfaces
  surface: "#ffffff"
  surface-subtle: "#f8f9fa"     # gray.0
  surface-muted: "#f1f3f5"      # gray.1
  # Text
  on-surface: "#000000"
  on-surface-muted: "#495057"   # gray.7
  on-surface-dimmed: "#868e96"  # gray.6
  # Borders / dividers
  border: "#dee2e6"             # gray.3
  border-strong: "#ced4da"      # gray.4
  # Status
  info: "#326FDE"               # primary
  success: "#40c057"            # green.6
  pending: "#fab005"            # yellow.6
  danger: "#fa5252"             # red.6
  # Neutral scale endpoints (for gradients / overlays)
  neutral-0: "#f8f9fa"
  neutral-9: "#212529"
typography:
  h1:
    fontFamily: Inter
    fontSize: 34px              # 2.125rem
    fontWeight: 700
    lineHeight: 1.3
  h2:
    fontFamily: Inter
    fontSize: 26px              # 1.625rem
    fontWeight: 700
    lineHeight: 1.35
  h3:
    fontFamily: Inter
    fontSize: 22px              # 1.375rem
    fontWeight: 700
    lineHeight: 1.4
  h4:
    fontFamily: Inter
    fontSize: 18px              # 1.125rem
    fontWeight: 700
    lineHeight: 1.45
  h5:
    fontFamily: Inter
    fontSize: 16px              # 1rem
    fontWeight: 700
    lineHeight: 1.5
  h6:
    fontFamily: Inter
    fontSize: 14px              # 0.875rem
    fontWeight: 700
    lineHeight: 1.5
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
  code:
    fontFamily: Roboto Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: 0px
  xs: 2px                       # 0.125rem
  sm: 4px                       # 0.25rem — theme defaultRadius
  md: 8px                       # 0.5rem
  lg: 16px                      # 1rem
  xl: 32px                      # 2rem
  full: 9999px
spacing:
  xs: 10px                      # 0.625rem
  sm: 12px                      # 0.75rem
  md: 16px                      # 1rem
  lg: 20px                      # 1.25rem
  xl: 32px                      # 2rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  button-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-md}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-md}"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-md}"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-sm}"
  input-focus:
    # Border color shifts to primary on focus
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
  badge-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-sm}"
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-sm}"
  badge-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-sm}"
  tooltip:
    backgroundColor: "{colors.neutral-9}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-sm}"
    # padding intentionally omitted — DS wrapper uses off-scale custom padding (5px 8px) to match Figma
---

# AppDirect Admin — DESIGN.md

> **Proof-of-concept.** Tokens above are mechanically derived from `design/tokens/mantine-tokens-subset.json`, `design/tokens/open-color.overrides.json`, and `styles/theme.ts`. Prose below is a starter skeleton — brand and DS leads should revise for voice, rationale, and enforcement guidance. This file is a candidate for eventual generation from `@appdirect/design-tokens`.

## Overview

AppDirect admin UIs are built for **operators doing real work on dense data**. The visual language prioritizes clarity, scannability, and low visual noise over brand flourish. Screens often carry many controls, tables, and status indicators at once, so every visual element must earn its weight. The tone is **professional, utilitarian, and quietly confident** — we use color and elevation sparingly and let typography and spacing carry most of the structure.

We extend Mantine 9's component library with a thin AppDirect Design System (DS) layer (`components/DesignSystem/`), adding accessibility-safe color choices, opinionated variants, and layout primitives (`PageContentHeader`, `DataTable`, `Shell`) tuned to admin workflows.

## Colors

The palette is a narrow band of neutrals anchored by a single interaction color.

- **Primary (#326FDE)** — An A11y-compliant override of Open Color's blue.6. This is the **one interaction color**: links, primary buttons, focus rings, active tabs. Reserve it for the single most important action on a surface.
- **Neutrals (gray.0–gray.9)** — Carry all page chrome: backgrounds, borders, dividers, secondary text, disabled states. Neutrals do most of the visual work.
- **Status colors (info / success / pending / danger)** — Used only on badges, alerts, and status indicators. Never as decoration. Danger is reserved for destructive outcomes and error states.
- **Surface / on-surface** — Pure white surface with near-black text. We do not use tinted backgrounds for primary content.

### Dark mode

Dark mode swaps surfaces to Mantine's `dark` scale (9 steps) and keeps the same primary (#326FDE) — the A11y override works on both light and dark surfaces.

## Typography

Two families carry the whole system:

- **Inter** — All UI text: headings, body, labels, buttons, inputs. Chosen for its legibility at small sizes and broad weight coverage.
- **Roboto Mono** — All technical data: IDs, timestamps, code, JSON payloads, CLI examples.

Scale: 6 heading levels (h1–h6), 3 body sizes (lg/md/sm), 2 label sizes (md/sm), and a monospace `code` style. Headings are Inter Bold (700); body and input text are Inter Regular (400); labels are Inter Semi-Bold (600).

**Rules of thumb:**
- Page titles: `h1` or `h2`
- Section titles: `h3`
- Card / widget titles: `h4` or `h5`
- Body content: `body-md` (16px) is the default
- Form labels, buttons, tab labels: `label-md`
- Metadata, captions, timestamps: `body-sm` or `code`

## Layout & Spacing

The spacing scale is 5 levels (xs–xl, 10–32px) built on a ~4px-aligned grid. Use spacing tokens — never raw pixel values — for padding, gap, and margin. Common patterns:

- Card interior padding: `md` (16px)
- Section gaps: `lg` (20px)
- Top-level page margins: `xl` (32px)
- Inline label-to-input gap: `xs` (10px)

Breakpoints (Mantine defaults): `xs 36em / sm 48em / md 62em / lg 75em / xl 88em`. Admin layouts assume `md+` as the primary target; below `sm` we degrade to stacked layouts but do not optimize heavily for phone viewports.

## Elevation & Depth

Depth is conveyed through a **restrained 5-level shadow scale** (xs–xl) layered over pure-white surfaces. Shadows are soft, single-color, and never used for decoration — only to establish interactive layers:

- `xs` — input focus rings, chip borders
- `sm` — hover states on cards and list items
- `md` — floating menus, popovers, dropdowns
- `lg` — modals, drawers
- `xl` — rare; reserved for critical alert overlays

For flat hierarchy (tabs, navigation, dividers) we prefer **borders and color contrast over shadows**. Tonal separation uses `surface-subtle` (#f8f9fa) and `surface-muted` (#f1f3f5) against pure white.

## Shapes

A 5-step radius scale (xs 2px, sm 4px, md 8px, lg 16px, xl 32px) plus `none` and `full`. The system-wide default is `sm` (4px) — applied to buttons, inputs, cards, and menus. Larger radii (`md`, `lg`, `xl`) are reserved for special surfaces (modals, drawers, pop-out cards) where a softer edge reinforces the elevated context.

**Rule:** do not mix `full` (9999px, pill shape) with sharp corners in the same view. Most elements — buttons, inputs, cards, **badges** — are `sm`. Elevated surfaces are `md` or `lg`. Reserve `full` for genuinely circular elements (avatars, loading spinners, indicator dots).

## Components

The AppDirect DS layer organizes Mantine components into 10 categories under `components/DesignSystem/`:

| Category | Purpose |
|---|---|
| **Buttons** | Primary, default, outline, danger variants; see `button-*` tokens above |
| **Inputs** | Text inputs, number inputs, color inputs, date/time |
| **Combobox** | Select, autocomplete, multi-select |
| **Navigation** | Tabs, breadcrumbs, pagination, nav links |
| **DataDisplay** | Badges, tables, cards, tags |
| **Overlays** | Modals, drawers, popovers, tooltips, menus |
| **Typography** | Title, Text, Code, List |
| **Feedback** | Alerts, notifications, progress, skeleton |
| **Layout** | Container, Grid, Stack, Group, Divider |
| **Shell** | Application shell, sidebar, header |
| **ComplexComponents** | `PageContentHeader`, `DataTable`, `DashboardWidget`, `KeyInsight`, `NameValue` |

### Consumption rules (from `.cursor/rules`)

- **Always use DS components** from `@/components/DesignSystem` — never raw Mantine imports
- When a Mantine component lacks a DS wrapper, create one: `forwardRef`, typed as `DS[Name]Props extends Mantine[Name]Props`, exported through category index and main barrel
- **No Tailwind, no CSS modules, no inline `style` props** — use Mantine system props (`bg`, `c`, `w`, `h`, `p`, `m`, `radius`, `shadow`)
- For any list / grid / table use `Table` from DS (not raw `@mantine/core`)
- For page headers use `PageContentHeader` from DS

### Component tokens

The `components` section in the front matter defines per-variant tokens for the most commonly overridden components (buttons, inputs, badges, tooltip). Other components inherit from Mantine defaults + the theme color/radius/spacing tokens; authoring tokens for the full component surface is an ongoing effort tracked in the `@appdirect/design-tokens` package.

## Do's and Don'ts

- **Do** use `primary` (#326FDE) for the **single most important action** per surface; default buttons everywhere else
- **Don't** use more than one primary button on a single view
- **Do** use status colors (info / success / pending / danger) only for badges, alerts, and indicators
- **Don't** use status colors for decoration or emphasis in body text
- **Do** use `label-md` (Inter Semi-Bold 14px) for button labels, tab labels, and form field labels
- **Don't** use more than two type families on a screen (Inter for UI, Roboto Mono for data — that's it)
- **Do** use `rounded.sm` (4px) for buttons, inputs, cards, and badges; `rounded.full` for avatars and circular indicators; reserve `rounded.md`+ for elevated surfaces (modals, drawers)
- **Don't** mix `rounded.full` (pill) with sharp corners in the same view
- **Do** rely on spacing tokens (xs–xl) for all padding, gap, margin
- **Don't** use raw pixel values or ad-hoc spacing
- **Do** maintain WCAG AA contrast ratios (4.5:1 normal text, 3:1 large text) — the A11y blue (#326FDE) was chosen precisely to meet this on white
- **Don't** rely on color alone to convey meaning; always pair status colors with icons or text labels
- **Do** use shadows (xs–xl) sparingly, only to mark interactive layers
- **Don't** use shadow for decoration or to fake depth on static content

---

## Generation notes (remove in final)

This DESIGN.md is a POC. To promote it:

1. **Prose pass** — brand/DS leads rewrite Overview + Colors + Typography + Do's-and-Don'ts sections for real voice
2. **Component expansion** — enrich `components:` tokens for the full DS surface (pull from `@appdirect/design-tokens/tokens/components/*.json` once Phase 3 of that plan lands)
3. **Light/dark split** — either emit two files (`DESIGN.light.md` / `DESIGN.dark.md`) or reference modes via token aliases
4. **Harvest Figma component docs** — each Figma component has a `utilities/doc-section` (see Badge at node `654:2365`) with usage guidance; extract and merge into Components subsections
5. **Wire into tokens pipeline** — long-term, generate the YAML front matter from `@appdirect/design-tokens` at build time so the file stays in sync automatically
