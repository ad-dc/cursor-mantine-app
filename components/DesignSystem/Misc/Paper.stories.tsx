import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { Paper } from './Paper';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';
import { Badge } from '../DataDisplay/Badge';
import { Divider } from './Divider';

const meta: Meta<typeof Paper> = {
  title: 'Design System/Misc/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Paper component for creating elevated surfaces with consistent styling and flexible variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'shadow', 'border', 'border-shadow'],
      description: 'Paper variant - controls shadow and border',
    },
    p: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Paper padding',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Paper border radius',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Title order={4} size="sm" fw={500} mb="xs">Default Paper</Title>
        <Text size="sm">This is a basic paper component with default styling.</Text>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Default (no shadow, no border):</Text>
        <Paper variant="default">
          <Title order={4} size="sm" fw={500} mb="xs">Default Paper</Title>
          <Text size="sm">Basic paper with no shadow or border.</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Shadow:</Text>
        <Paper variant="shadow">
          <Title order={4} size="sm" fw={500} mb="xs">Shadow Paper</Title>
          <Text size="sm">Paper with subtle shadow for elevation.</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Border:</Text>
        <Paper variant="border">
          <Title order={4} size="sm" fw={500} mb="xs">Border Paper</Title>
          <Text size="sm">Paper with border for clear definition.</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Border + Shadow:</Text>
        <Paper variant="border-shadow">
          <Title order={4} size="sm" fw={500} mb="xs">Border + Shadow Paper</Title>
          <Text size="sm">Paper with both border and shadow for maximum definition.</Text>
        </Paper>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the Paper component.',
      },
    },
  },
};

export const WithPadding: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <div>
        <Text size="sm" fw={500} mb="sm">Extra Small Padding (xs):</Text>
        <Paper variant="border" p="xs">
          <Text size="sm">Paper with extra small padding</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Small Padding (sm) - Default:</Text>
        <Paper variant="border" p="sm">
          <Text size="sm">Paper with small padding (default)</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Medium Padding (md):</Text>
        <Paper variant="border" p="md">
          <Text size="sm">Paper with medium padding</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Large Padding (lg):</Text>
        <Paper variant="border" p="lg">
          <Text size="sm">Paper with large padding</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Extra Large Padding (xl):</Text>
        <Paper variant="border" p="xl">
          <Text size="sm">Paper with extra large padding</Text>
        </Paper>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paper component with different padding sizes.',
      },
    },
  },
};

export const WithRadius: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Extra Small Radius (xs):</Text>
        <Paper variant="border-shadow" radius="xs">
          <Text size="sm">Paper with extra small border radius</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Small Radius (sm) - Default:</Text>
        <Paper variant="border-shadow" radius="sm">
          <Text size="sm">Paper with small border radius (default)</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Medium Radius (md):</Text>
        <Paper variant="border-shadow" radius="md">
          <Text size="sm">Paper with medium border radius</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Large Radius (lg):</Text>
        <Paper variant="border-shadow" radius="lg">
          <Text size="sm">Paper with large border radius</Text>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Extra Large Radius (xl):</Text>
        <Paper variant="border-shadow" radius="xl">
          <Text size="sm">Paper with extra large border radius</Text>
        </Paper>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paper component with different border radius sizes.',
      },
    },
  },
};

export const AsCards: Story = {
  render: () => (
    <Group gap="lg" align="flex-start">
      <Paper variant="shadow" style={{ width: 250 }}>
        <Title order={4} size="sm" fw={500} mb="sm">Product Card</Title>
        <div style={{
          width: '100%',
          height: 120,
          backgroundColor: 'var(--mantine-color-gray-1)',
          borderRadius: '4px',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text size="sm" c="dimmed">Product Image</Text>
        </div>
        <Text size="sm" mb="xs">Premium Wireless Headphones</Text>
        <Text size="xs" c="dimmed" mb="sm">High-quality audio with noise cancellation</Text>
        <Group gap="xs" justify="space-between" align="center">
          <Text size="lg" fw={600}>$199.99</Text>
          <Button variant="primary" size="xs">Add to Cart</Button>
        </Group>
      </Paper>
      
      <Paper variant="border" style={{ width: 250 }}>
        <Group gap="xs" justify="space-between" align="flex-start" mb="sm">
          <Title order={4} size="sm" fw={500}>User Profile</Title>
          <Badge variant="filled" color="green">Online</Badge>
        </Group>
        <Group gap="sm" mb="sm">
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'var(--mantine-color-blue-6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: 500
          }}>
            JD
          </div>
          <div>
            <Text size="sm" fw={500}>John Doe</Text>
            <Text size="xs" c="dimmed">Software Engineer</Text>
          </div>
        </Group>
        <Text size="xs" c="dimmed" mb="sm">
          Passionate about creating great user experiences and building scalable applications.
        </Text>
        <Group gap="xs">
          <Button variant="outline" size="xs">View Profile</Button>
          <Button variant="outline" size="xs">Message</Button>
        </Group>
      </Paper>
      
      <Paper variant="border-shadow" style={{ width: 250 }}>
        <Group gap="xs" justify="space-between" align="center" mb="sm">
          <Title order={4} size="sm" fw={500}>Notification</Title>
          <Text size="xs" c="dimmed">2 min ago</Text>
        </Group>
        <Text size="sm" mb="sm">
          Your order #12345 has been shipped and is on its way to your address.
        </Text>
        <Divider mb="sm" />
        <Group gap="xs" justify="flex-end">
          <Button variant="outline" size="xs">Dismiss</Button>
          <Button variant="primary" size="xs">Track Order</Button>
        </Group>
      </Paper>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paper components used as cards for different content types.',
      },
    },
  },
};

