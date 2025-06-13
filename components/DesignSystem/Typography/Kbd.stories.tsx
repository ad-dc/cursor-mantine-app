import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { Kbd } from './Kbd';
import { Title } from './Title';
import { Text } from './Text';

const meta: Meta<typeof Kbd> = {
  title: 'Design System/Typography/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Kbd component for displaying keyboard shortcuts and key combinations with consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the keyboard key',
    },
    children: {
      control: 'text',
      description: 'Keyboard key or combination to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '⌘K',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Small (xs):</Text>
        <Kbd size="xs">Esc</Kbd>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Small (sm) - Default:</Text>
        <Kbd size="sm">⌘K</Kbd>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Medium (md):</Text>
        <Kbd size="md">Ctrl+C</Kbd>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Large (lg):</Text>
        <Kbd size="lg">Enter</Kbd>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Large (xl):</Text>
        <Kbd size="xl">Space</Kbd>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes for the Kbd component.',
      },
    },
  },
};

export const CommonKeys: Story = {
  render: () => (
    <Stack gap="md" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Single Keys:</Text>
        <Group gap="sm">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
          <Kbd>Delete</Kbd>
          <Kbd>Backspace</Kbd>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Arrow Keys:</Text>
        <Group gap="sm">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Function Keys:</Text>
        <Group gap="sm">
          <Kbd>F1</Kbd>
          <Kbd>F2</Kbd>
          <Kbd>F5</Kbd>
          <Kbd>F12</Kbd>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Modifier Keys:</Text>
        <Group gap="sm">
          <Kbd>⌘</Kbd>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⇧</Kbd>
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common keyboard keys and modifiers.',
      },
    },
  },
};

export const KeyCombinations: Story = {
  render: () => (
    <Stack gap="md" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Mac Shortcuts:</Text>
        <Group gap="sm">
          <Kbd>⌘C</Kbd>
          <Kbd>⌘V</Kbd>
          <Kbd>⌘Z</Kbd>
          <Kbd>⌘⇧Z</Kbd>
          <Kbd>⌘K</Kbd>
          <Kbd>⌘⇧P</Kbd>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Windows/Linux Shortcuts:</Text>
        <Group gap="sm">
          <Kbd>Ctrl+C</Kbd>
          <Kbd>Ctrl+V</Kbd>
          <Kbd>Ctrl+Z</Kbd>
          <Kbd>Ctrl+Shift+Z</Kbd>
          <Kbd>Ctrl+K</Kbd>
          <Kbd>Ctrl+Shift+P</Kbd>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Editor Shortcuts:</Text>
        <Group gap="sm">
          <Kbd>Ctrl+/</Kbd>
          <Kbd>Ctrl+D</Kbd>
          <Kbd>Ctrl+F</Kbd>
          <Kbd>Ctrl+H</Kbd>
          <Kbd>Alt+↑</Kbd>
          <Kbd>Alt+↓</Kbd>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Browser Shortcuts:</Text>
        <Group gap="sm">
          <Kbd>Ctrl+T</Kbd>
          <Kbd>Ctrl+W</Kbd>
          <Kbd>Ctrl+R</Kbd>
          <Kbd>Ctrl+Shift+T</Kbd>
          <Kbd>F5</Kbd>
          <Kbd>F12</Kbd>
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common keyboard shortcuts and key combinations.',
      },
    },
  },
};

export const InMenuItems: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <div style={{ 
        border: '1px solid var(--mantine-color-gray-3)', 
        borderRadius: '6px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '8px 12px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          cursor: 'pointer'
        }}>
          <Group gap="sm">
            <span>🔍</span>
            <Text size="sm">Search</Text>
          </Group>
          <Kbd size="xs">⌘K</Kbd>
        </div>
        
        <div style={{ 
          padding: '8px 12px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          cursor: 'pointer'
        }}>
          <Group gap="sm">
            <span>📋</span>
            <Text size="sm">Command Palette</Text>
          </Group>
          <Kbd size="xs">⌘⇧P</Kbd>
        </div>
        
        <div style={{ 
          padding: '8px 12px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          cursor: 'pointer'
        }}>
          <Group gap="sm">
            <span>📁</span>
            <Text size="sm">Open File</Text>
          </Group>
          <Kbd size="xs">⌘O</Kbd>
        </div>
        
        <div style={{ 
          padding: '8px 12px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          cursor: 'pointer'
        }}>
          <Group gap="sm">
            <span>💾</span>
            <Text size="sm">Save</Text>
          </Group>
          <Kbd size="xs">⌘S</Kbd>
        </div>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Kbd component used in menu items to show keyboard shortcuts.',
      },
    },
  },
};

export const InInstructions: Story = {
  render: () => (
    <Stack gap="md" w={500}>
      <Text>
        Press <Kbd>⌘K</Kbd> to open the search dialog, or use <Kbd>Ctrl+K</Kbd> on Windows/Linux.
      </Text>
      
      <Text>
        Use <Kbd>Tab</Kbd> to navigate between form fields and <Kbd>Enter</Kbd> to submit.
      </Text>
      
      <Text>
        Copy text with <Kbd>⌘C</Kbd> and paste with <Kbd>⌘V</Kbd>. Use <Kbd>⌘Z</Kbd> to undo changes.
      </Text>
      
      <Text>
        Navigate through your browser history with <Kbd>⌘←</Kbd> and <Kbd>⌘→</Kbd>.
      </Text>
      
      <Text>
        Press <Kbd>Esc</Kbd> to close dialogs or cancel operations.
      </Text>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Kbd component used inline within instructional text.',
      },
    },
  },
};

