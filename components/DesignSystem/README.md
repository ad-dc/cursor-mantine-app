# AppDirect Design System

A design system layer built on top of Mantine v9, providing consistent component wrappers, semantic tokens, and layout primitives for AppDirect applications.

## Structure

```
DesignSystem/
├── index.ts                # Main barrel export
├── config.ts               # Design token values (colors, spacing, shadows, utilities)
├── types.ts                # Shared type definitions and semantic color mappings
├── LAYOUT_GUIDE.md         # When to use which layout primitive
├── FIGMA_PROPS_REGISTRY.md # Figma Code Connect prop contracts
├── Buttons/                # Button, ActionIcon, CloseButton
├── Inputs/                 # TextInput, TextArea, NumberInput, ColorInput, Slider, Switch,
│                           # SegmentedControl, Checkbox, Radio, RadioGroup, DropZone, FileInput
├── Combobox/               # SearchableSelect, AutocompleteClearable, Multiselect, Select, Combobox
├── Navigation/             # Breadcrumb, BackBreadcrumb, NavLink, Stepper, Tabs
├── Overlays/               # Drawer, Menu, Modal, ConfirmationModal, Popover,
│                           # ConfirmationPopover, Tooltip
├── DataDisplay/            # Alert, Avatar, Badge, Card, CardSection, Chip, Pill,
│                           # Indicator, Progress, ThemeIcon, List, Table
├── Typography/             # Kbd, Code, Text, Title
├── Misc/                   # Divider, Paper
├── Layout/                 # Stack, Group, Inline, Box, SimpleGrid, Grid, Flex, Container, Center
├── Shell/                  # AppShellLayout, HeaderBar, SidebarNav, SidebarNavLink,
│                           # SingleColumnLayout, TertiaryColumnLayout
└── ComplexComponents/      # KeyInsight, NameValue, CopyButton, PageContentHeader,
                            # DescriptionBlock, DataTable, DashboardWidget
```

## Usage

### Import specific components

```tsx
import { Button, TextInput, Badge, Stack } from '@/components/DesignSystem';

function MyForm() {
  return (
    <Stack gap="md">
      <TextInput label="Name" placeholder="Enter your name" required />
      <Button variant="primary">Submit</Button>
    </Stack>
  );
}
```

### Import by category

```tsx
import { Inputs, Buttons } from '@/components/DesignSystem';

function MyComponent() {
  return (
    <>
      <Inputs.TextInput placeholder="Search..." />
      <Buttons.Button variant="primary">Search</Buttons.Button>
    </>
  );
}
```

### Import types

```tsx
import type { DSButtonProps, DSTextInputProps } from '@/components/DesignSystem';
```

## Creating New Components

When a Mantine component has no DS wrapper yet, create one following this pattern:

```tsx
'use client';

import React, { forwardRef } from 'react';
import {
  ComponentName as MantineComponentName,
  ComponentNameProps as MantineComponentNameProps,
} from '@mantine/core';

export interface DSComponentNameProps extends MantineComponentNameProps {}

export const ComponentName = forwardRef<HTMLDivElement, DSComponentNameProps>(
  ({ ...props }, ref) => <MantineComponentName ref={ref} {...props} />
);
ComponentName.displayName = 'ComponentName';
```

Then export through the category `index.ts` and `components/DesignSystem/index.ts`.

## Styling

- Use Mantine system props (`bg`, `c`, `w`, `h`, `p`, `m`, `radius`, `shadow`, etc.)
- Do not use Tailwind CSS, CSS modules, or inline `style` props
- See `config.ts` for design token values and `types.ts` for semantic color mappings

## Layout Primitives

See [LAYOUT_GUIDE.md](./LAYOUT_GUIDE.md) for guidance on when to use `Stack`, `Inline`, `Grid`, `Box`, and other layout primitives.

## Figma Code Connect

Components with Code Connect mappings have a sibling `.figma.tsx` file. See [FIGMA_PROPS_REGISTRY.md](./FIGMA_PROPS_REGISTRY.md) for the Figma-facing prop contracts.

Storybook tags track Code Connect coverage:
- `code-connected` -- component has a published `.figma.tsx` mapping
- `needs-connect` -- component still needs a Code Connect file

## Storybook

Run `npm run storybook` to browse components and their documentation on port 6006.
