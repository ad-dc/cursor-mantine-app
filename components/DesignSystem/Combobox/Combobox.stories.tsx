import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';
import { useState } from 'react';
import { Stack } from '../Layout/Stack';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Combobox> = {
  title: 'Design System/Combobox/Combobox',
  component: Combobox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A single-selection dropdown identical to Select. This component exists as a
separate identity for Figma Code Connect, where the Combobox Figma component
maps to this wrapper.

Same API and behavior as Select — see Select stories for full coverage.
        `,
      },
    },
  },
  tags: ['autodocs', 'code-connected'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Options — strings or objects with value/label',
    },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
    borderless: { control: 'boolean' },
    searchable: { control: 'boolean' },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    showOptional: { control: 'boolean' },
    hasHelpIcon: { control: 'boolean' },
    helpIconLabel: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const objectData = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'SolidJS' },
];

export const Default: Story = {
  args: {
    data: objectData,
    placeholder: 'Select a framework',
    label: 'Frontend Framework',
  },
};

export const Searchable: Story = {
  args: {
    data: objectData,
    placeholder: 'Search frameworks...',
    label: 'Framework',
    searchable: true,
    clearable: true,
  },
};

export const WithHelpIcon: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework',
    hasHelpIcon: true,
    helpIconLabel: 'Select the framework used for the frontend',
    showOptional: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('react');

    return (
      <Stack gap="md">
        <Combobox
          data={objectData}
          value={value}
          onChange={setValue}
          placeholder="Select framework"
          label="Controlled Combobox"
          clearable
        />
        <Text size="sm" c="dimmed">
          Selected value: <Text span fw={600}>{value || 'None'}</Text>
        </Text>
      </Stack>
    );
  },
};
