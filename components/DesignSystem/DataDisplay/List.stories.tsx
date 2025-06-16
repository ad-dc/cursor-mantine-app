import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { Stack, Group } from '@mantine/core';
import { Text } from '../Typography/Text';
import { Title } from '../Typography/Title';
import { Badge } from './Badge';
import { ThemeIcon } from './ThemeIcon';
import { IconCheck, IconX, IconArrowRight, IconStar, IconUser, IconSettings } from '@tabler/icons-react';

const meta: Meta<typeof List> = {
  title: 'Design System/Data Display/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible list component built on top of Mantine's List with consistent Design System styling.

**Features:**
- **Size Control**: xs, sm, md, lg, xl sizes
- **Spacing Control**: Configurable spacing between items
- **Icon Support**: Custom icons for list items
- **List Types**: Unordered and ordered lists
- **Compound Component**: List.Item for individual items

**Usage Guidelines:**
- Use for displaying collections of related content
- Consider using ordered lists for sequential information
- Use custom icons to add visual hierarchy
- Keep spacing consistent within related lists
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'List size from design system scale',
    },
    spacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spacing between list items',
    },
    type: {
      control: 'select',
      options: ['unordered', 'ordered'],
      description: 'List type - unordered (bullets) or ordered (numbers)',
    },
    withPadding: {
      control: 'boolean',
      description: 'Add padding to list items',
    },
    listStyleType: {
      control: 'text',
      description: 'CSS list-style-type property',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// ========================== BASIC EXAMPLES ==========================

export const Basic: Story = {
  args: {
    children: (
      <>
        <List.Item>Create a task management system</List.Item>
        <List.Item>Design the user interface components</List.Item>
        <List.Item>Implement the backend API</List.Item>
        <List.Item>Write comprehensive tests</List.Item>
        <List.Item>Deploy to production environment</List.Item>
      </>
    ),
  },
};

export const OrderedList: Story = {
  args: {
    type: 'ordered',
    children: (
      <>
        <List.Item>Install dependencies with npm install</List.Item>
        <List.Item>Configure your environment variables</List.Item>
        <List.Item>Run the development server</List.Item>
        <List.Item>Open your browser to localhost:3000</List.Item>
        <List.Item>Start building your application</List.Item>
      </>
    ),
  },
};

// ========================== SIZE VARIATIONS ==========================

export const AllSizes: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Title order={6} mb="sm">Extra Small (xs)</Title>
        <List size="xs" spacing="xs">
          <List.Item>Extra small list item</List.Item>
          <List.Item>Another small item</List.Item>
          <List.Item>One more small item</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Small (sm)</Title>
        <List size="sm" spacing="sm">
          <List.Item>Small list item</List.Item>
          <List.Item>Another small item</List.Item>
          <List.Item>One more small item</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Medium (md) - Default</Title>
        <List size="md" spacing="md">
          <List.Item>Medium list item</List.Item>
          <List.Item>Another medium item</List.Item>
          <List.Item>One more medium item</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Large (lg)</Title>
        <List size="lg" spacing="lg">
          <List.Item>Large list item</List.Item>
          <List.Item>Another large item</List.Item>
          <List.Item>One more large item</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Extra Large (xl)</Title>
        <List size="xl" spacing="xl">
          <List.Item>Extra large list item</List.Item>
          <List.Item>Another extra large item</List.Item>
          <List.Item>One more extra large item</List.Item>
        </List>
      </div>
    </Stack>
  ),
};

// ========================== WITH ICONS ==========================

export const WithCheckIcons: Story = {
  args: {
    icon: <IconCheck size={16} color="green" />,
    spacing: 'sm',
    children: (
      <>
        <List.Item>Task completed successfully</List.Item>
        <List.Item>All tests are passing</List.Item>
        <List.Item>Code review approved</List.Item>
        <List.Item>Deployment verified</List.Item>
      </>
    ),
  },
};

export const WithCustomIcons: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Title order={6} mb="sm">Success Tasks</Title>
        <List icon={<ThemeIcon size="sm" color="success"><IconCheck size={12} /></ThemeIcon>} spacing="sm">
          <List.Item>Feature implementation completed</List.Item>
          <List.Item>Unit tests written and passing</List.Item>
          <List.Item>Code review approved</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Failed Tasks</Title>
        <List icon={<ThemeIcon size="sm" color="danger"><IconX size={12} /></ThemeIcon>} spacing="sm">
          <List.Item>Build process failed</List.Item>
          <List.Item>Integration tests failing</List.Item>
          <List.Item>Performance benchmarks not met</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Action Items</Title>
        <List icon={<IconArrowRight size={16} color="blue" />} spacing="sm">
          <List.Item>Review pull request #42</List.Item>
          <List.Item>Update documentation</List.Item>
          <List.Item>Schedule team meeting</List.Item>
        </List>
      </div>
    </Stack>
  ),
};

// ========================== COMPLEX CONTENT ==========================

