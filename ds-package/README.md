# @appdirect/ds-prototype-kit

AppDirect Design System components for prototyping. Thin wrappers around Mantine v9 with standardized props, semantic color tokens, and consistent API.

## Installation

```bash
npm install @appdirect/ds-prototype-kit
```

### Peer Dependencies

- `@mantine/core` ^7.9.0
- `@mantine/hooks` ^7.9.0
- `react` ^18 or ^19
- `react-dom` ^18 or ^19

## Usage

```tsx
import { Button, TextInput, Card, Stack, Badge } from '@appdirect/ds-prototype-kit';

function MyPage() {
  return (
    <Stack gap="lg">
      <Card>
        <TextInput label="Name" placeholder="Enter name" />
        <Button variant="primary">Submit</Button>
        <Badge color="success">Active</Badge>
      </Card>
    </Stack>
  );
}
```

## Component Categories

- **Buttons:** Button, ActionIcon, CloseButton
- **Inputs:** TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Checkbox, Radio, RadioGroup, DropZone, FileInput
- **Combobox:** SearchableSelect, AutocompleteClearable, Multiselect, Select, Combobox
- **Navigation:** Breadcrumb, BackBreadcrumb, NavLink, Stepper, Tabs
- **Overlays:** Drawer, Menu, Modal, ConfirmationModal, Popover, ConfirmationPopover, Tooltip
- **Data Display:** Alert, Avatar, Badge, Card, Chip, Pill, Indicator, Progress, ThemeIcon, List, Table
- **Typography:** Kbd, Code, Text, Title
- **Layout:** Stack, Group, Inline, Box, SimpleGrid, Grid, Flex, Container, Center
- **Shell (prototype-only):** AppShellLayout, HeaderBar, SidebarNav, SingleColumnLayout, TertiaryColumnLayout
- **Complex:** KeyInsight, NameValue, CopyButton, PageContentHeader, DataTable, DashboardWidget
- **Misc:** Divider, Paper

## Publishing

```bash
cd ds-package
npm run build
npm publish
```
