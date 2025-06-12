'use client';

import '@mantine/core/styles.layer.css';
import { ActionIcon, Title as MantineTitle, Text as MantineText, rem, Menu, Switch as MantineSwitch, Group, Divider, Stack, SimpleGrid, FileInput as MantineFileInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderBar } from '@/components/HeaderBar';
import { SidebarNav, NavItem } from '@/components/SidebarNav';
import { MainLayout } from '@/components/MainLayout';
import { Table } from '@/components/Table';
import { PageContentHeader } from '@/components/PageContentHeader';
import { NameValue } from '@/components/NameValue';
import { Alert, Avatar, Button as DSButton, ActionButton, CloseButton, TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Badge, Card, Chip, Pill, Indicator, Progress, ThemeIcon, Drawer, Menu as DSMenu, Modal, ConfirmationModal, Popover, ConfirmationPopover, Tooltip, Kbd, Code, Text, Title, Divider as DSDivider, Paper as DSPaper, Checkbox, Radio, RadioGroup, SearchableSelect, AutocompleteClearable, Multiselect, Breadcrumb, BackBreadcrumb, NavLink, Stepper, Tabs, DropZone, FileInput } from '@/components/DesignSystem';
import { useState, useMemo, useEffect } from 'react';
import { RiMore2Fill, RiEyeLine, RiUserLine, RiServerLine, RiAddLine, RiCircleLine } from '@remixicon/react';
import { MRT_PaginationState as PaginationState, MRT_ColumnDef as ColumnDef, MRT_TableInstance } from 'mantine-react-table';

// Import Filters type from the correct location
interface DateRange {
  start: Date | null;
  end: Date | null;
}

enum City {
  NEW_YORK = "New York",
  LOS_ANGELES = "Los Angeles", 
  CHICAGO = "Chicago",
  SAN_FRANCISCO = "San Francisco",
  BOSTON = "Boston",
  SEATTLE = "Seattle",
  DENVER = "Denver",
  PORTLAND = "Portland",
  AUSTIN = "Austin",
  MIAMI = "Miami",
  PHOENIX = "Phoenix",
  LAS_VEGAS = "Las Vegas",
  DETROIT = "Detroit",
  NASHVILLE = "Nashville",
  ATLANTA = "Atlanta",
  ORLANDO = "Orlando",
  TAMPA = "Tampa",
  CHARLOTTE = "Charlotte",
  INDIANAPOLIS = "Indianapolis",
  COLUMBUS = "Columbus",
}

interface Filters {
  cities?: City[] | null;
  dateRange?: DateRange | null;
  searchTerm?: string;
}

// Sample data interface
interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
  email: string;
  status: 'active' | 'inactive';
}

// Sample data
const sampleData: Person[] = [
  { id: '1', name: 'John Doe', age: 32, city: 'New York', email: 'john@example.com', status: 'active' },
  { id: '2', name: 'Jane Smith', age: 28, city: 'Los Angeles', email: 'jane@example.com', status: 'active' },
  { id: '3', name: 'Bob Johnson', age: 45, city: 'Orlando', email: 'bob@example.com', status: 'inactive' },
  { id: '4', name: 'Alice Brown', age: 35, city: 'San Francisco', email: 'alice@example.com', status: 'active' },
  { id: '5', name: 'Charlie Wilson', age: 29, city: 'Boston', email: 'charlie@example.com', status: 'inactive' },
  { id: '6', name: 'Diana Prince', age: 31, city: 'Seattle', email: 'diana@example.com', status: 'active' },
  { id: '7', name: 'Edward Norton', age: 42, city: 'Denver', email: 'edward@example.com', status: 'active' },
  { id: '8', name: 'Fiona Green', age: 26, city: 'Portland', email: 'fiona@example.com', status: 'inactive' },
  { id: '9', name: 'George Miller', age: 38, city: 'Austin', email: 'george@example.com', status: 'active' },
  { id: '10', name: 'Helen Davis', age: 33, city: 'Miami', email: 'helen@example.com', status: 'active' },
  { id: '11', name: 'Ian Thompson', age: 27, city: 'Phoenix', email: 'ian@example.com', status: 'inactive' },
  { id: '12', name: 'Julia Roberts', age: 41, city: 'Las Vegas', email: 'julia@example.com', status: 'active' },
  { id: '13', name: 'Kevin Hart', age: 30, city: 'Detroit', email: 'kevin@example.com', status: 'active' },
  { id: '14', name: 'Linda Carter', age: 36, city: 'Nashville', email: 'linda@example.com', status: 'inactive' },
  { id: '15', name: 'Michael Jordan', age: 44, city: 'Atlanta', email: 'michael@example.com', status: 'active' },
  { id: '16', name: 'Nancy Drew', age: 25, city: 'Orlando', email: 'nancy@example.com', status: 'active' },
  { id: '17', name: 'Oscar Wilde', age: 39, city: 'Tampa', email: 'oscar@example.com', status: 'inactive' },
  { id: '18', name: 'Patricia Hill', age: 34, city: 'Charlotte', email: 'patricia@example.com', status: 'active' },
  { id: '19', name: 'Quincy Jones', age: 37, city: 'Indianapolis', email: 'quincy@example.com', status: 'active' },
  { id: '20', name: 'Rachel Green', age: 29, city: 'Columbus', email: 'rachel@example.com', status: 'inactive' },
  { id: '21', name: 'Samuel Parker', age: 43, city: 'New York', email: 'samuel.parker@example.com', status: 'active' },
  { id: '22', name: 'Teresa Rodriguez', age: 31, city: 'Orlando', email: 'teresa.rodriguez@example.com', status: 'active' },
  { id: '23', name: 'Victor Chang', age: 28, city: 'San Francisco', email: 'victor.chang@example.com', status: 'inactive' },
  { id: '24', name: 'Wendy Kim', age: 35, city: 'Seattle', email: 'wendy.kim@example.com', status: 'active' },
  { id: '25', name: 'Xavier Lopez', age: 40, city: 'Austin', email: 'xavier.lopez@example.com', status: 'active' },
  { id: '26', name: 'Yvonne Taylor', age: 29, city: 'Denver', email: 'yvonne.taylor@example.com', status: 'inactive' },
  { id: '27', name: 'Zachary White', age: 33, city: 'Orlando', email: 'zachary.white@example.com', status: 'active' },
  { id: '28', name: 'Amy Foster', age: 27, city: 'Phoenix', email: 'amy.foster@example.com', status: 'active' },
  { id: '29', name: 'Brian Mitchell', age: 46, city: 'Las Vegas', email: 'brian.mitchell@example.com', status: 'inactive' },
  { id: '30', name: 'Catherine Bell', age: 32, city: 'Miami', email: 'catherine.bell@example.com', status: 'active' },
];

const navItems: NavItem[] = [
  {
    label: 'Home',
    icon: 'ri-home-4-line',
    active: true,
    color: 'dark',
    rightSection: null,
    style: { background: 'var(--mantine-color-blue-light)' },
  },
  {
    label: 'Communication Services',
    icon: 'ri-briefcase-4-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Energy',
    icon: 'ri-lightbulb-flash-line',
    color: 'dark',
  },
  {
    label: 'Managed Services',
    icon: 'ri-node-tree',
    color: 'dark',
  },
  {
    label: 'Capital',
    icon: 'ri-bank-card-line',
    color: 'dark',
  },
  {
    label: 'Commissions',
    icon: 'ri-money-dollar-circle-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Reports',
    icon: 'ri-bar-chart-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Settings',
    icon: 'ri-settings-3-line',
    color: 'dark',
  },
];

// ActionIcon styling to match CustomTopToolbar
const ACTION_ICON_STYLES = {
  width: rem(30),
  height: rem(30),
  minWidth: rem(30),
  minHeight: rem(30),
  borderRadius: 'var(--mantine-radius-sm)',
} as const;

const ICON_STYLES = {
  color: 'var(--mantine-color-black)',
} as const;

