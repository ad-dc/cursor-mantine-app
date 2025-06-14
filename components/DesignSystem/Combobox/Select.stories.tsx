import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Design System/Combobox/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible select component that supports both regular and borderless styles.

**Features:**
- **Regular mode**: Standard select with borders and labels
- **Borderless mode**: Clean, minimal appearance for dashboard widgets
- **Searchable**: Optional search functionality
- **Clearable**: Optional clear button
- **Controlled/Uncontrolled**: Supports both usage patterns

**Use Cases:**
- Form inputs (regular mode)
- Dashboard widget filters (borderless mode)
- Inline selections (borderless mode)
        `,
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Select options - can be strings or objects with value/label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    label: {
      control: 'text',
      description: 'Label text (only shown in regular mode)',
    },
    borderless: {
      control: 'boolean',
      description: 'Whether to use borderless style',
    },
    searchable: {
      control: 'boolean',
      description: 'Whether the select is searchable',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether the select is clearable',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Select size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Sample data for stories
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

// ========================== REGULAR SELECT ==========================

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

// ========================== BORDERLESS SELECT ==========================

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

export const BorderlessFullFeatures: Story = {
  args: {
    data: timePeriodsData,
    placeholder: 'Select time period',
    borderless: true,
    searchable: true,
    clearable: true,
  },
};

// ========================== CONTROLLED EXAMPLES ==========================

export const ControlledRegular: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('react');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Select
          data={objectData}
          value={value}
          onChange={setValue}
          placeholder="Select framework"
          label="Controlled Select"
          clearable
        />
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)', 
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          <strong>Selected value:</strong> {value || 'None'}
        </div>
      </div>
    );
  },
};

export const ControlledBorderless: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('month');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ 
          padding: '16px', 
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: '8px',
          backgroundColor: 'white'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px' }}>Analytics Dashboard</h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--mantine-color-gray-6)' }}>
                Performance metrics
              </p>
            </div>
            <Select
              data={timePeriodsData}
              value={value}
              onChange={setValue}
              placeholder="Select period"
              borderless
              searchable
              clearable
            />
          </div>
          <div style={{ 
            padding: '20px', 
            backgroundColor: 'var(--mantine-color-gray-0)', 
            borderRadius: '4px',
            textAlign: 'center',
            color: 'var(--mantine-color-gray-6)'
          }}>
            Dashboard content for: <strong>{value || 'No period selected'}</strong>
          </div>
        </div>
      </div>
    );
  },
};

// ========================== SIZE VARIATIONS ==========================

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select
        data={stringData}
        placeholder="Extra Small"
        label="Size: xs"
        size="xs"
      />
      <Select
        data={stringData}
        placeholder="Small"
        label="Size: sm"
        size="sm"
      />
      <Select
        data={stringData}
        placeholder="Medium (default)"
        label="Size: md"
        size="md"
      />
      <Select
        data={stringData}
        placeholder="Large"
        label="Size: lg"
        size="lg"
      />
      <Select
        data={stringData}
        placeholder="Extra Large"
        label="Size: xl"
        size="xl"
      />
    </div>
  ),
};

export const BorderlessSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '60px', fontSize: '14px' }}>xs:</span>
        <Select
          data={timePeriodsData}
          placeholder="Extra Small"
          borderless
          size="xs"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '60px', fontSize: '14px' }}>sm:</span>
        <Select
          data={timePeriodsData}
          placeholder="Small"
          borderless
          size="sm"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '60px', fontSize: '14px' }}>md:</span>
        <Select
          data={timePeriodsData}
          placeholder="Medium"
          borderless
          size="md"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '60px', fontSize: '14px' }}>lg:</span>
        <Select
          data={timePeriodsData}
          placeholder="Large"
          borderless
          size="lg"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ minWidth: '60px', fontSize: '14px' }}>xl:</span>
        <Select
          data={timePeriodsData}
          placeholder="Extra Large"
          borderless
          size="xl"
        />
      </div>
    </div>
  ),
};

// ========================== COMPARISON ==========================

export const RegularVsBorderless: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px' }}>Regular Select</h3>
        <Select
          data={objectData}
          placeholder="Select framework"
          label="Frontend Framework"
          searchable
          clearable
        />
        <p style={{ 
          marginTop: '8px', 
          fontSize: '14px', 
          color: 'var(--mantine-color-gray-6)' 
        }}>
          Best for forms and structured inputs
        </p>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px' }}>Borderless Select</h3>
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)', 
          borderRadius: '6px',
          display: 'inline-block'
        }}>
          <Select
            data={timePeriodsData}
            placeholder="This Month"
            borderless
            searchable
            clearable
          />
        </div>
        <p style={{ 
          marginTop: '8px', 
          fontSize: '14px', 
          color: 'var(--mantine-color-gray-6)' 
        }}>
          Best for dashboard widgets and inline selections
        </p>
      </div>
    </div>
  ),
}; 