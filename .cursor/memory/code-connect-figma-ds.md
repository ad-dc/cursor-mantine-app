# Code Connect + Figma + DS (session notes)

## Figma MCP

- **`user-Figma`**: use empty `fileKey` + `nodeId` with `get_design_context` / `get_code_connect_suggestions` to read the **current selection** in the Figma desktop app (no separate `figma_get_selection` tool in this setup).
- **`plugin-figma-figma`**: typically needs explicit `fileKey` and `nodeId`.

## Code Connect rules (this repo)

- **Always map DS components** from `@/components/DesignSystem` (or colocated `*.figma.tsx` next to the DS file), **not** raw Mantine — Dev Mode should show the DS API (e.g. `DropZone` `title`/`description`, not Mantine-only props).
- **Publish**: `npx figma connect publish --token "$(grep -E '^FIGMA_ACCESS_TOKEN=' .env.local | cut -d= -f2-)"` when `dotenv`/`FIGMA_ACCESS_TOKEN` alone hits expired-token issues.
- **Registry**: keep [`components/DesignSystem/FIGMA_PROPS_REGISTRY.md`](components/DesignSystem/FIGMA_PROPS_REGISTRY.md) aligned with what’s mapped vs fixed vs code-only.

## Patterns we shipped

### Indicator (`807:601`)

- `variant` → DS `type` (`error` → `danger`); `size` enum → px; `withBorder`; `hasLabel` + `label`; `inline` when `hasLabel` is true.
- PR / merge on `main` as Indicator Code Connect work.

### Card (`1992:5381`)

- Fixed surface in DS (padding/radius/shadow/border) — **not** exposed as Figma props.
- **`figma.slot('children')`** for content; `interactive` / `onClick` **code-only** (not in Code Connect).

### DropZone (`1868:11698`)

- **Colocated** [`components/DesignSystem/Inputs/DropZone.figma.tsx`](components/DesignSystem/Inputs/DropZone.figma.tsx) next to `DropZone.tsx`; **removed** [`Misc/DropZone.figma.tsx`](components/DesignSystem/Misc/DropZone.figma.tsx) (old raw Mantine + inline styles).
- Figma **`title`** / **`description`** → `figma.string('title')` / `figma.string('description')`.
- **Mantine `Dropzone` does not have `title`/`description`** — DS consumes them and renders `Text` inside `children`; engineers use DS `DropZone` for that contract.
- Example includes **`onDrop`** / **`onReject`** placeholders + comment block for app-only props (`maxSize`, `accept`).
- PR: **#42** `feat/dropzone-code-connect` (publish was run before/during that work).

### DataTable (`5789:113058`)

- **Static boilerplate** — no `figma.enum`/`figma.boolean` bindings. DataTable is configuration-driven (columns, data, callbacks); none maps to Figma properties.
- **`figma.slot('children')`** for the visual content slot; Figma component serves as a design reference with an example table layout.
- Colocated at [`ComplexComponents/DataTable/DataTable.figma.tsx`](components/DesignSystem/ComplexComponents/DataTable/DataTable.figma.tsx).
- Example shows the canonical usage: `columns`, `data`, cursor-based `pageInfo` + `onPaginationChange`, `onSortChange`, `filtersState` + `onFiltersChange`, `onRowSelectionChange`, `isError` + `onRetry`, feature toggles.
- Sub-components inside the table (Badge, Checkbox, Button, TextInput, Select, Chip, etc.) are **already code-connected** — developers see their DS snippets when clicking into those layers.
- Rationale: engineers were recreating the MRT setup from scratch instead of using `DataTable` from `@/components/DesignSystem`. The boilerplate gives them a copy-pasteable starting point.
- Reference implementation: `micro-ui-ts/src/components/Table/`.

## Subagent

- [`.cursor/agents/code-connect-pr.md`](.cursor/agents/code-connect-pr.md) — PR workflow for Code Connect + registry changes (branch, commit, `gh pr create`).

---

*To add as a Cursor chat memory: copy the bullets you care about into Settings → Rules & Memories.*
