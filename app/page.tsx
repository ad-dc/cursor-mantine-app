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
import { Button as DSButton, TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Badge, Chip, Checkbox, Radio, RadioGroup } from '@/components/DesignSystem';
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
