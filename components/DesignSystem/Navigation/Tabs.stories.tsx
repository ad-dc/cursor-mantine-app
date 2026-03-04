import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Tabs } from './Tabs';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Badge } from '../DataDisplay/Badge';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tabs compound component for organizing content into sections. Thin wrapper around Mantine Tabs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tabs orientation',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'pills'],
      description: 'Tab variant',
    },
    value: {
      control: 'text',
      description: 'Currently active tab ID',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('tab1');

    return (
      <div style={{ width: 500 }}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Overview</Tabs.Tab>
            <Tabs.Tab value="tab2">Details</Tabs.Tab>
            <Tabs.Tab value="tab3">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="tab1" pt="md">
            <Text>This is the overview content. It provides a general summary of the information.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="tab2" pt="md">
            <Text>This is the details content. It contains more specific information.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="tab3" pt="md">
            <Text>This is the settings content. Configure your preferences here.</Text>
          </Tabs.Panel>
        </Tabs>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <Stack gap="xl" w={500}>
      <div>
        <Text size="sm" fw={500} mb="sm">Default Variant:</Text>
        <Tabs defaultValue="tab1" variant="default">
          <Tabs.List>
            <Tabs.Tab value="tab1">First</Tabs.Tab>
            <Tabs.Tab value="tab2">Second</Tabs.Tab>
            <Tabs.Tab value="tab3">Third</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1" pt="md"><Text>First tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab2" pt="md"><Text>Second tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab3" pt="md"><Text>Third tab content</Text></Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <Text size="sm" fw={500} mb="sm">Outline Variant:</Text>
        <Tabs defaultValue="tab1" variant="outline">
          <Tabs.List>
            <Tabs.Tab value="tab1">First</Tabs.Tab>
            <Tabs.Tab value="tab2">Second</Tabs.Tab>
            <Tabs.Tab value="tab3">Third</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1" pt="md"><Text>First tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab2" pt="md"><Text>Second tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab3" pt="md"><Text>Third tab content</Text></Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <Text size="sm" fw={500} mb="sm">Pills Variant:</Text>
        <Tabs defaultValue="tab1" variant="pills">
          <Tabs.List>
            <Tabs.Tab value="tab1">First</Tabs.Tab>
            <Tabs.Tab value="tab2">Second</Tabs.Tab>
            <Tabs.Tab value="tab3">Third</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1" pt="md"><Text>First tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab2" pt="md"><Text>Second tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab3" pt="md"><Text>Third tab content</Text></Tabs.Panel>
        </Tabs>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the Tabs component.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('dashboard');

    return (
      <div style={{ width: 600 }}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="dashboard" leftSection={<span>📊</span>}>Dashboard</Tabs.Tab>
            <Tabs.Tab value="users" leftSection={<span>👥</span>}>Users</Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<span>⚙️</span>}>Settings</Tabs.Tab>
            <Tabs.Tab value="help" leftSection={<span>❓</span>}>Help</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="dashboard" pt="md">
            <Text>Dashboard overview with charts and metrics.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="users" pt="md">
            <Text>User management and profiles.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="settings" pt="md">
            <Text>Application settings and configuration.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="help" pt="md">
            <Text>Help documentation and support.</Text>
          </Tabs.Panel>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with icons in the left section.',
      },
    },
  },
};

export const WithBadges: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('inbox');

    return (
      <div style={{ width: 600 }}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="inbox" leftSection={<span>📧</span>} rightSection={<Badge variant="filled" color="blue">12</Badge>}>
              Inbox
            </Tabs.Tab>
            <Tabs.Tab value="sent" leftSection={<span>📤</span>}>Sent</Tabs.Tab>
            <Tabs.Tab value="drafts" leftSection={<span>📝</span>} rightSection={<Badge variant="filled" color="gray">3</Badge>}>
              Drafts
            </Tabs.Tab>
            <Tabs.Tab value="spam" leftSection={<span>🚫</span>} rightSection={<Badge variant="filled" color="red">5</Badge>}>
              Spam
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="inbox" pt="md"><Text>You have 12 unread messages in your inbox.</Text></Tabs.Panel>
          <Tabs.Panel value="sent" pt="md"><Text>Your sent messages.</Text></Tabs.Panel>
          <Tabs.Panel value="drafts" pt="md"><Text>You have 3 draft messages.</Text></Tabs.Panel>
          <Tabs.Panel value="spam" pt="md"><Text>5 messages marked as spam.</Text></Tabs.Panel>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with badges showing counts or status in the right section.',
      },
    },
  },
};

