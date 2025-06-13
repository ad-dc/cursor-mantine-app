import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group, Button } from '@mantine/core';
import { Indicator } from './Indicator';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Avatar } from '../DataDisplay/Avatar';

const meta: Meta<typeof Indicator> = {
  title: 'Design System/Data Display/Indicator',
  component: Indicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Indicator component for showing notifications, status, or supplementary information attached to other elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'info', 'success', 'danger', 'pending'],
      description: 'Semantic indicator type',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Indicator size',
    },
    position: {
      control: 'select',
      options: [
        'top-start', 'top-center', 'top-end',
        'middle-start', 'middle-center', 'middle-end',
        'bottom-start', 'bottom-center', 'bottom-end'
      ],
      description: 'Indicator position',
    },
    count: {
      control: 'number',
      description: 'Number to display in indicator',
    },
    label: {
      control: 'text',
      description: 'Custom label inside indicator',
    },
    withBorder: {
      control: 'boolean',
      description: 'Whether indicator should have border',
    },
    withOutline: {
      control: 'boolean',
      description: 'Whether to show outline variant',
    },
    processing: {
      control: 'boolean',
      description: 'Whether indicator should be animated',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether indicator should be disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'info',
    children: (
      <Avatar variant="initials" initials="JD" />
    ),
  },
};

export const Types: Story = {
  render: () => (
    <Group gap="xl">
      <Indicator type="default">
        <Avatar variant="initials" initials="D" />
      </Indicator>
      <Indicator type="info">
        <Avatar variant="initials" initials="I" />
      </Indicator>
      <Indicator type="success">
        <Avatar variant="initials" initials="S" />
      </Indicator>
      <Indicator type="danger">
        <Avatar variant="initials" initials="D" />
      </Indicator>
      <Indicator type="pending">
        <Avatar variant="initials" initials="P" />
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different semantic types of the Indicator component.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Group gap="xl">
      <Indicator type="info" size="xs">
        <Avatar variant="initials" initials="XS" />
      </Indicator>
      <Indicator type="info" size="sm">
        <Avatar variant="initials" initials="SM" />
      </Indicator>
      <Indicator type="info" size="md">
        <Avatar variant="initials" initials="MD" />
      </Indicator>
      <Indicator type="info" size="lg">
        <Avatar variant="initials" initials="LG" />
      </Indicator>
      <Indicator type="info" size="xl">
        <Avatar variant="initials" initials="XL" />
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indicator component in different sizes.',
      },
    },
  },
};

export const Positions: Story = {
  render: () => (
    <Stack gap="lg">
      <Group gap="xl">
        <div>
          <Text size="sm" fw={500} mb="sm">Top Positions:</Text>
          <Group gap="md">
            <Indicator type="danger" position="top-start">
              <Avatar variant="initials" initials="TS" />
            </Indicator>
            <Indicator type="danger" position="top-center">
              <Avatar variant="initials" initials="TC" />
            </Indicator>
            <Indicator type="danger" position="top-end">
              <Avatar variant="initials" initials="TE" />
            </Indicator>
          </Group>
        </div>
      </Group>
      
      <Group gap="xl">
        <div>
          <Text size="sm" fw={500} mb="sm">Middle Positions:</Text>
          <Group gap="md">
            <Indicator type="success" position="middle-start">
              <Avatar variant="initials" initials="MS" />
            </Indicator>
            <Indicator type="success" position="middle-center">
              <Avatar variant="initials" initials="MC" />
            </Indicator>
            <Indicator type="success" position="middle-end">
              <Avatar variant="initials" initials="ME" />
            </Indicator>
          </Group>
        </div>
      </Group>
      
      <Group gap="xl">
        <div>
          <Text size="sm" fw={500} mb="sm">Bottom Positions:</Text>
          <Group gap="md">
            <Indicator type="info" position="bottom-start">
              <Avatar variant="initials" initials="BS" />
            </Indicator>
            <Indicator type="info" position="bottom-center">
              <Avatar variant="initials" initials="BC" />
            </Indicator>
            <Indicator type="info" position="bottom-end">
              <Avatar variant="initials" initials="BE" />
            </Indicator>
          </Group>
        </div>
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different positioning options for the Indicator component.',
      },
    },
  },
};

