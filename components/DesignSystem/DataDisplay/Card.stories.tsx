import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Image, Box } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Card } from './Card';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Badge } from '../DataDisplay/Badge';
import { Button } from '../Buttons/Button';
import { RiHeartLine, RiShareLine, RiBookmarkLine, RiSmartphoneFill, RiUserFill } from '@remixicon/react';
import { ThemeIcon } from '../DataDisplay/ThemeIcon';
import { Avatar } from '../DataDisplay/Avatar';

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
      <Stack>
        <Title order={3}>Card Title</Title>
        <Text c="dimmed">
          This is a basic card with consistent design system styling.
        </Text>
      </Stack>
    ),
  },
};

export const Interactive: Story = {
  render: () => (
    <Inline gap="md" align="center">
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
    </Inline>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card style={{ width: '280px' }}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center"
          height={200}
          alt="Wireless Headphones"
          style={{ objectFit: 'cover' }}
        />
      </Card.Section>
      
      <div style={{ marginTop: '12px', marginBottom: '8px' }}>
        <Badge color="success" size="xs">New</Badge>
      </div>
      
      <Title order={3} mb="xs">Wireless Headphones</Title>
      <Text size="sm" c="dimmed" mb="sm">
        Premium noise-cancelling headphones with 30-hour battery life and crystal clear audio.
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
        story: 'Example of a product card with full bleed image using Card.Section, badges, pricing, and actions.',
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

export const HoverEffects: Story = {
  render: () => (
    <Stack gap="md">
      <Card style={{ width: '400px' }}>
        <Title order={4} mb="xs">Static Card</Title>
        <Text size="sm" c="dimmed" mb="md">
          This card has no hover effects. It maintains the default appearance.
        </Text>
        <Badge color="default" size="xs">No Interaction</Badge>
      </Card>
      
      <Card 
        interactive 
        onClick={() => alert('Card clicked!')}
        style={{ width: '400px' }}
      >
        <Title order={4} mb="xs">Interactive Card</Title>
        <Text size="sm" c="dimmed" mb="md">
          This card has hover effects: lift animation, enhanced shadow, and border highlight.
        </Text>
        <Badge color="info" size="xs">Hover & Click Me!</Badge>
      </Card>
      
      <Card 
        interactive 
        onClick={() => console.log('Product card clicked')}
        style={{ width: '400px' }}
      >
        <Inline gap="xs" mb="xs">
          <ThemeIcon size="xxl">
            <RiSmartphoneFill size={40} />
          </ThemeIcon>
          <Box>
            <Title order={5}>iPhone 15 Pro</Title>
            <Text size="sm" c="dimmed">Latest model</Text>
          </Box>
        </Inline>

        <Box>
          <Text size="lg" fw={600} mb="xs">$999</Text>
          <Text size="sm" c="dimmed">Click to view details</Text>
        </Box>
      </Card>
      
      <Card 
        interactive 
        onClick={() => console.log('Profile card clicked')}
        style={{ width: '400px' }}
      >
        <Stack align="center" gap="xs">
          <Avatar size="lg" variant="icon" icon={<RiUserFill size={40} />} />
          <Box style={{ textAlign: 'center' }}>
            <Title order={5}>Alex Smith</Title>
            <Text size="sm" c="dimmed">
              Product Designer
            </Text>
          </Box>
          <Badge color="success" size="sm">Available</Badge>
        </Stack>
      </Card>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of static cards vs interactive cards with hover effects. Interactive cards have: lift animation (translateY), enhanced shadow, border color change, and focus styles for accessibility.',
      },
    },
  },
};

export const WithSections: Story = {
  render: () => (
    <Stack gap="md">
      {/* Card with header section */}
      <Card style={{ width: '400px' }}>
        <Card.Section withBorder inheritPadding py="xs">
          <Inline justify="space-between" align="center">
            <Title order={4} size="sm">Header Section</Title>
            <Badge color="info" size="xs">New</Badge>
          </Inline>
        </Card.Section>
        
        <Text size="sm" mb="md">
          This card has a header section with border and inherited padding. 
          Perfect for card titles with actions.
        </Text>
        
        <Button size="sm" fullWidth>Action</Button>
      </Card>

      {/* Card with landscape image section */}
      <Card style={{ width: '400px' }}>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center"
            height={160}
            alt="Beautiful landscape"
            style={{ objectFit: 'cover' }}
          />
        </Card.Section>
        
        <Title order={4} mt="md" mb="xs">Beautiful Landscape</Title>
        <Text size="sm" c="dimmed">
          Full bleed sections extend to the card edges, perfect for images or hero content.
        </Text>
      </Card>

      {/* Card with footer section */}
      <Card style={{ width: '400px' }}>
        <Title order={4} mb="xs">Article Title</Title>
        <Text size="sm" c="dimmed" mb="md">
          This card demonstrates a footer section with inherited padding and border.
        </Text>
        
        <Card.Section withBorder inheritPadding py="xs">
          <Inline justify="space-between" align="center">
            <Text size="xs" c="dimmed">March 15, 2024</Text>
            <Inline gap="xs">
              <RiHeartLine size={14} />
              <RiShareLine size={14} />
            </Inline>
          </Inline>
        </Card.Section>
      </Card>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of Card.Section functionality: full bleed content, headers with borders, and footers. Use withBorder and inheritPadding props to control section styling.',
      },
    },
  },
}; 