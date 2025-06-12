import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Design System/Typography/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Title component with t-shirt sizing, heading levels, and ability to override with custom font sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'T-shirt size for the title',
    },
    order: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'HTML heading level (h1-h6)',
    },
    children: {
      control: 'text',
      description: 'Title content',
    },
    fw: {
      control: 'select',
      options: [400, 500, 600, 700],
      description: 'Font weight',
    },
    c: {
      control: 'text',
      description: 'Title color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default title',
    order: 2,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Title size="xs" order={6}>Extra Small Title (xs)</Title>
      <Title size="sm" order={5}>Small Title (sm)</Title>
      <Title size="md" order={4}>Medium Title (md)</Title>
      <Title size="lg" order={3}>Large Title (lg)</Title>
      <Title size="xl" order={2}>Extra Large Title (xl)</Title>
    </div>
  ),
};

export const HeadingLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Title order={1} size="xl">Heading 1 (h1)</Title>
      <Title order={2} size="lg">Heading 2 (h2)</Title>
      <Title order={3} size="md">Heading 3 (h3)</Title>
      <Title order={4} size="md">Heading 4 (h4)</Title>
      <Title order={5} size="sm">Heading 5 (h5)</Title>
      <Title order={6} size="xs">Heading 6 (h6)</Title>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Title fw={400}>Normal weight (400)</Title>
      <Title fw={500}>Medium weight (500)</Title>
      <Title fw={600}>Semibold weight (600)</Title>
      <Title fw={700}>Bold weight (700)</Title>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Title>Default color</Title>
      <Title c="blue">Blue title</Title>
      <Title c="red">Red title</Title>
      <Title c="green">Green title</Title>
      <Title c="dimmed">Dimmed title</Title>
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    children: 'Custom font size using fz prop',
    fz: '32px',
    order: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can override the t-shirt size with a custom font size using the `fz` prop.',
      },
    },
  },
}; 