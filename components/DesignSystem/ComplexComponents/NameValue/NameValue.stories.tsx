import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group, SimpleGrid } from '@mantine/core';
import { NameValue } from './NameValue';
import { useState } from 'react';
import { Title } from '../../Typography/Title';
import { Text } from '../../Typography/Text';
import { Paper } from '../../Misc/Paper';
import { Card } from '../../DataDisplay/Card';
import { Button } from '../../Buttons/Button';

const meta: Meta<typeof NameValue> = {
  title: 'Design System/Complex Components/NameValue',
  component: NameValue,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NameValue component for displaying name-value pairs in vertical layout. Can be arranged in a grid format for multiple pairs using the columns prop. Perfect for metadata display, specifications, statistics, or any key-value information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Single name/label (when used individually)',
    },
    value: {
      control: 'text',
      description: 'Single value (when used individually)',
    },
    labelSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the label text',
    },
    valueSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the value text',
    },
    spacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spacing between pairs',
    },
    nameColor: {
      control: 'text',
      description: 'Color for name/label text',
    },
    valueColor: {
      control: 'text',
      description: 'Color for value text',
    },
    showCopy: {
      control: 'boolean',
      description: 'Whether to show copy icon for all values',
    },
    columns: {
      control: 'number',
      description: 'Number of columns for grid layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Status',
    value: 'Active',
  },
};

export const SinglePair: Story = {
  render: () => (
    <Stack gap="lg" w={300}>
      <NameValue name="User ID" value="usr_123456789" />
      <NameValue name="Email" value="john.doe@example.com" />
      <NameValue name="Last Login" value="2 hours ago" />
      <NameValue name="Account Type" value="Premium" valueColor="blue" />
      <NameValue name="Status" value="Active" valueColor="green" valueWeight="bold" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual name-value pairs with different styling options.',
      },
    },
  },
};

export const MultiplePairs: Story = {
  render: () => {
    const userInfo = [
      { name: "Full Name", value: "John Doe" },
      { name: "Email", value: "john.doe@example.com" },
      { name: "Phone", value: "+1 (555) 123-4567" },
      { name: "Department", value: "Engineering" },
      { name: "Role", value: "Senior Developer" },
      { name: "Employee ID", value: "EMP-2024-001" },
      { name: "Start Date", value: "January 15, 2022" },
      { name: "Manager", value: "Sarah Johnson" },
    ];

    return (
      <Stack gap="lg" w={400}>
        <Title order={3} size="md">Employee Information</Title>
        <NameValue pairs={userInfo} spacing="md" />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple name-value pairs displayed in a vertical stack.',
      },
    },
  },
};

export const GridLayout: Story = {
  render: () => {
    const serverMetrics = [
      { name: "CPU Usage", value: "45%", valueColor: "orange" },
      { name: "Memory", value: "2.1 GB", valueColor: "blue" },
      { name: "Disk Space", value: "78%", valueColor: "red" },
      { name: "Network I/O", value: "1.2 MB/s", valueColor: "green" },
      { name: "Uptime", value: "15 days" },
      { name: "Load Average", value: "0.68" },
      { name: "Active Users", value: "142", valueColor: "blue" },
      { name: "Processes", value: "89" },
    ];

    return (
      <Stack gap="lg" w={600}>
        <Title order={3} size="md">Server Metrics</Title>
        <NameValue pairs={serverMetrics} columns={4} spacing="sm" />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Name-value pairs arranged in a grid layout with multiple columns.',
      },
    },
  },
};

