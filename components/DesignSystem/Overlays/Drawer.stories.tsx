import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group, Button as MantineButton } from '@mantine/core';
import { Drawer } from './Drawer';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';
import { TextInput } from '../Inputs/TextInput';
import { Switch } from '../Inputs/Switch';
import { Divider } from '../Misc/Divider';

const meta: Meta<typeof Drawer> = {
  title: 'Design System/Overlays/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Drawer component for sliding overlay panels with consistent positioning and sizing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom'],
      description: 'Position of the drawer',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Drawer size',
    },
    title: {
      control: 'text',
      description: 'Drawer title',
    },
    withCloseButton: {
      control: 'boolean',
      description: 'Whether to show close button',
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: 'Whether clicking overlay closes drawer',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing escape closes drawer',
    },
    opened: {
      control: 'boolean',
      description: 'Whether the drawer is open',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Drawer
        </MantineButton>
        
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Default Drawer"
        >
          <Text>This is the default drawer content. It slides in from the right side.</Text>
        </Drawer>
      </>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [openedPosition, setOpenedPosition] = useState<string | null>(null);
    
    const positions = [
      { key: 'top', label: 'Top' },
      { key: 'right', label: 'Right' },
      { key: 'bottom', label: 'Bottom' },
      { key: 'left', label: 'Left' },
    ] as const;
    
    return (
      <>
        <Group gap="sm">
          {positions.map(({ key, label }) => (
            <MantineButton 
              key={key}
              onClick={() => setOpenedPosition(key)}
              variant="outline"
            >
              {label}
            </MantineButton>
          ))}
        </Group>
        
        {positions.map(({ key, label }) => (
          <Drawer
            key={key}
            opened={openedPosition === key}
            onClose={() => setOpenedPosition(null)}
            title={`${label} Drawer`}
            position={key}
          >
            <Text>This drawer slides in from the {label.toLowerCase()} side of the screen.</Text>
          </Drawer>
        ))}
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer component in different positions.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => {
    const [openedSize, setOpenedSize] = useState<string | null>(null);
    
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    
    return (
      <>
        <Group gap="sm">
          {sizes.map(size => (
            <MantineButton 
              key={size}
              onClick={() => setOpenedSize(size)}
              variant="outline"
            >
              {size.toUpperCase()}
            </MantineButton>
          ))}
        </Group>
        
        {sizes.map(size => (
          <Drawer
            key={size}
            opened={openedSize === size}
            onClose={() => setOpenedSize(null)}
            title={`${size.toUpperCase()} Drawer`}
            size={size}
          >
            <Text>
              This is a {size} sized drawer. The width adjusts based on the size prop.
            </Text>
            <Text size="sm" c="dimmed" mt="sm">
              Size: {size} ({size === 'xs' ? '320px' : size === 'sm' ? '400px' : size === 'md' ? '500px' : size === 'lg' ? '600px' : '720px'})
            </Text>
          </Drawer>
        ))}
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different sizes for the Drawer component.',
      },
    },
  },
};

export const NavigationDrawer: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    
    const navigationItems = [
      { id: 'dashboard', label: 'Dashboard', icon: '📊' },
      { id: 'users', label: 'Users', icon: '👥' },
      { id: 'products', label: 'Products', icon: '📦' },
      { id: 'orders', label: 'Orders', icon: '🛒' },
      { id: 'analytics', label: 'Analytics', icon: '📈' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ];
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Navigation
        </MantineButton>
        
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Navigation"
          position="left"
          size="sm"
        >
          <Stack gap="xs">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '12px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--mantine-color-gray-1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onClick={() => {
                  console.log(`Navigate to ${item.label}`);
                  setOpened(false);
                }}
              >
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <Text size="sm">{item.label}</Text>
              </div>
            ))}
          </Stack>
        </Drawer>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer used as a navigation menu.',
      },
    },
  },
};

