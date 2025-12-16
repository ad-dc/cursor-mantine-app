# Figma Code Connect - Props Registry

This document defines the Figma-facing prop surface for all Design System components.
It serves as the authoritative instruction set for Figma Code Connect integration.

---

## Global Conventions

### Size Tokens

All components that accept a `size` prop use the same set of values:

| Token | Description |
|-------|-------------|
| `xs`  | Extra small |
| `sm`  | Small |
| `md`  | Medium (default for most components) |
| `lg`  | Large |
| `xl`  | Extra large |

### Semantic Color Tokens

Components expose semantic color names that map internally to Mantine colors:

| Semantic Name | Mantine Color | Usage |
|--------------|---------------|-------|
| `neutral` | `gray` | Default/inactive states |
| `info` | `blue` | Informational content |
| `success` | `green` | Positive/success states |
| `warning` | `yellow` | Caution/warning states |
| `danger` | `red` | Error/destructive states |
| `highlight` | `violet` | Accent/emphasis |

#### Status Colors (for feedback components)

| Status Name | Mantine Color | Usage |
|-------------|---------------|-------|
| `default` | `gray` | Neutral default state |
| `info` | `blue` | Information |
| `success` | `green` | Success |
| `warning` | `yellow` | Warning |
| `danger` | `red` | Error/danger |
| `pending` | `yellow` | In-progress/pending |

### Canonical Variant Tokens

Style-based variants used across components:

| Variant | Description |
|---------|-------------|
| `filled` | Solid background color |
| `outline` | Border only, no background |
| `light` | Light tinted background |
| `subtle` | Very light/transparent styling |
| `transparent` | No visible background |

---

## Component Registry

---

### Button

**Component Name:** `Button`  
**Mantine Base:** `Button`  
**Purpose:** Primary interactive element for user actions. Supports multiple visual variants for different action priorities.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'default' \| 'outline' \| 'danger' \| 'link' \| 'secret'` | No | `'default'` | Visual style variant |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'sm'` | Button size |
| `fullWidth` | `boolean` | No | `false` | Whether button spans full width |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `loading` | `boolean` | No | `false` | Loading state with spinner |
| `leftIcon` | `ReactNode` | No | - | Icon on the left side |
| `rightIcon` | `ReactNode` | No | - | Icon on the right side |
| `children` | `ReactNode` | Yes | - | Button label text |

#### Variant to Mantine Mapping

| DS Variant | Mantine Variant | Mantine Color |
|------------|-----------------|---------------|
| `primary` | `filled` | `blue` |
| `secondary` | `filled` | `cyan` |
| `default` | `default` | (theme default) |
| `outline` | `outline` | `blue` |
| `danger` | `filled` | `red` |
| `link` | `subtle` | `blue` |
| `secret` | `subtle` | `gray` |

#### Example Configurations

- **Primary action:** `variant="primary"`, `size="sm"`
- **Secondary action:** `variant="outline"`, `size="sm"`
- **Destructive action:** `variant="danger"`, `size="sm"`
- **Text link:** `variant="link"`, `size="sm"`

---

### ActionIcon

**Component Name:** `ActionIcon`  
**Mantine Base:** `ActionIcon`  
**Purpose:** Compact icon-only button for toolbar actions, close buttons, and icon triggers.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Icon button size |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `children` | `ReactNode` | Yes | - | Icon element |

#### Notes

- Uses `subtle` variant with custom gray styling
- Fixed border radius of `sm`

---

### CloseButton

**Component Name:** `CloseButton`  
**Mantine Base:** `CloseButton`  
**Purpose:** Standardized close/dismiss button with consistent styling.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Button size |
| `color` | `'black' \| 'blue'` | No | `'black'` | Icon color |
| `disabled` | `boolean` | No | `false` | Disabled state |

---

### Badge

