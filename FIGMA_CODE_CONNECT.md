# Figma Code Connect Setup Guide

This guide explains the current Figma Code Connect workflow for the Design System.

## Overview

Figma Code Connect is used in this project to:

- connect DS React components to Figma components
- show real DS code in Figma Dev Mode
- map Figma properties to real DS props
- keep design and implementation aligned

## Where To Look

Use these files together:

- `.cursor/rules/figma-code-connect.mdc` — authoring rules and serializer gotchas for `*.figma.tsx`
- `.cursor/rules/design-system.mdc` — DS conventions plus container composition rules
- `components/DesignSystem/FIGMA_PROPS_REGISTRY.md` — Figma-facing prop contract for each component
- Storybook tags — `code-connected` and `needs-connect` are the current tracker for component coverage

Code Connect files use the `.figma.tsx` extension and live alongside their corresponding components.

## Configuration

The project uses `figma.config.json` to include Code Connect files under `components/DesignSystem/**/*.figma.tsx`.

## Basic Structure

```tsx
import { figma } from '@figma/code-connect';
import { YourComponent } from '@/components/DesignSystem';

figma.connect(
  YourComponent,
  'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID',
  {
    props: {
      // Map Figma properties to real DS props
    },
    example: (props) => (
      <YourComponent {...props} />
    ),
  }
);
```

## Property Mapping

### Enum Properties

```tsx
variant: figma.enum('variant', {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
}),
```

### Boolean Properties

```tsx
disabled: figma.boolean('disabled'),
loading: figma.boolean('loading'),
```

### Text Properties

Use `figma.string(...)` for text props.

```tsx
label: figma.string('label'),
children: figma.string('children'),
```

### Nested Prop Passthrough

Use `figma.nestedProps(...)` when a component wraps another component and needs to read the nested instance's props.

```tsx
input: figma.nestedProps('Input/Text Input', {
  size: figma.enum('size', {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
  }),
  label: figma.string('label'),
}),
```

### Instance Swap Slots

Use `figma.instance(...)` for container components with content slots.

```tsx
props: {
  content: figma.instance('content'),
},
example: (props) => (
  <Popover position={props.position} withArrow={props.withArrow}>
    {props.content}
  </Popover>
),
```

Critical rule: the instance swap must be a **direct child** of the Figma component.

```text
Works:
Popover
  content (instance swap)
  .Popover/Core/pointer

Does not work:
Popover
  content (frame)
    TextArea (instance swap)
```

### `figma.children(...)` Caveat

`figma.children('layerName')` creates a slot/drill-down link in Dev Mode. It does not reliably inline child code for container composition. Use it only when that navigation behavior is acceptable.

## Serializer Rule

Never use a block-body function in `example`. Keep `example` as a pure JSX expression.

```tsx
// Bad
example: (props) => {
  const items = [{ label: props.label, href: '#' }];
  return <Breadcrumb items={items} />;
}

// Good
example: (props) => (
  <Breadcrumb items={[{ label: props.label, href: '#' }]} />
)
```

Keep conditional logic inline in the expression.

## Optional Layers

If a designer needs to show or hide optional layers and have it reflected in code:

1. Add a boolean property in Figma
2. Map it with `figma.boolean(...)`
3. Use conditional spreads or inline conditionals in `example`

```tsx
props: {
  showLevel3: figma.boolean('Level 3'),
  level3: figma.nestedProps('level 3', {
    label: figma.string('label'),
  }),
},
example: (props) => (
  <Breadcrumb
    items={[
      { label: 'Level 1', href: '#' },
      ...(props.showLevel3 ? [{ label: props.level3.label }] : []),
    ]}
  />
),
```

## Subcomponent Stubs

If Figma falls back to auto-generated Tailwind-like output for internal nodes, add stub `figma.connect(...)` mappings for those internal subcomponent nodes to prevent the fallback.

## CLI Commands

### Parse

Test your Code Connect files without publishing:

```bash
FIGMA_ACCESS_TOKEN=$(grep FIGMA_ACCESS_TOKEN .env.local | cut -d= -f2) npx figma connect parse --skip-update-check
```

### Publish

Publish Code Connect files to Figma:

```bash
FIGMA_ACCESS_TOKEN=$(grep FIGMA_ACCESS_TOKEN .env.local | cut -d= -f2) npx figma connect publish --skip-update-check
```

## Getting Figma Node URLs

1. Open your Figma file
2. Select the component you want to connect
3. Right-click and choose "Copy link"
4. The URL format is `https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=NODE_ID`

## Setting Up Figma Access Token

1. Go to Figma → Settings → Account → Personal Access Tokens
2. Generate a token with appropriate permissions
3. Store it in `.env.local`

```bash
FIGMA_ACCESS_TOKEN=your_token_here
```

4. Pass it into parse/publish commands as shown above

## Example Workflow

1. Build or verify the DS component first
2. Align Figma property names to real DS props whenever possible
3. Create the `.figma.tsx` file
4. Use:
   - `figma.string(...)` for text props
   - `figma.nestedProps(...)` for nested prop passthrough
   - `figma.instance(...)` for container slots
5. Run parse locally
6. Publish to Figma
7. Verify in Figma Dev Mode

## Best Practices

### Property Naming

- Prefer 1:1 naming between Figma properties and DS props
- Avoid unnecessary translation layers where a direct mapping is possible

### Imports

- Import DS components from `@/components/DesignSystem`
- Do not import raw Mantine components in `.figma.tsx` when a DS wrapper exists

### Examples

- Keep examples minimal and representative
- Document unusual mapping logic inline in the `.figma.tsx` file when needed
- Use Storybook tags, not this file, to track which components are connected

## Troubleshooting

### Common Issues

1. **"Cannot find component"**: Ensure the component is exported from `@/components/DesignSystem`
2. **"Invalid Figma URL"**: Check that the node ID is correct
3. **"Property not found"**: Verify Figma property names match exactly
4. **Tailwind-like fallback output**: Add missing subcomponent stubs or nested mappings
5. **Container slot does not render inline**: Ensure the instance swap is a direct child and use `figma.instance(...)`

### Debugging

- Use `npx figma connect parse --verbose` for detailed output
- Check that `figma.config.json` includes the right files
- Verify component exports are correct
- Inspect parse output if the serializer appears to mangle JSX

## Resources

- [Figma Code Connect Documentation](https://www.figma.com/developers/code-connect)
- [Code Connect GitHub Repository](https://github.com/figma/code-connect)
- [Design System Components](./components/DesignSystem/)