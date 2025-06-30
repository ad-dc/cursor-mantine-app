import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Pill } from './Pill';

// ========================== META ==========================

const meta: Meta<typeof Table> = {
  title: 'Design System/Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A simple table component for displaying tabular data with consistent styling.

**Features:**
- Built on Mantine's Table component
- Compound components for table structure
- Support for data prop for simple tables
- Consistent spacing and styling
- Striped rows and hover effects
- Borders and scroll containers

**When to use:**
- Simple data display
- Static tabular content
- Basic table layouts

**When not to use:**
- Complex data tables with sorting/filtering (use ComplexComponents/DataTable instead)
- Large datasets requiring pagination
- Interactive data manipulation
        `,
      },
    },
  },
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Whether to show striped rows',
    },
    highlightOnHover: {
      control: 'boolean',
      description: 'Whether to highlight rows on hover',
    },
    withTableBorder: {
      control: 'boolean',
      description: 'Whether to show table border',
    },
    withColumnBorders: {
      control: 'boolean',
      description: 'Whether to show column borders',
    },
    horizontalSpacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Horizontal cell spacing',
    },
    verticalSpacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Vertical cell spacing',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// ========================== SAMPLE DATA ==========================

const sampleData = [
  { id: '#1234', amount: '$125.00', status: 'Completed', date: '2024-01-15' },
  { id: '#1235', amount: '$89.50', status: 'Pending', date: '2024-01-15' },
  { id: '#1236', amount: '$234.75', status: 'Completed', date: '2024-01-14' },
  { id: '#1237', amount: '$156.25', status: 'Failed', date: '2024-01-14' },
  { id: '#1238', amount: '$67.80', status: 'Pending', date: '2024-01-13' },
];

// ========================== STORIES ==========================

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Transaction ID</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {sampleData.map((row, index) => (
            <Table.Tr key={index}>
              <Table.Td>{row.id}</Table.Td>
              <Table.Td>{row.amount}</Table.Td>
              <Table.Td>
                <Pill
                  color={
                    row.status === 'Completed' ? 'green' :
                    row.status === 'Pending' ? 'yellow' : 'red'
                  }
                  size="sm"
                >
                  {row.status}
                </Pill>
              </Table.Td>
              <Table.Td style={{ color: 'var(--mantine-color-gray-6)' }}>
                {row.date}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </>
    ),
  },
};

export const WithDataProp: Story = {
  args: {
    data: {
      head: ['Product', 'Price', 'Stock', 'Category'],
      body: [
        ['MacBook Pro', '$2,399', '12', 'Laptops'],
        ['iPhone 15', '$999', '45', 'Phones'],
        ['iPad Air', '$599', '23', 'Tablets'],
        ['Apple Watch', '$399', '67', 'Wearables'],
        ['AirPods Pro', '$249', '89', 'Audio'],
      ],
    },
  },
};

export const Styled: Story = {
  args: {
    striped: true,
    highlightOnHover: true,
    withTableBorder: true,
    withColumnBorders: true,
    children: (
      <>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>John Doe</Table.Td>
            <Table.Td>john@example.com</Table.Td>
            <Table.Td>Admin</Table.Td>
            <Table.Td>
              <Pill color="green" size="sm">Active</Pill>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Jane Smith</Table.Td>
            <Table.Td>jane@example.com</Table.Td>
            <Table.Td>User</Table.Td>
            <Table.Td>
              <Pill color="yellow" size="sm">Pending</Pill>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Bob Johnson</Table.Td>
            <Table.Td>bob@example.com</Table.Td>
            <Table.Td>User</Table.Td>
            <Table.Td>
              <Pill color="red" size="sm">Inactive</Pill>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </>
    ),
  },
};

export const WithCaption: Story = {
  args: {
    children: (
      <>
        <Table.Caption>Recent sales transactions</Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Product</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Revenue</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Enterprise License</Table.Td>
            <Table.Td>247</Table.Td>
            <Table.Td>$284,392</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Pro Subscription</Table.Td>
            <Table.Td>1,456</Table.Td>
            <Table.Td>$145,600</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Basic Plan</Table.Td>
            <Table.Td>3,247</Table.Td>
            <Table.Td>$97,410</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </>
    ),
  },
};

export const Scrollable: Story = {
  args: {
    children: (
      <Table.ScrollContainer minWidth={800}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Very Long Column Header Name</Table.Th>
              <Table.Th>Another Long Column Header</Table.Th>
              <Table.Th>Third Column Header</Table.Th>
              <Table.Th>Fourth Column Header</Table.Th>
              <Table.Th>Fifth Column Header</Table.Th>
              <Table.Th>Sixth Column Header</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <Table.Tr key={index}>
                <Table.Td>Very long content that might overflow</Table.Td>
                <Table.Td>More long content here</Table.Td>
                <Table.Td>Additional content</Table.Td>
                <Table.Td>Even more content</Table.Td>
                <Table.Td>Content continues</Table.Td>
                <Table.Td>Final column content</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with horizontal scroll when content exceeds container width.',
      },
    },
  },
};

export const CompactSpacing: Story = {
  args: {
    horizontalSpacing: 'xs',
    verticalSpacing: 'xs',
    children: (
      <>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Metric</Table.Th>
            <Table.Th>Value</Table.Th>
            <Table.Th>Change</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Revenue</Table.Td>
            <Table.Td>$45,231</Table.Td>
            <Table.Td style={{ color: 'var(--mantine-color-green-6)' }}>+12.5%</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Users</Table.Td>
            <Table.Td>2,847</Table.Td>
            <Table.Td style={{ color: 'var(--mantine-color-green-6)' }}>+8.2%</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Conversion</Table.Td>
            <Table.Td>3.4%</Table.Td>
            <Table.Td style={{ color: 'var(--mantine-color-red-6)' }}>-0.3%</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with compact spacing for dense data display.',
      },
    },
  },
};

export const GenerousSpacing: Story = {
  args: {
    horizontalSpacing: 'xl',
    verticalSpacing: 'lg',
    children: (
      <>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Feature</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Available</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Advanced Analytics</Table.Td>
            <Table.Td>Detailed insights and reporting</Table.Td>
            <Table.Td>
              <Pill color="green" size="sm">Yes</Pill>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>API Access</Table.Td>
            <Table.Td>RESTful API for integrations</Table.Td>
            <Table.Td>
              <Pill color="green" size="sm">Yes</Pill>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>White Label</Table.Td>
            <Table.Td>Custom branding options</Table.Td>
            <Table.Td>
              <Pill color="gray" size="sm">Enterprise</Pill>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with generous spacing for a more relaxed layout.',
      },
    },
  },
}; 