export const WithDisabledTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('available');

    return (
      <div style={{ width: 700 }}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="available" leftSection={<span>✅</span>}>Available</Tabs.Tab>
            <Tabs.Tab value="premium" leftSection={<span>⭐</span>} rightSection={<Badge variant="outline" color="yellow">Pro</Badge>} disabled>
              Premium Only
            </Tabs.Tab>
            <Tabs.Tab value="maintenance" leftSection={<span>🔧</span>} disabled>Under Maintenance</Tabs.Tab>
            <Tabs.Tab value="coming-soon" leftSection={<span>🚀</span>} rightSection={<Badge variant="outline" color="blue">Soon</Badge>} disabled>
              Coming Soon
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="available" pt="md"><Text>This tab is available and can be accessed.</Text></Tabs.Panel>
          <Tabs.Panel value="premium" pt="md"><Text>This content requires a premium subscription.</Text></Tabs.Panel>
          <Tabs.Panel value="maintenance" pt="md"><Text>This section is currently under maintenance.</Text></Tabs.Panel>
          <Tabs.Panel value="coming-soon" pt="md"><Text>This feature is coming soon!</Text></Tabs.Panel>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with some disabled states for restricted or unavailable content.',
      },
    },
  },
};

export const VerticalTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('profile');

    return (
      <div style={{ width: 600, height: 400 }}>
        <Tabs value={activeTab} onChange={setActiveTab} orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="profile" leftSection={<span>👤</span>}>Profile</Tabs.Tab>
            <Tabs.Tab value="account" leftSection={<span>⚙️</span>}>Account</Tabs.Tab>
            <Tabs.Tab value="notifications" leftSection={<span>🔔</span>} rightSection={<Badge variant="filled" color="red">3</Badge>}>
              Notifications
            </Tabs.Tab>
            <Tabs.Tab value="privacy" leftSection={<span>🔒</span>}>Privacy</Tabs.Tab>
            <Tabs.Tab value="billing" leftSection={<span>💳</span>}>Billing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="profile" pl="md">
            <Title order={4} size="sm" fw={500} mb="sm">Profile Settings</Title>
            <Text>Manage your personal information and profile details.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="account" pl="md">
            <Title order={4} size="sm" fw={500} mb="sm">Account Settings</Title>
            <Text>Configure your account preferences and security settings.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="notifications" pl="md">
            <Title order={4} size="sm" fw={500} mb="sm">Notification Settings</Title>
            <Text>Control how and when you receive notifications.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="privacy" pl="md">
            <Title order={4} size="sm" fw={500} mb="sm">Privacy Settings</Title>
            <Text>Manage your privacy preferences and data sharing options.</Text>
          </Tabs.Panel>
          <Tabs.Panel value="billing" pl="md">
            <Title order={4} size="sm" fw={500} mb="sm">Billing Information</Title>
            <Text>View and manage your subscription and payment methods.</Text>
          </Tabs.Panel>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical tabs layout for sidebar-style navigation.',
      },
    },
  },
};

export const TabsWithoutContent: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('tab1');

    return (
      <Stack gap="md" w={500}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="tab1" leftSection={<span>1️⃣</span>}>Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2" leftSection={<span>2️⃣</span>}>Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3" leftSection={<span>3️⃣</span>} rightSection={<Badge variant="filled" color="green">New</Badge>}>
              Tab 3
            </Tabs.Tab>
            <Tabs.Tab value="tab4" leftSection={<span>4️⃣</span>} disabled>Tab 4</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <div style={{
          padding: '16px',
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: '8px',
          backgroundColor: 'var(--mantine-color-gray-0)'
        }}>
          <Text size="sm" fw={500} mb="xs">External Content Area</Text>
          <Text size="sm">
            Active tab: <strong>{activeTab}</strong>
          </Text>
          <Text size="sm" c="dimmed">
            This content is managed separately from the tabs component.
          </Text>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs without built-in content panels, useful when content is managed externally.',
      },
    },
  },
};

