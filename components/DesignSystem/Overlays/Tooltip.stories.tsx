import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Button as MantineButton, Box } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Tooltip } from './Tooltip';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';
import { ThemeIcon } from '../DataDisplay/ThemeIcon';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tooltip component for displaying contextual information on hover with consistent dark styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top', 'bottom', 'left', 'right',
        'top-start', 'top-end', 'bottom-start', 'bottom-end',
        'left-start', 'left-end', 'right-start', 'right-end'
      ],
      description: 'Tooltip position relative to target',
    },
    label: {
      control: 'text',
      description: 'Tooltip content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether tooltip is disabled',
    },
    openDelay: {
      control: 'number',
      description: 'Delay in ms before showing tooltip',
    },
    closeDelay: {
      control: 'number',
      description: 'Delay in ms before hiding tooltip',
    },
    withArrow: {
      control: 'boolean',
      description: 'Whether to show arrow pointer',
    },
    width: {
      control: 'number',
      description: 'Custom width for tooltip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'This is a helpful tooltip!',
    children: <Button>Hover me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <Stack gap="xl" align="center">
      <Inline gap="xl">
        <Tooltip label="Top Start" position="top-start">
          <Button variant="outline" size="sm">Top Start</Button>
        </Tooltip>
        <Tooltip label="Top" position="top">
          <Button variant="outline" size="sm">Top</Button>
        </Tooltip>
        <Tooltip label="Top End" position="top-end">
          <Button variant="outline" size="sm">Top End</Button>
        </Tooltip>
      </Inline>
      
      <Inline gap="xl">
        <Tooltip label="Left Start" position="left-start">
          <Button variant="outline" size="sm">Left Start</Button>
        </Tooltip>
        <Tooltip label="Left" position="left">
          <Button variant="outline" size="sm">Left</Button>
        </Tooltip>
        <Tooltip label="Left End" position="left-end">
          <Button variant="outline" size="sm">Left End</Button>
        </Tooltip>
      </Inline>
      
      <Inline gap="xl">
        <Tooltip label="Right Start" position="right-start">
          <Button variant="outline" size="sm">Right Start</Button>
        </Tooltip>
        <Tooltip label="Right" position="right">
          <Button variant="outline" size="sm">Right</Button>
        </Tooltip>
        <Tooltip label="Right End" position="right-end">
          <Button variant="outline" size="sm">Right End</Button>
        </Tooltip>
      </Inline>
      
      <Inline gap="xl">
        <Tooltip label="Bottom Start" position="bottom-start">
          <Button variant="outline" size="sm">Bottom Start</Button>
        </Tooltip>
        <Tooltip label="Bottom" position="bottom">
          <Button variant="outline" size="sm">Bottom</Button>
        </Tooltip>
        <Tooltip label="Bottom End" position="bottom-end">
          <Button variant="outline" size="sm">Bottom End</Button>
        </Tooltip>
      </Inline>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different positioning options for the Tooltip component.',
      },
    },
  },
};

export const WithArrow: Story = {
  render: () => (
    <Inline gap="lg">
      <Tooltip label="Tooltip with arrow" withArrow>
        <Button variant="outline">With Arrow</Button>
      </Tooltip>
      <Tooltip label="Tooltip without arrow" withArrow={false}>
        <Button variant="outline">Without Arrow</Button>
      </Tooltip>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips with and without arrow pointers.',
      },
    },
  },
};

export const MultilineContent: Story = {
  render: () => (
    <Inline gap="lg">
      <Tooltip 
        label="This is a short tooltip"
        position="top"
      >
        <Button variant="outline">Short</Button>
      </Tooltip>
      
      <Tooltip 
        label="This is a longer tooltip that will automatically wrap to multiple lines when it gets too long"
        position="top"
        width={200}
      >
        <Button variant="outline">Long (Fixed Width)</Button>
      </Tooltip>
      
      <Tooltip 
        label="This is a very long tooltip that demonstrates automatic wrapping behavior when no width is specified and it reaches the maximum width limit"
        position="top"
      >
        <Button variant="outline">Long (Auto Width)</Button>
      </Tooltip>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips with different content lengths and wrapping behavior.',
      },
    },
  },
};

