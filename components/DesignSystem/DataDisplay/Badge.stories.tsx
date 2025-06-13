import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { Badge } from './Badge';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component with semantic colors and consistent styling for status indicators and labels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline'],
      description: 'Badge style variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Badge size',
    },
    color: {
      control: 'select',
      options: ['default', 'info', 'success', 'danger', 'pending'],
      description: 'Semantic color variant',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Colors: Story = {
  render: () => (
    <Group gap="xs" align="center">
      <Badge color="default">Default</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="pending">Pending</Badge>
    </Group>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Group gap="xs" align="center">
        <Text size="sm" fw={500} c="dimmed" mb="xs">Filled:</Text>
        <Badge variant="filled" color="default">Default</Badge>
        <Badge variant="filled" color="info">Info</Badge>
        <Badge variant="filled" color="success">Success</Badge>
        <Badge variant="filled" color="danger">Danger</Badge>
        <Badge variant="filled" color="pending">Pending</Badge>
      </Group>
      <Group gap="xs" align="center">
        <Text size="sm" fw={500} c="dimmed" mb="xs">Outline:</Text>
        <Badge variant="outline" color="default">Default</Badge>
        <Badge variant="outline" color="info">Info</Badge>
        <Badge variant="outline" color="success">Success</Badge>
        <Badge variant="outline" color="danger">Danger</Badge>
        <Badge variant="outline" color="pending">Pending</Badge>
      </Group>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Group gap="sm" align="center">
      <Badge size="xs" color="info">xs</Badge>
      <Badge size="sm" color="info">sm</Badge>
      <Badge size="md" color="info">md</Badge>
      <Badge size="lg" color="info">lg</Badge>
      <Badge size="xl" color="info">xl</Badge>
    </Group>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <Stack gap="md">
      <Group gap="xs" align="center">
        <Text size="sm" fw={500} c="dimmed" mb="xs" style={{ minWidth: '80px' }}>User Status:</Text>
        <Badge color="success">Active</Badge>
        <Badge color="pending">Pending</Badge>
        <Badge color="danger">Suspended</Badge>
        <Badge color="default">Inactive</Badge>
      </Group>
      <Group gap="xs" align="center">
        <Text size="sm" fw={500} c="dimmed" mb="xs" style={{ minWidth: '80px' }}>Order Status:</Text>
        <Badge color="info">Processing</Badge>
        <Badge color="pending">Shipped</Badge>
        <Badge color="success">Delivered</Badge>
        <Badge color="danger">Cancelled</Badge>
      </Group>
      <Group gap="xs" align="center">
        <Text size="sm" fw={500} c="dimmed" mb="xs" style={{ minWidth: '80px' }}>Priority:</Text>
        <Badge color="danger">High</Badge>
        <Badge color="pending">Medium</Badge>
        <Badge color="info">Low</Badge>
      </Group>
    </Stack>
  ),
};

export const InContext: Story = {
  render: () => (
    <Stack gap="md" maw={400}>
      {/* List item with badge */}
      <Group justify="space-between" align="center" p="sm" style={{ 
        border: '1px solid var(--mantine-color-gray-3)',
        borderRadius: '8px'
      }}>
        <div>
          <Text fw={500}>John Doe</Text>
          <Text size="sm" c="dimmed">john@example.com</Text>
        </div>
        <Badge color="success" size="sm">Active</Badge>
      </Group>

      {/* Card header with badge */}
      <div style={{ 
        padding: '16px',
        border: '1px solid var(--mantine-color-gray-3)',
        borderRadius: '8px'
      }}>
        <Group justify="space-between" align="center" mb="sm">
          <Title order={4}>Project Alpha</Title>
          <Badge color="pending" variant="outline">In Progress</Badge>
        </Group>
        <Text size="sm" c="dimmed">
          A comprehensive project management solution for enterprise clients.
        </Text>
      </div>

      {/* Notification with badge */}
      <Group gap="sm" p="sm" style={{ 
        backgroundColor: 'var(--mantine-color-blue-0)',
        border: '1px solid var(--mantine-color-blue-3)',
        borderRadius: '8px'
      }}>
        <Badge color="info" size="xs">New</Badge>
        <div>
          <Text fw={500} size="sm">System Update Available</Text>
          <Text size="xs" c="dimmed">
            Version 2.1.0 includes security improvements and bug fixes.
          </Text>
        </div>
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of Badge components used in real UI contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Badge',
    color: 'info',
    variant: 'filled',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Badge and see different combinations.',
      },
    },
  },
}; 