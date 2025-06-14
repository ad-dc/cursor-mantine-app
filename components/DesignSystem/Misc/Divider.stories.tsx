import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Divider } from './Divider';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';

const meta: Meta<typeof Divider> = {
  title: 'Design System/Misc/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Divider component for visually separating content with consistent styling and flexible orientations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Thickness of the divider',
    },
    label: {
      control: 'text',
      description: 'Optional label text',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Position of the label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <Text>Content above the divider</Text>
      <Divider />
      <Text>Content below the divider</Text>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Small (sm):</Text>
        <Text>Content above</Text>
        <Divider size="sm" />
        <Text>Content below</Text>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Medium (md):</Text>
        <Text>Content above</Text>
        <Divider size="md" />
        <Text>Content below</Text>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Large (lg):</Text>
        <Text>Content above</Text>
        <Divider size="lg" />
        <Text>Content below</Text>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Extra Large (xl):</Text>
        <Text>Content above</Text>
        <Divider size="xl" />
        <Text>Content below</Text>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different thickness sizes for the Divider component.',
      },
    },
  },
};

export const WithLabels: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <div>
        <Text>Section 1 content</Text>
        <Divider label="Section 2" />
        <Text>Section 2 content</Text>
      </div>
      
      <div>
        <Text>Left aligned label:</Text>
        <Divider label="Left Label" labelPosition="left" />
        <Text>Content after left label</Text>
      </div>
      
      <div>
        <Text>Center aligned label:</Text>
        <Divider label="Center Label" labelPosition="center" />
        <Text>Content after center label</Text>
      </div>
      
      <div>
        <Text>Right aligned label:</Text>
        <Divider label="Right Label" labelPosition="right" />
        <Text>Content after right label</Text>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers with labels in different positions.',
      },
    },
  },
};

export const VerticalDividers: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Text size="sm" fw={500} mb="sm">Vertical dividers in horizontal layout:</Text>
        <Inline gap="md" align="center" style={{ height: 60 }}>
          <Text>Item 1</Text>
          <Divider orientation="vertical" />
          <Text>Item 2</Text>
          <Divider orientation="vertical" />
          <Text>Item 3</Text>
          <Divider orientation="vertical" />
          <Text>Item 4</Text>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Different vertical sizes:</Text>
        <Inline gap="lg" align="center" style={{ height: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text size="sm">Small</Text>
            <Divider orientation="vertical" size="sm" />
            <Text size="sm">Text</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text size="sm">Medium</Text>
            <Divider orientation="vertical" size="md" />
            <Text size="sm">Text</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text size="sm">Large</Text>
            <Divider orientation="vertical" size="lg" />
            <Text size="sm">Text</Text>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text size="sm">XL</Text>
            <Divider orientation="vertical" size="xl" />
            <Text size="sm">Text</Text>
          </div>
        </Inline>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical dividers for separating inline content.',
      },
    },
  },
};

export const InCards: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <Box
        style={{
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: 'white'
        }}
      >
        <Title order={4} size="sm" fw={500} mb="sm">Card Title</Title>
        <Text size="sm" mb="md">This is some card content that appears above the divider.</Text>
        
        <Divider />
        
        <Text size="sm" mt="md" mb="md">This content appears below the divider within the same card.</Text>
        
        <Divider label="Actions" />
        
        <Inline gap="sm" mt="md">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="outline" size="sm">Secondary</Button>
        </Inline>
      </Box>
      
      <Box
        style={{
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: 'white'
        }}
      >
        <Inline gap="md" align="flex-start">
          <div style={{ flex: 1 }}>
            <Title order={4} size="sm" fw={500} mb="xs">Left Section</Title>
            <Text size="sm">Content in the left section of the card.</Text>
          </div>
          
          <Divider orientation="vertical" style={{ height: '60px' }} />
          
          <div style={{ flex: 1 }}>
            <Title order={4} size="sm" fw={500} mb="xs">Right Section</Title>
            <Text size="sm">Content in the right section of the card.</Text>
          </div>
        </Inline>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers used within card components to separate sections.',
      },
    },
  },
};

export const InLists: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Simple List with Dividers:</Text>
        <Stack gap="xs">
          <Text size="sm">First item in the list</Text>
          <Divider size="sm" />
          <Text size="sm">Second item in the list</Text>
          <Divider size="sm" />
          <Text size="sm">Third item in the list</Text>
          <Divider size="sm" />
          <Text size="sm">Fourth item in the list</Text>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Grouped List Items:</Text>
        <Stack gap="sm">
          <div>
            <Text size="sm" fw={500}>Group 1</Text>
            <Text size="xs" c="dimmed">Item 1.1</Text>
            <Text size="xs" c="dimmed">Item 1.2</Text>
          </div>
          
          <Divider label="Group 2" labelPosition="left" />
          
          <div>
            <Text size="xs" c="dimmed">Item 2.1</Text>
            <Text size="xs" c="dimmed">Item 2.2</Text>
            <Text size="xs" c="dimmed">Item 2.3</Text>
          </div>
          
          <Divider label="Group 3" labelPosition="left" />
          
          <div>
            <Text size="xs" c="dimmed">Item 3.1</Text>
            <Text size="xs" c="dimmed">Item 3.2</Text>
          </div>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers used to separate items in lists and group related content.',
      },
    },
  },
};

