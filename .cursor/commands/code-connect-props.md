Audit the currently selected Figma component and propose the correct 1:1 prop contract across `Mantine Core -> DS -> Figma` before making any edits.

Use this command when the goal is to decide the right prop surface first, not to immediately change files.

Workflow:

1. Use the selected Figma node as the current design source of truth.
2. Before calling any Figma MCP tool, read the relevant MCP tool schema first.
3. Inspect, in order:
   - the matching Mantine Core component API
   - the local DS wrapper component
   - the current `*.figma.tsx` file if it exists
   - the matching entry in `components/DesignSystem/FIGMA_PROPS_REGISTRY.md` if it exists
4. Build the recommendation in this direction: `Mantine Core -> DS -> Figma`.
5. Prefer thin 1:1 mapping by default.
6. Only recommend divergence when there is a clear design-system reason, such as:
   - semantic DS variants already established in this repo
   - intentionally narrowed DS support
   - behavioral props that should stay code-owned rather than Figma-exposed
7. Distinguish clearly between:
   - visual props that belong in Figma
   - behavioral or runtime props that should stay out of Figma
   - composition/content props like `children`, `content`, `trigger`, `title`, `leftSection`, `rightSection`
8. For each content-like prop, recommend the correct Code Connect binding:
   - `figma.slot(...)` for native slots
   - `figma.instance(...)` for instance swap properties
   - `figma.children(...)` only when matching nested child instances by layer name
   - `figma.string(...)`, `figma.boolean(...)`, or `figma.enum(...)` for scalar props
9. Do not edit files unless the user explicitly asks for implementation after the audit.

Output format:

1. Start with a short verdict:
   - whether the current component should stay 1:1
   - whether there are DS semantic exceptions
   - the main mismatches to fix
2. Then provide a compact table with these columns:
   - `Prop`
   - `Mantine Core`
   - `DS`
   - `Figma`
   - `Figma Type`
   - `Recommendation`
   - `Notes`
3. After the table, list:
   - props to keep
   - props to remove from Figma
   - props to rename
   - slot vs instance decisions
4. If useful, end with a short recommended implementation plan, but do not apply it unless asked.

Important repo-specific guidance:

- Use the repo’s established direction: `Mantine Core -> DS -> Figma`
- Favor the exact Figma property names currently used by the selected component
- Watch for the common `children` vs `content` mismatch
- If a DS wrapper is already a deliberate semantic exception, preserve that and call it out explicitly
- Keep the answer decision-oriented and concise, not a generic component explanation