export const WithCounts: Story = {
  render: () => (
    <Group gap="xl">
      <Indicator type="danger" count={1}>
        <Button variant="outline">Messages</Button>
      </Indicator>
      <Indicator type="danger" count={5}>
        <Button variant="outline">Notifications</Button>
      </Indicator>
      <Indicator type="danger" count={12}>
        <Button variant="outline">Alerts</Button>
      </Indicator>
      <Indicator type="danger" count={99}>
        <Button variant="outline">Updates</Button>
      </Indicator>
      <Indicator type="danger" count={999}>
        <Button variant="outline">Items</Button>
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indicator with count numbers for showing quantities.',
      },
    },
  },
};

export const WithLabels: Story = {
  render: () => (
    <Group gap="xl">
      <Indicator type="success" label="✓">
        <Avatar variant="initials" initials="OK" />
      </Indicator>
      <Indicator type="danger" label="!">
        <Avatar variant="initials" initials="ER" />
      </Indicator>
      <Indicator type="info" label="i">
        <Avatar variant="initials" initials="IN" />
      </Indicator>
      <Indicator type="pending" label="?">
        <Avatar variant="initials" initials="UN" />
      </Indicator>
      <Indicator type="info" label="NEW">
        <Button variant="outline">Feature</Button>
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indicator with custom labels instead of counts.',
      },
    },
  },
};

export const WithBorders: Story = {
  render: () => (
    <Stack gap="md">
      <Group gap="xl">
        <Text size="sm" fw={500}>Without Border:</Text>
        <Indicator type="success">
          <Avatar variant="initials" initials="NB" />
        </Indicator>
        <Indicator type="danger" count={5}>
          <Button variant="outline">No Border</Button>
        </Indicator>
      </Group>
      
      <Group gap="xl">
        <Text size="sm" fw={500}>With Border:</Text>
        <Indicator type="success" withBorder>
          <Avatar variant="initials" initials="WB" />
        </Indicator>
        <Indicator type="danger" count={5} withBorder>
          <Button variant="outline">With Border</Button>
        </Indicator>
      </Group>
      
      <Group gap="xl">
        <Text size="sm" fw={500}>With Outline:</Text>
        <Indicator type="success" withOutline>
          <Avatar variant="initials" initials="WO" />
        </Indicator>
        <Indicator type="danger" count={5} withOutline>
          <Button variant="outline">With Outline</Button>
        </Indicator>
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indicator with different border and outline styles.',
      },
    },
  },
};

export const ProcessingStates: Story = {
  render: () => (
    <Group gap="xl">
      <Indicator type="pending" processing>
        <Avatar variant="initials" initials="PR" />
      </Indicator>
      <Indicator type="info" processing count={3}>
        <Button variant="outline">Loading</Button>
      </Indicator>
      <Indicator type="success" processing label="SYNC">
        <Button variant="outline">Syncing</Button>
      </Indicator>
      <Indicator type="danger" processing>
        <div style={{ 
          width: 60, 
          height: 60, 
          backgroundColor: 'var(--mantine-color-gray-1)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--mantine-color-gray-3)'
        }}>
          <Text size="sm">Box</Text>
        </div>
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Animated processing indicators for showing active states.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Group gap="xl">
        <Text size="sm" fw={500}>Normal:</Text>
        <Indicator type="info" count={5}>
          <Button variant="outline">Normal</Button>
        </Indicator>
        <Indicator type="success">
          <Avatar variant="initials" initials="N" />
        </Indicator>
      </Group>
      
      <Group gap="xl">
        <Text size="sm" fw={500}>Disabled:</Text>
        <Indicator type="info" count={5} disabled>
          <Button variant="outline">Disabled</Button>
        </Indicator>
        <Indicator type="success" disabled>
          <Avatar variant="initials" initials="D" />
        </Indicator>
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the Indicator component.',
      },
    },
  },
};

