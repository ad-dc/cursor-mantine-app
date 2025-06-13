import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group, Paper } from '@mantine/core';
import { NavLink } from './NavLink';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Badge } from '../DataDisplay/Badge';
import { ThemeIcon } from '../DataDisplay/ThemeIcon';

const meta: Meta<typeof NavLink> = {
  title: 'Design System/Navigation/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NavLink component for navigation items in menus and sidebars with icons, descriptions, and children indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'NavLink label',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    active: {
      control: 'boolean',
      description: 'Whether the nav item is active',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the nav item is disabled',
    },
    hasChildren: {
      control: 'boolean',
      description: 'Whether this nav item has children (shows chevron)',
    },
    href: {
      control: 'text',
      description: 'Navigation href',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dashboard',
    onClick: () => console.log('Dashboard clicked'),
  },
};

export const WithIcon: Story = {
  render: () => (
    <Stack gap="xs" w={250}>
      <NavLink
        icon={<span>🏠</span>}
        label="Home"
        onClick={() => console.log('Home clicked')}
      />
      <NavLink
        icon={<span>📊</span>}
        label="Analytics"
        onClick={() => console.log('Analytics clicked')}
      />
      <NavLink
        icon={<span>👥</span>}
        label="Users"
        onClick={() => console.log('Users clicked')}
      />
      <NavLink
        icon={<span>⚙️</span>}
        label="Settings"
        onClick={() => console.log('Settings clicked')}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'NavLink components with different icons.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <Stack gap="xs" w={300}>
      <NavLink
        icon={<span>📊</span>}
        label="Dashboard"
        description="Overview and key metrics"
        onClick={() => console.log('Dashboard clicked')}
      />
      <NavLink
        icon={<span>👥</span>}
        label="User Management"
        description="Manage users and permissions"
        onClick={() => console.log('User Management clicked')}
      />
      <NavLink
        icon={<span>📈</span>}
        label="Reports"
        description="Generate and view reports"
        onClick={() => console.log('Reports clicked')}
      />
      <NavLink
        icon={<span>⚙️</span>}
        label="System Settings"
        description="Configure system preferences"
        onClick={() => console.log('System Settings clicked')}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'NavLink components with descriptive text.',
      },
    },
  },
};

export const WithChildren: Story = {
  render: () => (
    <Stack gap="xs" w={250}>
      <NavLink
        icon={<span>📊</span>}
        label="Analytics"
        hasChildren
        onClick={() => console.log('Analytics menu toggled')}
      />
      <NavLink
        icon={<span>👥</span>}
        label="Users"
        description="User management"
        hasChildren
        onClick={() => console.log('Users menu toggled')}
      />
      <NavLink
        icon={<span>🛒</span>}
        label="E-commerce"
        hasChildren
        onClick={() => console.log('E-commerce menu toggled')}
      />
      <NavLink
        icon={<span>⚙️</span>}
        label="Settings"
        description="System configuration"
        hasChildren
        onClick={() => console.log('Settings menu toggled')}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'NavLink components that indicate they have children with chevron arrows.',
      },
    },
  },
};

export const ActiveStates: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    
    const navItems = [
      { id: 'dashboard', icon: '📊', label: 'Dashboard' },
      { id: 'users', icon: '👥', label: 'Users' },
      { id: 'products', icon: '📦', label: 'Products' },
      { id: 'orders', icon: '🛒', label: 'Orders' },
      { id: 'settings', icon: '⚙️', label: 'Settings' },
    ];
    
    return (
      <Stack gap="xs" w={250}>
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            icon={<span>{item.icon}</span>}
            label={item.label}
            active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'NavLink components with active state management.',
      },
    },
  },
};

export const DisabledStates: Story = {
  render: () => (
    <Stack gap="xs" w={250}>
      <NavLink
        icon={<span>📊</span>}
        label="Dashboard"
        onClick={() => console.log('Dashboard clicked')}
      />
      <NavLink
        icon={<span>👥</span>}
        label="Users"
        disabled
        onClick={() => console.log('Users clicked')}
      />
      <NavLink
        icon={<span>📦</span>}
        label="Products"
        description="Manage your products"
        disabled
        onClick={() => console.log('Products clicked')}
      />
      <NavLink
        icon={<span>🛒</span>}
        label="Orders"
        hasChildren
        disabled
        onClick={() => console.log('Orders clicked')}
      />
      <NavLink
        icon={<span>⚙️</span>}
        label="Settings"
        onClick={() => console.log('Settings clicked')}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'NavLink components with disabled states.',
      },
    },
  },
};