export const NestedPapers: Story = {
  render: () => (
    <Paper variant="border-shadow" style={{ width: 500 }} p="lg">
      <Title order={3} size="md" fw={500} mb="lg">Dashboard Overview</Title>
      
      <Stack gap="md">
        <Paper variant="shadow" p="md">
          <Title order={4} size="sm" fw={500} mb="sm">Statistics</Title>
          <Group gap="lg">
            <div>
              <Text size="xl" fw={700} c="blue">1,234</Text>
              <Text size="xs" c="dimmed">Total Users</Text>
            </div>
            <div>
              <Text size="xl" fw={700} c="green">5,678</Text>
              <Text size="xs" c="dimmed">Active Sessions</Text>
            </div>
            <div>
              <Text size="xl" fw={700} c="orange">$12,345</Text>
              <Text size="xs" c="dimmed">Revenue</Text>
            </div>
          </Group>
        </Paper>
        
        <Group gap="md" align="flex-start">
          <Paper variant="border" p="md" style={{ flex: 1 }}>
            <Title order={4} size="sm" fw={500} mb="sm">Recent Activity</Title>
            <Stack gap="xs">
              <Text size="sm">User John Doe logged in</Text>
              <Text size="sm">New order #12345 received</Text>
              <Text size="sm">Payment processed successfully</Text>
            </Stack>
          </Paper>
          
          <Paper variant="border" p="md" style={{ flex: 1 }}>
            <Title order={4} size="sm" fw={500} mb="sm">Quick Actions</Title>
            <Stack gap="xs">
              <Button variant="outline" size="sm" fullWidth>Create User</Button>
              <Button variant="outline" size="sm" fullWidth>Generate Report</Button>
              <Button variant="outline" size="sm" fullWidth>View Analytics</Button>
            </Stack>
          </Paper>
        </Group>
      </Stack>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Nested Paper components for complex layouts and hierarchical content.',
      },
    },
  },
};

