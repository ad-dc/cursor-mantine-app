import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Group, Stack } from '@mantine/core';
import { RiAddLine, RiDownloadLine, RiDeleteBinLine, RiEyeLine } from '@remixicon/react';

const meta: Meta<typeof Button> = {
  title: 'Design System/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Enhanced Button component with design system variants, t-shirt sizing, and consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'disabled', 'link', 'secret', 'outline', 'danger'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Button color theme',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
      <Button variant="secret">Secret</Button>
      <Button variant="disabled">Disabled</Button>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack gap="md">
      <Button leftIcon={<RiAddLine size={16} />}>Add Item</Button>
      <Button rightIcon={<RiDownloadLine size={16} />}>Download</Button>
      <Button variant="danger" leftIcon={<RiDeleteBinLine size={16} />}>Delete</Button>
      <Button variant="outline" leftIcon={<RiEyeLine size={16} />} rightIcon={<RiDownloadLine size={16} />}>
        View & Download
      </Button>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Button>Normal</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button variant="primary" loading>
        Processing
      </Button>
    </Stack>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Stack gap="md" w="600px">
      <Button fullWidth variant="secondary">
        Full Width Button
      </Button>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button can take the full width of its container.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the button and see different combinations.',
      },
    },
  },
}; 