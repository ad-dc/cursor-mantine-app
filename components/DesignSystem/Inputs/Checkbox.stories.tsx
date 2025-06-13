import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Checkbox } from './Checkbox';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox component with consistent design system styling and t-shirt sizing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Checkbox size',
    },
    label: {
      control: 'text',
      description: 'Checkbox label',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Required field indicator',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state',
    },
    description: {
      control: 'text',
      description: 'Help text below the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Checkbox size="xs" label="Extra Small Checkbox" />
      <Checkbox size="sm" label="Small Checkbox" />
      <Checkbox size="md" label="Medium Checkbox (default)" />
      <Checkbox size="lg" label="Large Checkbox" />
      <Checkbox size="xl" label="Extra Large Checkbox" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Checkbox label="Default Checkbox" />
      <Checkbox label="Checked Checkbox" defaultChecked />
      <Checkbox label="Disabled Checkbox" disabled />
      <Checkbox label="Disabled Checked" disabled defaultChecked />
    </Stack>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <Stack gap="md" maw={400}>
      <Checkbox 
        label="Email Notifications" 
        description="Receive email updates about your account activity"
      />
      <Checkbox 
        label="Marketing Communications" 
        description="Get promotional content and special offers"
        defaultChecked
      />
      <Checkbox 
        label="Data Processing" 
        description="Allow us to process your data for analytics"
      />
    </Stack>
  ),
};

export const Required: Story = {
  render: () => (
    <Stack gap="md">
      <Checkbox 
        label="Terms and Conditions" 
        description="I agree to the terms and conditions"
        required
      />
      <Checkbox 
        label="Privacy Policy" 
        description="I have read and accept the privacy policy"
        required
      />
    </Stack>
  ),
};

export const ControlledExample: Story = {
  render: () => {
    const [values, setValues] = useState({
      notifications: true,
      marketing: false,
      analytics: false,
    });

    const handleChange = (key: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({ ...prev, [key]: event.currentTarget.checked }));
    };

    return (
      <Stack gap="md" maw={400}>
        <Checkbox 
          label="Email Notifications" 
          checked={values.notifications}
          onChange={handleChange('notifications')}
          description="Receive important updates"
        />
        <Checkbox 
          label="Marketing Emails" 
          checked={values.marketing}
          onChange={handleChange('marketing')}
          description="Get promotional content"
        />
        <Checkbox 
          label="Analytics" 
          checked={values.analytics}
          onChange={handleChange('analytics')}
          description="Help improve our service"
        />
        
        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <strong>Selected Options:</strong>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li>Notifications: {values.notifications ? 'Yes' : 'No'}</li>
            <li>Marketing: {values.marketing ? 'Yes' : 'No'}</li>
            <li>Analytics: {values.analytics ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled Checkbox components with state management.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <Stack gap="md">
      <Title order={3} size="md" fw={500} mb="xs">Account Preferences</Title>
      <Stack gap="xs">
        <Checkbox 
          label="Email notifications" 
          description="Receive updates about your account"
          defaultChecked
        />
        <Checkbox 
          label="SMS notifications" 
          description="Get text messages for urgent updates"
        />
        <Checkbox 
          label="Push notifications" 
          description="Receive notifications on your device"
          defaultChecked
        />
      </Stack>
      
      <Title order={3} size="md" fw={500} mb="xs" mt="md">Marketing Preferences</Title>
      <Stack gap="xs">
        <Checkbox 
          label="Newsletter" 
          description="Weekly updates and news"
        />
        <Checkbox 
          label="Product updates" 
          description="Information about new features"
          defaultChecked
        />
        <Checkbox 
          label="Special offers" 
          description="Exclusive deals and promotions"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of Checkbox components used in a form layout.',
      },
    },
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <Stack gap="sm">
      <Text size="sm" fw={500} c="dimmed" mb="xs">Select your interests:</Text>
      <Checkbox label="Technology" />
      <Checkbox label="Design" />
      <Checkbox label="Business" />
      <Checkbox label="Marketing" />
      <Checkbox label="Development" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple checkboxes working together as a group.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Checkbox',
    size: 'md',
    checked: false,
    disabled: false,
    required: false,
    indeterminate: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Checkbox and see different combinations.',
      },
    },
  },
}; 