export const SettingsDrawer: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      showTips: true,
    });
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Settings
        </MantineButton>
        
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Settings"
          position="right"
          size="md"
        >
          <Stack gap="lg">
            <div>
              <Title order={4} size="sm" fw={500} mb="md">Preferences</Title>
              <Stack gap="md">
                <Switch
                  label="Enable notifications"
                  checked={settings.notifications}
                  onChange={(e) => setSettings(prev => ({ ...prev, notifications: e.target.checked }))}
                />
                <Switch
                  label="Dark mode"
                  checked={settings.darkMode}
                  onChange={(e) => setSettings(prev => ({ ...prev, darkMode: e.target.checked }))}
                />
                <Switch
                  label="Auto-save documents"
                  checked={settings.autoSave}
                  onChange={(e) => setSettings(prev => ({ ...prev, autoSave: e.target.checked }))}
                />
                <Switch
                  label="Show helpful tips"
                  checked={settings.showTips}
                  onChange={(e) => setSettings(prev => ({ ...prev, showTips: e.target.checked }))}
                />
              </Stack>
            </div>
            
            <Divider />
            
            <div>
              <Title order={4} size="sm" fw={500} mb="md">Account</Title>
              <Stack gap="md">
                <TextInput
                  label="Display Name"
                  placeholder="Enter display name"
                  defaultValue="John Doe"
                />
                <TextInput
                  label="Email"
                  placeholder="Enter email"
                  defaultValue="john.doe@example.com"
                />
              </Stack>
            </div>
            
            <Divider />
            
            <Group gap="sm" justify="flex-end">
              <Button variant="outline" onClick={() => setOpened(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpened(false)}>
                Save Changes
              </Button>
            </Group>
          </Stack>
        </Drawer>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer used for settings and configuration.',
      },
    },
  },
};

export const FilterDrawer: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    const [filters, setFilters] = useState({
      category: '',
      priceRange: '',
      inStock: false,
      featured: false,
    });
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Filters
        </MantineButton>
        
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Filter Products"
          position="left"
          size="sm"
        >
          <Stack gap="lg">
            <div>
              <Text size="sm" fw={500} mb="xs">Category</Text>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--mantine-color-gray-3)',
                  borderRadius: '4px'
                }}
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
              </select>
            </div>
            
            <div>
              <Text size="sm" fw={500} mb="xs">Price Range</Text>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--mantine-color-gray-3)',
                  borderRadius: '4px'
                }}
              >
                <option value="">Any Price</option>
                <option value="0-25">$0 - $25</option>
                <option value="25-50">$25 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100+">$100+</option>
              </select>
            </div>
            
            <div>
              <Text size="sm" fw={500} mb="sm">Options</Text>
              <Stack gap="sm">
                <Switch
                  label="In stock only"
                  checked={filters.inStock}
                  onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                />
                <Switch
                  label="Featured items"
                  checked={filters.featured}
                  onChange={(e) => setFilters(prev => ({ ...prev, featured: e.target.checked }))}
                />
              </Stack>
            </div>
            
            <Divider />
            
            <Stack gap="sm">
              <Button 
                variant="primary" 
                fullWidth
                onClick={() => {
                  console.log('Applying filters:', filters);
                  setOpened(false);
                }}
              >
                Apply Filters
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                onClick={() => {
                  setFilters({ category: '', priceRange: '', inStock: false, featured: false });
                }}
              >
                Clear All
              </Button>
            </Stack>
          </Stack>
        </Drawer>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer used for filtering and search options.',
      },
    },
  },
};