export const ControlledTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('step1');

    return (
      <div style={{ width: 600 }}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="step1" leftSection={<span>1️⃣</span>}>Step 1</Tabs.Tab>
            <Tabs.Tab value="step2" leftSection={<span>2️⃣</span>} disabled={activeTab === 'step1'}>Step 2</Tabs.Tab>
            <Tabs.Tab value="step3" leftSection={<span>3️⃣</span>} disabled={activeTab === 'step1' || activeTab === 'step2'}>
              Step 3
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="step1" pt="md">
            <Title order={4} size="sm" fw={500} mb="sm">Step 1: Basic Information</Title>
            <Text mb="md">Enter your basic information to get started.</Text>
            <Inline gap="sm">
              <button
                onClick={() => setActiveTab('step2')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--mantine-color-blue-6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Next Step
              </button>
            </Inline>
          </Tabs.Panel>
          <Tabs.Panel value="step2" pt="md">
            <Title order={4} size="sm" fw={500} mb="sm">Step 2: Preferences</Title>
            <Text mb="md">Configure your preferences and settings.</Text>
            <Inline gap="sm">
              <button
                onClick={() => setActiveTab('step1')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--mantine-color-gray-6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Previous
              </button>
              <button
                onClick={() => setActiveTab('step3')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--mantine-color-blue-6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Next Step
              </button>
            </Inline>
          </Tabs.Panel>
          <Tabs.Panel value="step3" pt="md">
            <Title order={4} size="sm" fw={500} mb="sm">Step 3: Review</Title>
            <Text mb="md">Review your information and complete the process.</Text>
            <Inline gap="sm">
              <button
                onClick={() => setActiveTab('step2')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--mantine-color-gray-6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Previous
              </button>
              <button
                onClick={() => alert('Process completed!')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--mantine-color-green-6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Complete
              </button>
            </Inline>
          </Tabs.Panel>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled tabs with conditional disabled states for step-by-step workflows.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={700}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>

      <div>
        <Text size="sm" fw={500} mb="sm">1. Dashboard Navigation:</Text>
        <Tabs defaultValue="overview">
          <Tabs.List>
            <Tabs.Tab value="overview" leftSection={<span>📊</span>}>Overview</Tabs.Tab>
            <Tabs.Tab value="analytics" leftSection={<span>📈</span>} rightSection={<Badge variant="filled" color="blue">Live</Badge>}>
              Analytics
            </Tabs.Tab>
            <Tabs.Tab value="reports" leftSection={<span>📋</span>}>Reports</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview" pt="md"><Text>Dashboard overview with key metrics</Text></Tabs.Panel>
          <Tabs.Panel value="analytics" pt="md"><Text>Real-time analytics and reports</Text></Tabs.Panel>
          <Tabs.Panel value="reports" pt="md"><Text>Generated reports and exports</Text></Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <Text size="sm" fw={500} mb="sm">2. Settings Panel:</Text>
        <Tabs defaultValue="general" variant="pills">
          <Tabs.List>
            <Tabs.Tab value="general" leftSection={<span>⚙️</span>}>General</Tabs.Tab>
            <Tabs.Tab value="security" leftSection={<span>🔒</span>}>Security</Tabs.Tab>
            <Tabs.Tab value="integrations" leftSection={<span>🔗</span>} rightSection={<Badge variant="outline" color="green">3 Active</Badge>}>
              Integrations
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="general" pt="md"><Text>General application settings</Text></Tabs.Panel>
          <Tabs.Panel value="security" pt="md"><Text>Security and privacy settings</Text></Tabs.Panel>
          <Tabs.Panel value="integrations" pt="md"><Text>Third-party integrations</Text></Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <Text size="sm" fw={500} mb="sm">3. Content Categories:</Text>
        <Tabs defaultValue="all" variant="outline">
          <Tabs.List>
            <Tabs.Tab value="all" rightSection={<Badge variant="filled" color="gray">24</Badge>}>All Items</Tabs.Tab>
            <Tabs.Tab value="published" rightSection={<Badge variant="filled" color="green">18</Badge>}>Published</Tabs.Tab>
            <Tabs.Tab value="drafts" rightSection={<Badge variant="filled" color="yellow">4</Badge>}>Drafts</Tabs.Tab>
            <Tabs.Tab value="archived" rightSection={<Badge variant="filled" color="gray">2</Badge>}>Archived</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="all" pt="md"><Text>All content items</Text></Tabs.Panel>
          <Tabs.Panel value="published" pt="md"><Text>Published content</Text></Tabs.Panel>
          <Tabs.Panel value="drafts" pt="md"><Text>Draft content</Text></Tabs.Panel>
          <Tabs.Panel value="archived" pt="md"><Text>Archived content</Text></Tabs.Panel>
        </Tabs>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Tabs usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | null>('tab1');

    return (
      <div style={{ width: 600 }}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="tab1" leftSection={<span>1️⃣</span>}>First Tab</Tabs.Tab>
            <Tabs.Tab value="tab2" leftSection={<span>2️⃣</span>} rightSection={<Badge variant="filled" color="blue">New</Badge>}>
              Second Tab
            </Tabs.Tab>
            <Tabs.Tab value="tab3" leftSection={<span>3️⃣</span>} disabled>Third Tab</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1" pt="md"><Text>First tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab2" pt="md"><Text>Second tab content</Text></Tabs.Panel>
          <Tabs.Panel value="tab3" pt="md"><Text>Third tab content</Text></Tabs.Panel>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tabs demonstration.',
      },
    },
  },
};
