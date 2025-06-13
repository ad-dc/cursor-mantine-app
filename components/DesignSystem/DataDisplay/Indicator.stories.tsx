import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group, Box } from '@mantine/core';
import { Badge } from '../DataDisplay/Badge';
import { Indicator } from './Indicator';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Avatar } from '../DataDisplay/Avatar';
import { NavLink } from '../Navigation/NavLink';
import { Paper } from '../Misc/Paper';
import { ThemeIcon } from '../DataDisplay/ThemeIcon';
import { RiAccessibilityLine } from '@remixicon/react';
import { Button } from '../Buttons/Button';

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
      control: 'number',
      description: 'Indicator size in pixels',
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
    size: 12,
    children: (
      <Avatar variant="initials" initials="JD" />
    ),
  },
};

export const Types: Story = {
  render: () => (
    <Group gap="xl">
      <Indicator type="default" size={12}>
        <Avatar variant="initials" initials="D" />
      </Indicator>
      <Indicator type="info" size={12}>
        <Avatar variant="initials" initials="I" />
      </Indicator>
      <Indicator type="success" size={12}>
        <Avatar variant="initials" initials="S" />
      </Indicator>
      <Indicator type="danger" size={12}>
        <Avatar variant="initials" initials="D" />
      </Indicator>
      <Indicator type="pending" size={12}>
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
      <Indicator type="info" size={8}>
        <Avatar variant="initials" initials="8px" />
      </Indicator>
      <Indicator type="info" size={12}>
        <Avatar variant="initials" initials="12px" />
      </Indicator>
      <Indicator type="info" size={16}>
        <Avatar variant="initials" initials="16px" />
      </Indicator>
      <Indicator type="info" size={20}>
        <Avatar variant="initials" initials="20px" />
      </Indicator>
      <Indicator type="info" size={24}>
        <Avatar variant="initials" initials="24px" />
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indicator component in different sizes (pixels). Note that all indicators maintain a minimum circular size - they cannot be smaller than a perfect circle.',
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
            <Indicator type="danger" position="top-start" size={12}>
              <Avatar variant="initials" initials="TS" />
            </Indicator>
            <Indicator type="danger" position="top-center" size={12}>
              <Avatar variant="initials" initials="TC" />
            </Indicator>
            <Indicator type="danger" position="top-end" size={12}>
              <Avatar variant="initials" initials="TE" />
            </Indicator>
          </Group>
        </div>
      </Group>
      
      <Group gap="xl">
        <div>
          <Text size="sm" fw={500} mb="sm">Middle Positions:</Text>
          <Group gap="md">
            <Indicator type="success" position="middle-start" size={12}>
              <Avatar variant="initials" initials="MS" />
            </Indicator>
            <Indicator type="success" position="middle-center" size={12}>
              <Avatar variant="initials" initials="MC" />
            </Indicator>
            <Indicator type="success" position="middle-end" size={12}>
              <Avatar variant="initials" initials="ME" />
            </Indicator>
          </Group>
        </div>
      </Group>
      
      <Group gap="xl">
        <div>
          <Text size="sm" fw={500} mb="sm">Bottom Positions:</Text>
          <Group gap="md">
            <Indicator type="info" position="bottom-start" size={12}>
              <Avatar variant="initials" initials="BS" />
            </Indicator>
            <Indicator type="info" position="bottom-center" size={12}>
              <Avatar variant="initials" initials="BC" />
            </Indicator>
            <Indicator type="info" position="bottom-end" size={12}>
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
      <Indicator type="danger" count={1} size={16}>
        <Button variant="outline">Messages</Button>
      </Indicator>
      <Indicator type="danger" count={5} size={18}>
        <Button variant="outline">Notifications</Button>
      </Indicator>
      <Indicator type="danger" count={12} size={20}>
        <Button variant="outline">Alerts</Button>
      </Indicator>
      <Indicator type="danger" count={99} size={22}>
        <Button variant="outline">Updates</Button>
      </Indicator>
      <Indicator type="danger" count={999} size={24}>
        <Button variant="outline">Items</Button>
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indicator with count numbers. When content is added, the indicator becomes pill-shaped with circular ends to accommodate the text while maintaining proper proportions.',
      },
    },
  },
};

export const WithLabels: Story = {
  render: () => (
    <Group gap="xl">
      <Indicator type="success" label="✓" size={16}>
        <Avatar variant="initials" initials="OK" />
      </Indicator>
      <Indicator type="danger" label="!" size={16}>
        <Avatar variant="initials" initials="ER" />
      </Indicator>
      <Indicator type="info" label="i" size={16}>
        <Avatar variant="initials" initials="IN" />
      </Indicator>
      <Indicator type="pending" label="?" size={16}>
        <Avatar variant="initials" initials="UN" />
      </Indicator>
      <Indicator type="info" label="NEW" size={20}>
        <Button variant="outline">Feature</Button>
      </Indicator>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Indicator with custom labels. Single characters remain more circular, while longer text creates a pill shape with rounded ends.',
      },
    },
  },
};