export const MobileMenuDrawer: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          ☰ Mobile Menu
        </MantineButton>
        
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Menu"
          position="top"
          size="xs"
        >
          <Stack gap="sm">
            <div
              style={{
                padding: '12px 0',
                borderBottom: '1px solid var(--mantine-color-gray-2)',
                cursor: 'pointer'
              }}
              onClick={() => setOpened(false)}
            >
              <Text size="sm" fw={500}>Home</Text>
            </div>
            <div
              style={{
                padding: '12px 0',
                borderBottom: '1px solid var(--mantine-color-gray-2)',
                cursor: 'pointer'
              }}
              onClick={() => setOpened(false)}
            >
              <Text size="sm" fw={500}>Products</Text>
            </div>
            <div
              style={{
                padding: '12px 0',
                borderBottom: '1px solid var(--mantine-color-gray-2)',
                cursor: 'pointer'
              }}
              onClick={() => setOpened(false)}
            >
              <Text size="sm" fw={500}>About</Text>
            </div>
            <div
              style={{
                padding: '12px 0',
                borderBottom: '1px solid var(--mantine-color-gray-2)',
                cursor: 'pointer'
              }}
              onClick={() => setOpened(false)}
            >
              <Text size="sm" fw={500}>Contact</Text>
            </div>
            <div
              style={{
                padding: '12px 0',
                cursor: 'pointer'
              }}
              onClick={() => setOpened(false)}
            >
              <Text size="sm" fw={500}>Support</Text>
            </div>
          </Stack>
        </Drawer>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer used as a mobile menu sliding from the top.',
      },
    },
  },
};

