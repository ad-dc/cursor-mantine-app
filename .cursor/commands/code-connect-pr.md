Package the current Code Connect changes for this repository into a focused commit and pull request.

Use this command only after the relevant Figma/code alignment work is already done.

Workflow:

1. Review the current git state before committing:
   - `git status --short --branch`
   - `git diff`
   - upstream tracking status
   - recent commit messages to match repo style
2. Limit the commit to the relevant Code Connect changes only.
3. Do not revert unrelated user changes.
4. If needed, create a focused branch name that matches the scope of the mapping update.
5. Create a concise commit message that explains why the mapping changed, not just what files changed.
6. Push the branch with upstream tracking.
7. Open a GitHub PR with:
   - a short summary of the mapping or contract changes
   - a test plan that includes Figma publish/dev mode verification

Important rules:

- Never commit unless the user explicitly asked for commit/PR work.
- Never push forcefully.
- Never amend unless the user explicitly asked for it.
- If there are no relevant changes to commit, say so and stop.
- If publish has not been run yet for the touched mappings, say that clearly before creating the PR.

Preferred PR body format:

## Summary
- update the affected Code Connect mappings to match the current Figma contract
- align any registry docs with the published prop surface
- include any slot vs instance binding changes needed for Dev Mode output

## Test plan
- [x] Run `npx figma connect publish --skip-update-check -t "$FIGMA_ACCESS_TOKEN"`
- [ ] Verify the updated snippets in Figma Dev Mode