**Component Name:** `Badge`  
**Mantine Base:** `Badge`  
**Purpose:** Compact label for status indication, categorization, or counts.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'filled' \| 'outline'` | No | `'filled'` | Visual style |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Badge size |
| `color` | `'info' \| 'success' \| 'danger' \| 'pending' \| 'default'` | No | `'default'` | Semantic color |
| `hasIcon` | `boolean` | No | `false` | Show circle icon on left |
| `children` | `ReactNode` | Yes | - | Badge text |

#### Color Mapping

| DS Color | Mantine Color |
|----------|---------------|
| `info` | `blue` |
| `success` | `green` |
| `danger` | `red` |
| `pending` | `yellow` |
| `default` | `gray` |

#### Example Configurations

- **Info badge:** `color="info"`, `variant="filled"`
- **Success outline:** `color="success"`, `variant="outline"`
- **Error indicator:** `color="danger"`, `variant="filled"`, `hasIcon=true`

---

### Chip

**Component Name:** `Chip`  
**Mantine Base:** `Chip`  
**Purpose:** Selectable tag/filter element with toggle behavior.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'danger' \| 'pending' \| 'default'` | No | `'default'` | Semantic color variant |
| `checked` | `boolean` | No | - | Selected state |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | - | Chip size |
| `children` | `ReactNode` | Yes | - | Chip label |

#### Notes

- Always uses `outline` Mantine variant with `sm` radius
- Color is determined by the `variant` prop (which is semantic)

---

### Pill

**Component Name:** `Pill`  
**Mantine Base:** Custom (Box-based)  
**Purpose:** Non-interactive tag for displaying values, selected items in multi-selects.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Pill size |
| `withRemoveButton` | `boolean` | No | `false` | Show close button |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `children` | `ReactNode` | Yes | - | Pill content |

---

### Avatar

**Component Name:** `Avatar`  
**Mantine Base:** `Avatar`  
**Purpose:** Display user profile pictures, initials, or placeholder icons.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'icon' \| 'image' \| 'initials'` | Yes | - | Avatar content type |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Avatar size |
| `src` | `string` | Conditional | - | Image URL (required for `image` variant) |
| `initials` | `string` | Conditional | - | Two-letter initials (required for `initials` variant) |
| `alt` | `string` | No | - | Alt text for image |

#### Example Configurations

- **User icon:** `variant="icon"`, `size="md"`
- **Profile image:** `variant="image"`, `src="..."`, `size="lg"`
- **Initials:** `variant="initials"`, `initials="JD"`, `size="md"`

---

### Alert

**Component Name:** `Alert`  
**Mantine Base:** `Alert`  
**Purpose:** Contextual feedback messages with semantic styling.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | `'info' \| 'success' \| 'danger' \| 'pending' \| 'default'` | No | `'default'` | Semantic alert type |
| `title` | `string` | No | - | Alert heading |
| `withCloseButton` | `boolean` | No | `false` | Show dismiss button |
| `children` | `ReactNode` | No | - | Alert body content |

#### Type Mapping

| DS Type | Mantine Color | Default Icon |
|---------|---------------|--------------|
| `info` | `blue` | RiInformationLine |
| `success` | `green` | RiCheckboxCircleLine |
| `danger` | `red` | RiErrorWarningLine |
| `pending` | `yellow` | RiTimeLine |
| `default` | `gray` | RiInformationLine |

---

### Card

**Component Name:** `Card`  
**Mantine Base:** `Card`  
**Purpose:** Container for related content with consistent styling.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interactive` | `boolean` | No | `false` | Enable hover effects and cursor pointer |
| `children` | `ReactNode` | Yes | - | Card content |

#### Notes

- Fixed styling: `padding="md"`, `radius="sm"`, `shadow="xs"`, `withBorder=true`
- `Card.Section` available for full-bleed content

---

### Indicator