export const WithComplexContent: Story = {
  render: () => (
    <List spacing="md">
      <List.Item>
        <Group justify="space-between" align="flex-start">
          <div>
            <Text fw={500}>User Management System</Text>
            <Text size="sm" c="dimmed">Complete user authentication and authorization</Text>
          </div>
          <Badge color="success">Completed</Badge>
        </Group>
      </List.Item>
      
      <List.Item>
        <Group justify="space-between" align="flex-start">
          <div>
            <Text fw={500}>Payment Integration</Text>
            <Text size="sm" c="dimmed">Integrate Stripe payment processing</Text>
          </div>
          <Badge color="pending">In Progress</Badge>
        </Group>
      </List.Item>
      
      <List.Item>
        <Group justify="space-between" align="flex-start">
          <div>
            <Text fw={500}>Email Notifications</Text>
            <Text size="sm" c="dimmed">Set up automated email workflows</Text>
          </div>
          <Badge color="info">Planned</Badge>
        </Group>
      </List.Item>
      
      <List.Item>
        <Group justify="space-between" align="flex-start">
          <div>
            <Text fw={500}>Mobile App Development</Text>
            <Text size="sm" c="dimmed">Create React Native mobile application</Text>
          </div>
          <Badge color="default">Backlog</Badge>
        </Group>
      </List.Item>
    </List>
  ),
};

export const NestedLists: Story = {
  render: () => (
    <List spacing="sm">
      <List.Item>
        <Text fw={500}>Frontend Development</Text>
        <List mt="xs" ml="md" spacing="xs" withPadding>
          <List.Item>Design system components</List.Item>
          <List.Item>Page layouts and routing</List.Item>
          <List.Item>State management with Redux</List.Item>
        </List>
      </List.Item>
      
      <List.Item>
        <Text fw={500}>Backend Development</Text>
        <List mt="xs" ml="md" spacing="xs" withPadding>
          <List.Item>API endpoint development</List.Item>
          <List.Item>Database schema design</List.Item>
          <List.Item>Authentication middleware</List.Item>
        </List>
      </List.Item>
      
      <List.Item>
        <Text fw={500}>DevOps & Deployment</Text>
        <List mt="xs" ml="md" spacing="xs" withPadding>
          <List.Item>CI/CD pipeline setup</List.Item>
          <List.Item>Container orchestration</List.Item>
          <List.Item>Monitoring and logging</List.Item>
        </List>
      </List.Item>
    </List>
  ),
};

// ========================== SPACING VARIATIONS ==========================

export const SpacingComparison: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Title order={6} mb="sm">Tight Spacing (xs)</Title>
        <List spacing="xs">
          <List.Item>First item with minimal spacing</List.Item>
          <List.Item>Second item very close</List.Item>
          <List.Item>Third item also close</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Comfortable Spacing (md)</Title>
        <List spacing="md">
          <List.Item>First item with comfortable spacing</List.Item>
          <List.Item>Second item well-spaced</List.Item>
          <List.Item>Third item nicely separated</List.Item>
        </List>
      </div>
      
      <div>
        <Title order={6} mb="sm">Generous Spacing (xl)</Title>
        <List spacing="xl">
          <List.Item>First item with generous spacing</List.Item>
          <List.Item>Second item well separated</List.Item>
          <List.Item>Third item with lots of space</List.Item>
        </List>
      </div>
    </Stack>
  ),
};

// ========================== USE CASES ==========================

export const FeatureList: Story = {
  render: () => (
    <List icon={<IconStar size={16} color="gold" />} spacing="sm">
      <List.Item>
        <Text>
          <strong>Real-time collaboration</strong> - Work together with your team in real-time
        </Text>
      </List.Item>
      <List.Item>
        <Text>
          <strong>Version control</strong> - Track changes and maintain history
        </Text>
      </List.Item>
      <List.Item>
        <Text>
          <strong>Advanced security</strong> - Enterprise-grade security features
        </Text>
      </List.Item>
      <List.Item>
        <Text>
          <strong>24/7 support</strong> - Round-the-clock customer support
        </Text>
      </List.Item>
    </List>
  ),
};

export const UserPermissions: Story = {
  render: () => (
    <List spacing="sm">
      <List.Item>
        <Group gap="sm">
          <IconUser size={16} />
          <div>
            <Text fw={500}>Admin Users</Text>
            <Text size="sm" c="dimmed">Full system access and user management</Text>
          </div>
        </Group>
      </List.Item>
      
      <List.Item>
        <Group gap="sm">
          <IconSettings size={16} />
          <div>
            <Text fw={500}>Editors</Text>
            <Text size="sm" c="dimmed">Can create and edit content</Text>
          </div>
        </Group>
      </List.Item>
      
      <List.Item>
        <Group gap="sm">
          <IconCheck size={16} />
          <div>
            <Text fw={500}>Viewers</Text>
            <Text size="sm" c="dimmed">Read-only access to content</Text>
          </div>
        </Group>
      </List.Item>
    </List>
  ),
}; 