export const WithCopyFunctionality: Story = {
  render: () => {
    const [copyStatus, setCopyStatus] = useState<string>('');

    const handleCopy = (value: string, label?: string) => {
      navigator.clipboard.writeText(value);
      setCopyStatus(`Copied ${label || 'value'}: ${value}`);
      setTimeout(() => setCopyStatus(''), 3000);
    };

    const credentials = [
      { 
        name: "API Key", 
        value: "sk-1234567890abcdef", 
        showCopy: true, 
        onCopy: (v: string) => handleCopy(v, "API Key") 
      },
      { 
        name: "Secret Key", 
        value: "secret_abcdef123456", 
        showCopy: true, 
        onCopy: (v: string) => handleCopy(v, "Secret Key") 
      },
      { 
        name: "Database URL", 
        value: "postgresql://localhost:5432/mydb", 
        showCopy: true, 
        onCopy: (v: string) => handleCopy(v, "Database URL") 
      },
      { name: "Environment", value: "Production" },
    ];

    return (
      <Stack gap="lg" w={500}>
        <Title order={3} size="md">API Credentials</Title>
        <NameValue pairs={credentials} spacing="md" />
        {copyStatus && (
          <Text size="sm" c="green" fw={500}>
            {copyStatus}
          </Text>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Name-value pairs with selective copy functionality for sensitive data.',
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <Stack gap="xl" w={400}>
      <Stack gap="md">
        <Title order={4} size="sm">Extra Small Labels</Title>
        <NameValue 
          pairs={[
            { name: "Compact Info", value: "Small display" },
            { name: "Minimal Space", value: "Tight layout" }
          ]}
          labelSize="xs"
          valueSize="sm"
        />
      </Stack>

      <Stack gap="md">
        <Title order={4} size="sm">Medium Labels</Title>
        <NameValue 
          pairs={[
            { name: "Standard Info", value: "Normal display" },
            { name: "Regular Space", value: "Default layout" }
          ]}
          labelSize="sm"
          valueSize="md"
        />
      </Stack>

      <Stack gap="md">
        <Title order={4} size="sm">Large Labels</Title>
        <NameValue 
          pairs={[
            { name: "Important Info", value: "Prominent display" },
            { name: "Key Metrics", value: "Highlighted data" }
          ]}
          labelSize="md"
          valueSize="lg"
          valueWeight="bold"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Name-value pairs with different text sizes for various use cases.',
      },
    },
  },
};

export const ColorVariations: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Title order={3} size="md">Status Information</Title>
      <NameValue 
        pairs={[
          { name: "System Status", value: "Online", valueColor: "green", valueWeight: "bold" },
          { name: "Last Backup", value: "Failed", valueColor: "red", valueWeight: "bold" },
          { name: "Maintenance", value: "Scheduled", valueColor: "orange", valueWeight: "bold" },
          { name: "Security", value: "Secure", valueColor: "blue", valueWeight: "bold" },
          { name: "Performance", value: "Optimal", valueColor: "teal", valueWeight: "bold" },
        ]}
        spacing="md"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Name-value pairs with different colors to indicate status or importance.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <SimpleGrid cols={2} spacing="xl" w={800}>
             <Card>
         <Stack gap="md">
           <Title order={4} size="sm">User Profile</Title>
           <NameValue 
             pairs={[
               { name: "Username", value: "@johndoe" },
               { name: "Member Since", value: "March 2022" },
               { name: "Posts", value: "1,247", valueColor: "blue" },
               { name: "Followers", value: "892", valueColor: "green" },
               { name: "Following", value: "156" },
             ]}
             spacing="sm"
           />
         </Stack>
       </Card>

       <Card>
         <Stack gap="md">
           <Title order={4} size="sm">Order Details</Title>
           <NameValue 
             pairs={[
               { name: "Order ID", value: "#ORD-2024-001", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
               { name: "Date", value: "Jan 15, 2024" },
               { name: "Status", value: "Shipped", valueColor: "blue", valueWeight: "bold" },
               { name: "Total", value: "$129.99", valueColor: "green", valueWeight: "bold" },
               { name: "Items", value: "3 items" },
             ]}
             spacing="sm"
           />
         </Stack>
       </Card>

       <Card>
         <Stack gap="md">
           <Title order={4} size="sm">System Info</Title>
           <NameValue 
             pairs={[
               { name: "Version", value: "v2.1.0" },
               { name: "Build", value: "20240115.1", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
               { name: "Environment", value: "Production", valueColor: "red", valueWeight: "bold" },
               { name: "Region", value: "us-east-1" },
               { name: "Deployed", value: "2 hours ago" },
             ]}
             spacing="sm"
           />
         </Stack>
       </Card>

       <Card>
         <Stack gap="md">
           <Title order={4} size="sm">Performance</Title>
           <NameValue 
             pairs={[
               { name: "Response Time", value: "245ms", valueColor: "green" },
               { name: "Throughput", value: "1.2k req/s", valueColor: "blue" },
               { name: "Error Rate", value: "0.01%", valueColor: "green" },
               { name: "Availability", value: "99.9%", valueColor: "green", valueWeight: "bold" },
               { name: "Last Check", value: "30s ago" },
             ]}
             spacing="sm"
           />
         </Stack>
       </Card>
    </SimpleGrid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of NameValue usage in different application contexts.',
      },
    },
  },
};

export const CompactGrid: Story = {
  render: () => {
    const deviceSpecs = [
      { name: "Model", value: "iPhone 15 Pro" },
      { name: "Storage", value: "256 GB" },
      { name: "RAM", value: "8 GB" },
      { name: "Display", value: "6.1 inch" },
      { name: "Camera", value: "48 MP" },
      { name: "Battery", value: "3274 mAh" },
      { name: "OS", value: "iOS 17" },
      { name: "Chip", value: "A17 Pro" },
      { name: "5G", value: "Yes", valueColor: "green" },
      { name: "Weight", value: "187g" },
      { name: "Colors", value: "4 options" },
      { name: "Price", value: "$999", valueColor: "blue", valueWeight: "bold" as const },
    ];

    return (
      <Stack gap="lg" w={600}>
        <Title order={3} size="md">Device Specifications</Title>
        <NameValue 
          pairs={deviceSpecs} 
          columns={3} 
          spacing="xs"
          labelSize="xs"
          valueSize="sm"
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact grid layout perfect for displaying specifications or technical details.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    name: 'Interactive Example',
    value: 'Change me using controls',
    labelSize: 'sm',
    valueSize: 'md',
    nameColor: 'dimmed',
    valueColor: undefined,
    showCopy: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the NameValue component and see different combinations.',
      },
    },
  },
}; 