**Component Name:** `Indicator`  
**Mantine Base:** `Indicator`  
**Purpose:** Notification dot or badge attached to another element.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | `'success' \| 'danger' \| 'pending' \| 'info' \| 'default'` | No | `'default'` | Semantic status type |
| `size` | `number` | No | `12` | Indicator size in pixels |
| `position` | Position type | No | `'top-end'` | Position relative to child |
| `count` | `number` | No | - | Number to display |
| `processing` | `boolean` | No | `false` | Animated/processing state |
| `withBorder` | `boolean` | No | `false` | Add white border outline |
| `children` | `ReactNode` | Yes | - | Element to attach indicator to |

---

### Progress

**Component Name:** `Progress`  
**Mantine Base:** `Progress`  
**Purpose:** Visual progress bar for completion states.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `number` (0-100) | Yes | - | Progress percentage |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Bar thickness |
| `animated` | `boolean` | No | `false` | Animate the bar |

#### Notes

- Fixed color: `blue`, fixed radius: `xl`

---

### ThemeIcon

**Component Name:** `ThemeIcon`  
**Mantine Base:** `ThemeIcon`  
**Purpose:** Icon wrapper with background styling.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | No | `'md'` | Icon container size |
| `color` | `'default' \| 'blue'` | No | `'default'` | Icon color variant |
| `children` | `ReactNode` | Yes | - | Icon element |

#### Notes

- `xxl` size = 58x58px
- Uses `default` Mantine variant

---

### TextInput

**Component Name:** `TextInput`  
**Mantine Base:** `TextInput`  
**Purpose:** Single-line text input field.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Input size |
| `label` | `ReactNode` | No | - | Input label |
| `description` | `string` | No | - | Help text below input |
| `placeholder` | `string` | No | - | Placeholder text |
| `required` | `boolean` | No | `false` | Show required asterisk |
| `showOptional` | `boolean` | No | `false` | Show "(Optional)" text |
| `error` | `ReactNode` | No | - | Error message |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `leftIcon` | `ReactNode` | No | - | Left section icon |
| `rightIcon` | `ReactNode` | No | - | Right section icon |

---

### TextArea

**Component Name:** `TextArea`  
**Mantine Base:** `Textarea`  
**Purpose:** Multi-line text input field.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | - | Input size |
| `label` | `ReactNode` | No | - | Input label |
| `description` | `string` | No | - | Help text |
| `placeholder` | `string` | No | - | Placeholder text |
| `required` | `boolean` | No | `false` | Show required asterisk |
| `showOptional` | `boolean` | No | `false` | Show "(Optional)" text |
| `error` | `ReactNode` | No | - | Error message |
| `rows` | `number` | No | - | Number of visible rows |
| `autosize` | `boolean` | No | - | Auto-grow height |
| `minRows` | `number` | No | - | Minimum rows for autosize |
| `maxRows` | `number` | No | - | Maximum rows for autosize |

---

### NumberInput

**Component Name:** `NumberInput`  
**Mantine Base:** `NumberInput`  
**Purpose:** Numeric input with increment/decrement controls.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | - | Input size |
| `label` | `ReactNode` | No | - | Input label |
| `description` | `string` | No | - | Help text |
| `placeholder` | `string` | No | - | Placeholder text |
| `required` | `boolean` | No | `false` | Show required asterisk |
| `showOptional` | `boolean` | No | `false` | Show "(Optional)" text |
| `error` | `ReactNode` | No | - | Error message |
| `min` | `number` | No | - | Minimum value |
| `max` | `number` | No | - | Maximum value |
| `step` | `number` | No | - | Increment step |

---

### Checkbox

**Component Name:** `Checkbox`  
**Mantine Base:** `Checkbox`  
**Purpose:** Binary selection control.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Checkbox size |
| `label` | `ReactNode` | No | - | Checkbox label |
| `checked` | `boolean` | No | - | Checked state |
| `indeterminate` | `boolean` | No | `false` | Indeterminate state |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `required` | `boolean` | No | `false` | Show required asterisk |

---

### Radio

