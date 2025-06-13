import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { CloseButton } from './CloseButton';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Alert } from '../DataDisplay/Alert';
import { Paper } from '../Misc/Paper';

const meta: Meta<typeof CloseButton> = {
  title: 'Design System/Buttons/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CloseButton component for dismissing modals, alerts, and other UI elements with consistent sizing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the close button',
    },
    color: {
      control: 'select',
      options: ['black', 'blue'],
      description: 'Color variant of the close button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <Group gap="sm" align="center">
      <CloseButton size="xs" />
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
      <CloseButton size="xl" />
    </Group>
  ),
};

export const Colors: Story = {
  render: () => (
    <Group gap="md" align="center">
      <CloseButton color="black" />
      <CloseButton color="blue" />
    </Group>
  ),
};

export const States: Story = {
  render: () => (
    <Group gap="md" align="center">
      <Paper variant="border" style={{ textAlign: 'center' }}>
        <CloseButton />
        <Text size="xs" mt={4}>Normal</Text>
      </Paper>
      <Paper variant="border" style={{ textAlign: 'center' }}>
        <CloseButton disabled />
        <Text size="xs" mt={4}>Disabled</Text>
      </Paper>
    </Group>
  ),
};

export const UsageExamples: Story = {
  render: () => (
    <Stack gap="md">
      {/* Modal Header Example */}
      <Paper variant="border-shadow">
        <Group justify="space-between" align="center">
          <Title order={4}>Slat title</Title>
          <CloseButton size="md" />
        </Group>
      </Paper>

      {/* Alert Example */}
      <Alert 
        type="info" 
        title="Info"
        withCloseButton
        onClose={() => {}}
      >
        This is an informational alert message.
      </Alert>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common usage patterns for CloseButton in different UI contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    size: 'md',
    color: 'black',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the CloseButton and see different combinations.',
      },
    },
  },
}; 