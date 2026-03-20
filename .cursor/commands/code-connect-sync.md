Re-check the currently selected Figma component and align its Code Connect mapping for this repository.

Follow this workflow:

1. Use the selected Figma node as the source of truth for the current design contract.
2. Before calling any Figma MCP tool, read the relevant MCP tool schema first.
3. Inspect the local code in this order:
   - the DS wrapper component
   - the `*.figma.tsx` Code Connect file
   - the matching entry in `components/DesignSystem/FIGMA_PROPS_REGISTRY.md`
4. Compare the contract using this direction: `Mantine Core -> DS -> Figma`.
5. Preserve repo conventions:
   - use DS components, not raw Mantine imports, when example snippets need local components
   - keep `example` as a parenthesized arrow expression with no function body
   - prefer exact 1:1 prop mapping unless this repo already treats the component as a semantic DS exception
6. Choose the correct Figma binding type:
   - use `figma.slot('<name>')` for native Figma slots
   - use `figma.instance('<name>')` for instance swap properties
   - use the exact current Figma property name, especially for `children` vs `content`
7. Update the touched `*.figma.tsx` file and the corresponding registry entry so the docs match the real Figma contract.
8. Run `ReadLints` on edited files and fix any new issues.
9. Publish the mappings with the explicit token workaround from `.env.local`:
   - use `npx figma connect publish --skip-update-check -t "$FIGMA_ACCESS_TOKEN"`
   - do not rely on cached CLI auth
10. Do not create a commit or PR unless explicitly requested.

When reporting back:

- Start with whether the component was already aligned or what changed.
- Call out any important Figma naming mismatches such as `children` vs `content`.
- Say whether publish succeeded.
- If publish is blocked by an existing Figma mapping or unpublished nested component, say that clearly.

If the user explicitly asks to include commit/PR work, then:

- review git status, diff, upstream state, and recent commit style first
- create a focused branch if needed
- commit only the relevant changes
- push and open a PR with a short summary and test plan