**Component Name:** `Radio`  
**Mantine Base:** `Radio`  
**Purpose:** Single selection from a group of options.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Radio size |
| `label` | `ReactNode` | No | - | Radio label |
| `value` | `string` | Yes | - | Radio value |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `required` | `boolean` | No | `false` | Show required asterisk |

---

### Switch

**Component Name:** `Switch`  
**Mantine Base:** `Switch`  
**Purpose:** Toggle control for on/off states.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | - | Switch size |
| `label` | `ReactNode` | No | - | Switch label |
| `checked` | `boolean` | No | - | On/off state |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `showOptional` | `boolean` | No | `false` | Show "(Optional)" text |
| `onLabel` | `string` | No | - | Text shown when on |
| `offLabel` | `string` | No | - | Text shown when off |

#### Notes

- Fixed color: `green`, fixed radius: `xl`

---

### Select

**Component Name:** `Select`  
**Mantine Base:** `Select`  
**Purpose:** Single selection dropdown.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'sm'` | Input size |
| `label` | `string` | No | - | Input label |
| `placeholder` | `string` | No | - | Placeholder text |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `searchable` | `boolean` | No | `false` | Enable search filtering |
| `clearable` | `boolean` | No | `false` | Allow clearing selection |
| `borderless` | `boolean` | No | `false` | Remove border styling |
| `data` | `Array` | Yes | - | Options array |

---

### Multiselect

**Component Name:** `Multiselect`  
**Mantine Base:** `Combobox` (custom)  
**Purpose:** Multiple selection with pills display.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Input size |
| `label` | `string` | No | - | Input label |
| `placeholder` | `string` | No | - | Placeholder text |
| `description` | `string` | No | - | Help text |
| `error` | `string` | No | - | Error message |
| `required` | `boolean` | No | `false` | Required state |
| `showOptional` | `boolean` | No | `false` | Show "(Optional)" |
| `disabled` | `boolean` | No | `false` | Disabled state |
| `maxDisplayedValues` | `number` | No | `2` | Max pills before "+X more" |
| `data` | `Array` | Yes | - | Options array |

---

### Modal

**Component Name:** `Modal`  
**Mantine Base:** `Modal`  
**Purpose:** Dialog overlay for focused interactions.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | - | Modal title |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | No | `'md'` | Modal width |
| `opened` | `boolean` | Yes | - | Open/closed state |
| `withCloseButton` | `boolean` | No | `true` | Show close button |
| `centered` | `boolean` | No | `true` | Center vertically |
| `padding` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Content padding |
| `actions` | `ModalAction[]` | No | `[]` | Left-aligned buttons |
| `tertiaryActions` | `ModalAction[]` | No | `[]` | Right-aligned buttons |
| `children` | `ReactNode` | Yes | - | Modal content |

---

### Drawer

**Component Name:** `Drawer`  
**Mantine Base:** `Drawer`  
**Purpose:** Sliding panel overlay from screen edge.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `ReactNode` | No | - | Drawer title |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | No | `'md'` | Drawer width |
| `position` | `'top' \| 'left' \| 'right' \| 'bottom'` | No | `'right'` | Slide direction |
| `opened` | `boolean` | Yes | - | Open/closed state |
| `withCloseButton` | `boolean` | No | `true` | Show close button |
| `children` | `ReactNode` | Yes | - | Drawer content |

#### Size Mapping

| DS Size | Width (px) |
|---------|------------|
| `xs` | 320 |
| `sm` | 400 |
| `md` | 500 |
| `lg` | 600 |
| `xl` | 720 |

---

### Tooltip

**Component Name:** `Tooltip`  
**Mantine Base:** `Tooltip`  
**Purpose:** Contextual information on hover.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | `ReactNode` | Yes | - | Tooltip content |
| `position` | Position type | No | `'top'` | Tooltip placement |
| `disabled` | `boolean` | No | `false` | Disable tooltip |
| `withArrow` | `boolean` | No | `true` | Show arrow pointer |
| `openDelay` | `number` | No | `0` | Delay before showing (ms) |
| `closeDelay` | `number` | No | `0` | Delay before hiding (ms) |
| `width` | `number \| 'auto'` | No | `'auto'` | Fixed width |
| `children` | `ReactNode` | Yes | - | Trigger element |

#### Notes

- Fixed dark theme: `#212529` background, white text

