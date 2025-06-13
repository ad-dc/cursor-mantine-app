import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from '../Buttons/Button';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { RiHeartLine, RiShareLine, RiBookmarkLine } from '@remixicon/react';

const meta: Meta<typeof Card> = {
  title: 'Design System/Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component with consistent styling: xs shadow, md padding, border enabled, and sm radius.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    interactive: {
      control: 'boolean',
      description: 'Interactive hover effects',
    },
    children: {
      control: false,
      description: 'Card content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Title order={3} mb="xs">Card Title</Title>
        <Text c="dimmed">
          This is a basic card with consistent design system styling.
        </Text>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', width: '600px' }}>
      <Card 
        interactive 
        onClick={() => alert('Card clicked!')}
      >
        <Title order={4} mb="xs">Interactive Card</Title>
        <Text size="sm">
          Hover over this card to see the interactive effects. Click to trigger action.
        </Text>
      </Card>
      <Card>
        <Title order={4} mb="xs">Static Card</Title>
        <Text size="sm">
          This card has no interactive effects for comparison.
        </Text>
      </Card>
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card style={{ width: '280px' }}>
      <div style={{ 
        height: '160px', 
        backgroundColor: 'var(--mantine-color-gray-1)',
        borderRadius: '4px',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--mantine-color-gray-5)'
      }}>
        Product Image
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <Badge color="success" size="xs">New</Badge>
      </div>
      
      <Title order={3} mb="xs">Wireless Headphones</Title>
      <Text size="sm" c="dimmed" mb="sm">
        Premium noise-cancelling headphones with 30-hour battery life.
      </Text>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Text size="xl" fw={600}>$299</Text>
        <Text size="sm" c="dimmed" td="line-through">$399</Text>
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="sm" style={{ flex: 1 }}>Add to Cart</Button>
        <Button variant="outline" size="sm">
          <RiHeartLine size={16} />
        </Button>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a product card with image, badges, pricing, and actions.',
      },
    },
  },
};

export const UserCard: Story = {
  render: () => (
    <Card style={{ width: '320px' }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          borderRadius: '50%', 
          backgroundColor: 'var(--mantine-color-blue-6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 600
        }}>
          JD
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title order={4}>John Doe</Title>
            <Badge color="success" size="xs">Online</Badge>
          </div>
          <Text size="sm" c="dimmed" mt={4}>
            Senior Developer
          </Text>
        </div>
      </div>
      
      <Text size="sm" mb="md">
        Passionate about creating beautiful and functional user interfaces. 
        5+ years of experience in React and TypeScript.
      </Text>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button size="sm" variant="outline" style={{ flex: 1 }}>Message</Button>
        <Button size="sm" style={{ flex: 1 }}>Connect</Button>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a user profile card with avatar, status, and actions.',
      },
    },
  },
};

export const ArticleCard: Story = {
  render: () => (
    <Card 
      interactive 
      style={{ width: '400px' }}
      onClick={() => console.log('Article clicked')}
    >
      <div style={{ marginBottom: '12px' }}>
        <Badge color="info" size="xs">Technology</Badge>
      </div>
      
      <Title order={3} mb="xs">
        The Future of Web Development
      </Title>
      
      <Text size="sm" c="dimmed" mb="md">
        Exploring the latest trends and technologies that are shaping the future of web development, 
        from AI-powered tools to new frameworks.
      </Text>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size="xs" c="dimmed">By Sarah Johnson</Text>
        <Text size="xs" c="dimmed">5 min read</Text>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--mantine-color-gray-2)' }}>
        <Text size="xs" c="dimmed">March 15, 2024</Text>
        <div style={{ display: 'flex', gap: '8px' }}>
          <RiHeartLine size={16} style={{ color: 'var(--mantine-color-gray-5)' }} />
          <RiShareLine size={16} style={{ color: 'var(--mantine-color-gray-5)' }} />
          <RiBookmarkLine size={16} style={{ color: 'var(--mantine-color-gray-5)' }} />
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of an interactive article card with metadata and actions.',
      },
    },
  },
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '800px' }}>
      <Card>
        <Title order={4} mb="xs">Feature 1</Title>
        <Text size="sm">Consistent styling across all cards</Text>
      </Card>
      <Card>
        <Title order={4} mb="xs">Feature 2</Title>
        <Text size="sm">Fixed padding and shadow</Text>
      </Card>
      <Card>
        <Title order={4} mb="xs">Feature 3</Title>
        <Text size="sm">Always has border and rounded corners</Text>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of cards in a grid layout showing consistent styling.',
      },
    },
  },
};

export const WithCustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', width: '600px' }}>
      <Card style={{ minHeight: '120px' }}>
        <Title order={4} mb="xs">Custom Height</Title>
        <Text size="sm">Card with custom minimum height applied via style prop</Text>
      </Card>
      <Card style={{ width: '200px' }}>
        <Title order={4} mb="xs">Custom Width</Title>
        <Text size="sm">Narrower card with custom width</Text>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards can still be customized with layout properties like width and height while maintaining consistent styling.',
      },
    },
  },
};

export const Interactive_Control: Story = {
  args: {
    children: (
      <div>
        <Title order={3} mb="xs">Interactive Card</Title>
        <Text c="dimmed">
          Use the controls below to toggle interactive behavior.
        </Text>
      </div>
    ),
    interactive: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Card and see the interactive behavior.',
      },
    },
  },
}; 