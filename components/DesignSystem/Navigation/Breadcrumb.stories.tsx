import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { Breadcrumb, BackBreadcrumb } from './Breadcrumb';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Design System/Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Breadcrumb component for navigation hierarchies with clickable links and current page indication.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: 'Custom separator between breadcrumb items',
    },
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Smartphones' },
    ],
  },
};

export const SimpleBreadcrumb: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Home', onClick: () => console.log('Navigate to Home') },
        { label: 'Current Page' },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple breadcrumb with just two levels.',
      },
    },
  },
};

export const WithCustomSeparator: Story = {
  render: () => (
    <Stack gap="lg" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Arrow Separator:</Text>
        <Breadcrumb
          separator="→"
          items={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Analytics', href: '/analytics' },
            { label: 'Reports' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Chevron Separator:</Text>
        <Breadcrumb
          separator="›"
          items={[
            { label: 'Settings', href: '/settings' },
            { label: 'Account', href: '/settings/account' },
            { label: 'Profile' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Dot Separator:</Text>
        <Breadcrumb
          separator="•"
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Technology', href: '/blog/technology' },
            { label: 'React Tips' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Pipe Separator:</Text>
        <Breadcrumb
          separator="|"
          items={[
            { label: 'Documentation', href: '/docs' },
            { label: 'Components', href: '/docs/components' },
            { label: 'Breadcrumb' },
          ]}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with different custom separators.',
      },
    },
  },
};

export const DifferentLengths: Story = {
  render: () => (
    <Stack gap="lg" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Two Levels:</Text>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Three Levels:</Text>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Laptops' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Four Levels:</Text>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Categories', href: '/categories' },
            { label: 'Electronics', href: '/categories/electronics' },
            { label: 'Smartphones' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Five Levels:</Text>
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Projects', href: '/projects' },
            { label: 'Web App', href: '/projects/webapp' },
            { label: 'Components', href: '/projects/webapp/components' },
            { label: 'Navigation' },
          ]}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs with different numbers of levels.',
      },
    },
  },
};

export const InteractiveBreadcrumb: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = useState(['Home', 'Products', 'Electronics', 'Smartphones']);
    
    const navigateToLevel = (index: number) => {
      setCurrentPath(prev => prev.slice(0, index + 1));
    };
    
    const breadcrumbItems = currentPath.map((item, index) => ({
      label: item,
      onClick: index < currentPath.length - 1 ? () => navigateToLevel(index) : undefined,
    }));
    
    return (
      <Stack gap="md" align="flex-start">
        <Breadcrumb items={breadcrumbItems} />
        <Text size="sm" c="dimmed">
          Click on any breadcrumb item to navigate back to that level
        </Text>
        <Text size="sm">
          Current path: {currentPath.join(' / ')}
        </Text>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive breadcrumb that responds to clicks and updates the navigation path.',
      },
    },
  },
};

export const BackBreadcrumbs: Story = {
  render: () => (
    <Stack gap="lg" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Default Back Button:</Text>
        <BackBreadcrumb onClick={() => console.log('Navigate back')} />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Custom Label:</Text>
        <BackBreadcrumb 
          label="Back to Products" 
          onClick={() => console.log('Back to products')} 
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">With Href:</Text>
        <BackBreadcrumb 
          label="Back to Dashboard" 
          href="/dashboard" 
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Long Label:</Text>
        <BackBreadcrumb 
          label="Back to User Management Settings" 
          onClick={() => console.log('Back to user management')} 
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'BackBreadcrumb component variations with different labels and navigation methods.',
      },
    },
  },
};

export const EcommerceBreadcrumbs: Story = {
  render: () => (
    <Stack gap="lg" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Product Category Navigation:</Text>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Electronics', href: '/electronics' },
            { label: 'Computers', href: '/electronics/computers' },
            { label: 'Laptops', href: '/electronics/computers/laptops' },
            { label: 'MacBook Pro 16"' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Shopping Cart Flow:</Text>
        <Breadcrumb
          items={[
            { label: 'Cart', href: '/cart' },
            { label: 'Shipping', href: '/checkout/shipping' },
            { label: 'Payment', href: '/checkout/payment' },
            { label: 'Review Order' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Account Management:</Text>
        <Breadcrumb
          items={[
            { label: 'My Account', href: '/account' },
            { label: 'Orders', href: '/account/orders' },
            { label: 'Order #12345' },
          ]}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'E-commerce specific breadcrumb examples.',
      },
    },
  },
};

export const AdminDashboardBreadcrumbs: Story = {
  render: () => (
    <Stack gap="lg" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">User Management:</Text>
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/admin' },
            { label: 'Users', href: '/admin/users' },
            { label: 'Edit User', href: '/admin/users/edit' },
            { label: 'John Doe' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Content Management:</Text>
        <Breadcrumb
          items={[
            { label: 'Admin', href: '/admin' },
            { label: 'Content', href: '/admin/content' },
            { label: 'Blog Posts', href: '/admin/content/blog' },
            { label: 'Create New Post' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">System Settings:</Text>
        <Breadcrumb
          items={[
            { label: 'Dashboard', href: '/admin' },
            { label: 'Settings', href: '/admin/settings' },
            { label: 'Security', href: '/admin/settings/security' },
            { label: 'API Keys' },
          ]}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Admin dashboard breadcrumb examples.',
      },
    },
  },
};

export const DocumentationBreadcrumbs: Story = {
  render: () => (
    <Stack gap="lg" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">API Documentation:</Text>
        <Breadcrumb
          separator="›"
          items={[
            { label: 'Docs', href: '/docs' },
            { label: 'API Reference', href: '/docs/api' },
            { label: 'Authentication', href: '/docs/api/auth' },
            { label: 'OAuth 2.0' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Component Library:</Text>
        <Breadcrumb
          separator="›"
          items={[
            { label: 'Documentation', href: '/docs' },
            { label: 'Components', href: '/docs/components' },
            { label: 'Navigation', href: '/docs/components/navigation' },
            { label: 'Breadcrumb' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Tutorial Series:</Text>
        <Breadcrumb
          separator="›"
          items={[
            { label: 'Learn', href: '/learn' },
            { label: 'React Basics', href: '/learn/react' },
            { label: 'Components', href: '/learn/react/components' },
            { label: 'Props and State' },
          ]}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Documentation and learning platform breadcrumb examples.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={700}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. File System Navigation:</Text>
        <Breadcrumb
          separator="/"
          items={[
            { label: 'Documents', href: '/documents' },
            { label: 'Projects', href: '/documents/projects' },
            { label: 'Website', href: '/documents/projects/website' },
            { label: 'src', href: '/documents/projects/website/src' },
            { label: 'components' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Multi-step Process:</Text>
        <Breadcrumb
          items={[
            { label: 'Account Setup', href: '/signup' },
            { label: 'Personal Info', href: '/signup/personal' },
            { label: 'Verification', href: '/signup/verify' },
            { label: 'Complete' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Content Hierarchy:</Text>
        <Breadcrumb
          items={[
            { label: 'Knowledge Base', href: '/kb' },
            { label: 'Getting Started', href: '/kb/getting-started' },
            { label: 'Installation Guide' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Back Navigation:</Text>
        <Group gap="lg">
          <BackBreadcrumb 
            label="Back to Search Results" 
            onClick={() => console.log('Back to search')} 
          />
          <BackBreadcrumb 
            label="Back" 
            onClick={() => console.log('Go back')} 
          />
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Breadcrumb usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Current Page' },
    ],
    separator: '/',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Breadcrumb and see different combinations.',
      },
    },
  },
}; 