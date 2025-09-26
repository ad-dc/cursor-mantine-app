## Guidelines

- Use relative imports only: `./components/...`, `../lib/...`
- Import Mantine from bare specifiers:
  - `@mantine/core@7`, `@mantine/hooks@7`, add others as needed
  - Include each package's styles: `@mantine/core/styles.css`, etc.
- Do not add custom build configs or Node-only APIs.
- Prefer inline data URLs for images (public/ may not be served in Make).
- Fetch JSON from `./data/...` (Make reliably serves in-project files).
- Use `data-make-id` to enable point-and-edit. Many components accept a `makeId` prop that sets it for you.
- Dates: `@mantine/dates@7` is enabled with `DatesProvider`; `dayjs@1` is included for parsing/formatting.
- Overlays/files: dropzone and some APIs may be limited in Make; prefer browser-only patterns.