export const WithBorders: Story = {
  render: () => (
    <Stack gap="md">
      <Group gap="xl">
        <Text size="sm" fw={500}>Without Border:</Text>
        <Indicator type="success" size={16}>
          <Avatar variant="initials" initials="NB" />
        </Indicator>
        <Indicator type="danger" count={5} size={16}>
          <Button variant="danger">No Border</Button>
        </Indicator>
      </Group>
      
      <Group gap="xl">
        <Text size="sm" fw={500}>With Border:</Text>
        <Indicator type="success" withBorder size={16}>
          <Avatar variant="initials" initials="WB" />
        </Indicator>
        <Indicator type="danger" count={5} withBorder size={16}>
          <Button variant="primary">With Border</Button>
        </Indicator>
      </Group>
      
      <Group gap="xl">
        <Text size="sm" fw={500}>With Outline:</Text>
        <Indicator type="success" withOutline size={16}>
          <Avatar variant="initials" initials="WO" />
        </Indicator>
        <Indicator type="danger" count={5} withOutline size={16}>
          <Button variant="primary">With Border</Button>
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
      <Indicator type="pending" processing size={12}>
        <Avatar variant="initials" initials="PR" />
      </Indicator>
      <Indicator type="info" processing count={3} size={16}>
        <Button variant="outline">Loading</Button>
      </Indicator>
      <Indicator type="success" processing label="SYNC" size={18}>
        <Button variant="outline">Syncing</Button>
      </Indicator>
      <Indicator type="danger" processing size={12}>
        <ThemeIcon variant="default" size="xxl">
          <RiAccessibilityLine size={40} color="var(--mantine-color-blue-5)" />
        </ThemeIcon>
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
        <Indicator type="info" count={5} size={16}>
          <Button variant="outline">Normal</Button>
        </Indicator>
        <Indicator type="success" size={12}>
          <Avatar variant="initials" initials="N" />
        </Indicator>
      </Group>
      
      <Group gap="xl">
        <Text size="sm" fw={500}>Disabled:</Text>
        <Indicator type="info" count={5} disabled size={16}>
          <Button variant="outline">Disabled</Button>
        </Indicator>
        <Indicator type="success" disabled size={12}>
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
          <Indicator type="danger" count={messageCount} disabled={messageCount === 0} size={16}>
            <Button 
              variant="outline" 
              onClick={() => setMessageCount(prev => Math.max(0, prev - 1))}
            >
              Messages
            </Button>
          </Indicator>
          
          <Indicator type="pending" count={alertCount} disabled={alertCount === 0} size={16}>
            <Button 
              variant="outline"
              onClick={() => setAlertCount(prev => Math.max(0, prev - 1))}
            >
              Alerts
            </Button>
          </Indicator>
          
          <Indicator type="success" disabled={!hasNotification} size={12}>
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
            variant="secondary" 
            onClick={() => setMessageCount(prev => prev + 1)}
          >
            Add Message
          </Button>
          <Button 
            size="xs" 
            variant="secondary" 
            onClick={() => setAlertCount(prev => prev + 1)}
          >
            Add Alert
          </Button>
          <Button 
            size="xs" 
            variant="secondary" 
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
      <Box>
        <Text size="sm" fw={500} mb="sm">1. User Status Indicators:</Text>
        <Group gap="lg">
          <Indicator type="success" label="online" size={20}>
            <Avatar variant="initials" initials="JD" />
          </Indicator>
          <Indicator type="info" label="offline" size={20}>
            <Avatar variant="initials" initials="AS" />
          </Indicator>
          <Indicator type="default" label="disabled" size={20}>
            <Avatar variant="initials" initials="MJ" />
          </Indicator>
        </Group>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">2. Notification Badges:</Text>
        <Group gap="md">
          <Indicator type="danger" count={12} size={18}>
            <Button variant="outline">Inbox</Button>
          </Indicator>
          <Indicator type="info" count={3} size={16}>
            <Button variant="outline">Updates</Button>
          </Indicator>
          <Indicator type="success" label="NEW" size={18}>
            <Button variant="outline">Features</Button>
          </Indicator>
        </Group>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">3. Status Indicators:</Text>
        <Group gap="md">
          <Indicator type="success" label="✓" size={16}>
            <Badge variant="outline" color="success" size="md">
              Completed Task
            </Badge>
          </Indicator>
          <Indicator type="danger" label="!" size={16}>
            <Badge variant="outline" color="danger" size="md">
              Error State
            </Badge>
          </Indicator>
          <Indicator type="pending" processing size={12}>
            <Badge variant="outline" color="pending" size="md">
              Processing
            </Badge>
          </Indicator>
        </Group>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">4. Menu Item Indicators:</Text>
        <Paper w={300} variant="border-shadow">
          <Indicator type="danger" count={5} position="middle-start" size={16}>
            <NavLink label="Messages" />
          </Indicator>
          <Indicator type="info" count={2} position="middle-start" size={16}>
            <NavLink label="Notifications" />
          </Indicator>
          <Indicator type="success" count={7} position="middle-start" size={16}>
            <NavLink label="Trash" />
          </Indicator>
        </Paper>
      </Box>
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


export const MinimumSizeDemo: Story = {
  render: () => (
    <Stack gap="lg">
      <Group gap="xl">
        <Text size="sm" fw={500}>Dots (no content) - Always circular:</Text>
        <Indicator type="danger" size={4}>
          <Avatar variant="initials" initials="T1" />
        </Indicator>
        <Indicator type="success" size={6}>
          <Avatar variant="initials" initials="T2" />
        </Indicator>
        <Indicator type="info" size={8}>
          <Avatar variant="initials" initials="T3" />
        </Indicator>
        <Indicator type="pending" size={12}>
          <Avatar variant="initials" initials="T4" />
        </Indicator>
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of minimum size behavior. Indicators without content are always perfect circles (dots), while indicators with content become pill-shaped with circular ends. The size prop sets the minimum dimensions in pixels, but the indicator cannot be smaller than a circle.',
      },
    },
  },
};


export const Interactive: Story = {
  args: {
    type: 'info',
    size: 12,
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