---

### Popover

**Component Name:** `Popover`  
**Mantine Base:** `Popover`  
**Purpose:** Floating panel anchored to trigger element.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | - | Popover heading |
| `position` | `'top' \| 'left' \| 'right' \| 'bottom'` | No | `'bottom'` | Popover position |
| `opened` | `boolean` | No | - | Controlled open state |
| `width` | `number \| 'auto'` | No | `'auto'` | Popover width |
| `withArrow` | `boolean` | No | `true` | Show arrow |
| `actions` | `PopoverAction[]` | No | `[]` | Left-aligned buttons |
| `tertiaryActions` | `PopoverAction[]` | No | `[]` | Right-aligned buttons |
| `trigger` | `ReactNode` | Yes | - | Trigger element |
| `children` | `ReactNode` | Yes | - | Popover content |

---

### Menu

**Component Name:** `Menu`  
**Mantine Base:** `Menu`  
**Purpose:** Dropdown menu for actions and navigation.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | `number` | No | `200` | Menu width |
| `position` | Position type | No | `'bottom-start'` | Menu placement |
| `shadow` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Drop shadow |
| `trigger` | `ReactNode` | Yes | - | Trigger element |
| `sections` | `MenuSection[]` | Yes | - | Menu structure |

---

### Tabs

**Component Name:** `Tabs`  
**Mantine Base:** `Tabs`  
**Purpose:** Tabbed interface for switching between views.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tabs` | `TabData[]` | Yes | - | Tab definitions |
| `value` | `string` | No | - | Active tab ID |
| `orientation` | `'horizontal' \| 'vertical'` | No | `'horizontal'` | Tab layout |
| `variant` | `'default' \| 'outline' \| 'pills'` | No | `'default'` | Tab style |

---

### Stepper

**Component Name:** `Stepper`  
**Mantine Base:** `Stepper`  
**Purpose:** Multi-step progress indicator and navigation.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | `StepData[]` | Yes | - | Step definitions |
| `active` | `number` | Yes | - | Active step index (0-based) |
| `orientation` | `'horizontal' \| 'vertical'` | No | `'horizontal'` | Stepper layout |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Stepper size |
| `iconSize` | `number` | No | `18` | Step icon size |

---

### Breadcrumb

**Component Name:** `Breadcrumb`  
**Mantine Base:** `Breadcrumbs`  
**Purpose:** Hierarchical navigation path display.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `BreadcrumbItem[]` | Yes | - | Breadcrumb items |
| `separator` | `ReactNode` | No | `'/'` | Item separator |

---

### NavLink

**Component Name:** `NavLink`  
**Mantine Base:** `NavLink`  
**Purpose:** Navigation item for sidebars and menus.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | `string` | Yes | - | Link label |
| `description` | `string` | No | - | Secondary text |
| `icon` | `ReactNode` | No | - | Left icon |
| `hasChildren` | `boolean` | No | `false` | Show chevron |
| `active` | `boolean` | No | `false` | Active state |
| `href` | `string` | No | - | Navigation URL |

---

### Text

**Component Name:** `Text`  
**Mantine Base:** `Text`  
**Purpose:** Body text with consistent styling.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'sm'` | Font size |
| `c` | `string` | No | - | Text color |
| `fw` | `number \| string` | No | - | Font weight |
| `ta` | `'left' \| 'center' \| 'right'` | No | - | Text alignment |
| `children` | `ReactNode` | Yes | - | Text content |

---

### Title

