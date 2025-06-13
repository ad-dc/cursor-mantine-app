import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { Menu } from './Menu';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';
import { ThemeIcon } from '../DataDisplay/ThemeIcon';

const meta: Meta<typeof Menu> = {
  title: 'Design System/Overlays/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Menu component for displaying dropdown menus with structured sections and consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Menu width',
    },
    shadow: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Menu shadow',
    },
    position: {
      control: 'select',
      options: [
        'bottom', 'bottom-start', 'bottom-end',
        'top', 'top-start', 'top-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end'
      ],
      description: 'Menu position',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu
      trigger={<Button>Open Menu</Button>}
      sections={[
        {
          items: [
            {
              id: 'edit',
              label: 'Edit',
              leftSection: <span>✎</span>,
              onClick: () => console.log('Edit clicked'),
            },
            {
              id: 'copy',
              label: 'Copy',
              leftSection: <span>⧉</span>,
              onClick: () => console.log('Copy clicked'),
            },
            {
              id: 'delete',
              label: 'Delete',
              leftSection: <span>🗑</span>,
              color: 'red',
              onClick: () => console.log('Delete clicked'),
            },
          ],
        },
      ]}
    />
  ),
};

export const WithSections: Story = {
  render: () => (
    <Menu
      trigger={<Button variant="outline">Menu with Sections</Button>}
      sections={[
        {
          title: 'Actions',
          items: [
            {
              id: 'new',
              label: 'New Item',
              leftSection: <span>+</span>,
              onClick: () => console.log('New item'),
            },
            {
              id: 'edit',
              label: 'Edit',
              leftSection: <span>✎</span>,
              onClick: () => console.log('Edit'),
            },
            {
              id: 'duplicate',
              label: 'Duplicate',
              leftSection: <span>⧉</span>,
              onClick: () => console.log('Duplicate'),
            },
          ],
        },
        {
          title: 'View',
          items: [
            {
              id: 'details',
              label: 'View Details',
              leftSection: <span>👁</span>,
              onClick: () => console.log('View details'),
            },
            {
              id: 'history',
              label: 'View History',
              leftSection: <span>📜</span>,
              onClick: () => console.log('View history'),
            },
          ],
        },
        {
          title: 'Danger Zone',
          items: [
            {
              id: 'archive',
              label: 'Archive',
              leftSection: <span>📦</span>,
              onClick: () => console.log('Archive'),
            },
            {
              id: 'delete',
              label: 'Delete',
              leftSection: <span>🗑</span>,
              color: 'red',
              onClick: () => console.log('Delete'),
            },
          ],
        },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with multiple labeled sections and dividers.',
      },
    },
  },
};

export const WithShortcuts: Story = {
  render: () => (
    <Menu
      trigger={<Button variant="outline">Menu with Shortcuts</Button>}
      sections={[
        {
          title: 'File',
          items: [
            {
              id: 'new',
              label: 'New',
              leftSection: <span>📄</span>,
              rightSection: '⌘N',
              onClick: () => console.log('New file'),
            },
            {
              id: 'open',
              label: 'Open',
              leftSection: <span>📂</span>,
              rightSection: '⌘O',
              onClick: () => console.log('Open file'),
            },
            {
              id: 'save',
              label: 'Save',
              leftSection: <span>💾</span>,
              rightSection: '⌘S',
              onClick: () => console.log('Save file'),
            },
          ],
        },
        {
          title: 'Edit',
          items: [
            {
              id: 'undo',
              label: 'Undo',
              leftSection: <span>↶</span>,
              rightSection: '⌘Z',
              onClick: () => console.log('Undo'),
            },
            {
              id: 'redo',
              label: 'Redo',
              leftSection: <span>↷</span>,
              rightSection: '⌘⇧Z',
              onClick: () => console.log('Redo'),
            },
            {
              id: 'find',
              label: 'Find',
              leftSection: <span>🔍</span>,
              rightSection: '⌘F',
              onClick: () => console.log('Find'),
            },
          ],
        },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with keyboard shortcuts displayed in the right section.',
      },
    },
  },
};

