# @appdirect/ds-prototype-kit

AppDirect Design System components for prototyping. Thin wrappers around Mantine v9 with standardized props, semantic color tokens, and consistent API.

## Installation

```bash
npm install @appdirect/ds-prototype-kit
```

### Peer Dependencies

Align with **Mantine 9** (see `@mantine/core` peer requirements):

- `@mantine/core` ^9.0.1
- `@mantine/hooks` ^9.0.1
- `react` ^19.2.0
- `react-dom` ^19.2.0

### Upgrading from 0.1.x

Version **0.2.0** requires **Mantine 9** and **React 19.2+**. Upgrade `@mantine/core` and `@mantine/hooks` in your app before bumping this package. If you need Mantine 7, stay on `@appdirect/ds-prototype-kit` **0.1.x**.

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

`prepublishOnly` runs `build` automatically.

```bash
cd ds-package
npm publish
```

Use a local **`.npmrc`** (not committed) for your AppDirect registry auth and scope mapping for `@appdirect`.