**Component Name:** `Title`  
**Mantine Base:** `Title`  
**Purpose:** Heading text with semantic HTML levels.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `order` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | No | `2` | Heading level (h1-h6) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | - | Override font size |
| `children` | `ReactNode` | Yes | - | Heading content |

---

### Code

**Component Name:** `Code`  
**Mantine Base:** `Code`  
**Purpose:** Inline code text styling.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'sm'` | Font size |
| `children` | `ReactNode` | Yes | - | Code content |

---

### Kbd

**Component Name:** `Kbd`  
**Mantine Base:** `Kbd`  
**Purpose:** Keyboard shortcut display.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'sm'` | Key size |
| `children` | `ReactNode` | Yes | - | Key label (e.g., "⌘K") |

---

### Divider

**Component Name:** `Divider`  
**Mantine Base:** `Divider`  
**Purpose:** Visual separator between content sections.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | No | `'horizontal'` | Divider direction |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'sm'` | Line thickness |

#### Notes

- Fixed color: `gray.4`

---

### Paper

**Component Name:** `Paper`  
**Mantine Base:** `Paper`  
**Purpose:** Surface container with optional elevation.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'default' \| 'shadow' \| 'border' \| 'border-shadow'` | No | `'default'` | Surface style |
| `children` | `ReactNode` | Yes | - | Paper content |

#### Notes

- Fixed padding: `sm`

---

### Stack

**Component Name:** `Stack`  
**Mantine Base:** `Stack`  
**Purpose:** Vertical layout primitive with consistent spacing.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | No | `'md'` | Vertical spacing |
| `align` | Alignment type | No | `'stretch'` | Cross-axis alignment |
| `justify` | Justification type | No | `'flex-start'` | Main-axis distribution |
| `children` | `ReactNode` | Yes | - | Stack items |

---

### Inline

**Component Name:** `Inline`  
**Mantine Base:** `Group`  
**Purpose:** Horizontal layout primitive with consistent spacing.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `gap` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | No | `'md'` | Horizontal spacing |
| `align` | Alignment type | No | `'center'` | Cross-axis alignment |
| `justify` | Justification type | No | `'flex-start'` | Main-axis distribution |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | No | `'wrap'` | Wrap behavior |
| `children` | `ReactNode` | Yes | - | Inline items |

---

### List