export const Positions: Story = {
  render: () => (
    <Stack gap="xl" align="center">
      <Group gap="lg">
        <Menu
          trigger={<Button variant="outline" size="sm">Bottom Start</Button>}
          position="bottom-start"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
        <Menu
          trigger={<Button variant="outline" size="sm">Bottom</Button>}
          position="bottom"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
        <Menu
          trigger={<Button variant="outline" size="sm">Bottom End</Button>}
          position="bottom-end"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
      </Group>
      
      <Group gap="lg">
        <Menu
          trigger={<Button variant="outline" size="sm">Top Start</Button>}
          position="top-start"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
        <Menu
          trigger={<Button variant="outline" size="sm">Top</Button>}
          position="top"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
        <Menu
          trigger={<Button variant="outline" size="sm">Top End</Button>}
          position="top-end"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
      </Group>
      
      <Group gap="lg">
        <Menu
          trigger={<Button variant="outline" size="sm">Left</Button>}
          position="left"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
        <Menu
          trigger={<Button variant="outline" size="sm">Right</Button>}
          position="right"
          sections={[
            {
              items: [
                { id: 'item1', label: 'Item 1', onClick: () => console.log('Item 1') },
                { id: 'item2', label: 'Item 2', onClick: () => console.log('Item 2') },
              ],
            },
          ]}
        />
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different positioning options for the Menu component.',
      },
    },
  },
};

export const WithDisabledItems: Story = {
  render: () => (
    <Menu
      trigger={<Button variant="outline">Menu with Disabled Items</Button>}
      sections={[
        {
          title: 'Available Actions',
          items: [
            {
              id: 'view',
              label: 'View',
              leftSection: <span>👁</span>,
              onClick: () => console.log('View'),
            },
            {
              id: 'edit',
              label: 'Edit',
              leftSection: <span>✎</span>,
              onClick: () => console.log('Edit'),
            },
          ],
        },
        {
          title: 'Restricted Actions',
          items: [
            {
              id: 'share',
              label: 'Share (Premium only)',
              leftSection: <span>↗</span>,
              disabled: true,
              onClick: () => console.log('Share'),
            },
            {
              id: 'export',
              label: 'Export (No permission)',
              leftSection: <span>⬇</span>,
              disabled: true,
              onClick: () => console.log('Export'),
            },
            {
              id: 'delete',
              label: 'Delete (Read-only)',
              leftSection: <span>🗑</span>,
              color: 'red',
              disabled: true,
              onClick: () => console.log('Delete'),
            },
          ],
        },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with disabled items that cannot be clicked.',
      },
    },
  },
};

export const DifferentTriggers: Story = {
  render: () => (
    <Group gap="lg">
      <Menu
        trigger={<Button variant="primary">Primary Button</Button>}
        sections={[
          {
            items: [
              { id: 'action1', label: 'Action 1', onClick: () => console.log('Action 1') },
              { id: 'action2', label: 'Action 2', onClick: () => console.log('Action 2') },
            ],
          },
        ]}
      />
      
      <Menu
        trigger={<Button variant="outline">Outline Button</Button>}
        sections={[
          {
            items: [
              { id: 'action1', label: 'Action 1', onClick: () => console.log('Action 1') },
              { id: 'action2', label: 'Action 2', onClick: () => console.log('Action 2') },
            ],
          },
        ]}
      />
      
      <Menu
        trigger={
          <ThemeIcon variant="default" size="md" style={{ cursor: 'pointer' }}>
            <span>⋯</span>
          </ThemeIcon>
        }
        sections={[
          {
            items: [
              { id: 'action1', label: 'Action 1', onClick: () => console.log('Action 1') },
              { id: 'action2', label: 'Action 2', onClick: () => console.log('Action 2') },
            ],
          },
        ]}
      />
      
      <Menu
        trigger={
          <div style={{
            padding: '8px 12px',
            border: '1px solid var(--mantine-color-gray-3)',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: 'white'
          }}>
            <Text size="sm">Custom Trigger</Text>
          </div>
        }
        sections={[
          {
            items: [
              { id: 'action1', label: 'Action 1', onClick: () => console.log('Action 1') },
              { id: 'action2', label: 'Action 2', onClick: () => console.log('Action 2') },
            ],
          },
        ]}
      />
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with different types of trigger elements.',
      },
    },
  },
};