export const WithCustomRightSection: Story = {
  render: () => (
    <Stack gap="xs" w={300}>
      <NavLink
        icon={<span>📧</span>}
        label="Messages"
        rightSection={<Badge variant="danger" size="xs">3</Badge>}
        onClick={() => console.log('Messages clicked')}
      />
      <NavLink
        icon={<span>🔔</span>}
        label="Notifications"
        rightSection={<Badge variant="info" size="xs">12</Badge>}
        onClick={() => console.log('Notifications clicked')}
      />
      <NavLink
        icon={<span>📋</span>}
        label="Tasks"
        description="Pending assignments"
        rightSection={<Badge variant="warning" size="xs">5</Badge>}
        onClick={() => console.log('Tasks clicked')}
      />
      <NavLink
        icon={<span>🎯</span>}
        label="Goals"
        rightSection={
          <ThemeIcon size="xs" variant="success">
            <span style={{ fontSize: '8px' }}>✓</span>
          </ThemeIcon>
        }
        onClick={() => console.log('Goals clicked')}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'NavLink components with custom right sections like badges and status indicators.',
      },
    },
  },
};

export const NavigationMenu: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [expandedSections, setExpandedSections] = useState<string[]>(['analytics']);
    
    const toggleSection = (sectionId: string) => {
      setExpandedSections(prev => 
        prev.includes(sectionId) 
          ? prev.filter(id => id !== sectionId)
          : [...prev, sectionId]
      );
    };
    
    return (
      <Paper p="md" w={280} shadow="sm">
        <Stack gap="xs">
          <NavLink
            icon={<span>🏠</span>}
            label="Dashboard"
            active={activeSection === 'dashboard'}
            onClick={() => setActiveSection('dashboard')}
          />
          
          <NavLink
            icon={<span>📊</span>}
            label="Analytics"
            hasChildren
            active={expandedSections.includes('analytics')}
            onClick={() => toggleSection('analytics')}
          />
          
          {expandedSections.includes('analytics') && (
            <Stack gap="xs" pl="lg">
              <NavLink
                label="Overview"
                active={activeSection === 'analytics-overview'}
                onClick={() => setActiveSection('analytics-overview')}
              />
              <NavLink
                label="Traffic"
                active={activeSection === 'analytics-traffic'}
                onClick={() => setActiveSection('analytics-traffic')}
              />
              <NavLink
                label="Conversions"
                active={activeSection === 'analytics-conversions'}
                onClick={() => setActiveSection('analytics-conversions')}
              />
            </Stack>
          )}
          
          <NavLink
            icon={<span>👥</span>}
            label="Users"
            hasChildren
            active={expandedSections.includes('users')}
            onClick={() => toggleSection('users')}
          />
          
          {expandedSections.includes('users') && (
            <Stack gap="xs" pl="lg">
              <NavLink
                label="All Users"
                active={activeSection === 'users-all'}
                onClick={() => setActiveSection('users-all')}
              />
              <NavLink
                label="Roles"
                active={activeSection === 'users-roles'}
                onClick={() => setActiveSection('users-roles')}
              />
              <NavLink
                label="Permissions"
                active={activeSection === 'users-permissions'}
                onClick={() => setActiveSection('users-permissions')}
              />
            </Stack>
          )}
          
          <NavLink
            icon={<span>📦</span>}
            label="Products"
            active={activeSection === 'products'}
            onClick={() => setActiveSection('products')}
          />
          
          <NavLink
            icon={<span>🛒</span>}
            label="Orders"
            rightSection={<Badge variant="info" size="xs">24</Badge>}
            active={activeSection === 'orders'}
            onClick={() => setActiveSection('orders')}
          />
          
          <NavLink
            icon={<span>⚙️</span>}
            label="Settings"
            active={activeSection === 'settings'}
            onClick={() => setActiveSection('settings')}
          />
        </Stack>
      </Paper>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete navigation menu with expandable sections and active state management.',
      },
    },
  },
};

