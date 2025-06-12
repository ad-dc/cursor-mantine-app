import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Design System/Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text component with t-shirt sizing and ability to override with custom font sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'T-shirt size for the text',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
    fw: {
      control: 'select',
      options: [400, 500, 600, 700],
      description: 'Font weight',
    },
    fs: {
      control: 'select',
      options: ['normal', 'italic'],
      description: 'Font style',
    },
    td: {
      control: 'select',
      options: ['none', 'underline', 'line-through'],
      description: 'Text decoration',
    },
    c: {
      control: 'text',
      description: 'Text color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default text',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text size="xs">Extra Small Text (xs)</Text>
      <Text size="sm">Small Text (sm)</Text>
      <Text size="md">Medium Text (md)</Text>
      <Text size="lg">Large Text (lg)</Text>
      <Text size="xl">Extra Large Text (xl)</Text>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text fw={400}>Normal weight (400)</Text>
      <Text fw={500}>Medium weight (500)</Text>
      <Text fw={600}>Semibold weight (600)</Text>
      <Text fw={700}>Bold weight (700)</Text>
    </div>
  ),
};

export const Styles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text>Normal text</Text>
      <Text fs="italic">Italic text</Text>
      <Text td="underline">Underlined text</Text>
      <Text td="line-through">Strikethrough text</Text>
      <Text c="blue">Blue colored text</Text>
      <Text c="dimmed">Dimmed text</Text>
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    children: 'Custom font size using fz prop',
    fz: '24px',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can override the t-shirt size with a custom font size using the `fz` prop.',
      },
    },
  },
}; 