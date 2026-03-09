# Cursor Mantine App

Next.js 16 runtime shell plus an AppDirect-flavored Mantine design system, Storybook workspace, and Figma Code Connect integration.

## Core workflows

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run storybook
```

Additional checks:

```bash
npm run typecheck:all
npm run build-storybook
```

## Repo shape

- `app/`: runtime App Router surface
- `components/DesignSystem/`: design-system components and complex composites
- `.storybook/`: Storybook configuration
- `tools/figma-make-template-generator/`: generator inventory not yet part of the runtime-quality bar

## Environment

Local Figma and MCP workflows read `FIGMA_ACCESS_TOKEN` from `.env.local`. Keep that file local-only. Use `.env.example` as the shared template.

## Figma Code Connect

```bash
npm run figma:parse
npm run figma:publish
npm run figma:unpublish
```

Use Storybook `needs-connection` tags as the backlog for unfinished component connections.
