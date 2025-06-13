import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Switch } from './Switch';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Switch> = {
  title: 'Design System/Inputs/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Switch component with consistent green color and rounded styling for toggle controls.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Switch label',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Switch size',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    showOptional: {
      control: 'boolean',
      description: 'Show "(Optional)" text after label',
    },
    description: {
      control: 'text',
      description: 'Help text below switch',
    },
    onLabel: {
      control: 'text',
      description: 'Label shown when switch is on',
    },
    offLabel: {
      control: 'text',
      description: 'Label shown when switch is off',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Switch size="xs" label="Extra Small Switch" />
      <Switch size="sm" label="Small Switch" />
      <Switch size="md" label="Medium Switch (default)" />
      <Switch size="lg" label="Large Switch" />
      <Switch size="xl" label="Extra Large Switch" />
    </Stack>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <Stack gap="md">
      <Switch label="Required Setting" />
      <Switch label="Optional Setting" showOptional />
      <Switch />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Switch label="Default Switch" />
      <Switch label="Checked Switch" defaultChecked />
      <Switch label="Disabled Switch" disabled />
      <Switch label="Disabled Checked" disabled defaultChecked />
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack gap="md">
      <Switch label="Default Switch" />
      <Switch label="Checked Switch" defaultChecked />
      <Switch label="Another Switch" />
      <Switch label="Another Checked" defaultChecked />
    </Stack>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Stack gap="md">
      <Switch label="Power" onLabel="ON" offLabel="OFF" />
      <Switch label="WiFi" onLabel="CONNECTED" offLabel="DISCONNECTED" size="lg" />
      <Switch label="Auto-save" onLabel="YES" offLabel="NO" />
    </Stack>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <Stack gap="md">
      <Switch 
        label="Email Notifications" 
        description="Receive email updates about your account"
      />
      <Switch 
        label="Push Notifications" 
        description="Get notified on your mobile device"
        defaultChecked
      />
    </Stack>
  ),
};

export const Required: Story = {
  render: () => (
    <Stack gap="md" maw={400}>
      <Switch 
        label="Terms and Conditions" 
        description="I agree to the terms and conditions"
        required
      />
      <Switch 
        label="Marketing Emails" 
        description="I want to receive marketing emails (optional)"
      />
    </Stack>
  ),
};

export const FormExample: Story = {
  render: () => (
    <Stack gap="md" maw={400}>
      <Title order={3} size="md" fw={500} mb="xs">Account Settings</Title>
      <Stack gap="sm">
        <Switch 
          label="Two-Factor Authentication" 
          description="Add an extra layer of security to your account"
        />
        <Switch 
          label="Email Notifications" 
          description="Receive important updates via email"
          defaultChecked
        />
        <Switch 
          label="SMS Notifications" 
          description="Get text messages for urgent updates"
        />
      </Stack>
      
      <Title order={3} size="md" fw={500} mb="xs" mt="lg">Privacy Settings</Title>
      <Stack gap="sm">
        <Switch 
          label="Profile Visibility" 
          description="Make your profile visible to other users"
          defaultChecked
        />
        <Switch 
          label="Activity Status" 
          description="Show when you're online"
        />
      </Stack>
    </Stack>
  ),
};

export const ControlledExample: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);
    
    return (
      <Stack gap="md" maw={400}>
        <Switch 
          label="Email Notifications" 
          checked={notifications}
          onChange={(event) => setNotifications(event.currentTarget.checked)}
          description="You will receive email updates"
        />
        <Switch 
          label="Dark Mode" 
          checked={darkMode}
          onChange={(event) => setDarkMode(event.currentTarget.checked)}
          description="Switch to dark theme"
        />
        <Switch 
          label="Auto-save" 
          checked={autoSave}
          onChange={(event) => setAutoSave(event.currentTarget.checked)}
          description="Automatically save your work"
        />
        
        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <strong>Current Settings:</strong>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li>Notifications: {notifications ? 'Enabled' : 'Disabled'}</li>
            <li>Dark Mode: {darkMode ? 'Enabled' : 'Disabled'}</li>
            <li>Auto-save: {autoSave ? 'Enabled' : 'Disabled'}</li>
          </ul>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled Switch components with state management.',
      },
    },
  },
};

export const SettingsExample: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);
    
    return (
      <Stack gap="lg" maw={400}>
        <Title order={3} size="md" fw={500} mb="xs">Notifications</Title>
        <Stack gap="md">
          <Switch 
            label="Email notifications" 
            description="Receive updates via email"
            checked={notifications}
            onChange={(event) => setNotifications(event.currentTarget.checked)}
          />
          <Switch 
            label="Push notifications" 
            description="Receive push notifications on your device"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.currentTarget.checked)}
          />
          <Switch 
            label="Marketing emails" 
            description="Receive promotional content and updates"
            checked={autoSave}
            onChange={(event) => setAutoSave(event.currentTarget.checked)}
            showOptional
          />
        </Stack>
        
        <Title order={3} size="md" fw={500} mb="xs">Privacy</Title>
        <Stack gap="md">
          <Switch 
            label="Profile visibility" 
            description="Make your profile visible to other users"
            checked={notifications}
            onChange={(event) => setNotifications(event.currentTarget.checked)}
          />
          <Switch 
            label="Activity tracking" 
            description="Allow us to track your activity for analytics"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.currentTarget.checked)}
          />
        </Stack>
      </Stack>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '500px', 
      padding: '24px', 
      border: '1px solid var(--mantine-color-gray-3)',
      borderRadius: '12px',
      backgroundColor: 'white'
    }}>
      <Title order={3} mb="lg">Account Settings</Title>
      
      <Stack gap="lg">
        <div>
          <Title order={5} mb="sm">Notifications</Title>
          <Stack gap="sm">
            <Switch 
              label="Email notifications" 
              description="Receive updates via email"
              checked
            />
            <Switch 
              label="Push notifications" 
              description="Receive push notifications on your device"
            />
            <Switch 
              label="Marketing emails" 
              description="Receive promotional content and updates"
              showOptional
            />
          </Stack>
        </div>
        
        <div>
          <Title order={5} mb="sm">Privacy</Title>
          <Stack gap="sm">
            <Switch 
              label="Profile visibility" 
              description="Make your profile visible to other users"
              checked
            />
            <Switch 
              label="Activity tracking" 
              description="Allow us to track your activity for analytics"
              showOptional
            />
          </Stack>
        </div>
      </Stack>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of Switch components used in a settings panel layout.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Switch',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Switch and see different combinations.',
      },
    },
  },
}; 