export const ControlledMenu: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    
    return (
      <Stack gap="md" align="center">
        <Group gap="sm">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setOpened(true)}
          >
            Open Menu
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setOpened(false)}
          >
            Close Menu
          </Button>
        </Group>
        
        <Menu
          trigger={<Button>Controlled Menu</Button>}
          opened={opened}
          onChange={setOpened}
          sections={[
            {
              title: 'Controlled Actions',
              items: [
                {
                  id: 'action1',
                  label: 'Action 1',
                  onClick: () => {
                    console.log('Action 1');
                    setOpened(false);
                  },
                },
                {
                  id: 'action2',
                  label: 'Action 2',
                  onClick: () => {
                    console.log('Action 2');
                    setOpened(false);
                  },
                },
                {
                  id: 'keep-open',
                  label: 'Keep Menu Open',
                  onClick: () => console.log('Menu stays open'),
                },
              ],
            },
          ]}
        />
        
        <Text size="sm" c="dimmed">
          Menu is currently: {opened ? 'Open' : 'Closed'}
        </Text>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with controlled open/close state.',
      },
    },
  },
};

export const ContextMenus: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <div>
        <Text size="sm" fw={500} mb="sm">User Actions:</Text>
        <Group gap="sm">
          <Menu
            trigger={<Button variant="outline" size="sm">John Doe</Button>}
            sections={[
              {
                title: 'Profile',
                items: [
                  {
                    id: 'view-profile',
                    label: 'View Profile',
                    leftSection: <span>👤</span>,
                    onClick: () => console.log('View profile'),
                  },
                  {
                    id: 'edit-profile',
                    label: 'Edit Profile',
                    leftSection: <span>✎</span>,
                    onClick: () => console.log('Edit profile'),
                  },
                ],
              },
              {
                title: 'Communication',
                items: [
                  {
                    id: 'send-message',
                    label: 'Send Message',
                    leftSection: <span>💬</span>,
                    onClick: () => console.log('Send message'),
                  },
                  {
                    id: 'video-call',
                    label: 'Video Call',
                    leftSection: <span>📹</span>,
                    onClick: () => console.log('Video call'),
                  },
                ],
              },
              {
                title: 'Admin',
                items: [
                  {
                    id: 'block-user',
                    label: 'Block User',
                    leftSection: <span>🚫</span>,
                    color: 'red',
                    onClick: () => console.log('Block user'),
                  },
                ],
              },
            ]}
          />
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">File Actions:</Text>
        <Group gap="sm">
          <Menu
            trigger={
              <div style={{
                padding: '12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>📄</span>
                <Text size="sm">document.pdf</Text>
              </div>
            }
            sections={[
              {
                title: 'File Actions',
                items: [
                  {
                    id: 'open',
                    label: 'Open',
                    leftSection: <span>👁</span>,
                    onClick: () => console.log('Open file'),
                  },
                  {
                    id: 'download',
                    label: 'Download',
                    leftSection: <span>⬇</span>,
                    onClick: () => console.log('Download file'),
                  },
                  {
                    id: 'share',
                    label: 'Share',
                    leftSection: <span>↗</span>,
                    onClick: () => console.log('Share file'),
                  },
                ],
              },
              {
                title: 'Edit',
                items: [
                  {
                    id: 'rename',
                    label: 'Rename',
                    leftSection: <span>✎</span>,
                    onClick: () => console.log('Rename file'),
                  },
                  {
                    id: 'move',
                    label: 'Move',
                    leftSection: <span>📁</span>,
                    onClick: () => console.log('Move file'),
                  },
                ],
              },
              {
                title: 'Danger Zone',
                items: [
                  {
                    id: 'delete',
                    label: 'Delete',
                    leftSection: <span>🗑</span>,
                    color: 'red',
                    onClick: () => console.log('Delete file'),
                  },
                ],
              },
            ]}
          />
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Settings Menu:</Text>
        <Group gap="sm">
          <Menu
            trigger={
              <ThemeIcon variant="default" size="lg" style={{ cursor: 'pointer' }}>
                <span>⚙</span>
              </ThemeIcon>
            }
            sections={[
              {
                title: 'Preferences',
                items: [
                  {
                    id: 'general',
                    label: 'General',
                    leftSection: <span>⚙</span>,
                    onClick: () => console.log('General settings'),
                  },
                  {
                    id: 'notifications',
                    label: 'Notifications',
                    leftSection: <span>🔔</span>,
                    onClick: () => console.log('Notification settings'),
                  },
                  {
                    id: 'privacy',
                    label: 'Privacy',
                    leftSection: <span>🔒</span>,
                    onClick: () => console.log('Privacy settings'),
                  },
                ],
              },
              {
                title: 'Account',
                items: [
                  {
                    id: 'profile',
                    label: 'Profile',
                    leftSection: <span>👤</span>,
                    onClick: () => console.log('Profile settings'),
                  },
                  {
                    id: 'billing',
                    label: 'Billing',
                    leftSection: <span>💳</span>,
                    onClick: () => console.log('Billing settings'),
                  },
                ],
              },
              {
                title: 'Support',
                items: [
                  {
                    id: 'help',
                    label: 'Help Center',
                    leftSection: <span>❓</span>,
                    onClick: () => console.log('Help center'),
                  },
                  {
                    id: 'contact',
                    label: 'Contact Support',
                    leftSection: <span>📧</span>,
                    onClick: () => console.log('Contact support'),
                  },
                ],
              },
            ]}
          />
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of context menus for different use cases.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Action Menus:</Text>
        <Group gap="sm">
          <Menu
            trigger={<Button variant="primary" size="sm">Actions</Button>}
            sections={[
              {
                items: [
                  { id: 'create', label: 'Create New', leftSection: <span>+</span> },
                  { id: 'import', label: 'Import', leftSection: <span>⬆</span> },
                  { id: 'export', label: 'Export', leftSection: <span>⬇</span> },
                ],
              },
            ]}
          />
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Dropdown Navigation:</Text>
        <Group gap="sm">
          <Menu
            trigger={<Button variant="outline" size="sm">Products ▼</Button>}
            sections={[
              {
                title: 'Categories',
                items: [
                  { id: 'electronics', label: 'Electronics', onClick: () => console.log('Electronics') },
                  { id: 'clothing', label: 'Clothing', onClick: () => console.log('Clothing') },
                  { id: 'books', label: 'Books', onClick: () => console.log('Books') },
                ],
              },
              {
                title: 'Featured',
                items: [
                  { id: 'new-arrivals', label: 'New Arrivals', onClick: () => console.log('New Arrivals') },
                  { id: 'bestsellers', label: 'Best Sellers', onClick: () => console.log('Best Sellers') },
                  { id: 'sale', label: 'Sale Items', color: 'red', onClick: () => console.log('Sale') },
                ],
              },
            ]}
          />
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. User Account Menu:</Text>
        <Group gap="sm">
          <Menu
            trigger={
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '20px',
                cursor: 'pointer',
                backgroundColor: 'white'
              }}>
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: 'var(--mantine-color-blue-6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px'
                }}>
                  JD
                </div>
                <Text size="sm">John Doe</Text>
                <span style={{ fontSize: '10px' }}>▼</span>
              </div>
            }
            sections={[
              {
                title: 'Account',
                items: [
                  { id: 'profile', label: 'My Profile', leftSection: <span>👤</span> },
                  { id: 'settings', label: 'Settings', leftSection: <span>⚙</span> },
                  { id: 'billing', label: 'Billing', leftSection: <span>💳</span> },
                ],
              },
              {
                title: 'Support',
                items: [
                  { id: 'help', label: 'Help', leftSection: <span>❓</span> },
                  { id: 'feedback', label: 'Feedback', leftSection: <span>💬</span> },
                ],
              },
              {
                items: [
                  { id: 'logout', label: 'Sign Out', leftSection: <span>🚪</span>, color: 'red' },
                ],
              },
            ]}
          />
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. More Options Menu:</Text>
        <Group gap="sm">
          <Menu
            trigger={
              <ThemeIcon variant="default" size="sm" style={{ cursor: 'pointer' }}>
                <span>⋯</span>
              </ThemeIcon>
            }
            sections={[
              {
                items: [
                  { id: 'share', label: 'Share', leftSection: <span>↗</span> },
                  { id: 'bookmark', label: 'Bookmark', leftSection: <span>🔖</span> },
                  { id: 'report', label: 'Report', leftSection: <span>🚩</span>, color: 'red' },
                ],
              },
            ]}
          />
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Menu usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    width: 200,
    shadow: 'md',
    position: 'bottom-start',
    trigger: <Button>Interactive Menu</Button>,
    sections: [
      {
        title: 'Interactive Section',
        items: [
          {
            id: 'item1',
            label: 'Item 1',
            leftSection: <span>1️⃣</span>,
            onClick: () => console.log('Item 1 clicked'),
          },
          {
            id: 'item2',
            label: 'Item 2',
            leftSection: <span>2️⃣</span>,
            onClick: () => console.log('Item 2 clicked'),
          },
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Menu and see different combinations.',
      },
    },
  },
}; 