// Column Visibility Menu Component
const ColumnVisibilityMenu = ({ table }: { table: MRT_TableInstance<Person> }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const visibleColumns = table.getAllLeafColumns().filter(
    column => column.id !== 'mrt-row-select' && column.id !== 'actions'
  );

  const allVisible = visibleColumns.every(column => column.getIsVisible());
  const allHidden = visibleColumns.every(column => !column.getIsVisible());

  const handleShowAll = () => {
    visibleColumns.forEach(column => column.toggleVisibility(true));
  };

  const handleHideAll = () => {
    visibleColumns.forEach(column => column.toggleVisibility(false));
  };

  return (
    <Menu opened={opened} onClose={close} position="bottom-end" withArrow width={250}>
      <Menu.Target>
        <ActionIcon
          variant="subtle"
          aria-label="Column visibility"
          style={ACTION_ICON_STYLES}
          onClick={open}
        >
          <RiMore2Fill size={18} style={ICON_STYLES} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Stack gap="xs" p="sm">
          <Group justify="space-between">
            <DSButton
              variant="default"
              size="xs"
              color="green"
              onClick={handleShowAll}
              disabled={allVisible}
            >
              Show all
            </DSButton>
            <DSButton
              variant="default"
              size="xs"
              color="gray"
              onClick={handleHideAll}
              disabled={allHidden}
            >
              Hide all
            </DSButton>
          </Group>
          
          <Divider />
          
          {visibleColumns.map((column) => {
            const isVisible = column.getIsVisible();
            return (
              <Group key={column.id}>
                <MantineSwitch
                  size="sm"
                  checked={isVisible}
                  onChange={() => column.toggleVisibility()}
                  color="green"
                />
                <span style={{ fontSize: '14px' }}>
                  {column.columnDef.header as string}
                </span>
              </Group>
            );
          })}
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
};

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const [selectedRows, setSelectedRows] = useState({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  // Modal and Drawer state management
  const [modalOpened, setModalOpened] = useState(false);
  const [confirmModalOpened, setConfirmModalOpened] = useState(false);
  const [rightDrawerOpened, setRightDrawerOpened] = useState(false);
  const [leftDrawerOpened, setLeftDrawerOpened] = useState(false);
  const [topDrawerOpened, setTopDrawerOpened] = useState(false);
  const [bottomDrawerOpened, setBottomDrawerOpened] = useState(false);

  // Add filter state management
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    cities: null,
    dateRange: null,
  });

  // Apply filters to the data
  const filteredData = useMemo(() => {
    let result = [...sampleData];

    // Filter by cities
    if (filters.cities && filters.cities.length > 0) {
      result = result.filter(person => 
        filters.cities!.includes(person.city as City)
      );
    }

    // Filter by search term
    if (filters.searchTerm && filters.searchTerm.trim() !== '') {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(person => 
        person.name.toLowerCase().includes(searchLower) ||
        person.email.toLowerCase().includes(searchLower) ||
        person.city.toLowerCase().includes(searchLower) ||
        person.status.toLowerCase().includes(searchLower)
      );
    }

    // TODO: Add date range filtering when needed
    // if (filters.dateRange && filters.dateRange.start && filters.dateRange.end) {
    //   // Filter by date range logic here
    // }

    return result;
  }, [filters]);

  // Reset pagination when filters change
  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      pageIndex: 0
    }));
  }, [filters]);

  // Calculate the data for the current page from filtered data
  const startIndex = pagination.pageIndex * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const handlePaginationChange = (newPagination: PaginationState) => {
    setPagination(newPagination);
  };

  // Handle filter changes
  const handleFiltersChange = (newFilters: Partial<Filters>) => {
    setFilters((prevFilters: Filters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <MainLayout header={<HeaderBar />} navbar={<SidebarNav navItems={navItems} title="Some Title" />}>
      {/* Typography Example Section */}
      <Stack gap="xl" p="md" mb="xl" style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <Title order={1}>Typography Examples</Title>
        <DSDivider />
        
        <Group align="flex-start">
          <DSPaper variant="border" style={{ width: '48%' }}>
            <Title order={2} size="lg" mb="md">Title Component</Title>
            <Title order={1} size="xl">Title XL (h1)</Title>
            <Title order={2} size="lg">Title LG (h2)</Title>
            <Title order={3} size="md">Title MD (h3)</Title>
            <Title order={4} size="sm">Title SM (h4)</Title>
            <Title order={5} size="xs">Title XS (h5)</Title>
            <Title order={2} size="lg" c="blue" mt="md">Colored Title</Title>
            <Title order={3} size="md" fw={400}>Light Weight Title</Title>
          </DSPaper>
          
          <DSPaper variant="border" style={{ width: '48%' }}>
            <Title order={2} size="lg" mb="md">Text Component</Title>
            <Text size="xl">Text XL Size</Text>
            <Text size="lg">Text LG Size</Text>
            <Text size="md">Text MD Size</Text>
            <Text size="sm">Text SM Size</Text>
            <Text size="xs">Text XS Size</Text>
            <Text size="md" fw={700} mt="md">Bold Text</Text>
            <Text size="md" fs="italic">Italic Text</Text>
            <Text size="md" td="underline">Underlined Text</Text>
            <Text size="md" c="blue">Blue Text</Text>
            <Text size="md" c="dimmed">Dimmed Text</Text>
          </DSPaper>
        </Group>
      </Stack>
      
      <PageContentHeader
        subhead="Admin Dashboard"
        title="User Management"
        badge="LIVE"
        icon={<RiUserLine />}
        editable={true}
        onEdit={() => console.log('Edit clicked')}
        actions={[
          { label: "Add User", onClick: () => console.log('Add User'), variant: "primary" },
          { label: "Export Users", onClick: () => console.log('Export'), variant: "default", color: "gray" },
        ]}
        contentSection="insights"
        insights={[
          { value: filteredData.length, title: "Total Users", color: "black" },
          { value: filteredData.filter(u => u.status === 'active').length, title: "Active Users", color: "black" },
          { value: filteredData.filter(u => u.status === 'inactive').length, title: "Inactive Users", color: "black" },
          { value: new Set(filteredData.map(u => u.city)).size, title: "Cities", color: "black" },
          { value: Math.round(filteredData.reduce((sum, u) => sum + u.age, 0) / filteredData.length), title: "Avg Age", color: "black" },
        ]}
      />
      
      {/* Design System Components Demo */}
      <Stack gap="xl" p="md" style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <Title order={3} size="md">Design System Components</Title>
        
        {/* TextInput Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">TextInput - All Sizes</Title>
          <Stack gap="md">
            <TextInput size="xs" label="Extra Small" placeholder="xs size input" />
            <TextInput size="sm" label="Small" placeholder="sm size input" />
            <TextInput size="md" label="Medium" placeholder="md size input" />
            <TextInput size="lg" label="Large" placeholder="lg size input" />
            <TextInput size="xl" label="Extra Large" placeholder="xl size input" />
          </Stack>
          
          <Title order={5} size="xs">TextInput Label States</Title>
          <Stack gap="sm">
            <TextInput label="Neither Required nor Optional" placeholder="Enter text" />
            <TextInput label="Required Field" placeholder="Enter text" required />
            <TextInput label="Optional Field" placeholder="Enter text" showOptional />
          </Stack>
          
          <Title order={5} size="xs">TextInput States</Title>
          <Group gap="md">
            <TextInput label="Default" placeholder="Enter text" />
            <TextInput label="With Error" placeholder="Enter text" error="This field is required" />
            <TextInput label="Disabled" placeholder="Enter text" disabled />
          </Group>
        </Stack>

        {/* TextArea Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">TextArea - All Sizes</Title>
          <Stack gap="md">
            <TextArea size="xs" label="Extra Small" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={3} />
            <TextArea size="sm" label="Small" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={4} />
            <TextArea size="md" label="Medium" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={5} />
            <TextArea size="lg" label="Large" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={5} />
            <TextArea size="xl" label="Extra Large" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={5} />
          </Stack>
          
          <Title order={5} size="xs">TextArea Label States</Title>
          <Stack gap="sm">
            <TextArea label="Comments" placeholder="Enter your comments..." rows={4} />
            <TextArea label="Description" placeholder="Enter description..." required rows={4} />
            <TextArea label="Additional Notes" placeholder="Any additional notes..." showOptional rows={4} />
          </Stack>
          
          <Title order={5} size="xs">TextArea Features</Title>
          <Stack gap="sm">
            <TextArea 
              label="Fixed Height" 
              placeholder="This textarea has a fixed height of 3 rows..."
              rows={3}
            />
            <TextArea 
              label="Auto-resize" 
              placeholder="This textarea will grow as you type more content..."
              autosize
              minRows={2}
              maxRows={6}
            />
            <TextArea 
              label="With Error" 
              placeholder="Enter your message..."
              error="This field is required"
              rows={3}
            />
            <TextArea 
              label="With Description" 
              placeholder="Enter detailed feedback..."
              description="This is caption text used for errors or help"
              rows={4}
            />
            <TextArea 
              label="Disabled" 
              placeholder="This textarea is disabled..."
              disabled
              value="Some existing content that cannot be edited"
              rows={3}
            />
          </Stack>
        </Stack>

        {/* NumberInput Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">NumberInput Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">NumberInput Sizes</Title>
            </Group>
            <Stack gap="md">
              <NumberInput size="xs" label="Extra Small" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="sm" label="Small" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="md" label="Medium" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="lg" label="Large" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="xl" label="Extra Large" placeholder="Enter a number" style={{ width: 200 }} />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="xs">Label States</Title>
            </Group>
            <Group gap="md" align="flex-end">
              <NumberInput 
                label="Quantity" 
                placeholder="Enter quantity"
                style={{ width: 200 }}
              />
              <NumberInput 
                label="Price" 
                required
                placeholder="Enter price"
                style={{ width: 200 }}
              />
              <NumberInput 
                label="Discount" 
                showOptional
                placeholder="Enter discount"
                style={{ width: 200 }}
              />
            </Group>
            
            <Group gap="md">
              <Title order={5} size="xs">With Constraints & Formatting</Title>
            </Group>
            <Group gap="md" align="flex-end">
              <NumberInput 
                label="Rating" 
                min={1}
                max={10}
                step={0.5}
                defaultValue={5}
                style={{ width: 200 }}
              />
              <NumberInput 
                label="Price" 
                prefix="$"
                decimalScale={2}
                fixedDecimalScale
                placeholder="0.00"
                style={{ width: 200 }}
              />
              <NumberInput 
                label="Percentage" 
                suffix="%"
                min={0}
                max={100}
                defaultValue={50}
                style={{ width: 200 }}
              />
            </Group>
            
            <Group gap="md">
              <Title order={5} size="xs">States</Title>
            </Group>
            <Group gap="md" align="flex-end">
              <NumberInput 
                label="Disabled" 
                disabled
                value={100}
                style={{ width: 200 }}
              />
              <NumberInput 
                label="With Error" 
                error="Value must be positive"
                placeholder="Enter a number"
                style={{ width: 200 }}
              />
              <NumberInput 
                label="With Description" 
                description="Enter a whole number"
                placeholder="Enter a number"
                style={{ width: 200 }}
              />
            </Group>
          </Stack>
        </Stack>

        {/* ColorInput Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">ColorInput Examples</Title>
          <Stack gap="lg">
            <Group gap="md" align="flex-end">
              <ColorInput 
                label="Brand Color" 
                placeholder="#000000"
                defaultValue="#FAB005"
                style={{ width: 200 }}
              />
              <ColorInput 
                label="Primary Color" 
                required
                placeholder="Select color"
                style={{ width: 200 }}
              />
              <ColorInput 
                label="Accent Color" 
                showOptional
                placeholder="#FFFFFF"
                style={{ width: 200 }}
              />
            </Group>
            
            <Group gap="md" align="flex-end">
              <ColorInput 
                label="With Swatches" 
                placeholder="Pick a color"
                swatches={[
                  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', 
                  '#FF00FF', '#00FFFF', '#FFA500', '#800080'
                ]}
                style={{ width: 200 }}
              />
              <ColorInput 
                label="HSL Format" 
                format="hsl"
                placeholder="hsl(0, 0%, 0%)"
                style={{ width: 200 }}
              />
              <ColorInput 
                label="RGB Format" 
                format="rgb"
                placeholder="rgb(0, 0, 0)"
                style={{ width: 200 }}
              />
            </Group>
            
            <Group gap="md" align="flex-end">
              <ColorInput 
                label="Disabled" 
                disabled
                value="#CCCCCC"
                style={{ width: 200 }}
              />
              <ColorInput 
                label="With Error" 
                error="Invalid color format"
                placeholder="#000000"
                style={{ width: 200 }}
              />
              <ColorInput 
                label="With Description" 
                description="Choose your theme color"
                placeholder="#000000"
                style={{ width: 200 }}
              />
            </Group>
            
            <Group gap="md">
              <Title order={5} size="xs">ColorInput Sizes</Title>
            </Group>
            <Stack gap="md">
              <ColorInput size="xs" label="Extra Small" placeholder="#000000" style={{ width: 200 }} />
              <ColorInput size="sm" label="Small" placeholder="#000000" style={{ width: 200 }} />
              <ColorInput size="md" label="Medium" placeholder="#000000" style={{ width: 200 }} />
              <ColorInput size="lg" label="Large" placeholder="#000000" style={{ width: 200 }} />
              <ColorInput size="xl" label="Extra Large" placeholder="#000000" style={{ width: 200 }} />
            </Stack>
          </Stack>
        </Stack>

        {/* Switch Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Switch Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">Switch Sizes</Title>
            </Group>
            <Stack gap="md">
              <Switch size="xs" label="Extra Small Switch" />
              <Switch size="sm" label="Small Switch" />
              <Switch size="md" label="Medium Switch" />
              <Switch size="lg" label="Large Switch" />
              <Switch size="xl" label="Extra Large Switch" />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="xs">Label States</Title>
            </Group>
            <Stack gap="md">
              <Switch label="Default Switch" />
              <Switch label="Optional Setting" showOptional />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="xs">Switch States</Title>
            </Group>
            <Stack gap="md">
              <Switch label="Default (Off)" />
              <Switch label="Checked (On)" defaultChecked />
              <Switch label="Disabled Off" disabled />
              <Switch label="Disabled On" disabled checked />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="xs">With On/Off Labels</Title>
            </Group>
            <Stack gap="md">
              <Switch 
                label="Power Mode" 
                onLabel="ON" 
                offLabel="OFF"
                defaultChecked 
              />
              <Switch 
                label="WiFi Connection" 
                onLabel="CONNECTED" 
                offLabel="DISCONNECTED"
                size="lg"
              />
              <Switch 
                label="Auto-save" 
                onLabel="✓" 
                offLabel="✗"
                showOptional
              />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="xs">Common Use Cases</Title>
            </Group>
            <Stack gap="md">
              <Switch label="Enable notifications" defaultChecked />
              <Switch label="Dark mode" />
              <Switch label="Auto-save documents" showOptional defaultChecked />
              <Switch label="Show advanced options" />
              <Switch label="Enable two-factor authentication" />
            </Stack>
          </Stack>
        </Stack>

        {/* SegmentedControl Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">SegmentedControl Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">Basic SegmentedControl</Title>
            </Group>
            <SegmentedControl 
              data={['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5']}
              defaultValue="Segment 2"
            />
            
            <Group gap="md">
              <Title order={5} size="xs">Different Sizes</Title>
            </Group>
            <Stack gap="md">
              <SegmentedControl 
                size="xs"
                data={['XS Size', 'Option 2', 'Option 3']}
                defaultValue="XS Size"
              />
              <SegmentedControl 
                size="sm"
                data={['SM Size', 'Option 2', 'Option 3']}
                defaultValue="SM Size"
              />
              <SegmentedControl 
                size="md"
                data={['MD Size', 'Option 2', 'Option 3']}
                defaultValue="MD Size"
              />
              <SegmentedControl 
                size="lg"
                data={['LG Size', 'Option 2', 'Option 3']}
                defaultValue="LG Size"
              />
              <SegmentedControl 
                size="xl"
                data={['XL Size', 'Option 2', 'Option 3']}
                defaultValue="XL Size"
              />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="xs">Custom Data Structure</Title>
            </Group>
            <SegmentedControl 
              data={[
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' },
                { label: 'Svelte', value: 'svelte' }
              ]}
              defaultValue="react"
            />
            
            <Group gap="md">
              <Title order={5} size="xs">Different Use Cases</Title>
            </Group>
            <Stack gap="md">
              <SegmentedControl 
                data={['Dashboard', 'Analytics', 'Reports', 'Settings']}
                defaultValue="Dashboard"
              />
              <SegmentedControl 
                data={['Day', 'Week', 'Month', 'Year']}
                defaultValue="Week"
              />
              <SegmentedControl 
                data={['List', 'Grid', 'Card']}
                defaultValue="List"
              />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="xs">States</Title>
            </Group>
            <Stack gap="md">
              <SegmentedControl 
                disabled
                data={['Disabled', 'Control', 'Example']}
                defaultValue="Disabled"
              />
              <SegmentedControl 
                fullWidth
                data={['Full', 'Width', 'Example']}
                defaultValue="Full"
              />
            </Stack>
          </Stack>
        </Stack>

        {/* Slider Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Slider Examples</Title>
          <Stack gap="lg" style={{ width: '100%', maxWidth: 400 }}>
            <Group gap="md">
              <Title order={5} size="xs">Basic Slider</Title>
            </Group>
            <Slider 
              label="Volume"
              defaultValue={50}
              min={0}
              max={100}
            />
            
            <Group gap="md">
              <Title order={5} size="xs">With Optional Label</Title>
            </Group>
            <Slider 
              label="Opacity"
              showOptional
              defaultValue={75}
              min={0}
              max={100}
            />
            
            <Group gap="md">
              <Title order={5} size="xs">With Marks</Title>
            </Group>
            <Slider 
              label="Rating"
              min={1}
              max={10}
              step={1}
              defaultValue={7}
              marks={[
                { value: 1, label: '1' },
                { value: 3, label: '3' },
                { value: 5, label: '5' },
                { value: 7, label: '7' },
                { value: 10, label: '10' }
              ]}
            />
            
            <Group gap="md">
              <Title order={5} size="xs">With Custom Values</Title>
            </Group>
            <Slider 
              label="Temperature"
              min={-20}
              max={40}
              step={5}
              defaultValue={20}
              marks={[
                { value: -20, label: '-20°C' },
                { value: 0, label: '0°C' },
                { value: 20, label: '20°C' },
                { value: 40, label: '40°C' }
              ]}
            />
            
            <Group gap="md">
              <Title order={5} size="xs">States</Title>
            </Group>
            <Stack gap="md">
              <Slider 
                label="Disabled"
                disabled
                defaultValue={30}
                min={0}
                max={100}
              />
              <Slider 
                label="With Custom Step"
                defaultValue={65}
                min={0}
                max={100}
                step={5}
              />
            </Stack>
          </Stack>
        </Stack>

        {/* Checkbox Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Checkbox - All Sizes</Title>
          <Stack gap="md">
            <Checkbox size="xs" label="Extra Small checkbox" />
            <Checkbox size="sm" label="Small checkbox" />
            <Checkbox size="md" label="Medium checkbox" />
            <Checkbox size="lg" label="Large checkbox" />
            <Checkbox size="xl" label="Extra Large checkbox" />
          </Stack>
          
          <Title order={5} size="xs">Checkbox States</Title>
          <Stack gap="sm">
            <Checkbox label="I want to receive email updates" />
            <Checkbox label="I want to receive SMS notifications" defaultChecked />
            <Checkbox label="This option is disabled" disabled />
            <Checkbox label="This disabled option is checked" disabled defaultChecked />
            <Checkbox label="This has indeterminate state" indeterminate />
            <Checkbox label="I agree to the terms and conditions" required />
          </Stack>
        </Stack>

        {/* Radio Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Radio - All Sizes</Title>
          <Stack gap="md">
            <Radio size="xs" label="Extra Small radio" value="xs" />
            <Radio size="sm" label="Small radio" value="sm" />
            <Radio size="md" label="Medium radio" value="md" />
            <Radio size="lg" label="Large radio" value="lg" />
            <Radio size="xl" label="Extra Large radio" value="xl" />
          </Stack>
          
          <Title order={5} size="xs">Radio States</Title>
          <Stack gap="sm">
            <Radio label="Default radio button" value="default" />
            <Radio label="Checked radio button" value="checked" defaultChecked />
            <Radio label="Disabled radio button" value="disabled" disabled />
            <Radio label="Required radio button" value="required" required />
          </Stack>
          
          <Title order={5} size="xs">Radio Groups</Title>
          <Stack gap="md">
            <RadioGroup label="Choose your preferred plan" defaultValue="basic">
              <Stack gap="xs">
                <Radio value="basic" label="Basic - $9/month" />
                <Radio value="pro" label="Pro - $29/month" />
                <Radio value="enterprise" label="Enterprise - $99/month" />
              </Stack>
            </RadioGroup>
            
            <RadioGroup label="Payment method" required>
              <Stack gap="xs">
                <Radio value="card" label="Credit Card" />
                <Radio value="paypal" label="PayPal" />
                <Radio value="bank" label="Bank Transfer" />
              </Stack>
            </RadioGroup>
          </Stack>
        </Stack>

        {/* Badge Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Badge - All Variants</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">Filled Badges</Title>
            </Group>
            <Group gap="md">
              <Badge variant="filled" color="default">Default</Badge>
              <Badge variant="filled" color="info">Info</Badge>
              <Badge variant="filled" color="success">Success</Badge>
              <Badge variant="filled" color="danger">Danger</Badge>
              <Badge variant="filled" color="pending">Pending</Badge>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="xs">Outline Badges</Title>
            </Group>
            <Group gap="md">
              <Badge variant="outline" color="default">Default</Badge>
              <Badge variant="outline" color="info">Info</Badge>
              <Badge variant="outline" color="success">Success</Badge>
              <Badge variant="outline" color="danger">Danger</Badge>
              <Badge variant="outline" color="pending">Pending</Badge>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="xs">Badge Sizes</Title>
            </Group>
            <Group gap="md" align="center">
              <Badge size="xs" color="info">XS</Badge>
              <Badge size="sm" color="info">SM</Badge>
              <Badge size="md" color="info">MD</Badge>
              <Badge size="lg" color="info">LG</Badge>
              <Badge size="xl" color="info">XL</Badge>
            </Group>
          </Stack>
        </Stack>

        {/* Chip Variants Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Chip Variants</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">Unselected Chips</Title>
            </Group>
            <Group gap="md">
              <Chip variant="default">Default</Chip>
              <Chip variant="info">Info</Chip>
              <Chip variant="success">Success</Chip>
              <Chip variant="danger">Danger</Chip>
              <Chip variant="pending">Pending</Chip>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="xs">Selected Chips</Title>
            </Group>
            <Group gap="md">
              <Chip variant="default" checked>Default</Chip>
              <Chip variant="info" checked>Info</Chip>
              <Chip variant="success" checked>Success</Chip>
              <Chip variant="danger" checked>Danger</Chip>
              <Chip variant="pending" checked>Pending</Chip>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="xs">Interactive Chips</Title>
            </Group>
            <Group gap="md">
              <Chip variant="info" onChange={(checked) => console.log('Info chip:', checked)}>Toggle Info</Chip>
              <Chip variant="success" onChange={(checked) => console.log('Success chip:', checked)}>Toggle Success</Chip>
              <Chip variant="danger" onChange={(checked) => console.log('Danger chip:', checked)}>Toggle Danger</Chip>
            </Group>
          </Stack>
        </Stack>

        {/* Button Variants Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">All Button Variants</Title>
          <Group gap="md">
            <DSButton variant="primary" size="xs">Primary</DSButton>
            <DSButton variant="secondary" size="xs">Secondary</DSButton>
            <DSButton variant="default" size="xs">Default</DSButton>
            <DSButton variant="outline" size="xs">Outline</DSButton>
            <DSButton variant="danger" size="xs">Danger</DSButton>
            <DSButton variant="disabled" size="xs">Disabled</DSButton>
            <DSButton variant="link" size="xs">Link</DSButton>
            <DSButton variant="secret" size="xs">Secret</DSButton>
          </Group>
          
          <Title order={4} size="sm">With Icons</Title>
          <Group gap="md">
            <DSButton 
              variant="primary" 
              size="xs" 
              leftIcon={<RiCircleLine size={14} />}
            >
              Primary
            </DSButton>
            <DSButton 
              variant="secondary" 
              size="xs" 
              leftIcon={<RiAddLine size={14} />}
            >
              Secondary
            </DSButton>
            <DSButton 
              variant="danger" 
              size="xs" 
              leftIcon={<RiAddLine size={14} />}
            >
              Danger
            </DSButton>
            <DSButton 
              variant="outline" 
              size="xs" 
              leftIcon={<RiCircleLine size={14} />}
            >
              Outline
            </DSButton>
          </Group>
        </Stack>

        {/* ActionButton Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">ActionButton Examples</Title>
          <Group gap="md">
            <ActionButton><RiEyeLine size={16} /></ActionButton>
            <ActionButton><RiAddLine size={16} /></ActionButton>
            <ActionButton><RiMore2Fill size={16} /></ActionButton>
            <ActionButton disabled><RiCircleLine size={16} /></ActionButton>
          </Group>
        </Stack>

        {/* CloseButton Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">CloseButton Examples</Title>
          <Group gap="md">
            <CloseButton />
            <CloseButton size="sm" />
            <CloseButton size="lg" />
            <CloseButton disabled />
          </Group>
        </Stack>

        {/* Pill Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Pill Examples</Title>
          <Group gap="md">
            <Pill>Default Pill</Pill>
            <Pill>Info Pill</Pill>
            <Pill>Success Pill</Pill>
            <Pill>Danger Pill</Pill>
            <Pill>Pending Pill</Pill>
          </Group>
          <Group gap="md">
            <Pill withRemoveButton onRemove={() => console.log('Remove clicked')}>Removable Pill</Pill>
            <Pill size="xs">XS Size</Pill>
            <Pill size="lg">LG Size</Pill>
            <Pill disabled>Disabled Pill</Pill>
          </Group>
        </Stack>

        {/* Indicator Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Indicator Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">Semantic Colors</Title>
            </Group>
            <Group gap="md">
              <Indicator type="default"><DSButton size="xs">Default</DSButton></Indicator>
              <Indicator type="info"><DSButton size="xs">Info</DSButton></Indicator>
              <Indicator type="success"><DSButton size="xs">Success</DSButton></Indicator>
              <Indicator type="danger"><DSButton size="xs">Danger</DSButton></Indicator>
              <Indicator type="pending"><DSButton size="xs">Pending</DSButton></Indicator>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">With Numbers</Title>
            </Group>
            <Group gap="md">
              <Indicator count={5} type="info"><DSButton size="xs">Messages</DSButton></Indicator>
              <Indicator count={23} type="danger"><DSButton size="xs">Errors</DSButton></Indicator>
              <Indicator count={100} type="success"><DSButton size="xs">Tasks</DSButton></Indicator>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">With Outline</Title>
            </Group>
            <Group gap="md">
              <Indicator type="info" withOutline><DSButton size="xs">Outlined Info</DSButton></Indicator>
              <Indicator count={8} type="danger" withOutline><DSButton size="xs">Notifications</DSButton></Indicator>
              <Indicator type="success" withOutline><DSButton size="xs">Complete</DSButton></Indicator>
            </Group>
          </Stack>
        </Stack>

        {/* Progress Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Progress Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">Progress Sizes</Title>
            </Group>
            <Stack gap="md" style={{ width: '100%', maxWidth: 400 }}>
              <div><span>Extra Small (30%)</span><Progress size="xs" value={30} /></div>
              <div><span>Small (50%)</span><Progress size="sm" value={50} /></div>
              <div><span>Medium (65%)</span><Progress size="md" value={65} /></div>
              <div><span>Large (80%)</span><Progress size="lg" value={80} /></div>
              <div><span>Extra Large (95%)</span><Progress size="xl" value={95} /></div>
            </Stack>

            <Group gap="md">
              <Title order={5} size="xs">Different Progress Levels</Title>
            </Group>
            <Stack gap="md" style={{ width: '100%', maxWidth: 400 }}>
              <div><span>25% Complete</span><Progress value={25} /></div>
              <div><span>50% Complete</span><Progress value={50} /></div>
              <div><span>75% Complete</span><Progress value={75} /></div>
              <div><span>Completed!</span><Progress value={100} /></div>
            </Stack>

            <Group gap="md">
              <Title order={5} size="xs">Animated Progress</Title>
            </Group>
            <Stack gap="md" style={{ width: '100%', maxWidth: 400 }}>
              <div><span>Uploading... 60%</span><Progress value={60} animated /></div>
              <div><span>Processing... 85%</span><Progress value={85} animated /></div>
            </Stack>
          </Stack>
        </Stack>

        {/* ThemeIcon Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">ThemeIcon Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">All Sizes (xs to xxl)</Title>
            </Group>
            <Group gap="md">
              <ThemeIcon size="xs"><RiUserLine size={11} /></ThemeIcon>
              <ThemeIcon size="sm"><RiUserLine size={14} /></ThemeIcon>
              <ThemeIcon size="md"><RiUserLine size={18} /></ThemeIcon>
              <ThemeIcon size="lg"><RiUserLine size={22} /></ThemeIcon>
              <ThemeIcon size="xl"><RiUserLine size={28} /></ThemeIcon>
              <ThemeIcon size="xxl"><RiUserLine size={39} /></ThemeIcon>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">Blue and Dark Colors</Title>
            </Group>
            <Group gap="md">
              <ThemeIcon color="blue">
                <RiEyeLine size={18} />
              </ThemeIcon>
              <ThemeIcon color="default">
                <RiEyeLine size={18} />
              </ThemeIcon>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">Custom XXL Size from Figma</Title>
            </Group>
            <Group gap="md">
              <ThemeIcon size="xxl" color="blue">
                <RiAddLine size={39} />
              </ThemeIcon>
              <ThemeIcon size="xxl" color="default">
                <RiAddLine size={39} />
              </ThemeIcon>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">Different Icons</Title>
            </Group>
            <Group gap="md">
              <ThemeIcon color="blue"><RiServerLine size={18} /></ThemeIcon>
              <ThemeIcon color="default"><RiCircleLine size={18} /></ThemeIcon>
              <ThemeIcon color="blue"><RiMore2Fill size={18} /></ThemeIcon>
              <ThemeIcon color="default"><RiAddLine size={18} /></ThemeIcon>
            </Group>
          </Stack>
        </Stack>

        {/* Alert Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Alert Examples</Title>
          <Stack gap="md">
            <Alert type="info" title="Information">
              This is an informational alert with useful details.
            </Alert>
            <Alert type="success" title="Success!">
              Your action was completed successfully.
            </Alert>
            <Alert type="danger" title="Error Occurred">
              Something went wrong. Please try again.
            </Alert>
            <Alert type="pending" title="Processing">
              Your request is being processed. Please wait.
            </Alert>
            <Alert type="default" title="Notice">
              This is a general notice or announcement.
            </Alert>
            
            <Group gap="md">
              <Title order={5} size="xs">Dismissible Alerts</Title>
            </Group>
            <Alert type="info" title="Dismissible Alert">
              You can close this alert by clicking the X button.
            </Alert>
            
            <Alert type="success" title="Custom Icon" icon={<RiCircleLine size={16} />}>
              This alert has a custom icon instead of the default semantic icon.
            </Alert>
          </Stack>
        </Stack>

        {/* Kbd Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Kbd (Keyboard Key) Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">Single Keys</Title>
            </Group>
            <Group gap="sm">
              <Kbd>Ctrl</Kbd>
              <Kbd>Alt</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>Enter</Kbd>
              <Kbd>Esc</Kbd>
              <Kbd>Tab</Kbd>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">Key Combinations</Title>
            </Group>
            <Stack gap="sm">
              <div>Save: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></div>
              <div>Copy: <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd></div>
              <div>Paste: <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd></div>
              <div>Search: <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd></div>
            </Stack>

            <Group gap="md">
              <Title order={5} size="xs">Different Sizes</Title>
            </Group>
            <Group gap="sm" align="center">
              <Kbd size="xs">xs</Kbd>
              <Kbd size="sm">sm</Kbd>
              <Kbd size="md">md</Kbd>
              <Kbd size="lg">lg</Kbd>
              <Kbd size="xl">xl</Kbd>
            </Group>
          </Stack>
        </Stack>

        {/* Code Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Code Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">Inline Code</Title>
            </Group>
            <Text>
              Use <Code>React.createElement()</Code> to create elements programmatically.
              The <Code>useState</Code> hook manages component state.
            </Text>

            <Group gap="md">
              <Title order={5} size="xs">Block Code</Title>
            </Group>
            <Code block>
{`import { useState } from 'react';
import { Code } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  return <Code>Hello World</Code>;
}`}
            </Code>
            <Group gap="md">
              <Title order={5} size="xs">Different Sizes</Title>
            </Group>
            <Group gap="sm" align="center">
              <Code size="xs">xs size</Code>
              <Code size="sm">sm size</Code>
              <Code size="md">md size</Code>
              <Code size="lg">lg size</Code>
              <Code size="xl">xl size</Code>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">Code with Roboto Mono Font</Title>
            </Group>
            <Text size="sm" c="dimmed">
              All code examples use Roboto Mono font as specified in Figma design.
            </Text>
            <Code>console.log('Roboto Mono font applied');</Code>
          </Stack>
        </Stack>

        {/* Divider Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Divider Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">Different Thicknesses</Title>
            </Group>
            <Text size="sm" c="dimmed">
              Dividers support sm, md, lg, xl thickness sizes.
            </Text>
            <Stack gap="sm">
              <Text size="xs" c="dimmed">Size: sm (default)</Text>
              <DSDivider size="sm" />
              <Text size="xs" c="dimmed">Size: md</Text>
              <DSDivider size="md" />
              <Text size="xs" c="dimmed">Size: lg</Text>
              <DSDivider size="lg" />
              <Text size="xs" c="dimmed">Size: xl</Text>
              <DSDivider size="xl" />
            </Stack>

            <Group gap="md">
              <Title order={5} size="xs">Horizontal Divider</Title>
            </Group>
            <Stack gap="md">
              <Text>Content above the divider</Text>
              <DSDivider orientation="horizontal" />
              <Text>Content below the divider</Text>
            </Stack>

            <Group gap="md">
              <Title order={5} size="xs">Vertical Divider</Title>
            </Group>
            <Group gap="md" align="center">
              <Text>Left content</Text>
              <DSDivider orientation="vertical" />
              <Text>Right content</Text>
            </Group>

            <Group gap="md">
              <Title order={5} size="xs">Gray.4 Color</Title>
            </Group>
            <Text size="sm" c="dimmed">
              All dividers use gray.4 color as specified in Figma design.
            </Text>
            <DSDivider />
          </Stack>
        </Stack>

        {/* Paper Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Paper Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="xs">Four Variants</Title>
            </Group>
            <Text size="sm" c="dimmed">
              Paper supports four variants: default (no border/shadow), shadow, border, and border-shadow. All use sm spacing.
            </Text>
            <SimpleGrid cols={2} spacing="md">
              <DSPaper variant="default">
                <Text fw={500} mb="xs">Default</Text>
                <Text size="sm" c="dimmed">No border or shadow</Text>
              </DSPaper>
              
              <DSPaper variant="shadow">
                <Text fw={500} mb="xs">Shadow</Text>
                <Text size="sm" c="dimmed">With shadow only</Text>
              </DSPaper>
              
              <DSPaper variant="border">
                <Text fw={500} mb="xs">Border</Text>
                <Text size="sm" c="dimmed">With border only</Text>
              </DSPaper>
              
              <DSPaper variant="border-shadow">
                <Text fw={500} mb="xs">Border + Shadow</Text>
                <Text size="sm" c="dimmed">With both border and shadow</Text>
              </DSPaper>
            </SimpleGrid>

            <Group gap="md">
              <Title order={5} size="xs">Content Examples</Title>
            </Group>
            <DSPaper variant="border-shadow">
              <Text fw={500} mb="sm">Paper with Content</Text>
              <Text size="sm" c="dimmed" mb="md">
                This is an example of Paper being used as a container for content. 
                It has sm spacing applied automatically.
              </Text>
              <Group gap="sm">
                <Badge color="info">Feature</Badge>
                <Badge color="success">Ready</Badge>
              </Group>
            </DSPaper>
          </Stack>
        </Stack>

        {/* DropZone Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">DropZone Examples</Title>
          <Text size="sm" c="dimmed" mb="md">
            File upload component with drag and drop functionality. Supports different file types, size limits, and states.
          </Text>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">Basic Usage</Title>
            </Group>
            <DropZone 
              title="Upload your files"
              description="Drag files here or click to select files"
              onDrop={(files) => console.log('Dropped files:', files)}
            />

            <Group gap="md">
              <Title order={5} size="xs">Different States</Title>
            </Group>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
              <DropZone 
                title="Loading State"
                description="Processing your files..."
                loading
              />
              <DropZone 
                title="Disabled State"
                description="File upload is currently disabled"
                disabled
              />
            </SimpleGrid>

            <Group gap="md">
              <Title order={5} size="xs">Custom File Types</Title>
            </Group>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
              <DropZone 
                title="Images Only"
                description="PNG, JPG, GIF files accepted (max 5MB)"
                accept={['image/png', 'image/jpeg', 'image/gif']}
                onDrop={(files) => console.log('Image files:', files)}
              />
              <DropZone 
                title="Documents Only"
                description="PDF and Word documents accepted"
                accept={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']}
                onDrop={(files) => console.log('Document files:', files)}
              />
            </SimpleGrid>
          </Stack>
        </Stack>

        {/* FileInput Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">FileInput Examples</Title>
          <Text size="sm" c="dimmed" mb="md">
            File input component with consistent design system styling. Supports all standard file input features.
          </Text>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">All Sizes</Title>
            </Group>
            <Stack gap="md">
              <FileInput size="xs" label="Extra Small" placeholder="Choose file" />
              <FileInput size="sm" label="Small" placeholder="Choose file" />
              <FileInput size="md" label="Medium" placeholder="Choose file" />
              <FileInput size="lg" label="Large" placeholder="Choose file" />
              <FileInput size="xl" label="Extra Large" placeholder="Choose file" />
            </Stack>

            <Group gap="md">
              <Title order={5} size="xs">Label States</Title>
            </Group>
            <Stack gap="sm">
              <FileInput label="Document Upload" placeholder="Select document" />
              <FileInput label="Resume" placeholder="Upload your resume" required />
              <FileInput label="Profile Picture" placeholder="Upload image" showOptional />
            </Stack>

            <Group gap="md">
              <Title order={5} size="xs">File Type Restrictions</Title>
            </Group>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
              <FileInput 
                label="Images Only"
                placeholder="Upload image"
                accept="image/png,image/jpeg,image/gif"
              />
              <FileInput 
                label="Documents Only"
                placeholder="Upload document"
                accept="application/pdf,.doc,.docx"
              />
            </SimpleGrid>

            <Group gap="md">
              <Title order={5} size="xs">Features</Title>
            </Group>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
              <MantineFileInput 
                label="Multiple Files"
                placeholder="Select multiple files"
                multiple
                size="md"
                radius="sm"
              />
              <FileInput 
                label="Clearable"
                placeholder="Upload file (clearable)"
                clearable
              />
            </SimpleGrid>

            <Group gap="md">
              <Title order={5} size="xs">States</Title>
            </Group>
            <Group gap="md" align="flex-end">
              <FileInput 
                label="Default" 
                placeholder="Choose file"
                style={{ width: 200 }}
              />
              <FileInput 
                label="With Error" 
                placeholder="Choose file"
                error="File is required"
                style={{ width: 200 }}
              />
              <FileInput 
                label="Disabled" 
                placeholder="Choose file"
                disabled
                style={{ width: 200 }}
              />
            </Group>
          </Stack>
        </Stack>

        {/* SearchableSelect Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">SearchableSelect Examples</Title>
          <Stack gap="md">
            <SearchableSelect
              label="Choose Country"
              placeholder="Search countries..."
              data={[
                'United States', 'Canada', 'United Kingdom', 'Germany', 
                'France', 'Japan', 'Australia', 'Brazil', 'India', 'China'
              ]}
              searchable
            />
            <SearchableSelect
              label="Select Technology"
              placeholder="Search technologies..."
              data={[
                { value: 'react', label: 'React' },
                { value: 'vue', label: 'Vue.js' },
                { value: 'angular', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' }
              ]}
              required
            />
          </Stack>
        </Stack>

        {/* AutocompleteClearable Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">AutocompleteClearable Examples</Title>
          <Stack gap="md">
            <AutocompleteClearable
              label="Search Cities"
              placeholder="Type to search..."
              data={[
                'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
                'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
              ]}
            />
            <AutocompleteClearable
              label="Search Products"
              placeholder="Start typing..."
              data={['Laptop', 'Desktop', 'Tablet', 'Phone', 'Monitor', 'Keyboard', 'Mouse']}
              required
            />
          </Stack>
        </Stack>

        {/* Multiselect Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Multiselect Examples</Title>
          <Stack gap="md">
            <Multiselect
              label="Select Skills"
              placeholder="Choose multiple skills..."
              data={[
                'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
                'Node.js', 'Python', 'Java', 'C++', 'Go'
              ]}
              searchable
            />
            <Multiselect
              label="Select Categories"
              placeholder="Choose categories..."
              data={[
                { value: 'tech', label: 'Technology' },
                { value: 'science', label: 'Science' },
                { value: 'art', label: 'Art & Design' },
                { value: 'business', label: 'Business' }
              ]}
              required
            />
          </Stack>
        </Stack>

        {/* Breadcrumb Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Breadcrumb Examples</Title>
          <Stack gap="md">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Electronics', href: '/products/electronics' },
                { label: 'Smartphones' }
              ]}
            />
            <Breadcrumb
              items={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Users', href: '/dashboard/users' },
                { label: 'John Doe' }
              ]}
              separator=">"
            />
          </Stack>
        </Stack>

        {/* BackBreadcrumb Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">BackBreadcrumb Examples</Title>
          <Stack gap="md">
            <BackBreadcrumb 
              label="Back to Dashboard"
              onClick={() => console.log('Navigate back to dashboard')}
            />
            <BackBreadcrumb 
              label="Back to Products" 
              onClick={() => console.log('Navigate back to products')}
            />
          </Stack>
        </Stack>

        {/* NavLink Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">NavLink Examples</Title>
          <Stack gap="md" style={{ maxWidth: 300 }}>
            <NavLink label="Dashboard" icon={<RiEyeLine size={18} />} active />
            <NavLink label="Users" icon={<RiUserLine size={18} />} />
            <NavLink 
              label="Settings" 
              icon={<RiServerLine size={18} />} 
              rightSection={<Badge size="xs" color="info">3</Badge>}
            />
            <NavLink 
              label="Messages" 
              icon={<RiAddLine size={18} />}
              rightSection={<Badge size="xs" color="danger">184</Badge>}
            />
            <NavLink 
              label="Reports" 
              icon={<RiCircleLine size={18} />}
              hasChildren
            />
          </Stack>
        </Stack>

        {/* Stepper Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Stepper Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">Horizontal Stepper</Title>
            </Group>
            <Stepper
              orientation="horizontal"
              steps={[
                { id: 'account', label: 'Account Setup', description: 'Create your account' },
                { id: 'profile', label: 'Profile Information', description: 'Fill in your details' },
                { id: 'preferences', label: 'Preferences', description: 'Customize your experience' },
                { id: 'review', label: 'Review', description: 'Review and confirm' },
                { id: 'complete', label: 'Complete', description: 'All done!' }
              ]}
              active={2}
            />

            <Group gap="md">
              <Title order={5} size="xs">Vertical Stepper</Title>
            </Group>
            <Stepper
              orientation="vertical"
              steps={[
                { id: 'planning', label: 'Planning', description: 'Define project requirements' },
                { id: 'development', label: 'Development', description: 'Build the application' },
                { id: 'testing', label: 'Testing', description: 'Quality assurance testing' },
                { id: 'deployment', label: 'Deployment', description: 'Deploy to production' }
              ]}
              active={1}
              style={{ maxWidth: 400 }}
            />
          </Stack>
        </Stack>

        {/* Tabs Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Tabs Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="xs">Horizontal Tabs</Title>
            </Group>
            <Tabs
              orientation="horizontal"
              tabs={[
                { 
                  id: 'overview', 
                  label: 'Overview', 
                  leftSection: <RiEyeLine size={16} />,
                  rightSection: <Badge size="xs" color="info">12</Badge>,
                  children: <div>Overview content goes here...</div>
                },
                { 
                  id: 'analytics', 
                  label: 'Analytics',
                  leftSection: <RiServerLine size={16} />,
                  children: <div>Analytics content goes here...</div>
                },
                { 
                  id: 'settings', 
                  label: 'Settings',
                  rightSection: <Badge size="xs" color="danger">3</Badge>,
                  children: <div>Settings content goes here...</div>
                }
              ]}
              value="overview"
            />

            <Group gap="md">
              <Title order={5} size="xs">Vertical Tabs</Title>
            </Group>
            <div style={{ maxWidth: 500 }}>
              <Tabs
                orientation="vertical"
                tabs={[
                  { 
                    id: 'profile', 
                    label: 'Profile', 
                    leftSection: <RiUserLine size={16} />,
                    children: (
                      <Stack gap="md" p="md">
                        <TextInput label="Display Name" placeholder="Enter your display name..." size="sm" />
                        <TextInput label="Email" placeholder="your.email@example.com" size="sm" />
                        <TextArea label="Bio" placeholder="Tell us about yourself..." rows={3} size="sm" />
                        <DSButton size="sm">Save Profile</DSButton>
                      </Stack>
                    )
                  },
                  { 
                    id: 'security', 
                    label: 'Security',
                    children: (
                      <Stack gap="md" p="md">
                        <TextInput label="Current Password" type="password" size="sm" />
                        <TextInput label="New Password" type="password" size="sm" />
                        <TextInput label="Confirm Password" type="password" size="sm" />
                        <DSButton size="sm" variant="outline">Change Password</DSButton>
                      </Stack>
                    )
                  },
                  { 
                    id: 'notifications', 
                    label: 'Notifications', 
                    rightSection: <Badge size="xs" color="success">On</Badge>,
                    children: (
                      <Stack gap="md" p="md">
                        <Switch label="Email notifications" defaultChecked />
                        <Switch label="Push notifications" />
                        <Switch label="SMS notifications" defaultChecked />
                        <Switch label="Marketing emails" />
                        <DSButton size="sm" variant="default">Save Preferences</DSButton>
                      </Stack>
                    )
                  }
                ]}
                value="profile"
              />
            </div>
          </Stack>
        </Stack>

        {/* Modal Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Modal Examples</Title>
          <Group gap="md">
            <DSButton onClick={() => setModalOpened(true)}>Open Modal</DSButton>
            <DSButton variant="danger" onClick={() => setConfirmModalOpened(true)}>Confirmation Modal</DSButton>
          </Group>
        </Stack>

        <Modal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          title="Edit User Profile"
          size="md"
          actions={[
            {
              id: 'save',
              label: 'Save Changes',
              variant: 'primary',
              onClick: () => {
                console.log('Save clicked');
                setModalOpened(false);
              }
            },
            {
              id: 'cancel',
              label: 'Cancel',
              variant: 'outline',
              onClick: () => setModalOpened(false)
            }
          ]}
          tertiaryActions={[
            {
              id: 'help',
              label: 'Help',
              variant: 'default',
              onClick: () => console.log('Help clicked')
            }
          ]}
        >
          <Stack gap="md">
            <TextInput label="Full Name" placeholder="Enter full name..." />
            <TextInput label="Email" placeholder="Enter email address..." />
            <TextArea label="Bio" placeholder="Tell us about yourself..." rows={3} />
            <Alert type="info" title="Button Layout">
              <div style={{ fontSize: '14px' }}>
                • <strong>Left side:</strong> Primary Action (blue), Cancel (outline)<br/>
                • <strong>Right side:</strong> More Options, Help (both gray)
              </div>
            </Alert>
          </Stack>
        </Modal>

        <ConfirmationModal
          opened={confirmModalOpened}
          onClose={() => setConfirmModalOpened(false)}
          title="Delete User"
          confirmLabel="Delete"
          cancelLabel="Keep"
          confirmVariant="danger"
          onConfirm={() => {
            console.log('User deleted');
            setConfirmModalOpened(false);
          }}
          onCancel={() => setConfirmModalOpened(false)}
        >
          Are you sure you want to delete this user? This action cannot be undone.
        </ConfirmationModal>

        {/* Drawer Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Drawer Examples</Title>
          <Group gap="md">
            <DSButton onClick={() => setRightDrawerOpened(true)}>Right Drawer</DSButton>
            <DSButton onClick={() => setLeftDrawerOpened(true)}>Left Drawer</DSButton>
            <DSButton onClick={() => setTopDrawerOpened(true)}>Top Drawer</DSButton>
            <DSButton onClick={() => setBottomDrawerOpened(true)}>Bottom Drawer</DSButton>
          </Group>
        </Stack>

        <Drawer
          opened={rightDrawerOpened}
          onClose={() => setRightDrawerOpened(false)}
          title="User Details"
          position="right"
          size="md"
        >
          <Stack gap="md">
            <TextInput label="Name" defaultValue="John Doe" />
            <TextInput label="Email" defaultValue="john@example.com" />
            <TextArea label="Notes" defaultValue="Customer since 2020" rows={4} />
            <Group gap="sm" justify="flex-end" mt="md">
              <DSButton variant="outline" onClick={() => setRightDrawerOpened(false)}>Cancel</DSButton>
              <DSButton onClick={() => setRightDrawerOpened(false)}>Save</DSButton>
            </Group>
          </Stack>
        </Drawer>

        <Drawer
          opened={leftDrawerOpened}
          onClose={() => setLeftDrawerOpened(false)}
          title="Navigation Menu"
          position="left"
          size="sm"
        >
          <Stack gap="sm">
            <NavLink label="Dashboard" icon={<RiEyeLine size={18} />} active />
            <NavLink label="Users" icon={<RiUserLine size={18} />} />
            <NavLink label="Settings" icon={<RiServerLine size={18} />} />
            <NavLink label="Reports" icon={<RiCircleLine size={18} />} />
          </Stack>
        </Drawer>

        <Drawer
          opened={topDrawerOpened}
          onClose={() => setTopDrawerOpened(false)}
          title="Notifications"
          position="top"
          size="xs"
        >
          <Stack gap="sm">
            <Alert type="info" title="New Message">You have a new message from John</Alert>
            <Alert type="success" title="Task Completed">Your report has been generated</Alert>
          </Stack>
        </Drawer>

        <Drawer
          opened={bottomDrawerOpened}
          onClose={() => setBottomDrawerOpened(false)}
          title="Quick Actions"
          position="bottom"
          size="xs"
        >
          <Group gap="md" justify="center">
            <DSButton leftIcon={<RiAddLine size={16} />}>Add Item</DSButton>
            <DSButton leftIcon={<RiEyeLine size={16} />} variant="outline">View All</DSButton>
            <DSButton leftIcon={<RiServerLine size={16} />} variant="default">Export</DSButton>
          </Group>
        </Drawer>

        {/* Menu Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Menu Examples</Title>
          <Group gap="md">
            <DSMenu
              trigger={<DSButton>Basic Menu</DSButton>}
              sections={[
                {
                  items: [
                    { id: 'profile', label: 'Profile', leftSection: <RiUserLine size={16} /> },
                    { id: 'settings', label: 'Settings', leftSection: <RiServerLine size={16} /> },
                    { id: 'logout', label: 'Logout' }
                  ]
                }
              ]}
            />
            
            <DSMenu
              trigger={<ActionButton><RiMore2Fill size={16} /></ActionButton>}
              position="bottom-end"
              sections={[
                {
                  title: 'Actions',
                  items: [
                    { 
                      id: 'edit', 
                      label: 'Edit', 
                      leftSection: <RiEyeLine size={16} />,
                      rightSection: <Kbd size="xs">E</Kbd>
                    },
                    { 
                      id: 'duplicate', 
                      label: 'Duplicate',
                      rightSection: <Badge size="xs" color="info">Pro</Badge>
                    }
                  ]
                },
                {
                  items: [
                    { 
                      id: 'delete', 
                      label: 'Delete', 
                      color: 'red',
                      rightSection: <Kbd size="xs">Del</Kbd>
                    }
                  ]
                }
              ]}
            />
          </Group>
        </Stack>

        {/* Popover Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Popover Examples</Title>
          
          {/* Basic Popovers */}
          <Stack gap="sm">
            <Title order={5} size="xs">Basic Popovers</Title>
            <Group gap="md">
              <Popover
                trigger={<DSButton size="xs">Info (Top)</DSButton>}
                title="Information"
                position="top"
              >
                This is a simple information popover positioned at the top.
              </Popover>
              
              <Popover
                trigger={<DSButton size="xs">Help (Bottom)</DSButton>}
                title="Help"
                position="bottom"
              >
                This popover appears at the bottom and provides helpful information.
              </Popover>
              
              <Popover
                trigger={<DSButton size="xs">Settings (Left)</DSButton>}
                title="Quick Settings"
                position="left"
                width={250}
              >
                <Stack gap="sm">
                  <Switch label="Enable notifications" />
                  <Switch label="Dark mode" />
                  <Switch label="Auto-save" />
                </Stack>
              </Popover>
              
              <Popover
                trigger={<DSButton size="xs">Actions (Right)</DSButton>}
                title="Quick Actions"
                position="right"
                width={200}
              >
                <Stack gap="xs">
                  <DSButton variant="outline" size="xs">Edit</DSButton>
                  <DSButton variant="outline" size="xs">Duplicate</DSButton>
                  <DSButton variant="danger" size="xs">Delete</DSButton>
                </Stack>
              </Popover>
            </Group>
          </Stack>

          {/* Popovers with Actions */}
          <Stack gap="sm">
            <Title order={5} size="xs">Popovers with Button Actions</Title>
            <Group gap="md">
              <Popover
                trigger={<DSButton size="xs">Confirm Action</DSButton>}
                title="Confirm"
                position="top"
                actions={[
                  {
                    id: "yes",
                    label: "Yes",
                    variant: "primary",
                    onClick: () => console.log('Confirmed'),
                    closeOnClick: true
                  },
                  {
                    id: "no",
                    label: "No",
                    variant: "outline",
                    closeOnClick: true
                  }
                ]}
              >
                Are you sure you want to continue?
              </Popover>
              
              <Popover
                trigger={<DSButton size="xs">Form Popover</DSButton>}
                title="Quick Form"
                position="bottom"
                width={300}
                actions={[
                  {
                    id: "save",
                    label: "Save",
                    variant: "primary",
                    onClick: () => console.log('Form saved'),
                    closeOnClick: true
                  },
                  {
                    id: "cancel",
                    label: "Cancel",
                    variant: "outline",
                    closeOnClick: true
                  }
                ]}
                tertiaryActions={[
                  {
                    id: "reset",
                    label: "Reset",
                    variant: "default",
                    onClick: () => console.log('Form reset')
                  }
                ]}
              >
                <Stack gap="sm">
                  <TextInput label="Name" placeholder="Enter name..." size="xs" />
                  <TextArea label="Notes" placeholder="Add notes..." rows={2} size="xs" />
                </Stack>
              </Popover>
            </Group>
          </Stack>

          {/* Confirmation Popover Variant */}
          <Stack gap="sm">
            <Title order={5} size="xs">Pre-configured Confirmation Popover</Title>
            <Group gap="md">
              <ConfirmationPopover
                trigger={<DSButton variant="danger" size="xs">Delete Item</DSButton>}
                title="Delete Confirmation"
                position="top"
                confirmLabel="Delete"
                cancelLabel="Keep"
                confirmVariant="danger"
                onConfirm={() => console.log('Item deleted')}
                onCancel={() => console.log('Delete cancelled')}
              >
                This action cannot be undone.
              </ConfirmationPopover>
            </Group>
          </Stack>
        </Stack>

        {/* Tooltip Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Tooltip Examples</Title>
          
          {/* Basic Tooltips */}
          <Stack gap="sm">
            <Title order={5} size="xs">Basic Tooltips - Different Positions</Title>
            <Group gap="md">
              <Tooltip label="This is a tooltip! Rejoice!" position="top">
                <DSButton size="xs">Top</DSButton>
              </Tooltip>
              
              <Tooltip label="Bottom tooltip with helpful information" position="bottom">
                <DSButton size="xs">Bottom</DSButton>
              </Tooltip>
              
              <Tooltip label="Left side tooltip" position="left">
                <DSButton size="xs">Left</DSButton>
              </Tooltip>
              
              <Tooltip label="Right side tooltip" position="right">
                <DSButton size="xs">Right</DSButton>
              </Tooltip>
            </Group>
          </Stack>

          {/* Corner Positions */}
          <Stack gap="sm">
            <Title order={5} size="xs">Corner Positions</Title>
            <Group gap="md">
              <Tooltip label="Top-start position" position="top-start">
                <DSButton size="xs">Top Start</DSButton>
              </Tooltip>
              
              <Tooltip label="Top-end position" position="top-end">
                <DSButton size="xs">Top End</DSButton>
              </Tooltip>
              
              <Tooltip label="Bottom-start position" position="bottom-start">
                <DSButton size="xs">Bottom Start</DSButton>
              </Tooltip>
              
              <Tooltip label="Bottom-end position" position="bottom-end">
                <DSButton size="xs">Bottom End</DSButton>
              </Tooltip>
            </Group>
          </Stack>

          {/* Different Content Types */}
          <Stack gap="sm">
            <Title order={5} size="xs">Different Content & Styling</Title>
            <Group gap="md">
              <Tooltip 
                label="This is a longer tooltip that demonstrates multi-line content and how it wraps nicely."
                width={200}
                position="top"
              >
                <DSButton size="xs">Long Text</DSButton>
              </Tooltip>
              
              <Tooltip 
                label="Tooltip with custom width"
                width={150}
                position="bottom"
              >
                <DSButton size="xs">Custom Width</DSButton>
              </Tooltip>
              
              <Tooltip 
                label="No arrow tooltip"
                withArrow={false}
                position="right"
              >
                <DSButton size="xs">No Arrow</DSButton>
              </Tooltip>
            </Group>
          </Stack>

          {/* With Delays */}
          <Stack gap="sm">
            <Title order={5} size="xs">With Delays</Title>
            <Group gap="md">
              <Tooltip 
                label="Shows after 500ms delay"
                openDelay={500}
                position="top"
              >
                <DSButton size="xs">Open Delay</DSButton>
              </Tooltip>
              
              <Tooltip 
                label="Hides after 300ms delay"
                closeDelay={300}
                position="bottom"
              >
                <DSButton size="xs">Close Delay</DSButton>
              </Tooltip>
              
              <Tooltip 
                label="Both delays: 300ms open, 200ms close"
                openDelay={300}
                closeDelay={200}
                position="right"
              >
                <DSButton size="xs">Both Delays</DSButton>
              </Tooltip>
            </Group>
          </Stack>

          {/* Interactive Elements */}
          <Stack gap="sm">
            <Title order={5} size="xs">On Different Elements</Title>
            <Group gap="md">
              <Tooltip label="Tooltip on icon button">
                <ActionButton size="xs">
                  <RiEyeLine size={16} />
                </ActionButton>
              </Tooltip>
              
              <Tooltip label="Tooltip on badge">
                <Badge color="success">Hover me</Badge>
              </Tooltip>
              
              <Tooltip label="Tooltip on text input">
                <TextInput placeholder="Hover over this input" size="xs" style={{ width: 150 }} />
              </Tooltip>
              
              <Tooltip label="Disabled tooltip" disabled>
                <DSButton size="xs">Disabled Tooltip</DSButton>
              </Tooltip>
            </Group>
          </Stack>
        </Stack>

        {/* Avatar Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Avatar Examples</Title>
          
          {/* All Sizes */}
          <Stack gap="sm">
            <Title order={5} size="xs">All T-Shirt Sizes</Title>
            
            <Stack gap="md">
              <Group gap="md" align="center">
                <Text size="sm" style={{ minWidth: 60 }}>Icon:</Text>
                <Avatar variant="icon" size="xs" />
                <Avatar variant="icon" size="sm" />
                <Avatar variant="icon" size="md" />
                <Avatar variant="icon" size="lg" />
                <Avatar variant="icon" size="xl" />
                <Text size="xs" c="dimmed">xs (16px) → xl (84px)</Text>
              </Group>
              
              <Group gap="md" align="center">
                <Text size="sm" style={{ minWidth: 60 }}>Initials:</Text>
                <Avatar variant="initials" initials="AB" size="xs" />
                <Avatar variant="initials" initials="CD" size="sm" />
                <Avatar variant="initials" initials="EF" size="md" />
                <Avatar variant="initials" initials="GH" size="lg" />
                <Avatar variant="initials" initials="JK" size="xl" />
                <Text size="xs" c="dimmed">Two character initials</Text>
              </Group>
              
              <Group gap="md" align="center">
                <Text size="sm" style={{ minWidth: 60 }}>Image:</Text>
                <Avatar variant="image" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt="User 1" size="xs" />
                <Avatar variant="image" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" alt="User 2" size="sm" />
                <Avatar variant="image" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png" alt="User 3" size="md" />
                <Avatar variant="image" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png" alt="User 4" size="lg" />
                <Avatar variant="image" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png" alt="User 5" size="xl" />
                <Text size="xs" c="dimmed">With profile images</Text>
              </Group>
            </Stack>
          </Stack>

          {/* Three Variants */}
          <Stack gap="sm">
            <Title order={5} size="xs">Three Main Variants</Title>
            <Group gap="lg" align="center">
              <Stack gap="xs" align="center">
                <Avatar variant="icon" size="lg" />
                <Text size="xs" c="dimmed">Icon (Default)</Text>
              </Stack>
              
              <Stack gap="xs" align="center">
                <Avatar variant="initials" initials="JD" size="lg" />
                <Text size="xs" c="dimmed">Initials</Text>
              </Stack>
              
              <Stack gap="xs" align="center">
                <Avatar 
                  variant="image" 
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" 
                  alt="John Doe"
                  size="lg" 
                />
                <Text size="xs" c="dimmed">Image</Text>
              </Stack>
            </Group>
          </Stack>

          {/* Custom Icons */}
          <Stack gap="sm">
            <Title order={5} size="xs">Custom Icons</Title>
            <Group gap="md">
              <Avatar variant="icon" size="md" />
              <Avatar variant="icon" icon={<RiUserLine />} size="md" />
              <Avatar variant="icon" icon={<RiServerLine />} size="md" />
              <Avatar variant="icon" icon={<RiEyeLine />} size="md" />
            </Group>
          </Stack>

          {/* Fallback Behavior */}
          <Stack gap="sm">
            <Title order={5} size="xs">Fallback Behavior</Title>
            <Group gap="md" align="center">
              <Stack gap="xs" align="center">
                <Avatar 
                  variant="image" 
                  src="https://example.com/broken-image.jpg" 
                  fallback="icon"
                  size="md"
                />
                <Text size="xs" c="dimmed">Image → Icon</Text>
              </Stack>
              
              <Stack gap="xs" align="center">
                <Avatar 
                  variant="image" 
                  src="https://example.com/broken-image.jpg" 
                  fallback="initials"
                  fallbackInitials="FB"
                  size="md"
                />
                <Text size="xs" c="dimmed">Image → Initials</Text>
              </Stack>
              
              <Stack gap="xs" align="center">
                <Avatar 
                  variant="image" 
                  src="" 
                  fallback="initials"
                  fallbackInitials="NU"
                  size="md"
                />
                <Text size="xs" c="dimmed">No URL → Initials</Text>
              </Stack>
            </Group>
          </Stack>

          {/* Real World Examples */}
          <Stack gap="sm">
            <Title order={5} size="xs">Real World Usage</Title>
            <Stack gap="md">
              {/* User List Example */}
              <Group gap="sm" p="sm" style={{ border: '1px solid var(--mantine-color-gray-3)', borderRadius: '8px' }}>
                <Avatar variant="image" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt="John Doe" size="md" />
                <Stack gap="0">
                  <Text size="sm" fw={500}>John Doe</Text>
                  <Text size="xs" c="dimmed">john.doe@example.com</Text>
                </Stack>
              </Group>
              
              {/* Chat Message Example */}
              <Group gap="sm" p="sm" style={{ border: '1px solid var(--mantine-color-gray-3)', borderRadius: '8px' }}>
                <Avatar variant="initials" initials="AS" size="sm" />
                <Stack gap="0">
                  <Text size="sm" fw={500}>Alice Smith</Text>
                  <Text size="sm">Hey! How's the project coming along?</Text>
                </Stack>
              </Group>
              
              {/* System User Example */}
              <Group gap="sm" p="sm" style={{ border: '1px solid var(--mantine-color-gray-3)', borderRadius: '8px' }}>
                <Avatar variant="icon" icon={<RiServerLine />} size="sm" />
                <Stack gap="0">
                  <Text size="sm" fw={500}>System Notification</Text>
                  <Text size="sm" c="dimmed">Your deployment was successful</Text>
                </Stack>
              </Group>
            </Stack>
          </Stack>
        </Stack>

        {/* Card Demo */}
        <Stack gap="sm">
          <Title order={4} size="sm">Card Examples</Title>
          
          {/* Basic Cards */}
          <Stack gap="sm">
            <Title order={5} size="xs">Basic Cards</Title>
            <Group gap="md" align="flex-start">
              <Card>
                <Title order={6}>Simple Card</Title>
                <Text size="sm" c="dimmed">
                  This is a basic card with default styling.
                </Text>
              </Card>
              
              <Card withShadow>
                <Title order={6}>Card with Shadow</Title>
                <Text size="sm" c="dimmed">
                  This card has a medium shadow for elevation.
                </Text>
              </Card>
            </Group>
          </Stack>

          {/* Interactive Cards */}
          <Stack gap="sm">
            <Title order={5} size="xs">Interactive Cards</Title>
            <Group gap="md" align="flex-start">
              <Card 
                withShadow 
                onClick={() => console.log('Card clicked!')}
                style={{ cursor: 'pointer' }}
              >
                <Title order={6}>Clickable Card</Title>
                <Text size="sm" c="dimmed">
                  Click me! I have hover effects and handle click events.
                </Text>
                <DSButton size="xs" mt="sm">Learn More</DSButton>
              </Card>
            </Group>
          </Stack>
          {/* Image Cards */}
          <Stack gap="sm">
            <Title order={5} size="xs">Cards with Images</Title>
            <Group gap="md" align="flex-start">
              {/* Card with full-width image on top */}
              <Card withShadow style={{ width: 300 }} padding="none">
                {/* Image Section - uses padding="none" on card to allow full-width image */}
                <div style={{ 
                  width: '100%', 
                  height: 180, 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px'
                }} />
                
                {/* Content Section - manually add padding here */}
                <div style={{ padding: '16px' }}>
                  <Title order={6} mb="xs">Mountain Adventure</Title>
                  <Text size="sm" c="dimmed" mb="sm">
                    Experience breathtaking views and challenging trails in the heart of nature.
                  </Text>
                  <Group justify="space-between" align="center">
                    <Badge color="success" variant="outline">Featured</Badge>
                    <Text size="sm" fw={600}>$299</Text>
                  </Group>
                  <DSButton variant="primary" size="sm" mt="md" fullWidth>
                    Book Now
                  </DSButton>
                </div>
              </Card>

              {/* Card with rounded image and normal padding */}
              <Card withShadow style={{ width: 300 }}>
                <div style={{ 
                  width: '100%', 
                  height: 160, 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '4px',
                  marginBottom: '12px'
                }} />
                
                <Title order={6} mb="xs">City Explorer</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Discover hidden gems and local culture in vibrant urban landscapes.
                </Text>
                <Group justify="space-between" align="center">
                  <Badge color="info" variant="outline">Popular</Badge>
                  <Text size="sm" fw={600}>$149</Text>
                </Group>
                <DSButton variant="outline" size="sm" mt="md" fullWidth>
                  Learn More
                </DSButton>
              </Card>
            </Group>
          </Stack>

          {/* Complex Content Examples */}
          <Stack gap="sm">
            <Title order={5} size="xs">Complex Content</Title>
            <Group gap="md" align="flex-start">
              {/* User Profile Card */}
              <Card withShadow style={{ width: 250 }}>
                <Group gap="sm" mb="md">
                  <Avatar 
                    variant="image" 
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" 
                    size="md" 
                  />
                  <Stack gap="0">
                    <Text fw={500}>John Doe</Text>
                    <Text size="sm" c="dimmed">Senior Developer</Text>
                  </Stack>
                </Group>
                <Text size="sm" mb="md">
                  Passionate about creating beautiful user interfaces and excellent user experiences.
                </Text>
                <Group gap="xs">
                  <DSButton size="xs" variant="primary">Follow</DSButton>
                  <DSButton size="xs" variant="outline">Message</DSButton>
                </Group>
              </Card>

              {/* Stats Card */}
              <Card withShadow style={{ width: 250 }}>
                <Title order={6} mb="md">Project Stats</Title>
                <Stack gap="sm">
                  <Group justify="space-between">
                    <Text size="sm">Tasks Completed</Text>
                                         <Badge variant="outline" color="success">24/30</Badge>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm">Team Members</Text>
                    <Text size="sm" fw={500}>8</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm">Progress</Text>
                    <Text size="sm" fw={500}>80%</Text>
                  </Group>
                  <Progress value={80} size="sm" mt="xs" />
                </Stack>
              </Card>

              {/* Feature Card */}
              <Card 
                variant="outline" 
                style={{ width: 250, borderColor: 'var(--mantine-color-green-4)' }}
              >
                <Group gap="sm" mb="md">
                  <div style={{ 
                    padding: '8px', 
                    borderRadius: '6px', 
                    backgroundColor: 'var(--mantine-color-green-0)' 
                  }}>
                    <RiAddLine size={20} style={{ color: 'var(--mantine-color-green-6)' }} />
                  </div>
                  <Title order={6}>New Feature</Title>
                </Group>
                <Text size="sm" c="dimmed" mb="md">
                  Enhanced dashboard with real-time analytics and improved performance.
                </Text>
                                 <Badge color="success" variant="outline">Just Released</Badge>
              </Card>
            </Group>
          </Stack>

          {/* Usage Examples */}
          <Stack gap="sm">
            <Title order={5} size="xs">Real World Usage</Title>
            <Stack gap="md">
              {/* Dashboard Cards Grid */}
              <Group gap="md" align="flex-start" style={{ flexWrap: 'wrap' }}>
                <Card withShadow style={{ width: 200 }}>
                  <Group justify="space-between" align="flex-start" mb="sm">
                    <Stack gap="0">
                      <Text size="xs" c="dimmed" tt="uppercase" fw={600}>Total Users</Text>
                      <Text size="xl" fw={700}>12,543</Text>
                    </Stack>
                                         <Indicator type="success" size={8}><div /></Indicator>
                  </Group>
                  <Text size="xs" c="green">+12% from last month</Text>
                </Card>

                                 <Card withShadow style={{ width: 200 }}>
                   <Group justify="space-between" align="flex-start" mb="sm">
                     <Stack gap="0">
                       <Text size="xs" c="dimmed" tt="uppercase" fw={600}>Revenue</Text>
                       <Text size="xl" fw={700}>$24,680</Text>
                     </Stack>
                     <Indicator type="info" size={8}><div /></Indicator>
                   </Group>
                   <Text size="xs" c="blue">+8% from last month</Text>
                 </Card>

                                  <Card withShadow style={{ width: 200 }}>
                   <Group justify="space-between" align="flex-start" mb="sm">
                     <Stack gap="0">
                       <Text size="xs" c="dimmed" tt="uppercase" fw={600}>Orders</Text>
                       <Text size="xl" fw={700}>1,423</Text>
                     </Stack>
                     <Indicator type="pending" size={8}><div /></Indicator>
                   </Group>
                   <Text size="xs" c="red">-3% from last month</Text>
                 </Card>
              </Group>

              {/* List Card */}
              <Card withShadow style={{ maxWidth: 400 }}>
                <Title order={6} mb="md">Recent Activity</Title>
                <Stack gap="sm">
                  <Group gap="sm">
                    <Avatar variant="initials" initials="JD" size="sm" />
                    <Stack gap="0" style={{ flex: 1 }}>
                      <Text size="sm" fw={500}>John created a new project</Text>
                      <Text size="xs" c="dimmed">2 minutes ago</Text>
                    </Stack>
                  </Group>
                  <Group gap="sm">
                    <Avatar variant="initials" initials="AS" size="sm" />
                    <Stack gap="0" style={{ flex: 1 }}>
                      <Text size="sm" fw={500}>Alice updated the design system</Text>
                      <Text size="xs" c="dimmed">1 hour ago</Text>
                    </Stack>
                  </Group>
                  <Group gap="sm">
                    <Avatar variant="icon" icon={<RiServerLine />} size="sm" />
                    <Stack gap="0" style={{ flex: 1 }}>
                      <Text size="sm" fw={500}>Deployment completed successfully</Text>
                      <Text size="xs" c="dimmed">3 hours ago</Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      
      {/* Demonstration of DescriptionBlock component */}
      <PageContentHeader
        subhead="Getting Started"
        title="Application Overview"
        badge="NEW"
        icon={<RiEyeLine />}
        contentSection="descriptionBlock"
        descriptionBlockTitle="This is an optional title"
        descriptionBlockText="This is some descriptive text. Try not to make this too long and don't be too specific to prevent stale documentation. It's <a href='/docs' style='color: var(--mantine-color-blue-6); text-decoration: none;'>great to link into doc</a> pages!"
        descriptionBlockAllowHtml={true}
        actions={[
          { label: "View Documentation", onClick: () => console.log('View docs'), variant: "primary" },
          { label: "Quick Start", onClick: () => console.log('Quick start'), variant: "outline", color: "green" },
        ]}
      />
      
      {/* Demonstration of NameValue component with nameValuePairs */}
      <PageContentHeader
        subhead="System Information"
        title="Server Status"
        badge="HEALTHY"
        icon={<RiServerLine />}
        contentSection="nameValuePairs"
        nameValuePairs={[
          { 
            name: "Environment", 
            value: "Production",
            showCopy: true,
            onCopy: (value) => {
              navigator.clipboard.writeText(value);
              console.log('Copied Environment:', value);
            }
          },
          { 
            name: "Version", 
            value: "v2.1.4",
            showCopy: true,
            onCopy: (value) => {
              navigator.clipboard.writeText(value);
              console.log('Copied Version:', value);
            }
          },
          { name: "Uptime", value: "15 days, 4 hours" },
          { name: "Load Average", value: "0.68" },
          { name: "Memory Usage", value: "76%" },
          { 
            name: "Disk Space", 
            value: "82GB free",
            showCopy: true,
            onCopy: (value) => {
              navigator.clipboard.writeText(value);
              console.log('Copied Disk Space:', value);
            }
          },
        ]}
        nameValueColumns={3}
        actions={[
          { label: "Restart", onClick: () => console.log('Restart server'), variant: "outline", color: "red" },
          { label: "View Logs", onClick: () => console.log('View logs'), variant: "default", color: "gray" },
        ]}
      />      
      <Stack gap="sm">
        <Title order={2}>Users</Title>
        <Table<Person>
          data={currentPageData}
          columns={columns}
          totalCount={filteredData.length}
          onRowSelectionChange={setSelectedRows}
          onPaginationChange={handlePaginationChange}
          filtersState={filters}
          onFiltersChange={handleFiltersChange}
          defaultPageSize={5}
        />
      </Stack>
    </MainLayout>
  );
}

// Table columns configuration with proper typing
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    id: 'actions',
    header: '',
    Header: ({ table }) => <ColumnVisibilityMenu table={table} />,
    Cell: () => (
      <ActionIcon
        variant="subtle"
        aria-label="Row actions"
        style={ACTION_ICON_STYLES}
      >
        <RiMore2Fill size={18} style={ICON_STYLES} />
      </ActionIcon>
    ),
    size: 60,
    minSize: 60,
    maxSize: 60,
    grow: false,
    enableSorting: false,
    enableColumnFilter: false,
    enableHiding: false, // Don't allow hiding the actions column itself
    columnDefType: 'display',
    enablePinning: true,
    mantineTableHeadCellProps: {
      align: 'right',
      className: 'actions-header-cell',
    },
    mantineTableBodyCellProps: {
      align: 'right',
    },
  },
];
