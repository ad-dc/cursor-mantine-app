import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { SegmentedControl } from './SegmentedControl';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Design System/Inputs/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SegmentedControl component for selecting between multiple options with a toggle-like interface.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Control size',
    },
    data: {
      control: 'object',
      description: 'Array of segments (strings or objects with label/value)',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Take full width of container',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Control orientation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: ['React', 'Vue', 'Angular'],
    defaultValue: 'React',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" align="center">
      <SegmentedControl size="xs" data={['XS', 'Size']} defaultValue="XS" />
      <SegmentedControl size="sm" data={['Small', 'Size']} defaultValue="Small" />
      <SegmentedControl size="md" data={['Medium', 'Size']} defaultValue="Medium" />
      <SegmentedControl size="lg" data={['Large', 'Size']} defaultValue="Large" />
      <SegmentedControl size="xl" data={['XL', 'Size']} defaultValue="XL" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="lg" align="center">
      <SegmentedControl data={['Default', 'State']} defaultValue="Default" />
      <SegmentedControl data={['Disabled', 'State']} defaultValue="Disabled" disabled />
      <SegmentedControl data={['Full', 'Width']} defaultValue="Full" fullWidth />
    </Stack>
  ),
};

export const Orientations: Story = {
  render: () => (
    <Inline gap="xl" align="start">
      <div>
        <Text size="sm" fw={500} mb="sm">Horizontal (Default)</Text>
        <SegmentedControl 
          data={['Option 1', 'Option 2', 'Option 3']} 
          defaultValue="Option 1"
          orientation="horizontal"
        />
      </div>
      <div>
        <Text size="sm" fw={500} mb="sm">Vertical</Text>
        <SegmentedControl 
          data={['Option A', 'Option B', 'Option C']} 
          defaultValue="Option A"
          orientation="vertical"
        />
      </div>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SegmentedControl can be displayed horizontally or vertically.',
      },
    },
  },
};

export const DataFormats: Story = {
  render: () => (
    <Stack gap="lg" align="center">
      <div>
        <Text size="sm" fw={500} mb="sm">String Array</Text>
        <SegmentedControl 
          data={['First', 'Second', 'Third']} 
          defaultValue="First"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Object Array</Text>
        <SegmentedControl 
          data={[
            { label: 'Home', value: 'home' },
            { label: 'About', value: 'about' },
            { label: 'Contact', value: 'contact' }
          ]} 
          defaultValue="home"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">With Icons (Object)</Text>
        <SegmentedControl 
          data={[
            { label: '📊 Dashboard', value: 'dashboard' },
            { label: '👥 Users', value: 'users' },
            { label: '⚙️ Settings', value: 'settings' }
          ]} 
          defaultValue="dashboard"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SegmentedControl supports different data formats: string arrays and object arrays with custom labels and values.',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [view, setView] = useState('grid');
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    
    return (
      <Stack gap="lg" w={400}>
        <div>
          <Text size="sm" fw={500} mb="sm">View Mode</Text>
          <SegmentedControl
            value={view}
            onChange={setView}
            data={[
              { label: '📋 List', value: 'list' },
              { label: '⊞ Grid', value: 'grid' },
              { label: '📊 Chart', value: 'chart' }
            ]}
            fullWidth
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Theme</Text>
          <SegmentedControl
            value={theme}
            onChange={setTheme}
            data={[
              { label: '☀️ Light', value: 'light' },
              { label: '🌙 Dark', value: 'dark' },
              { label: '🎨 Auto', value: 'auto' }
            ]}
            fullWidth
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Language</Text>
          <SegmentedControl
            value={language}
            onChange={setLanguage}
            data={[
              { label: 'English', value: 'en' },
              { label: 'Español', value: 'es' },
              { label: 'Français', value: 'fr' }
            ]}
            fullWidth
          />
        </div>
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)'
        }}>
          <Text size="sm" fw={500} mb="xs">Current Settings:</Text>
          <Text size="sm">View: {view}</Text>
          <Text size="sm">Theme: {theme}</Text>
          <Text size="sm">Language: {language}</Text>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled SegmentedControl components with state management.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <Stack gap="md">
        <div>
          <Text size="sm" fw={500} mb="sm">Content Type Filter</Text>
          <SegmentedControl
            data={['All', 'Articles', 'Videos', 'Podcasts']}
            defaultValue="All"
            fullWidth
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Time Period</Text>
          <SegmentedControl
            data={[
              { label: 'Today', value: '1d' },
              { label: 'Week', value: '7d' },
              { label: 'Month', value: '30d' },
              { label: 'Year', value: '365d' }
            ]}
            defaultValue="7d"
            fullWidth
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Chart Type</Text>
          <SegmentedControl
            data={[
              { label: '📈 Line', value: 'line' },
              { label: '📊 Bar', value: 'bar' },
              { label: '🥧 Pie', value: 'pie' }
            ]}
            defaultValue="line"
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Priority Level</Text>
          <SegmentedControl
            data={[
              { label: '🟢 Low', value: 'low' },
              { label: '🟡 Medium', value: 'medium' },
              { label: '🔴 High', value: 'high' },
              { label: '🚨 Critical', value: 'critical' }
            ]}
            defaultValue="medium"
            fullWidth
          />
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Status Filter</Text>
          <SegmentedControl
            data={[
              { label: 'Active', value: 'active' },
              { label: 'Pending', value: 'pending' },
              { label: 'Completed', value: 'completed' },
              { label: 'Archived', value: 'archived' }
            ]}
            defaultValue="active"
            fullWidth
          />
        </div>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of SegmentedControl usage in different application contexts.',
      },
    },
  },
};

export const VerticalLayout: Story = {
  render: () => (
    <Inline gap="xl" align="start">
      <div>
        <Text size="sm" fw={500} mb="sm">Navigation Menu</Text>
        <SegmentedControl
          orientation="vertical"
          data={[
            { label: '🏠 Home', value: 'home' },
            { label: '📊 Analytics', value: 'analytics' },
            { label: '👥 Users', value: 'users' },
            { label: '⚙️ Settings', value: 'settings' },
            { label: '❓ Help', value: 'help' }
          ]}
          defaultValue="home"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Sidebar Options</Text>
        <SegmentedControl
          orientation="vertical"
          size="sm"
          data={[
            'Files',
            'Recent',
            'Shared',
            'Trash'
          ]}
          defaultValue="Files"
        />
      </div>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of vertical SegmentedControl layouts for navigation and sidebar use cases.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    data: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'Option 1',
    size: 'md',
    fullWidth: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the SegmentedControl and see different combinations.',
      },
    },
  },
}; 