export const SidebarNavigation: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    
    const mainNavItems = [
      { id: 'home', icon: '🏠', label: 'Home' },
      { id: 'explore', icon: '🔍', label: 'Explore' },
      { id: 'library', icon: '📚', label: 'Library' },
      { id: 'favorites', icon: '❤️', label: 'Favorites', badge: '12' },
    ];
    
    const accountItems = [
      { id: 'profile', icon: '👤', label: 'Profile' },
      { id: 'billing', icon: '💳', label: 'Billing' },
      { id: 'preferences', icon: '⚙️', label: 'Preferences' },
    ];
    
    return (
      <Paper p="md" w={260} shadow="sm" h={400}>
        <Stack gap="lg">
          <div>
            <Text size="xs" fw={600} c="dimmed" mb="sm" tt="uppercase">
              Main
            </Text>
            <Stack gap="xs">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.id}
                  icon={<span>{item.icon}</span>}
                  label={item.label}
                  active={activeItem === item.id}
                  rightSection={item.badge ? <Badge variant="info" size="xs">{item.badge}</Badge> : undefined}
                  onClick={() => setActiveItem(item.id)}
                />
              ))}
            </Stack>
          </div>
          
          <div>
            <Text size="xs" fw={600} c="dimmed" mb="sm" tt="uppercase">
              Account
            </Text>
            <Stack gap="xs">
              {accountItems.map((item) => (
                <NavLink
                  key={item.id}
                  icon={<span>{item.icon}</span>}
                  label={item.label}
                  active={activeItem === item.id}
                  onClick={() => setActiveItem(item.id)}
                />
              ))}
            </Stack>
          </div>
          
          <div style={{ marginTop: 'auto' }}>
            <NavLink
              icon={<span>🚪</span>}
              label="Sign Out"
              onClick={() => console.log('Sign out clicked')}
            />
          </div>
        </Stack>
      </Paper>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar navigation with grouped sections and different item types.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Admin Dashboard Navigation:</Text>
        <Paper p="sm" w={250} shadow="xs">
          <Stack gap="xs">
            <NavLink
              icon={<span>📊</span>}
              label="Dashboard"
              description="Overview & metrics"
              active
            />
            <NavLink
              icon={<span>👥</span>}
              label="User Management"
              rightSection={<Badge variant="info" size="xs">142</Badge>}
            />
            <NavLink
              icon={<span>📈</span>}
              label="Analytics"
              hasChildren
            />
            <NavLink
              icon={<span>⚙️</span>}
              label="Settings"
              description="System configuration"
            />
          </Stack>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. E-commerce Navigation:</Text>
        <Paper p="sm" w={250} shadow="xs">
          <Stack gap="xs">
            <NavLink
              icon={<span>🏪</span>}
              label="Store"
              active
            />
            <NavLink
              icon={<span>📦</span>}
              label="Products"
              rightSection={<Badge variant="success" size="xs">234</Badge>}
            />
            <NavLink
              icon={<span>🛒</span>}
              label="Orders"
              rightSection={<Badge variant="warning" size="xs">12</Badge>}
            />
            <NavLink
              icon={<span>👥</span>}
              label="Customers"
              hasChildren
            />
            <NavLink
              icon={<span>📊</span>}
              label="Reports"
              hasChildren
            />
          </Stack>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Content Management:</Text>
        <Paper p="sm" w={250} shadow="xs">
          <Stack gap="xs">
            <NavLink
              icon={<span>📝</span>}
              label="Posts"
              rightSection={<Badge variant="info" size="xs">45</Badge>}
            />
            <NavLink
              icon={<span>📄</span>}
              label="Pages"
              active
            />
            <NavLink
              icon={<span>🏷️</span>}
              label="Categories"
              hasChildren
            />
            <NavLink
              icon={<span>💬</span>}
              label="Comments"
              rightSection={<Badge variant="danger" size="xs">3</Badge>}
            />
            <NavLink
              icon={<span>📁</span>}
              label="Media Library"
              description="Images & files"
            />
          </Stack>
        </Paper>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of NavLink usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive NavLink',
    description: 'Use the controls to modify this NavLink',
    active: false,
    disabled: false,
    hasChildren: false,
    icon: <span>🔗</span>,
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <NavLink {...args} onClick={() => console.log('NavLink clicked')} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the NavLink and see different combinations.',
      },
    },
  },
}; 