export const HelpDocumentation: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Navigation</Title>
        <Stack gap="xs">
          <Group gap="md" justify="space-between">
            <Text size="sm">Go to dashboard</Text>
            <Kbd size="xs">G D</Kbd>
          </Group>
          <Group gap="md" justify="space-between">
            <Text size="sm">Go to settings</Text>
            <Kbd size="xs">G S</Kbd>
          </Group>
          <Group gap="md" justify="space-between">
            <Text size="sm">Go to profile</Text>
            <Kbd size="xs">G P</Kbd>
          </Group>
        </Stack>
      </div>
      
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Actions</Title>
        <Stack gap="xs">
          <Group gap="md" justify="space-between">
            <Text size="sm">Create new item</Text>
            <Kbd size="xs">C</Kbd>
          </Group>
          <Group gap="md" justify="space-between">
            <Text size="sm">Edit selected item</Text>
            <Kbd size="xs">E</Kbd>
          </Group>
          <Group gap="md" justify="space-between">
            <Text size="sm">Delete selected item</Text>
            <Kbd size="xs">Del</Kbd>
          </Group>
        </Stack>
      </div>
      
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Search & Filter</Title>
        <Stack gap="xs">
          <Group gap="md" justify="space-between">
            <Text size="sm">Global search</Text>
            <Kbd size="xs">⌘K</Kbd>
          </Group>
          <Group gap="md" justify="space-between">
            <Text size="sm">Filter current view</Text>
            <Kbd size="xs">F</Kbd>
          </Group>
          <Group gap="md" justify="space-between">
            <Text size="sm">Clear filters</Text>
            <Kbd size="xs">⌘⌫</Kbd>
          </Group>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Kbd component used in help documentation and keyboard shortcut guides.',
      },
    },
  },
};

export const GameControls: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Movement</Title>
        <Group gap="sm" justify="center">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', width: 'fit-content' }}>
            <div></div>
            <Kbd>W</Kbd>
            <div></div>
            <Kbd>A</Kbd>
            <Kbd>S</Kbd>
            <Kbd>D</Kbd>
          </div>
        </Group>
        <Text size="sm" ta="center" c="dimmed" mt="xs">
          Use WASD keys to move your character
        </Text>
      </div>
      
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Actions</Title>
        <Group gap="md" justify="space-between">
          <Text size="sm">Jump</Text>
          <Kbd>Space</Kbd>
        </Group>
        <Group gap="md" justify="space-between">
          <Text size="sm">Run</Text>
          <Kbd>Shift</Kbd>
        </Group>
        <Group gap="md" justify="space-between">
          <Text size="sm">Interact</Text>
          <Kbd>E</Kbd>
        </Group>
        <Group gap="md" justify="space-between">
          <Text size="sm">Inventory</Text>
          <Kbd>I</Kbd>
        </Group>
      </div>
      
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Combat</Title>
        <Group gap="md" justify="space-between">
          <Text size="sm">Attack</Text>
          <Kbd>Left Click</Kbd>
        </Group>
        <Group gap="md" justify="space-between">
          <Text size="sm">Block</Text>
          <Kbd>Right Click</Kbd>
        </Group>
        <Group gap="md" justify="space-between">
          <Text size="sm">Special ability</Text>
          <Kbd>Q</Kbd>
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Kbd component used for game controls and interactive applications.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={700}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Application Shortcuts:</Text>
        <Stack gap="sm">
          <Text>
            Open quick search with <Kbd>⌘K</Kbd> or access the command palette using <Kbd>⌘⇧P</Kbd>.
          </Text>
          <Text>
            Save your work with <Kbd>⌘S</Kbd> and create new documents with <Kbd>⌘N</Kbd>.
          </Text>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Form Navigation:</Text>
        <Stack gap="sm">
          <Text>
            Use <Kbd>Tab</Kbd> to move to the next field and <Kbd>Shift+Tab</Kbd> to go back.
          </Text>
          <Text>
            Press <Kbd>Enter</Kbd> to submit the form or <Kbd>Esc</Kbd> to cancel.
          </Text>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Text Editing:</Text>
        <Stack gap="sm">
          <Text>
            Select all text with <Kbd>⌘A</Kbd> and find text using <Kbd>⌘F</Kbd>.
          </Text>
          <Text>
            Undo changes with <Kbd>⌘Z</Kbd> and redo with <Kbd>⌘⇧Z</Kbd>.
          </Text>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Browser Navigation:</Text>
        <Stack gap="sm">
          <Text>
            Open a new tab with <Kbd>⌘T</Kbd> and close it with <Kbd>⌘W</Kbd>.
          </Text>
          <Text>
            Refresh the page using <Kbd>⌘R</Kbd> or open developer tools with <Kbd>F12</Kbd>.
          </Text>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Kbd component usage in different contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: '⌘K',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Kbd component and see different combinations.',
      },
    },
  },
}; 