export const ContentContainers: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Paper variant="border" p="lg">
        <Title order={3} size="md" fw={500} mb="md">Article Title</Title>
        <Text size="sm" c="dimmed" mb="lg">Published on March 15, 2024 by John Doe</Text>
        
        <Text mb="md">
          This is the introduction paragraph of the article. It provides an overview of what the reader can expect to learn from this content.
        </Text>
        
        <Text mb="md">
          The main body of the article continues here with detailed information, examples, and explanations that help the reader understand the topic better.
        </Text>
        
        <Paper variant="shadow" p="md" mb="md" style={{ backgroundColor: 'var(--mantine-color-blue-0)' }}>
          <Text size="sm" fw={500} mb="xs">💡 Pro Tip</Text>
          <Text size="sm">
            This is a highlighted tip or important information that stands out from the main content.
          </Text>
        </Paper>
        
        <Text mb="lg">
          The article concludes with a summary of the key points and actionable takeaways for the reader.
        </Text>
        
        <Divider mb="md" />
        
        <Group gap="sm">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Design Systems</Badge>
        </Group>
      </Paper>
      
      <Paper variant="shadow" p="md">
        <Group gap="sm" justify="space-between" align="center" mb="sm">
          <Title order={4} size="sm" fw={500}>Comments (3)</Title>
          <Button variant="outline" size="xs">Add Comment</Button>
        </Group>
        
        <Stack gap="sm">
          <Paper variant="border" p="sm">
            <Group gap="xs" mb="xs">
              <Text size="sm" fw={500}>Alice Johnson</Text>
              <Text size="xs" c="dimmed">2 hours ago</Text>
            </Group>
            <Text size="sm">Great article! This really helped me understand the concepts better.</Text>
          </Paper>
          
          <Paper variant="border" p="sm">
            <Group gap="xs" mb="xs">
              <Text size="sm" fw={500}>Bob Smith</Text>
              <Text size="xs" c="dimmed">1 day ago</Text>
            </Group>
            <Text size="sm">Thanks for sharing this. Do you have any examples of implementation?</Text>
          </Paper>
          
          <Paper variant="border" p="sm">
            <Group gap="xs" mb="xs">
              <Text size="sm" fw={500}>Carol Wilson</Text>
              <Text size="xs" c="dimmed">2 days ago</Text>
            </Group>
            <Text size="sm">Excellent explanation! Looking forward to more content like this.</Text>
          </Paper>
        </Stack>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paper components used as content containers for articles, comments, and structured content.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={700}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Form Containers:</Text>
        <Paper variant="border-shadow" p="lg" style={{ maxWidth: 400 }}>
          <Title order={4} size="sm" fw={500} mb="md">Contact Form</Title>
          <Stack gap="md">
            <div>
              <Text size="sm" fw={500} mb="xs">Name</Text>
              <input 
                type="text" 
                placeholder="Enter your name..."
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--mantine-color-gray-3)',
                  borderRadius: '4px'
                }}
              />
            </div>
            <div>
              <Text size="sm" fw={500} mb="xs">Email</Text>
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
            <div>
              <Text size="sm" fw={500} mb="xs">Message</Text>
              <textarea 
                placeholder="Enter your message..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--mantine-color-gray-3)',
                  borderRadius: '4px',
                  resize: 'vertical'
                }}
              />
            </div>
            <Button variant="primary" fullWidth>Send Message</Button>
          </Stack>
        </Paper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Information Panels:</Text>
        <Group gap="md" align="flex-start">
          <Paper variant="shadow" p="md" style={{ width: 200 }}>
            <Title order={4} size="sm" fw={500} mb="sm">System Status</Title>
            <Stack gap="xs">
              <Group gap="xs" justify="space-between">
                <Text size="sm">API</Text>
                <Badge variant="filled" color="green">Online</Badge>
              </Group>
              <Group gap="xs" justify="space-between">
                <Text size="sm">Database</Text>
                <Badge variant="filled" color="green">Online</Badge>
              </Group>
              <Group gap="xs" justify="space-between">
                <Text size="sm">Cache</Text>
                <Badge variant="filled" color="yellow">Warning</Badge>
              </Group>
            </Stack>
          </Paper>
          
          <Paper variant="border" p="md" style={{ width: 200 }}>
            <Title order={4} size="sm" fw={500} mb="sm">Quick Stats</Title>
            <Stack gap="xs">
              <div>
                <Text size="lg" fw={600}>99.9%</Text>
                <Text size="xs" c="dimmed">Uptime</Text>
              </div>
              <div>
                <Text size="lg" fw={600}>1.2s</Text>
                <Text size="xs" c="dimmed">Avg Response</Text>
              </div>
              <div>
                <Text size="lg" fw={600}>15.3k</Text>
                <Text size="xs" c="dimmed">Requests/hour</Text>
              </div>
            </Stack>
          </Paper>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Content Sections:</Text>
        <Paper variant="border" p="lg" style={{ maxWidth: 500 }}>
          <Title order={4} size="sm" fw={500} mb="md">Feature Highlights</Title>
          
          <Stack gap="md">
            <Paper variant="default" p="md" style={{ backgroundColor: 'var(--mantine-color-blue-0)' }}>
              <Text size="sm" fw={500} mb="xs">🚀 Performance</Text>
              <Text size="sm">Lightning-fast loading times and optimized performance.</Text>
            </Paper>
            
            <Paper variant="default" p="md" style={{ backgroundColor: 'var(--mantine-color-green-0)' }}>
              <Text size="sm" fw={500} mb="xs">🔒 Security</Text>
              <Text size="sm">Enterprise-grade security with end-to-end encryption.</Text>
            </Paper>
            
            <Paper variant="default" p="md" style={{ backgroundColor: 'var(--mantine-color-orange-0)' }}>
              <Text size="sm" fw={500} mb="xs">📱 Responsive</Text>
              <Text size="sm">Works perfectly on all devices and screen sizes.</Text>
            </Paper>
          </Stack>
        </Paper>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Paper usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    variant: 'border-shadow',
    p: 'md',
    radius: 'sm',
    children: (
      <div>
        <Title order={4} size="sm" fw={500} mb="xs">Interactive Paper</Title>
        <Text size="sm">Use the controls below to see different Paper configurations.</Text>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Paper and see different combinations.',
      },
    },
  },
}; 