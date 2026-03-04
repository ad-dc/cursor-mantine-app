import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';
import { Stack } from '../Layout/Stack';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Select> = {
  title: 'Design System/Combobox/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible select component built on Mantine's Select with design system defaults.

**Features:**
- **Regular mode**: Standard select with borders, labels, and validation
- **Borderless mode**: Clean, minimal appearance for dashboard widgets
- **Searchable / Clearable**: Optional search and clear functionality
- **Help icon**: Tooltip-based contextual help in the right section
- **Optional label**: Shows "(Optional)" text next to the label
- **Error caption**: Separate error message prop for controlled error display
        `,
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Select options — strings or objects with value/label',
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
type Story = StoryObj<typeof Select>;

const stringData = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

const objectData = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'SolidJS' },
];

const timePeriodsData = [
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
  { value: 'quarter', label: 'This Quarter' },
  { value: 'year', label: 'This Year' },
];

// ========================== BASIC ==========================

export const Default: Story = {
  args: {
    data: stringData,
    placeholder: 'Select a framework',
    label: 'Frontend Framework',
  },
};

export const WithObjectData: Story = {
  args: {
    data: objectData,
    placeholder: 'Choose framework',
    label: 'Technology Stack',
  },
};

export const Searchable: Story = {
  args: {
    data: objectData,
    placeholder: 'Search frameworks...',
    label: 'Framework (Searchable)',
    searchable: true,
  },
};

export const Clearable: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework (Clearable)',
    clearable: true,
  },
};

export const SearchableAndClearable: Story = {
  args: {
    data: objectData,
    placeholder: 'Search and select...',
    label: 'Framework',
    searchable: true,
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    data: stringData,
    placeholder: 'Disabled select',
    label: 'Framework',
    disabled: true,
  },
};

// ========================== LABEL VARIANTS ==========================

export const Required: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework',
    required: true,
  },
};

export const Optional: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework',
    showOptional: true,
  },
};

export const WithDescription: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework',
    description: 'Choose the primary framework for this project',
  },
};

// ========================== HELP ICON ==========================

export const WithHelpIcon: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework',
    hasHelpIcon: true,
    helpIconLabel: 'Select the framework used for the frontend',
  },
};

// ========================== ERROR STATES ==========================

export const WithError: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework',
    error: 'Please select a framework',
  },
};

export const WithErrorCaption: Story = {
  args: {
    data: objectData,
    placeholder: 'Select framework',
    label: 'Framework',
    error: true,
    errorCaption: 'A framework is required for this project',
  },
};

// ========================== BORDERLESS ==========================

export const Borderless: Story = {
  args: {
    data: timePeriodsData,
    placeholder: 'This Month',
    borderless: true,
  },
};

export const BorderlessSearchable: Story = {
  args: {
    data: timePeriodsData,
    placeholder: 'Select period',
    borderless: true,
    searchable: true,
  },
};

export const BorderlessClearable: Story = {
  args: {
    data: timePeriodsData,
    placeholder: 'This Month',
    borderless: true,
    clearable: true,
  },
};

// ========================== CONTROLLED ==========================

export const ControlledRegular: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('react');

    return (
      <Stack gap="md">
        <Select
          data={objectData}
          value={value}
          onChange={setValue}
          placeholder="Select framework"
          label="Controlled Select"
          clearable
        />
        <Text size="sm" c="dimmed">
          Selected value: <Text span fw={600}>{value || 'None'}</Text>
        </Text>
      </Stack>
    );
  },
};

export const ControlledBorderless: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('month');

    return (
      <Stack gap="md">
        <Select
          data={timePeriodsData}
          value={value}
          onChange={setValue}
          placeholder="Select period"
          borderless
          searchable
          clearable
        />
        <Text size="sm" c="dimmed">
          Period: <Text span fw={600}>{value || 'No period selected'}</Text>
        </Text>
      </Stack>
    );
  },
};

// ========================== SIZE VARIATIONS ==========================

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Select
          key={s}
          data={stringData}
          placeholder={`Size: ${s}`}
          label={`Size: ${s}`}
          size={s}
        />
      ))}
    </Stack>
  ),
};

// ========================== COMPARISON ==========================

export const RegularVsBorderless: Story = {
  render: () => (
    <Stack gap="xl">
      <Stack gap="xs">
        <Text fw={600}>Regular Select</Text>
        <Select
          data={objectData}
          placeholder="Select framework"
          label="Frontend Framework"
          searchable
          clearable
        />
        <Text size="sm" c="dimmed">Best for forms and structured inputs</Text>
      </Stack>

      <Stack gap="xs">
        <Text fw={600}>Borderless Select</Text>
        <Select
          data={timePeriodsData}
          placeholder="This Month"
          borderless
          searchable
          clearable
        />
        <Text size="sm" c="dimmed">Best for dashboard widgets and inline selections</Text>
      </Stack>
    </Stack>
  ),
};
