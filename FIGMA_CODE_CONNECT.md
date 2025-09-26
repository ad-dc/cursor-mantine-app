# Figma Code Connect Setup Guide

This guide explains how to use Figma Code Connect to bridge your Design System components with Figma designs.

## Overview

Figma Code Connect allows you to:
- Connect React components to Figma design components
- Show real code examples in Figma
- Map Figma properties to React props
- Maintain consistency between design and code

## Installation

Code Connect is already installed in this project:

```bash
npm install @figma/code-connect
```

## Configuration

The project includes a `figma.config.json` file that configures Code Connect:

```json
{
  "codeConnect": {
    "include": [
      "components/DesignSystem/**/*.figma.tsx",
      "components/DesignSystem/**/*.figma.ts"
    ],
    "exclude": [
      "node_modules/**",
      ".next/**",
      "storybook-static/**",
      "**/*.test.*",
      "**/*.spec.*"
    ],
    "parser": "react"
  }
}
```

## Code Connect Files

Code Connect files use the `.figma.tsx` extension and are located alongside their corresponding components:

### Current Code Connect Files:
- `components/DesignSystem/Buttons/Button.figma.tsx`
- `components/DesignSystem/DataDisplay/Badge.figma.tsx`
- `components/DesignSystem/ComplexComponents/DataTable/DataTable.figma.tsx`

## How to Create Code Connect Files

### 1. Basic Structure

```tsx
import { figma } from '@figma/code-connect';
import { YourComponent } from './YourComponent';

figma.connect(
  YourComponent,
  'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID',
  {
    props: {
      // Map Figma properties to React props
    },
    example: (props) => (
      <YourComponent {...props}>
        {props.children}
      </YourComponent>
    ),
  }
);
```

### 2. Property Mapping

#### Enum Properties (Variants, Sizes, Colors)
```tsx
variant: figma.enum('Variant', {
  'Primary': 'primary',
  'Secondary': 'secondary',
  'Default': 'default',
}),
```

#### Boolean Properties
```tsx
disabled: figma.boolean('Disabled'),
loading: figma.boolean('Loading'),
```

#### Text Content
```tsx
children: figma.textContent('Button Text'),
```

#### Instance Properties (Icons, Components)
```tsx
leftIcon: figma.instance('Left Icon'),
rightIcon: figma.instance('Right Icon'),
```

#### Nested Properties
```tsx
data: figma.nestedProps('Table Data', {
  headers: figma.children('Headers'),
  rows: figma.children('Rows'),
}),
```

### 3. Multiple Variants

You can create multiple connections for different variants of the same component:

```tsx
// General component connection
figma.connect(Component, 'URL_1', { /* general props */ });

// Specific variant connection
figma.connect(
  Component,
  'URL_2',
  {
    variant: { 'Type': 'Primary' },
    props: {
      variant: 'primary',
      // other specific props
    },
    example: (props) => <Component variant="primary" {...props} />
  }
);
```

## CLI Commands

### Parse (Test Configuration)
Test your Code Connect files without publishing:

```bash
npx figma connect parse --dir components/DesignSystem
```

### Publish to Figma
Publish your Code Connect files to Figma (requires Figma access token):

```bash
npx figma connect publish --token YOUR_FIGMA_TOKEN
```

### Unpublish from Figma
Remove Code Connect files from Figma:

```bash
npx figma connect unpublish --token YOUR_FIGMA_TOKEN
```

## Getting Figma Node URLs

1. Open your Figma file
2. Select the component you want to connect
3. Right-click and choose "Copy link"
4. The URL format is: `https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=NODE_ID`

## Setting Up Figma Access Token

1. Go to Figma → Settings → Account → Personal Access Tokens
2. Generate a new token with appropriate permissions
3. Use the token with CLI commands:

```bash
npx figma connect publish --token YOUR_TOKEN
```

Or set it as an environment variable:

```bash
export FIGMA_ACCESS_TOKEN=your_token_here
npx figma connect publish
```

## Example Workflow

1. **Design in Figma**: Create your component with proper variants and properties
2. **Build in Code**: Implement the React component
3. **Create Code Connect File**: Map Figma properties to React props
4. **Test Locally**: Run `npx figma connect parse` to verify
5. **Publish**: Run `npx figma connect publish` to connect to Figma

## Best Practices

### Property Naming
- Use consistent naming between Figma and React props
- Use descriptive Figma property names (e.g., "Button Text" instead of "Text")

### Variants
- Create specific connections for important variants
- Use the `variant` field to filter connections

### Documentation
- Include comprehensive examples in your Code Connect files
- Document any special mapping logic

### Nested Component Mapping (Critical!)
- **ALWAYS map nested components explicitly** to prevent Tailwind fallback
- When Figma components contain nested structures (e.g., `.Core/Badge/` inside a Badge component set), you MUST create separate `figma.connect` mappings for EACH nested component
- Without explicit mappings, Figma auto-generates mixed React/Tailwind output which is unacceptable for design system usage
- Example: Badge component requires both main component set mapping AND `.Core/Badge/` mapping

```tsx
// Main component mapping
figma.connect(Badge, 'main-component-url', { /* main props */ });

// Nested component mapping (prevents Tailwind fallback)
figma.connect(Badge, 'nested-component-url', { /* nested props */ });
```

### File Organization
- Keep Code Connect files alongside their components
- Use the `.figma.tsx` extension for consistency

## Troubleshooting

### Common Issues

1. **"Cannot find component"**: Ensure the import path is correct
2. **"Invalid Figma URL"**: Check that the node ID is correct
3. **"Property not found"**: Verify Figma property names match exactly

### Debugging
- Use `npx figma connect parse --verbose` for detailed output
- Check that your `figma.config.json` includes the right files
- Verify your component exports are correct

## Integration with Design System

This setup integrates with your existing Design System:

- **Components**: All major components can have Code Connect files
- **Storybook**: Code Connect complements Storybook documentation
- **TypeScript**: Full type safety with your existing component props
- **Build Process**: Code Connect files are excluded from builds

## Next Steps

1. Create Code Connect files for more components:
   - Input components (TextInput, Select, etc.)
   - Layout components (Stack, Inline, Grid)
   - Complex components (DataTable, Modal, etc.)

2. Set up CI/CD integration to automatically publish changes

3. Train your design team on using Code Connect in Figma

4. Consider using the Figma MCP server for enhanced integration

## Resources

- [Figma Code Connect Documentation](https://www.figma.com/developers/code-connect)
- [Code Connect GitHub Repository](https://github.com/figma/code-connect)
- [Design System Components](./components/DesignSystem/) 