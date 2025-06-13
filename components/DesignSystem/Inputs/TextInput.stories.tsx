import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { TextInput } from './TextInput';
import { RiUserLine, RiMailLine, RiSearchLine, RiEyeLine, RiEyeOffLine } from '@remixicon/react';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'TextInput component with design system sizing, consistent styling, and enhanced label options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    required: {
      control: 'boolean',
      description: 'Required field (shows asterisk)',
    },
    showOptional: {
      control: 'boolean',
      description: 'Show "(Optional)" text after label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    description: {
      control: 'text',
      description: 'Help text below input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <TextInput size="xs" label="Extra Small" placeholder="xs size" />
      <TextInput size="sm" label="Small" placeholder="sm size" />
      <TextInput size="md" label="Medium" placeholder="md size (default)" />
      <TextInput size="lg" label="Large" placeholder="lg size" />
      <TextInput size="xl" label="Extra Large" placeholder="xl size" />
    </Stack>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <TextInput label="Required Field" placeholder="This field is required" required />
      <TextInput label="Optional Field" placeholder="This field is optional" showOptional />
      <TextInput placeholder="No label" />
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <TextInput
        label="Search"
        placeholder="Search..."
        leftSection={<RiSearchLine size={16} />}
      />
      <TextInput
        label="Email"
        placeholder="your@email.com"
        rightSection={<span>@</span>}
      />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <TextInput label="Default" placeholder="Enter text" />
      <TextInput label="Disabled" placeholder="Disabled input" disabled />
      <TextInput label="With Error" placeholder="Enter text" error="This field is required" />
    </Stack>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <Stack gap="md" w={350}>
      <TextInput
        label="Username"
        placeholder="Enter username"
        description="Must be 3-20 characters long and contain only letters, numbers, and underscores"
        required
      />
      <TextInput
        label="Email Address"
        placeholder="your@email.com"
        type="email"
        description="We'll never share your email with anyone else"
        required
      />
      <TextInput
        label="Website URL"
        placeholder="https://example.com"
        type="url"
        description="Optional: Add your personal or company website"
        showOptional
      />
      <TextInput
        label="Phone Number"
        placeholder="+1 (555) 123-4567"
        type="tel"
        description="Include country code for international numbers"
        showOptional
      />
      <TextInput
        label="API Key"
        placeholder="sk-..."
        description="Keep this secret! Never share your API key publicly"
        error="Invalid API key format"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of TextInput with description/help text to guide users on proper input format and requirements.',
      },
    },
  },
};

export const PasswordExample: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <div style={{ width: '300px' }}>
        <TextInput
          label="Password"
          placeholder="Enter password"
          type={showPassword ? 'text' : 'password'}
          required
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--mantine-color-gray-6)',
              }}
            >
              {showPassword ? <RiEyeOffLine size={16} /> : <RiEyeLine size={16} />}
            </button>
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a password input with toggle visibility functionality.',
      },
    },
  },
};

export const Required: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <TextInput
        label="Required Field"
        placeholder="This field is required"
        required
      />
      <TextInput
        label="Optional Field"
        placeholder="This field is optional"
      />
    </Stack>
  ),
};

export const FormExample: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <TextInput
        label="First Name"
        placeholder="Enter your first name"
        required
      />
      <TextInput
        label="Last Name"
        placeholder="Enter your last name"
        required
      />
      <TextInput
        label="Email"
        placeholder="your@email.com"
        type="email"
        required
      />
      <TextInput
        label="Phone"
        placeholder="+1 (555) 123-4567"
        type="tel"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of TextInput components used in a typical form layout.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Input',
    placeholder: 'Type something...',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the TextInput and see different combinations.',
      },
    },
  },
}; 