export const WithDelays: Story = {
  render: () => (
    <Inline gap="lg">
      <Tooltip label="Instant tooltip" openDelay={0} closeDelay={0}>
        <Button variant="outline">Instant</Button>
      </Tooltip>
      
      <Tooltip label="Delayed open (500ms)" openDelay={500} closeDelay={0}>
        <Button variant="outline">Delayed Open</Button>
      </Tooltip>
      
      <Tooltip label="Delayed close (1000ms)" openDelay={0} closeDelay={1000}>
        <Button variant="outline">Delayed Close</Button>
      </Tooltip>
      
      <Tooltip label="Both delays (300ms open, 500ms close)" openDelay={300} closeDelay={500}>
        <Button variant="outline">Both Delays</Button>
      </Tooltip>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips with different open and close delays.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => {
    const [disabled, setDisabled] = useState(false);
    
    return (
      <Stack gap="md" align="center">
        <Inline gap="lg">
          <Tooltip label="This tooltip is enabled" disabled={false}>
            <Button variant="outline">Enabled Tooltip</Button>
          </Tooltip>
          
          <Tooltip label="This tooltip is disabled" disabled={true}>
            <Button variant="outline">Disabled Tooltip</Button>
          </Tooltip>
          
          <Tooltip label="This tooltip can be toggled" disabled={disabled}>
            <Button variant="outline">Toggle Tooltip</Button>
          </Tooltip>
        </Inline>
        
        <MantineButton 
          onClick={() => setDisabled(!disabled)}
          size="sm"
          variant="light"
        >
          {disabled ? 'Enable' : 'Disable'} Toggle Tooltip
        </MantineButton>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltips in enabled and disabled states.',
      },
    },
  },
};

export const DifferentTriggers: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Buttons:</Text>
        <Inline gap="sm">
          <Tooltip label="Primary button tooltip">
            <Button variant="primary" size="sm">Primary</Button>
          </Tooltip>
          <Tooltip label="Outline button tooltip">
            <Button variant="outline" size="sm">Outline</Button>
          </Tooltip>
          <Tooltip label="Default button tooltip">
            <Button variant="default" size="sm">Default</Button>
          </Tooltip>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Icons:</Text>
        <Inline gap="sm">
          <Tooltip label="Info icon">
            <ThemeIcon variant="info" size="sm">
              <span>ℹ</span>
            </ThemeIcon>
          </Tooltip>
          <Tooltip label="Success icon">
            <ThemeIcon variant="success" size="sm">
              <span>✓</span>
            </ThemeIcon>
          </Tooltip>
          <Tooltip label="Warning icon">
            <ThemeIcon variant="warning" size="sm">
              <span>⚠</span>
            </ThemeIcon>
          </Tooltip>
          <Tooltip label="Danger icon">
            <ThemeIcon variant="danger" size="sm">
              <span>✕</span>
            </ThemeIcon>
          </Tooltip>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Text Elements:</Text>
        <Inline gap="sm">
          <Tooltip label="This text has additional context">
            <Text 
              size="sm" 
              style={{ 
                textDecoration: 'underline dotted', 
                cursor: 'help',
                display: 'inline-block'
              }}
            >
              Hover for more info
            </Text>
          </Tooltip>
          
          <Tooltip label="Abbreviated term explanation">
            <Text 
              size="sm" 
              fw={500}
              style={{ 
                borderBottom: '1px dotted var(--mantine-color-gray-5)', 
                cursor: 'help',
                display: 'inline-block'
              }}
            >
              API
            </Text>
          </Tooltip>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Custom Elements:</Text>
        <Inline gap="sm">
          <Tooltip label="Custom box element">
            <Box
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'var(--mantine-color-blue-1)',
                border: '1px solid var(--mantine-color-blue-3)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Text size="sm">?</Text>
            </Box>
          </Tooltip>
          
          <Tooltip label="Another custom element">
            <div
              style={{
                width: 60,
                height: 30,
                backgroundColor: 'var(--mantine-color-green-1)',
                border: '1px solid var(--mantine-color-green-3)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Text size="xs">Hover</Text>
            </div>
          </Tooltip>
        </Inline>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips attached to different types of trigger elements.',
      },
    },
  },
};