export const DrawerStates: Story = {
  render: () => {
    const [basicOpened, setBasicOpened] = useState(false);
    const [noCloseOpened, setNoCloseOpened] = useState(false);
    const [noOverlayOpened, setNoOverlayOpened] = useState(false);
    
    return (
      <>
        <Group gap="sm">
          <MantineButton onClick={() => setBasicOpened(true)} variant="outline">
            Basic Drawer
          </MantineButton>
          <MantineButton onClick={() => setNoCloseOpened(true)} variant="outline">
            No Close Button
          </MantineButton>
          <MantineButton onClick={() => setNoOverlayOpened(true)} variant="outline">
            No Overlay Close
          </MantineButton>
        </Group>
        
        <Drawer
          opened={basicOpened}
          onClose={() => setBasicOpened(false)}
          title="Basic Drawer"
        >
          <Text>Standard drawer with default settings.</Text>
        </Drawer>
        
        <Drawer
          opened={noCloseOpened}
          onClose={() => setNoCloseOpened(false)}
          title="No Close Button"
          withCloseButton={false}
        >
          <Stack gap="md">
            <Text>This drawer has no close button in the header.</Text>
            <Button variant="primary" onClick={() => setNoCloseOpened(false)}>
              Close Drawer
            </Button>
          </Stack>
        </Drawer>
        
        <Drawer
          opened={noOverlayOpened}
          onClose={() => setNoOverlayOpened(false)}
          title="No Overlay Close"
          closeOnClickOutside={false}
          closeOnEscape={false}
        >
          <Stack gap="md">
            <Text>This drawer cannot be closed by clicking outside or pressing escape.</Text>
            <Button variant="primary" onClick={() => setNoOverlayOpened(false)}>
              Close Drawer
            </Button>
          </Stack>
        </Drawer>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different drawer configurations and states.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => {
    const [cartOpened, setCartOpened] = useState(false);
    const [helpOpened, setHelpOpened] = useState(false);
    const [profileOpened, setProfileOpened] = useState(false);
    
    return (
      <>
        <Stack gap="lg" w={500}>
          <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
          
          <div>
            <Text size="sm" fw={500} mb="sm">1. Shopping Cart:</Text>
            <MantineButton onClick={() => setCartOpened(true)} variant="outline" size="sm">
              🛒 View Cart (3 items)
            </MantineButton>
          </div>
          
          <div>
            <Text size="sm" fw={500} mb="sm">2. Help & Support:</Text>
            <MantineButton onClick={() => setHelpOpened(true)} variant="outline" size="sm">
              ❓ Get Help
            </MantineButton>
          </div>
          
          <div>
            <Text size="sm" fw={500} mb="sm">3. User Profile:</Text>
            <MantineButton onClick={() => setProfileOpened(true)} variant="outline" size="sm">
              👤 Edit Profile
            </MantineButton>
          </div>
        </Stack>
        
        <Drawer
          opened={cartOpened}
          onClose={() => setCartOpened(false)}
          title="Shopping Cart"
          position="right"
          size="md"
        >
          <Stack gap="md">
            <div style={{ padding: '12px', border: '1px solid var(--mantine-color-gray-3)', borderRadius: '6px' }}>
              <Group gap="sm" justify="space-between">
                <Text size="sm" fw={500}>Wireless Headphones</Text>
                <Text size="sm">$199.99</Text>
              </Group>
              <Text size="xs" c="dimmed">Qty: 1</Text>
            </div>
            
            <div style={{ padding: '12px', border: '1px solid var(--mantine-color-gray-3)', borderRadius: '6px' }}>
              <Group gap="sm" justify="space-between">
                <Text size="sm" fw={500}>USB Cable</Text>
                <Text size="sm">$19.99</Text>
              </Group>
              <Text size="xs" c="dimmed">Qty: 2</Text>
            </div>
            
            <Divider />
            
            <Group gap="sm" justify="space-between">
              <Text size="sm" fw={600}>Total:</Text>
              <Text size="sm" fw={600}>$239.97</Text>
            </Group>
            
            <Button variant="primary" fullWidth>
              Proceed to Checkout
            </Button>
          </Stack>
        </Drawer>
        
        <Drawer
          opened={helpOpened}
          onClose={() => setHelpOpened(false)}
          title="Help & Support"
          position="right"
          size="lg"
        >
          <Stack gap="lg">
            <div>
              <Title order={4} size="sm" fw={500} mb="sm">Frequently Asked Questions</Title>
              <Stack gap="sm">
                <Text size="sm" style={{ cursor: 'pointer', color: 'var(--mantine-color-blue-6)' }}>
                  How do I reset my password?
                </Text>
                <Text size="sm" style={{ cursor: 'pointer', color: 'var(--mantine-color-blue-6)' }}>
                  How do I update my billing information?
                </Text>
                <Text size="sm" style={{ cursor: 'pointer', color: 'var(--mantine-color-blue-6)' }}>
                  How do I cancel my subscription?
                </Text>
              </Stack>
            </div>
            
            <Divider />
            
            <div>
              <Title order={4} size="sm" fw={500} mb="sm">Contact Support</Title>
              <Stack gap="md">
                <TextInput label="Subject" placeholder="Describe your issue..." />
                <textarea
                  placeholder="Provide more details..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--mantine-color-gray-3)',
                    borderRadius: '4px',
                    resize: 'vertical'
                  }}
                />
                <Button variant="primary">Send Message</Button>
              </Stack>
            </div>
          </Stack>
        </Drawer>
        
        <Drawer
          opened={profileOpened}
          onClose={() => setProfileOpened(false)}
          title="Edit Profile"
          position="right"
          size="md"
        >
          <Stack gap="lg">
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'var(--mantine-color-blue-6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 500,
                margin: '0 auto 12px'
              }}>
                JD
              </div>
              <Button variant="outline" size="xs">Change Photo</Button>
            </div>
            
            <Stack gap="md">
              <TextInput label="First Name" defaultValue="John" />
              <TextInput label="Last Name" defaultValue="Doe" />
              <TextInput label="Email" defaultValue="john.doe@example.com" />
              <TextInput label="Phone" defaultValue="+1 (555) 123-4567" />
            </Stack>
            
            <Divider />
            
            <Group gap="sm" justify="flex-end">
              <Button variant="outline" onClick={() => setProfileOpened(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setProfileOpened(false)}>
                Save Changes
              </Button>
            </Group>
          </Stack>
        </Drawer>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Drawer usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    opened: false,
    title: 'Interactive Drawer',
    position: 'right',
    size: 'md',
    withCloseButton: true,
    closeOnClickOutside: true,
    closeOnEscape: true,
    children: 'Use the controls below to interact with the Drawer and see different combinations.',
  },
  render: (args) => {
    const [opened, setOpened] = useState(false);
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Interactive Drawer
        </MantineButton>
        
        <Drawer
          {...args}
          opened={opened}
          onClose={() => setOpened(false)}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Drawer and see different combinations.',
      },
    },
  },
}; 