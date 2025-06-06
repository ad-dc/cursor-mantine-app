# ADDS - AppDirect Design System

A comprehensive design system built on top of Mantine components, providing consistent styling, behavior, and API across AppDirect applications.

## 🎨 Overview

This design system provides:
- **Consistent styling** with design tokens and themes
- **Enhanced components** with additional functionality
- **TypeScript support** with comprehensive type definitions
- **Organized structure** by component categories
- **Comprehensive documentation** with usage examples

## 📁 Structure

```
DesignSystem/
├── config.ts              # Design tokens and configuration
├── index.ts               # Main exports
├── README.md              # Documentation
├── Inputs/                # Input components
│   ├── TextInput.tsx
│   ├── Checkbox.tsx
│   └── index.ts
├── Buttons/               # Button components
│   ├── Button.tsx
│   ├── ActionIcon.tsx
│   └── index.ts
├── Navigation/            # Navigation components
├── Feedback/              # Feedback components
├── Overlays/              # Overlay components
├── DataDisplay/           # Data display components
├── Typography/            # Typography components
└── Misc/                  # Miscellaneous components
```

## 🚀 Usage

### Import Specific Components

```tsx
import { ADDSButton, ADDSTextInput } from '@/components/DesignSystem';

function MyForm() {
  return (
    <form>
      <ADDSTextInput 
        label="Name" 
        placeholder="Enter your name"
        required 
      />
      <ADDSButton variant="primary" type="submit">
        Submit
      </ADDSButton>
    </form>
  );
}
```

### Import by Category

```tsx
import { Inputs, Buttons } from '@/components/DesignSystem';

function MyComponent() {
  return (
    <div>
      <Inputs.TextInput placeholder="Search..." />
      <Buttons.Button variant="primary">Search</Buttons.Button>
    </div>
  );
}
```

## 🎯 Component Categories

### ✅ Inputs
- **TextInput** - Enhanced text input with validation states
- Checkbox *(coming soon)*
- NumberInput *(coming soon)*
- Textarea *(coming soon)*
- Switch *(coming soon)*
- Slider *(coming soon)*
- Radio *(coming soon)*
- SegmentedControl *(coming soon)*
- ColorInput *(coming soon)*
- Chip *(coming soon)*

### ✅ Buttons
- **Button** - Enhanced button with design system variants
- ActionIcon *(coming soon)*
- CloseButton *(coming soon)*

### 🔄 Navigation *(planned)*
- Breadcrumbs
- NavLink
- Stepper
- Tabs

### 🔄 Feedback *(planned)*
- Alert
- Progress

### 🔄 Overlays *(planned)*
- Drawer
- Menu
- Modal
- Popover
- Tooltip

### 🔄 Data Display *(planned)*
- Avatar
- Badge
- Card
- Indicator
- Kbd
- ThemeIcon

### 🔄 Typography *(planned)*
- Code
- Table

### 🔄 Misc *(planned)*
- Divider
- Paper
- Dropzone

## 🛠 Design Tokens

The design system uses consistent design tokens defined in `config.ts`:

### Colors
- **Primary**: Brand primary colors (blue scale)
- **Secondary**: Brand secondary colors (light blue scale)
- **System colors**: Gray, red, green, etc.

### Spacing
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `xxl`: 48px

### Typography
- Font sizes: xs (12px) → xxl (24px)
- Font weights: normal (400) → bold (700)
- Line heights: tight (1.2) → loose (1.8)

### Border Radius
- `sm`: 4px
- `md`: 8px
- `lg`: 12px
- `xl`: 16px
- `full`: 9999px

## 📝 Component Development

### Creating New Components

1. **Create component directory**: `mkdir components/DesignSystem/Category/ComponentName`
2. **Create component file**: Follow the established patterns
3. **Export in category index**: Add to `Category/index.ts`
4. **Export in main index**: Add to `DesignSystem/index.ts`
5. **Update category exports**: Add to category object

### Component Template

```tsx
import React, { forwardRef } from 'react';
import { Component as MantineComponent, ComponentProps as MantineComponentProps } from '@mantine/core';
import { ComponentSize, ComponentColor, addsClassName } from '../config';

export interface ADDSComponentProps extends Omit<MantineComponentProps, 'size' | 'color'> {
  size?: ComponentSize;
  color?: ComponentColor;
  variant?: 'default' | 'custom';
}

export const ADDSComponent = forwardRef<HTMLElement, ADDSComponentProps>(
  ({ size = 'md', color = 'primary', className, ...props }, ref) => {
    const componentClassName = [
      addsClassName('component'),
      addsClassName('component', size),
      className,
    ].filter(Boolean).join(' ');

    return (
      <MantineComponent
        ref={ref}
        size={size}
        color={color}
        className={componentClassName}
        {...props}
      />
    );
  }
);

ADDSComponent.displayName = 'ADDSComponent';
```

## 🎨 Styling

Components use:
- **CSS Custom Properties** for theme integration
- **Mantine's styling system** as the foundation
- **Design system classes** with `adds-` prefix
- **Consistent naming** for variants and states

## 📚 Documentation

Each component includes:
- **Comprehensive JSDoc** with descriptions
- **Multiple usage examples** covering common scenarios
- **TypeScript interfaces** with detailed prop descriptions
- **Accessibility considerations** where applicable

## 🧪 Testing

*(To be implemented)*
- Unit tests for component behavior
- Visual regression tests for styling
- Accessibility tests for compliance

## 🚢 Deployment

*(To be implemented)*
- Storybook integration for component showcase
- Design token documentation
- Component usage guidelines 