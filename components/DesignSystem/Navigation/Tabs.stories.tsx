import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Tabs } from './Tabs';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Badge } from '../DataDisplay/Badge';
import { ThemeIcon } from '../DataDisplay/ThemeIcon';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tabs component for organizing content into multiple sections with consistent styling and flexible layouts.',
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
    const [activeTab, setActiveTab] = useState('tab1');
    
    const tabs = [
      {
        id: 'tab1',
        label: 'Overview',
        children: (
          <div style={{ padding: '16px' }}>
            <Text>This is the overview content. It provides a general summary of the information.</Text>
          </div>
        ),
      },
      {
        id: 'tab2',
        label: 'Details',
        children: (
          <div style={{ padding: '16px' }}>
            <Text>This is the details content. It contains more specific information.</Text>
          </div>
        ),
      },
      {
        id: 'tab3',
        label: 'Settings',
        children: (
          <div style={{ padding: '16px' }}>
            <Text>This is the settings content. Configure your preferences here.</Text>
          </div>
        ),
      },
    ];
    
    return (
      <div style={{ width: 500 }}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [defaultTab, setDefaultTab] = useState('tab1');
    const [outlineTab, setOutlineTab] = useState('tab1');
    const [pillsTab, setPillsTab] = useState('tab1');
    
    const tabs = [
      {
        id: 'tab1',
        label: 'First',
        children: <div style={{ padding: '16px' }}><Text>First tab content</Text></div>,
      },
      {
        id: 'tab2',
        label: 'Second',
        children: <div style={{ padding: '16px' }}><Text>Second tab content</Text></div>,
      },
      {
        id: 'tab3',
        label: 'Third',
        children: <div style={{ padding: '16px' }}><Text>Third tab content</Text></div>,
      },
    ];
    
    return (
      <Stack gap="xl" w={500}>
        <div>
          <Text size="sm" fw={500} mb="sm">Default Variant:</Text>
          <Tabs
            tabs={tabs}
            value={defaultTab}
            onTabChange={setDefaultTab}
            variant="default"
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Outline Variant:</Text>
          <Tabs
            tabs={tabs}
            value={outlineTab}
            onTabChange={setOutlineTab}
            variant="outline"
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Pills Variant:</Text>
          <Tabs
            tabs={tabs}
            value={pillsTab}
            onTabChange={setPillsTab}
            variant="pills"
          />
        </div>
      </Stack>
    );
  },
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
    const [activeTab, setActiveTab] = useState('dashboard');
    
    const tabs = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        leftSection: <span>📊</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>Dashboard overview with charts and metrics.</Text>
          </div>
        ),
      },
      {
        id: 'users',
        label: 'Users',
        leftSection: <span>👥</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>User management and profiles.</Text>
          </div>
        ),
      },
      {
        id: 'settings',
        label: 'Settings',
        leftSection: <span>⚙️</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>Application settings and configuration.</Text>
          </div>
        ),
      },
      {
        id: 'help',
        label: 'Help',
        leftSection: <span>❓</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>Help documentation and support.</Text>
          </div>
        ),
      },
    ];
    
    return (
      <div style={{ width: 600 }}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabChange={setActiveTab}
        />
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
    const [activeTab, setActiveTab] = useState('inbox');
    
    const tabs = [
      {
        id: 'inbox',
        label: 'Inbox',
        leftSection: <span>📧</span>,
        rightSection: <Badge variant="filled" color="blue">12</Badge>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>You have 12 unread messages in your inbox.</Text>
          </div>
        ),
      },
      {
        id: 'sent',
        label: 'Sent',
        leftSection: <span>📤</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>Your sent messages.</Text>
          </div>
        ),
      },
      {
        id: 'drafts',
        label: 'Drafts',
        leftSection: <span>📝</span>,
        rightSection: <Badge variant="filled" color="gray">3</Badge>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>You have 3 draft messages.</Text>
          </div>
        ),
      },
      {
        id: 'spam',
        label: 'Spam',
        leftSection: <span>🚫</span>,
        rightSection: <Badge variant="filled" color="red">5</Badge>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>5 messages marked as spam.</Text>
          </div>
        ),
      },
    ];
    
    return (
      <div style={{ width: 600 }}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabChange={setActiveTab}
        />
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
    const [activeTab, setActiveTab] = useState('available');
    
    const tabs = [
      {
        id: 'available',
        label: 'Available',
        leftSection: <span>✅</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>This tab is available and can be accessed.</Text>
          </div>
        ),
      },
      {
        id: 'premium',
        label: 'Premium Only',
        leftSection: <span>⭐</span>,
        rightSection: <Badge variant="outline" color="yellow">Pro</Badge>,
        disabled: true,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>This content requires a premium subscription.</Text>
          </div>
        ),
      },
      {
        id: 'maintenance',
        label: 'Under Maintenance',
        leftSection: <span>🔧</span>,
        disabled: true,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>This section is currently under maintenance.</Text>
          </div>
        ),
      },
      {
        id: 'coming-soon',
        label: 'Coming Soon',
        leftSection: <span>🚀</span>,
        rightSection: <Badge variant="outline" color="blue">Soon</Badge>,
        disabled: true,
        children: (
          <div style={{ padding: '16px' }}>
            <Text>This feature is coming soon!</Text>
          </div>
        ),
      },
    ];
    
    return (
      <div style={{ width: 700 }}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabChange={setActiveTab}
        />
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
    const [activeTab, setActiveTab] = useState('profile');
    
    const tabs = [
      {
        id: 'profile',
        label: 'Profile',
        leftSection: <span>👤</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Title order={4} size="sm" fw={500} mb="sm">Profile Settings</Title>
            <Text>Manage your personal information and profile details.</Text>
          </div>
        ),
      },
      {
        id: 'account',
        label: 'Account',
        leftSection: <span>⚙️</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Title order={4} size="sm" fw={500} mb="sm">Account Settings</Title>
            <Text>Configure your account preferences and security settings.</Text>
          </div>
        ),
      },
      {
        id: 'notifications',
        label: 'Notifications',
        leftSection: <span>🔔</span>,
        rightSection: <Badge variant="filled" color="red">3</Badge>,
        children: (
          <div style={{ padding: '16px' }}>
            <Title order={4} size="sm" fw={500} mb="sm">Notification Settings</Title>
            <Text>Control how and when you receive notifications.</Text>
          </div>
        ),
      },
      {
        id: 'privacy',
        label: 'Privacy',
        leftSection: <span>🔒</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Title order={4} size="sm" fw={500} mb="sm">Privacy Settings</Title>
            <Text>Manage your privacy preferences and data sharing options.</Text>
          </div>
        ),
      },
      {
        id: 'billing',
        label: 'Billing',
        leftSection: <span>💳</span>,
        children: (
          <div style={{ padding: '16px' }}>
            <Title order={4} size="sm" fw={500} mb="sm">Billing Information</Title>
            <Text>View and manage your subscription and payment methods.</Text>
          </div>
        ),
      },
    ];
    
    return (
      <div style={{ width: 600, height: 400 }}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabChange={setActiveTab}
          orientation="vertical"
        />
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
    const [activeTab, setActiveTab] = useState('tab1');
    
    const tabs = [
      {
        id: 'tab1',
        label: 'Tab 1',
        leftSection: <span>1️⃣</span>,
      },
      {
        id: 'tab2',
        label: 'Tab 2',
        leftSection: <span>2️⃣</span>,
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        leftSection: <span>3️⃣</span>,
        rightSection: <Badge variant="filled" color="green">New</Badge>,
      },
      {
        id: 'tab4',
        label: 'Tab 4',
        leftSection: <span>4️⃣</span>,
        disabled: true,
      },
    ];
    
    return (
      <Stack gap="md" w={500}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabChange={setActiveTab}
        />
        
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
    const [activeTab, setActiveTab] = useState('step1');
    
    const tabs = [
      {
        id: 'step1',
        label: 'Step 1',
        leftSection: <span>1️⃣</span>,
        children: (
          <div style={{ padding: '16px' }}>
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
          </div>
        ),
      },
      {
        id: 'step2',
        label: 'Step 2',
        leftSection: <span>2️⃣</span>,
        disabled: activeTab === 'step1',
        children: (
          <div style={{ padding: '16px' }}>
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
          </div>
        ),
      },
      {
        id: 'step3',
        label: 'Step 3',
        leftSection: <span>3️⃣</span>,
        disabled: activeTab === 'step1' || activeTab === 'step2',
        children: (
          <div style={{ padding: '16px' }}>
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
          </div>
        ),
      },
    ];
    
    return (
      <div style={{ width: 600 }}>
        <Tabs
          tabs={tabs}
          value={activeTab}
          onTabChange={setActiveTab}
        />
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
        <Tabs
          tabs={[
            {
              id: 'overview',
              label: 'Overview',
              leftSection: <span>📊</span>,
              children: <div style={{ padding: '16px' }}><Text>Dashboard overview with key metrics</Text></div>,
            },
            {
              id: 'analytics',
              label: 'Analytics',
              leftSection: <span>📈</span>,
              rightSection: <Badge variant="filled" color="blue">Live</Badge>,
              children: <div style={{ padding: '16px' }}><Text>Real-time analytics and reports</Text></div>,
            },
            {
              id: 'reports',
              label: 'Reports',
              leftSection: <span>📋</span>,
              children: <div style={{ padding: '16px' }}><Text>Generated reports and exports</Text></div>,
            },
          ]}
          defaultValue="overview"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Settings Panel:</Text>
        <Tabs
          tabs={[
            {
              id: 'general',
              label: 'General',
              leftSection: <span>⚙️</span>,
              children: <div style={{ padding: '16px' }}><Text>General application settings</Text></div>,
            },
            {
              id: 'security',
              label: 'Security',
              leftSection: <span>🔒</span>,
              children: <div style={{ padding: '16px' }}><Text>Security and privacy settings</Text></div>,
            },
            {
              id: 'integrations',
              label: 'Integrations',
              leftSection: <span>🔗</span>,
              rightSection: <Badge variant="outline" color="green">3 Active</Badge>,
              children: <div style={{ padding: '16px' }}><Text>Third-party integrations</Text></div>,
            },
          ]}
          defaultValue="general"
          variant="pills"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Content Categories:</Text>
        <Tabs
          tabs={[
            {
              id: 'all',
              label: 'All Items',
              rightSection: <Badge variant="filled" color="gray">24</Badge>,
              children: <div style={{ padding: '16px' }}><Text>All content items</Text></div>,
            },
            {
              id: 'published',
              label: 'Published',
              rightSection: <Badge variant="filled" color="green">18</Badge>,
              children: <div style={{ padding: '16px' }}><Text>Published content</Text></div>,
            },
            {
              id: 'drafts',
              label: 'Drafts',
              rightSection: <Badge variant="filled" color="yellow">4</Badge>,
              children: <div style={{ padding: '16px' }}><Text>Draft content</Text></div>,
            },
            {
              id: 'archived',
              label: 'Archived',
              rightSection: <Badge variant="filled" color="gray">2</Badge>,
              children: <div style={{ padding: '16px' }}><Text>Archived content</Text></div>,
            },
          ]}
          defaultValue="all"
          variant="outline"
        />
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
  args: {
    orientation: 'horizontal',
    variant: 'default',
    tabs: [
      {
        id: 'tab1',
        label: 'First Tab',
        leftSection: <span>1️⃣</span>,
        children: <div style={{ padding: '16px' }}><Text>First tab content</Text></div>,
      },
      {
        id: 'tab2',
        label: 'Second Tab',
        leftSection: <span>2️⃣</span>,
        rightSection: <Badge variant="filled" color="blue">New</Badge>,
        children: <div style={{ padding: '16px' }}><Text>Second tab content</Text></div>,
      },
      {
        id: 'tab3',
        label: 'Third Tab',
        leftSection: <span>3️⃣</span>,
        disabled: true,
        children: <div style={{ padding: '16px' }}><Text>Third tab content</Text></div>,
      },
    ],
    value: 'tab1',
  },
  render: (args) => {
    const [activeTab, setActiveTab] = useState(args.value || 'tab1');
    
    return (
      <div style={{ width: 600 }}>
        <Tabs
          {...args}
          value={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Tabs and see different combinations.',
      },
    },
  },
}; 