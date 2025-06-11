'use client';

import '@mantine/core/styles.layer.css';
import { ActionIcon, Title, rem, Menu, Switch as MantineSwitch, Group, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderBar } from '@/components/HeaderBar';
import { SidebarNav, NavItem } from '@/components/SidebarNav';
import { MainLayout } from '@/components/MainLayout';
import { Table } from '@/components/Table';
import { PageContentHeader } from '@/components/PageContentHeader';
import { NameValue } from '@/components/NameValue';
import { Alert, Button as DSButton, ActionButton, CloseButton, TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Badge, Chip, Pill, Indicator, Progress, Drawer, Menu as DSMenu, Modal, ConfirmationModal, Popover, ConfirmationPopover, Kbd, Checkbox, Radio, RadioGroup, SearchableSelect, AutocompleteClearable, Multiselect, Breadcrumb, BackBreadcrumb, NavLink, Stepper, Tabs } from '@/components/DesignSystem';
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
      <Stack gap="xl" p="md" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <Title order={3} size="h4">Design System Components</Title>
        
        {/* TextInput Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">TextInput - All Sizes</Title>
          <Stack gap="md">
            <TextInput size="xs" label="Extra Small" placeholder="xs size input" />
            <TextInput size="sm" label="Small" placeholder="sm size input" />
            <TextInput size="md" label="Medium" placeholder="md size input" />
            <TextInput size="lg" label="Large" placeholder="lg size input" />
            <TextInput size="xl" label="Extra Large" placeholder="xl size input" />
          </Stack>
          
          <Title order={5} size="h6">TextInput Label States</Title>
          <Stack gap="sm">
            <TextInput label="Neither Required nor Optional" placeholder="Enter text" />
            <TextInput label="Required Field" placeholder="Enter text" required />
            <TextInput label="Optional Field" placeholder="Enter text" showOptional />
          </Stack>
          
          <Title order={5} size="h6">TextInput States</Title>
          <Group gap="md">
            <TextInput label="Default" placeholder="Enter text" />
            <TextInput label="With Error" placeholder="Enter text" error="This field is required" />
            <TextInput label="Disabled" placeholder="Enter text" disabled />
          </Group>
        </Stack>

        {/* TextArea Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">TextArea - All Sizes</Title>
          <Stack gap="md">
            <TextArea size="xs" label="Extra Small" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={3} />
            <TextArea size="sm" label="Small" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={4} />
            <TextArea size="md" label="Medium" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={5} />
            <TextArea size="lg" label="Large" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={5} />
            <TextArea size="xl" label="Extra Large" placeholder="This is some text in a textarea. It is sized to show five lines of text." rows={5} />
          </Stack>
          
          <Title order={5} size="h6">TextArea Label States</Title>
          <Stack gap="sm">
            <TextArea label="Comments" placeholder="Enter your comments..." rows={4} />
            <TextArea label="Description" placeholder="Enter description..." required rows={4} />
            <TextArea label="Additional Notes" placeholder="Any additional notes..." showOptional rows={4} />
          </Stack>
          
          <Title order={5} size="h6">TextArea Features</Title>
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
          <Title order={4} size="h5">NumberInput Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="h6">NumberInput Sizes</Title>
            </Group>
            <Stack gap="md">
              <NumberInput size="xs" label="Extra Small" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="sm" label="Small" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="md" label="Medium" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="lg" label="Large" placeholder="Enter a number" style={{ width: 200 }} />
              <NumberInput size="xl" label="Extra Large" placeholder="Enter a number" style={{ width: 200 }} />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="h6">Label States</Title>
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
              <Title order={5} size="h6">With Constraints & Formatting</Title>
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
              <Title order={5} size="h6">States</Title>
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
          <Title order={4} size="h5">ColorInput Examples</Title>
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
              <Title order={5} size="h6">ColorInput Sizes</Title>
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
          <Title order={4} size="h5">Switch Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="h6">Switch Sizes</Title>
            </Group>
            <Stack gap="md">
              <Switch size="xs" label="Extra Small Switch" />
              <Switch size="sm" label="Small Switch" />
              <Switch size="md" label="Medium Switch" />
              <Switch size="lg" label="Large Switch" />
              <Switch size="xl" label="Extra Large Switch" />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="h6">Label States</Title>
            </Group>
            <Stack gap="md">
              <Switch label="Default Switch" />
              <Switch label="Optional Setting" showOptional />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="h6">Switch States</Title>
            </Group>
            <Stack gap="md">
              <Switch label="Default (Off)" />
              <Switch label="Checked (On)" defaultChecked />
              <Switch label="Disabled Off" disabled />
              <Switch label="Disabled On" disabled checked />
            </Stack>
            
            <Group gap="md">
              <Title order={5} size="h6">With On/Off Labels</Title>
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
              <Title order={5} size="h6">Common Use Cases</Title>
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
          <Title order={4} size="h5">SegmentedControl Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="h6">Basic SegmentedControl</Title>
            </Group>
            <SegmentedControl 
              data={['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5']}
              defaultValue="Segment 2"
            />
            
            <Group gap="md">
              <Title order={5} size="h6">Different Sizes</Title>
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
              <Title order={5} size="h6">Custom Data Structure</Title>
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
              <Title order={5} size="h6">Different Use Cases</Title>
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
              <Title order={5} size="h6">States</Title>
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
          <Title order={4} size="h5">Slider Examples</Title>
          <Stack gap="lg" style={{ width: '100%', maxWidth: 400 }}>
            <Group gap="md">
              <Title order={5} size="h6">Basic Slider</Title>
            </Group>
            <Slider 
              label="Volume"
              defaultValue={50}
              min={0}
              max={100}
            />
            
            <Group gap="md">
              <Title order={5} size="h6">With Optional Label</Title>
            </Group>
            <Slider 
              label="Opacity"
              showOptional
              defaultValue={75}
              min={0}
              max={100}
            />
            
            <Group gap="md">
              <Title order={5} size="h6">With Marks</Title>
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
              <Title order={5} size="h6">With Custom Values</Title>
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
              <Title order={5} size="h6">States</Title>
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
          <Title order={4} size="h5">Checkbox - All Sizes</Title>
          <Stack gap="md">
            <Checkbox size="xs" label="Extra Small checkbox" />
            <Checkbox size="sm" label="Small checkbox" />
            <Checkbox size="md" label="Medium checkbox" />
            <Checkbox size="lg" label="Large checkbox" />
            <Checkbox size="xl" label="Extra Large checkbox" />
          </Stack>
          
          <Title order={5} size="h6">Checkbox States</Title>
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
          <Title order={4} size="h5">Radio - All Sizes</Title>
          <Stack gap="md">
            <Radio size="xs" label="Extra Small radio" value="xs" />
            <Radio size="sm" label="Small radio" value="sm" />
            <Radio size="md" label="Medium radio" value="md" />
            <Radio size="lg" label="Large radio" value="lg" />
            <Radio size="xl" label="Extra Large radio" value="xl" />
          </Stack>
          
          <Title order={5} size="h6">Radio States</Title>
          <Stack gap="sm">
            <Radio label="Default radio button" value="default" />
            <Radio label="Checked radio button" value="checked" defaultChecked />
            <Radio label="Disabled radio button" value="disabled" disabled />
            <Radio label="Required radio button" value="required" required />
          </Stack>
          
          <Title order={5} size="h6">Radio Groups</Title>
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
          <Title order={4} size="h5">Badge - All Variants</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="h6">Filled Badges</Title>
            </Group>
            <Group gap="md">
              <Badge variant="filled" color="default">Default</Badge>
              <Badge variant="filled" color="info">Info</Badge>
              <Badge variant="filled" color="success">Success</Badge>
              <Badge variant="filled" color="danger">Danger</Badge>
              <Badge variant="filled" color="pending">Pending</Badge>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="h6">Outline Badges</Title>
            </Group>
            <Group gap="md">
              <Badge variant="outline" color="default">Default</Badge>
              <Badge variant="outline" color="info">Info</Badge>
              <Badge variant="outline" color="success">Success</Badge>
              <Badge variant="outline" color="danger">Danger</Badge>
              <Badge variant="outline" color="pending">Pending</Badge>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="h6">Badge Sizes</Title>
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
          <Title order={4} size="h5">Chip Variants</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="h6">Unselected Chips</Title>
            </Group>
            <Group gap="md">
              <Chip variant="default">Default</Chip>
              <Chip variant="info">Info</Chip>
              <Chip variant="success">Success</Chip>
              <Chip variant="danger">Danger</Chip>
              <Chip variant="pending">Pending</Chip>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="h6">Selected Chips</Title>
            </Group>
            <Group gap="md">
              <Chip variant="default" checked>Default</Chip>
              <Chip variant="info" checked>Info</Chip>
              <Chip variant="success" checked>Success</Chip>
              <Chip variant="danger" checked>Danger</Chip>
              <Chip variant="pending" checked>Pending</Chip>
            </Group>
            
            <Group gap="md">
              <Title order={5} size="h6">Interactive Chips</Title>
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
          <Title order={4} size="h5">All Button Variants</Title>
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
          
          <Title order={4} size="h5">With Icons</Title>
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
          <Title order={4} size="h5">ActionButton Examples</Title>
          <Group gap="md">
            <ActionButton><RiEyeLine size={16} /></ActionButton>
            <ActionButton><RiAddLine size={16} /></ActionButton>
            <ActionButton><RiMore2Fill size={16} /></ActionButton>
            <ActionButton disabled><RiCircleLine size={16} /></ActionButton>
          </Group>
        </Stack>

        {/* CloseButton Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">CloseButton Examples</Title>
          <Group gap="md">
            <CloseButton />
            <CloseButton size="sm" />
            <CloseButton size="lg" />
            <CloseButton disabled />
          </Group>
        </Stack>

        {/* Pill Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">Pill Examples</Title>
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
          <Title order={4} size="h5">Indicator Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="h6">Semantic Colors</Title>
            </Group>
            <Group gap="md">
              <Indicator type="default"><DSButton size="xs">Default</DSButton></Indicator>
              <Indicator type="info"><DSButton size="xs">Info</DSButton></Indicator>
              <Indicator type="success"><DSButton size="xs">Success</DSButton></Indicator>
              <Indicator type="danger"><DSButton size="xs">Danger</DSButton></Indicator>
              <Indicator type="pending"><DSButton size="xs">Pending</DSButton></Indicator>
            </Group>

            <Group gap="md">
              <Title order={5} size="h6">With Numbers</Title>
            </Group>
            <Group gap="md">
              <Indicator count={5} type="info"><DSButton size="xs">Messages</DSButton></Indicator>
              <Indicator count={23} type="danger"><DSButton size="xs">Errors</DSButton></Indicator>
              <Indicator count={100} type="success"><DSButton size="xs">Tasks</DSButton></Indicator>
            </Group>

            <Group gap="md">
              <Title order={5} size="h6">With Outline</Title>
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
          <Title order={4} size="h5">Progress Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="h6">Progress Sizes</Title>
            </Group>
            <Stack gap="md" style={{ width: '100%', maxWidth: 400 }}>
              <div><span>Extra Small (30%)</span><Progress size="xs" value={30} /></div>
              <div><span>Small (50%)</span><Progress size="sm" value={50} /></div>
              <div><span>Medium (65%)</span><Progress size="md" value={65} /></div>
              <div><span>Large (80%)</span><Progress size="lg" value={80} /></div>
              <div><span>Extra Large (95%)</span><Progress size="xl" value={95} /></div>
            </Stack>

            <Group gap="md">
              <Title order={5} size="h6">Different Progress Levels</Title>
            </Group>
            <Stack gap="md" style={{ width: '100%', maxWidth: 400 }}>
              <div><span>25% Complete</span><Progress value={25} /></div>
              <div><span>50% Complete</span><Progress value={50} /></div>
              <div><span>75% Complete</span><Progress value={75} /></div>
              <div><span>Completed!</span><Progress value={100} /></div>
            </Stack>

            <Group gap="md">
              <Title order={5} size="h6">Animated Progress</Title>
            </Group>
            <Stack gap="md" style={{ width: '100%', maxWidth: 400 }}>
              <div><span>Uploading... 60%</span><Progress value={60} animated /></div>
              <div><span>Processing... 85%</span><Progress value={85} animated /></div>
            </Stack>
          </Stack>
        </Stack>

        {/* Alert Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">Alert Examples</Title>
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
              <Title order={5} size="h6">Dismissible Alerts</Title>
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
          <Title order={4} size="h5">Kbd (Keyboard Key) Examples</Title>
          <Stack gap="md">
            <Group gap="md">
              <Title order={5} size="h6">Single Keys</Title>
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
              <Title order={5} size="h6">Key Combinations</Title>
            </Group>
            <Stack gap="sm">
              <div>Save: <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></div>
              <div>Copy: <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd></div>
              <div>Paste: <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd></div>
              <div>Search: <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd></div>
            </Stack>

            <Group gap="md">
              <Title order={5} size="h6">Different Sizes</Title>
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

        {/* SearchableSelect Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">SearchableSelect Examples</Title>
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
          <Title order={4} size="h5">AutocompleteClearable Examples</Title>
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
          <Title order={4} size="h5">Multiselect Examples</Title>
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
          <Title order={4} size="h5">Breadcrumb Examples</Title>
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
          <Title order={4} size="h5">BackBreadcrumb Examples</Title>
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
          <Title order={4} size="h5">NavLink Examples</Title>
          <Stack gap="md" style={{ maxWidth: 300 }}>
            <NavLink label="Dashboard" icon="ri-dashboard-line" active />
            <NavLink label="Users" icon="ri-user-line" />
            <NavLink 
              label="Settings" 
              icon="ri-settings-line" 
              rightSection={<Badge size="xs" color="info">3</Badge>}
            />
            <NavLink 
              label="Messages" 
              icon="ri-message-line"
              rightSection={<Indicator count={5} type="danger" />}
            />
          </Stack>
        </Stack>

        {/* Stepper Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">Stepper Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="h6">Horizontal Stepper</Title>
            </Group>
            <Stepper
              orientation="horizontal"
              steps={[
                { label: 'Account Setup', description: 'Create your account' },
                { label: 'Profile Information', description: 'Fill in your details' },
                { label: 'Preferences', description: 'Customize your experience' },
                { label: 'Review', description: 'Review and confirm' },
                { label: 'Complete', description: 'All done!' }
              ]}
              active={2}
            />

            <Group gap="md">
              <Title order={5} size="h6">Vertical Stepper</Title>
            </Group>
            <Stepper
              orientation="vertical"
              steps={[
                { label: 'Planning', description: 'Define project requirements' },
                { label: 'Development', description: 'Build the application' },
                { label: 'Testing', description: 'Quality assurance testing' },
                { label: 'Deployment', description: 'Deploy to production' }
              ]}
              active={1}
              style={{ maxWidth: 400 }}
            />
          </Stack>
        </Stack>

        {/* Tabs Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">Tabs Examples</Title>
          <Stack gap="lg">
            <Group gap="md">
              <Title order={5} size="h6">Horizontal Tabs</Title>
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
                  rightSection: <Indicator count={3} type="danger"><span></span></Indicator>,
                  children: <div>Settings content goes here...</div>
                }
              ]}
              value="overview"
            />

            <Group gap="md">
              <Title order={5} size="h6">Vertical Tabs</Title>
            </Group>
            <div style={{ maxWidth: 500 }}>
              <Tabs
                orientation="vertical"
                tabs={[
                  { 
                    id: 'profile', 
                    label: 'Profile', 
                    leftSection: <RiUserLine size={16} />,
                    children: <div>Profile settings content...</div>
                  },
                  { 
                    id: 'security', 
                    label: 'Security',
                    children: <div>Security settings content...</div>
                  },
                  { 
                    id: 'notifications', 
                    label: 'Notifications', 
                    rightSection: <Badge size="xs" color="success">On</Badge>,
                    children: <div>Notification preferences content...</div>
                  }
                ]}
                value="profile"
              />
            </div>
          </Stack>
        </Stack>

        {/* Modal Demo */}
        <Stack gap="sm">
          <Title order={4} size="h5">Modal Examples</Title>
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
          <Title order={4} size="h5">Drawer Examples</Title>
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
            <NavLink label="Dashboard" icon="ri-dashboard-line" active />
            <NavLink label="Users" icon="ri-user-line" />
            <NavLink label="Settings" icon="ri-settings-line" />
            <NavLink label="Reports" icon="ri-file-text-line" />
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
          <Title order={4} size="h5">Menu Examples</Title>
          <Group gap="md">
            <DSMenu
              trigger={<DSButton>Basic Menu</DSButton>}
              sections={[
                {
                  items: [
                    { key: 'profile', label: 'Profile', icon: <RiUserLine size={16} /> },
                    { key: 'settings', label: 'Settings', icon: <RiServerLine size={16} /> },
                    { key: 'logout', label: 'Logout' }
                  ]
                }
              ]}
            />
            
            <DSMenu
              trigger={<ActionButton icon={<RiMore2Fill size={16} />} />}
              position="bottom-end"
              sections={[
                {
                  title: 'Actions',
                  items: [
                    { 
                      key: 'edit', 
                      label: 'Edit', 
                      icon: <RiEyeLine size={16} />,
                      rightSection: <Kbd size="xs">E</Kbd>
                    },
                    { 
                      key: 'duplicate', 
                      label: 'Duplicate',
                      rightSection: <Badge size="xs" color="info">Pro</Badge>
                    }
                  ]
                },
                {
                  items: [
                    { 
                      key: 'delete', 
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
          <Title order={4} size="h5">Popover Examples</Title>
          
          {/* Basic Popovers */}
          <Stack gap="sm">
            <Title order={5} size="h6">Basic Popovers</Title>
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
            <Title order={5} size="h6">Popovers with Button Actions</Title>
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
            <Title order={5} size="h6">Pre-configured Confirmation Popover</Title>
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