**Component Name:** `List`  
**Mantine Base:** `List`  
**Purpose:** Semantic list with consistent styling.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'md'` | Text size |
| `spacing` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | No | `'sm'` | Item spacing |
| `type` | `'ordered' \| 'unordered'` | No | `'unordered'` | List type |
| `icon` | `ReactNode` | No | - | Custom bullet icon |

---

### Table

**Component Name:** `Table`  
**Mantine Base:** `Table`  
**Purpose:** Simple data table with compound components.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `striped` | `boolean` | No | - | Alternating row colors |
| `highlightOnHover` | `boolean` | No | - | Row hover effect |
| `withBorder` | `boolean` | No | - | Outer border |
| `withColumnBorders` | `boolean` | No | - | Column borders |

#### Notes

- Fixed spacing: `horizontalSpacing="sm"`, `verticalSpacing="xs"`
- Compound components: `Table.Thead`, `Table.Tbody`, `Table.Tr`, `Table.Th`, `Table.Td`

---

### DropZone

**Component Name:** `DropZone`  
**Mantine Base:** `Dropzone`  
**Purpose:** File upload area with drag-and-drop support.

#### Figma-Exposed Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | `"This is the title"` | Main text |
| `description` | `string` | No | - | Secondary text |
| `maxSize` | `number` | No | 5MB | Max file size in bytes |
| `accept` | `string[] \| object` | No | `IMAGE_MIME_TYPE` | Accepted file types |

---

## Global Registry Summary

| Component | Category | Key Props | Default Size | Default Variant |
|-----------|----------|-----------|--------------|-----------------|
| Button | Buttons | variant, size, loading, disabled | sm | default |
| ActionIcon | Buttons | size, disabled | md | - |
| CloseButton | Buttons | size, color, disabled | md | - |
| Badge | DataDisplay | color, variant, size | md | filled |
| Chip | DataDisplay | variant, checked, size | - | default |
| Pill | DataDisplay | size, withRemoveButton | md | - |
| Avatar | DataDisplay | variant, size, src/initials | md | - |
| Alert | DataDisplay | type, title, withCloseButton | - | default |
| Card | DataDisplay | interactive | - | - |
| Indicator | DataDisplay | type, size, count | - | default |
| Progress | DataDisplay | value, size, animated | md | - |
| ThemeIcon | DataDisplay | size, color | md | default |
| TextInput | Inputs | size, label, required, error | md | - |
| TextArea | Inputs | size, label, required, error | - | - |
| NumberInput | Inputs | size, label, min/max | - | - |
| Checkbox | Inputs | size, label, checked, disabled | md | - |
| Radio | Inputs | size, label, value | md | - |
| Switch | Inputs | size, label, checked | - | - |
| Select | Combobox | size, label, data, searchable | sm | - |
| Multiselect | Combobox | size, label, data | md | - |
| Modal | Overlays | title, size, actions | md | - |
| Drawer | Overlays | title, size, position | md | - |
| Tooltip | Overlays | label, position | - | - |
| Popover | Overlays | title, position, actions | - | - |
| Menu | Overlays | sections, trigger | - | - |
| Tabs | Navigation | tabs, variant, orientation | - | default |
| Stepper | Navigation | steps, active | md | - |
| Breadcrumb | Navigation | items | - | - |
| NavLink | Navigation | label, icon, active | - | - |
| Text | Typography | size, children | sm | - |
| Title | Typography | order, size, children | - | - |
| Code | Typography | size, children | sm | - |
| Kbd | Typography | size, children | sm | - |
| Divider | Misc | orientation, size | sm | - |
| Paper | Misc | variant | - | default |
| Stack | Layout | gap, align, justify | md | - |
| Inline | Layout | gap, align, justify, wrap | md | - |
| List | Layout | size, spacing, type | md | - |
| Table | Layout | striped, highlightOnHover | - | - |
| DropZone | Inputs | title, description | - | - |

---

## Implementation Notes for Figma Code Connect

### Using figma.string() for Text Props

Per project memory [[memory:3372238]], use `figma.string('propertyName')` instead of `figma.textContent()` for mapping text content from Figma components to React props.

### Icon Placeholders

Per project memory [[memory:3246643]], use a single Remix icon (e.g., `RiCircleLine`) as a placeholder for icons instead of falling back to Tailwind classes when generating code.

### Mapping Examples

// Example Button figma.tsx
figma.connect(Button, 'figma-node-id', {
  props: {
    variant: figma.enum('Variant', {
      'Primary': 'primary',
      'Secondary': 'secondary',
      'Outline': 'outline',
      'Danger': 'danger',
    }),
    size: figma.enum('Size', {
      'Small': 'sm',
      'Medium': 'md',
      'Large': 'lg',
    }),
    disabled: figma.boolean('Disabled'),
    loading: figma.boolean('Loading'),
    children: figma.string('Label'),
  },
  example: (props) => <Button {...props} />,
});

// Example Badge figma.tsx
figma.connect(Badge, 'figma-node-id', {
  props: {
    color: figma.enum('Color', {
      'Default': 'default',
      'Info': 'info',
      'Success': 'success',
      'Danger': 'danger',
      'Pending': 'pending',
    }),
    variant: figma.enum('Variant', {
      'Filled': 'filled',
      'Outline': 'outline',
    }),
    children: figma.string('Label'),
  },
  example: (props) => <Badge {...props} />,
});---

*This document is the authoritative reference for Figma Code Connect integration with the AppDirect Design System.*
