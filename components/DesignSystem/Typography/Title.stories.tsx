import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
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
    <Stack gap="md">
      <Title order={1}>Heading 1 (order=1)</Title>
      <Title order={2}>Heading 2 (order=2)</Title>
      <Title order={3}>Heading 3 (order=3)</Title>
      <Title order={4}>Heading 4 (order=4)</Title>
      <Title order={5}>Heading 5 (order=5)</Title>
      <Title order={6}>Heading 6 (order=6)</Title>
    </Stack>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <Stack gap="md">
      <Title order={2} fw={400}>Normal weight (400)</Title>
      <Title order={2} fw={500}>Medium weight (500)</Title>
      <Title order={2} fw={600}>Semibold weight (600)</Title>
      <Title order={2} fw={700}>Bold weight (700)</Title>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack gap="md">
      <Title order={2} c="blue">Blue title</Title>
      <Title order={2} c="red">Red title</Title>
      <Title order={2} c="green">Green title</Title>
      <Title order={2} c="dimmed">Dimmed title</Title>
    </Stack>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Stack gap="md">
      <Title order={2} ta="left">Left aligned title</Title>
      <Title order={2} ta="center">Center aligned title</Title>
      <Title order={2} ta="right">Right aligned title</Title>
    </Stack>
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