export const InForms: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <Box
        style={{
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: 'white'
        }}
      >
        <Title order={3} size="md" fw={500} mb="lg">User Registration</Title>
        
        <Stack gap="md">
          <div>
            <Text size="sm" fw={500} mb="xs">First Name</Text>
            <input 
              type="text" 
              placeholder="Enter first name..."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div>
            <Text size="sm" fw={500} mb="xs">Last Name</Text>
            <input 
              type="text" 
              placeholder="Enter last name..."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '4px'
              }}
            />
          </div>
        </Stack>
        
        <Divider label="Contact Information" my="lg" />
        
        <Stack gap="md">
          <div>
            <Text size="sm" fw={500} mb="xs">Email</Text>
            <input 
              type="email" 
              placeholder="Enter email address..."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div>
            <Text size="sm" fw={500} mb="xs">Phone</Text>
            <input 
              type="tel" 
              placeholder="Enter phone number..."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '4px'
              }}
            />
          </div>
        </Stack>
        
        <Divider label="Account Settings" my="lg" />
        
        <Stack gap="md">
          <div>
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
          
          <div>
            <Text size="sm" fw={500} mb="xs">Confirm Password</Text>
            <input 
              type="password" 
              placeholder="Confirm password..."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid var(--mantine-color-gray-3)',
                borderRadius: '4px'
              }}
            />
          </div>
        </Stack>
        
        <Divider my="lg" />
        
        <Inline gap="sm" justify="flex-end">
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Create Account</Button>
        </Inline>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers used in forms to separate different sections and group related fields.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Content Sections:</Text>
        <Box
          style={{
            border: '1px solid var(--mantine-color-gray-3)',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white'
          }}
        >
          <Text>Introduction paragraph with important information.</Text>
          <Divider my="md" />
          <Text>Main content section with detailed information.</Text>
          <Divider label="Summary" my="md" />
          <Text>Summary section with key takeaways.</Text>
        </Box>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Navigation Breadcrumbs:</Text>
        <Inline gap="xs" align="center">
          <Text size="sm" style={{ cursor: 'pointer', color: 'var(--mantine-color-blue-6)' }}>Home</Text>
          <Divider orientation="vertical" size="sm" />
          <Text size="sm" style={{ cursor: 'pointer', color: 'var(--mantine-color-blue-6)' }}>Products</Text>
          <Divider orientation="vertical" size="sm" />
          <Text size="sm" style={{ cursor: 'pointer', color: 'var(--mantine-color-blue-6)' }}>Electronics</Text>
          <Divider orientation="vertical" size="sm" />
          <Text size="sm" c="dimmed">Laptop</Text>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Toolbar Separators:</Text>
        <Inline gap="sm" align="center" style={{
          padding: '8px 12px',
          border: '1px solid var(--mantine-color-gray-3)',
          borderRadius: '6px',
          backgroundColor: 'var(--mantine-color-gray-0)'
        }}>
          <Button variant="outline" size="xs">Bold</Button>
          <Button variant="outline" size="xs">Italic</Button>
          <Button variant="outline" size="xs">Underline</Button>
          
          <Divider orientation="vertical" />
          
          <Button variant="outline" size="xs">Left</Button>
          <Button variant="outline" size="xs">Center</Button>
          <Button variant="outline" size="xs">Right</Button>
          
          <Divider orientation="vertical" />
          
          <Button variant="outline" size="xs">Link</Button>
          <Button variant="outline" size="xs">Image</Button>
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Menu Sections:</Text>
        <Box
          style={{
            border: '1px solid var(--mantine-color-gray-3)',
            borderRadius: '8px',
            padding: '8px',
            backgroundColor: 'white',
            width: 200
          }}
        >
          <Stack gap="xs">
            <Text size="sm" style={{ padding: '4px 8px', cursor: 'pointer' }}>New File</Text>
            <Text size="sm" style={{ padding: '4px 8px', cursor: 'pointer' }}>Open File</Text>
            <Text size="sm" style={{ padding: '4px 8px', cursor: 'pointer' }}>Save File</Text>
            
            <Divider size="sm" />
            
            <Text size="sm" style={{ padding: '4px 8px', cursor: 'pointer' }}>Cut</Text>
            <Text size="sm" style={{ padding: '4px 8px', cursor: 'pointer' }}>Copy</Text>
            <Text size="sm" style={{ padding: '4px 8px', cursor: 'pointer' }}>Paste</Text>
            
            <Divider size="sm" />
            
            <Text size="sm" style={{ padding: '4px 8px', cursor: 'pointer', color: 'var(--mantine-color-red-6)' }}>Delete</Text>
          </Stack>
        </Box>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">5. Statistics Dashboard:</Text>
        <Inline gap="lg" align="center">
          <div style={{ textAlign: 'center' }}>
            <Text size="xl" fw={700} c="blue">1,234</Text>
            <Text size="xs" c="dimmed">Users</Text>
          </div>
          
          <Divider orientation="vertical" style={{ height: '40px' }} />
          
          <div style={{ textAlign: 'center' }}>
            <Text size="xl" fw={700} c="green">5,678</Text>
            <Text size="xs" c="dimmed">Orders</Text>
          </div>
          
          <Divider orientation="vertical" style={{ height: '40px' }} />
          
          <div style={{ textAlign: 'center' }}>
            <Text size="xl" fw={700} c="orange">$12,345</Text>
            <Text size="xs" c="dimmed">Revenue</Text>
          </div>
          
          <Divider orientation="vertical" style={{ height: '40px' }} />
          
          <div style={{ textAlign: 'center' }}>
            <Text size="xl" fw={700} c="red">23</Text>
            <Text size="xs" c="dimmed">Issues</Text>
          </div>
        </Inline>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Divider usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    orientation: 'horizontal',
    size: 'sm',
    label: 'Interactive Divider',
    labelPosition: 'center',
  },
  render: (args) => (
    <Stack gap="md" w={400}>
      <Text>Content above the divider</Text>
      <Divider {...args} />
      <Text>Content below the divider</Text>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Divider and see different combinations.',
      },
    },
  },
}; 