export const NotificationExamples: Story = {
  render: () => {
    const [messageCount, setMessageCount] = useState(3);
    const [alertCount, setAlertCount] = useState(1);
    const [hasNotification, setHasNotification] = useState(true);
    
    return (
      <Stack gap="lg" w={400}>
        <Title order={3} size="md" fw={500}>Notification Examples</Title>
        
        <Group gap="md">
          <Indicator type="danger" count={messageCount} disabled={messageCount === 0}>
            <Button 
              variant="outline" 
              onClick={() => setMessageCount(prev => Math.max(0, prev - 1))}
            >
              Messages
            </Button>
          </Indicator>
          
          <Indicator type="pending" count={alertCount} disabled={alertCount === 0}>
            <Button 
              variant="outline"
              onClick={() => setAlertCount(prev => Math.max(0, prev - 1))}
            >
              Alerts
            </Button>
          </Indicator>
          
          <Indicator type="success" disabled={!hasNotification}>
            <Button 
              variant="outline"
              onClick={() => setHasNotification(prev => !prev)}
            >
              Status
            </Button>
          </Indicator>
        </Group>
        
        <Group gap="sm">
          <Button 
            size="xs" 
            variant="light" 
            onClick={() => setMessageCount(prev => prev + 1)}
          >
            Add Message
          </Button>
          <Button 
            size="xs" 
            variant="light" 
            onClick={() => setAlertCount(prev => prev + 1)}
          >
            Add Alert
          </Button>
          <Button 
            size="xs" 
            variant="light" 
            onClick={() => {
              setMessageCount(0);
              setAlertCount(0);
              setHasNotification(false);
            }}
          >
            Clear All
          </Button>
        </Group>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing notification indicators with dynamic counts.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. User Status Indicators:</Text>
        <Group gap="md">
          <Indicator type="success" label="●">
            <Avatar variant="initials" initials="JD" />
          </Indicator>
          <Indicator type="pending" label="●">
            <Avatar variant="initials" initials="AS" />
          </Indicator>
          <Indicator type="default" label="●">
            <Avatar variant="initials" initials="MJ" />
          </Indicator>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Notification Badges:</Text>
        <Group gap="md">
          <Indicator type="danger" count={12}>
            <Button variant="outline">Inbox</Button>
          </Indicator>
          <Indicator type="info" count={3}>
            <Button variant="outline">Updates</Button>
          </Indicator>
          <Indicator type="success" label="NEW">
            <Button variant="outline">Features</Button>
          </Indicator>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Status Indicators:</Text>
        <Group gap="md">
          <Indicator type="success" label="✓">
            <div style={{ 
              padding: '12px', 
              border: '1px solid var(--mantine-color-gray-3)', 
              borderRadius: '8px' 
            }}>
              <Text size="sm">Completed Task</Text>
            </div>
          </Indicator>
          <Indicator type="danger" label="!">
            <div style={{ 
              padding: '12px', 
              border: '1px solid var(--mantine-color-gray-3)', 
              borderRadius: '8px' 
            }}>
              <Text size="sm">Error State</Text>
            </div>
          </Indicator>
          <Indicator type="pending" processing>
            <div style={{ 
              padding: '12px', 
              border: '1px solid var(--mantine-color-gray-3)', 
              borderRadius: '8px' 
            }}>
              <Text size="sm">Processing</Text>
            </div>
          </Indicator>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Menu Item Indicators:</Text>
        <Stack gap="xs" w={200}>
          <Indicator type="danger" count={5} position="middle-end">
            <div style={{ 
              padding: '8px 12px', 
              border: '1px solid var(--mantine-color-gray-3)', 
              borderRadius: '6px',
              width: '100%'
            }}>
              <Text size="sm">Messages</Text>
            </div>
          </Indicator>
          <Indicator type="info" count={2} position="middle-end">
            <div style={{ 
              padding: '8px 12px', 
              border: '1px solid var(--mantine-color-gray-3)', 
              borderRadius: '6px',
              width: '100%'
            }}>
              <Text size="sm">Notifications</Text>
            </div>
          </Indicator>
          <Indicator type="success" label="NEW" position="middle-end">
            <div style={{ 
              padding: '8px 12px', 
              border: '1px solid var(--mantine-color-gray-3)', 
              borderRadius: '6px',
              width: '100%'
            }}>
              <Text size="sm">Features</Text>
            </div>
          </Indicator>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Indicator usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    type: 'info',
    size: 'sm',
    position: 'top-end',
    count: 5,
    withBorder: false,
    processing: false,
    disabled: false,
    children: (
      <Avatar variant="initials" initials="IN" />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Indicator and see different combinations.',
      },
    },
  },
}; 