export const ContextualTooltips: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <div>
        <Text size="sm" fw={500} mb="sm">Form Field Help:</Text>
        <Inline gap="sm" align="end">
          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500} mb="xs">Password</Text>
            <input 
              type="password" 
              placeholder="Enter password..."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '4px'
              }}
            />
          </div>
          <Tooltip 
            label="Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character"
            width={250}
            position="right"
          >
            <ThemeIcon variant="info" size="sm">
              <span>?</span>
            </ThemeIcon>
          </Tooltip>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Feature Explanations:</Text>
        <Inline gap="md">
          <Tooltip label="Enable two-factor authentication for enhanced security">
            <Text 
              size="sm"
              style={{ 
                textDecoration: 'underline dotted',
                cursor: 'help'
              }}
            >
              2FA Settings
            </Text>
          </Tooltip>
          
          <Tooltip label="Automatically save your work every 30 seconds">
            <Text 
              size="sm"
              style={{ 
                textDecoration: 'underline dotted',
                cursor: 'help'
              }}
            >
              Auto-save
            </Text>
          </Tooltip>
          
          <Tooltip label="Share this document with team members and control their permissions">
            <Text 
              size="sm"
              style={{ 
                textDecoration: 'underline dotted',
                cursor: 'help'
              }}
            >
              Collaboration
            </Text>
          </Tooltip>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Status Indicators:</Text>
        <Inline gap="md">
          <Tooltip label="System is operating normally">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                backgroundColor: 'var(--mantine-color-green-6)' 
              }} />
              <Text size="sm">Online</Text>
            </div>
          </Tooltip>
          
          <Tooltip label="Scheduled maintenance in progress">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                backgroundColor: 'var(--mantine-color-yellow-6)' 
              }} />
              <Text size="sm">Maintenance</Text>
            </div>
          </Tooltip>
          
          <Tooltip label="Service is currently unavailable">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                backgroundColor: 'var(--mantine-color-red-6)' 
              }} />
              <Text size="sm">Offline</Text>
            </div>
          </Tooltip>
        </Inline>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of contextual tooltip usage.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Button Descriptions:</Text>
        <Inline gap="sm">
          <Tooltip label="Save your current work">
            <Button variant="primary" size="sm">Save</Button>
          </Tooltip>
          <Tooltip label="Discard changes and return to previous state">
            <Button variant="outline" size="sm">Cancel</Button>
          </Tooltip>
          <Tooltip label="Delete this item permanently">
            <Button variant="danger" size="sm">Delete</Button>
          </Tooltip>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Icon Explanations:</Text>
        <Inline gap="sm">
          <Tooltip label="Download file">
            <ThemeIcon variant="info" size="sm">
              <span>⬇</span>
            </ThemeIcon>
          </Tooltip>
          <Tooltip label="Share with others">
            <ThemeIcon variant="success" size="sm">
              <span>↗</span>
            </ThemeIcon>
          </Tooltip>
          <Tooltip label="Edit properties">
            <ThemeIcon variant="default" size="sm">
              <span>✎</span>
            </ThemeIcon>
          </Tooltip>
          <Tooltip label="More options">
            <ThemeIcon variant="default" size="sm">
              <span>⋯</span>
            </ThemeIcon>
          </Tooltip>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Truncated Text:</Text>
        <div style={{ width: 200 }}>
          <Tooltip label="This is the full text that was truncated due to space constraints">
            <Text 
              size="sm" 
              truncate
              style={{ cursor: 'help' }}
            >
              This is the full text that was truncated...
            </Text>
          </Tooltip>
        </div>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Form Field Help:</Text>
        <div style={{ maxWidth: 300 }}>
          <Inline gap="xs" align="center" mb="xs">
            <Text size="sm" fw={500}>Email Address</Text>
            <Tooltip label="We'll use this email for account notifications and password recovery">
              <ThemeIcon variant="info" size="xs">
                <span style={{ fontSize: '10px' }}>?</span>
              </ThemeIcon>
            </Tooltip>
          </Inline>
          <input 
            type="email" 
            placeholder="Enter your email..."
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid var(--mantine-color-gray-3)',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">5. Disabled Elements:</Text>
        <Inline gap="sm">
          <Tooltip label="This feature is not available in your current plan">
            <div>
              <Button variant="outline" size="sm" disabled>
                Premium Feature
              </Button>
            </div>
          </Tooltip>
          <Tooltip label="Complete the previous step to enable this action">
            <div>
              <Button variant="primary" size="sm" disabled>
                Next Step
              </Button>
            </div>
          </Tooltip>
        </Inline>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Tooltip usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive tooltip content',
    position: 'top',
    withArrow: true,
    disabled: false,
    openDelay: 0,
    closeDelay: 0,
    children: <Button>Interactive Tooltip</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Tooltip and see different combinations.',
      },
    },
  },
}; 