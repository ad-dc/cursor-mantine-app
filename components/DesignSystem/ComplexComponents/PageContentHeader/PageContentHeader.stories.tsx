import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { PageContentHeader } from './PageContentHeader';
import { useState } from 'react';
import { Title } from '../../Typography/Title';
import { Text } from '../../Typography/Text';
import { Button } from '../../Buttons/Button';
import { Card } from '../../DataDisplay/Card';
import { 
  RiUserLine, 
  RiSettingsLine, 
  RiDatabaseLine,
  RiShieldLine,
  RiTeamLine,
  RiBarChartLine,
  RiFileTextLine,
  RiGlobalLine,
  RiCloudLine,
  RiCodeLine
} from '@remixicon/react';

const meta: Meta<typeof PageContentHeader> = {
  title: 'Design System/Complex Components/PageContentHeader',
  component: PageContentHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive page header component that supports multiple content sections including key insights, descriptions, name-value pairs, and expandable drawers. Perfect for dashboard headers, profile pages, and detailed information displays.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title/heading',
    },
    subhead: {
      control: 'text',
      description: 'Subhead text above the title',
    },
    badge: {
      control: 'text',
      description: 'Optional badge text',
    },
    editable: {
      control: 'boolean',
      description: 'Whether the title is editable',
    },
    contentSection: {
      control: 'select',
      options: ['insights', 'description', 'descriptionBlock', 'nameValuePairs', 'drawer'],
      description: 'Which content section to display',
    },
    spacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Custom spacing',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'User Dashboard',
    subhead: 'Overview',
    badge: 'Active',
    contentSection: 'description',
    description: 'Welcome to your personalized dashboard. Here you can view your account information, recent activity, and manage your settings.',
    editable: false,
  },
};

export const WithKeyInsights: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <PageContentHeader
        title="Analytics Dashboard"
        subhead="Performance Metrics"
        badge="Live"
        icon={<RiBarChartLine />}
        contentSection="insights"
        insights={[
          {
            value: "1,247",
            title: "Total Users",
            subtitle: "+12% from last month",
            color: "blue"
          },
          {
            value: "89.2%",
            title: "Success Rate",
            subtitle: "+2.1% improvement",
            color: "green"
          },
          {
            value: "245ms",
            title: "Avg Response",
            subtitle: "-15ms faster",
            color: "orange"
          },
          {
            value: "$12,450",
            title: "Revenue",
            subtitle: "+8.5% growth",
            color: "teal"
          }
        ]}
        actions={[
          { label: 'Export Data', onClick: () => console.log('Export'), variant: 'outline' },
          { label: 'Refresh', onClick: () => console.log('Refresh'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Page header with key insights displaying important metrics and KPIs.',
      },
    },
  },
};

export const UserProfile: Story = {
  render: () => (
    <Stack gap="lg" w={700}>
      <PageContentHeader
        title="John Doe"
        subhead="Senior Developer"
        badge="Online"
        icon={<RiUserLine />}
        editable={true}
        onEdit={() => console.log('Edit profile')}
        contentSection="nameValuePairs"
        nameValuePairs={[
          { name: "Email", value: "john.doe@company.com" },
          { name: "Department", value: "Engineering" },
          { name: "Location", value: "San Francisco, CA" },
          { name: "Employee ID", value: "EMP-2024-001" },
          { name: "Start Date", value: "January 15, 2022" },
          { name: "Manager", value: "Sarah Johnson" },
          { name: "Team", value: "Frontend Platform" },
          { name: "Level", value: "Senior (L5)" }
        ]}
        nameValueColumns={2}
        actions={[
          { label: 'Edit Profile', onClick: () => console.log('Edit'), variant: 'outline' },
          { label: 'View Calendar', onClick: () => console.log('Calendar'), variant: 'default' },
          { label: 'Send Message', onClick: () => console.log('Message'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'User profile header with name-value pairs showing employee information.',
      },
    },
  },
};

export const ProjectOverview: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <PageContentHeader
        title="E-commerce Platform"
        subhead="Project Overview"
        badge="In Progress"
        icon={<RiCodeLine />}
        contentSection="descriptionBlock"
        descriptionBlockTitle="About this project"
        descriptionBlockText="A modern e-commerce platform built with React, Node.js, and PostgreSQL. This project includes user authentication, product catalog, shopping cart, payment processing, and admin dashboard. <a href='/docs/project'>View documentation</a> for more details."
        descriptionBlockAllowHtml={true}
        actions={[
          { label: 'View Repository', onClick: () => console.log('Repo'), variant: 'outline' },
          { label: 'Deploy', onClick: () => console.log('Deploy'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Project overview with description block supporting HTML content.',
      },
    },
  },
};

export const SystemStatus: Story = {
  render: () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    return (
      <Stack gap="lg" w={800}>
        <PageContentHeader
          title="System Health"
          subhead="Infrastructure Status"
          badge="Operational"
          icon={<RiShieldLine />}
          contentSection="drawer"
          drawerLabel="View Detailed Metrics"
          defaultDrawerOpen={drawerOpen}
          drawerContent={
            <Stack gap="md">
              <Title order={4} size="sm">Detailed System Metrics</Title>
              <Group gap="lg">
                <Card>
                  <Stack gap="xs">
                    <Text size="xs" c="dimmed">CPU Usage</Text>
                    <Text size="lg" fw={600} c="blue">45.2%</Text>
                    <Text size="xs" c="green">Normal</Text>
                  </Stack>
                </Card>
                <Card>
                  <Stack gap="xs">
                    <Text size="xs" c="dimmed">Memory</Text>
                    <Text size="lg" fw={600} c="orange">78.5%</Text>
                    <Text size="xs" c="orange">High</Text>
                  </Stack>
                </Card>
                <Card>
                  <Stack gap="xs">
                    <Text size="xs" c="dimmed">Disk I/O</Text>
                    <Text size="lg" fw={600} c="green">23.1%</Text>
                    <Text size="xs" c="green">Low</Text>
                  </Stack>
                </Card>
              </Group>
              <Text size="sm" c="dimmed">
                Last updated: 2 minutes ago
              </Text>
            </Stack>
          }
          actions={[
            { label: 'View Logs', onClick: () => console.log('Logs'), variant: 'outline' },
            { label: 'Restart Services', onClick: () => console.log('Restart'), variant: 'danger' }
          ]}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'System status header with expandable drawer containing detailed metrics.',
      },
    },
  },
};

export const TeamDashboard: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <PageContentHeader
        title="Engineering Team"
        subhead="Team Dashboard"
        badge="15 Members"
        icon={<RiTeamLine />}
        contentSection="insights"
        insights={[
          {
            value: "23",
            title: "Active Tasks",
            subtitle: "Across 5 projects",
            color: "blue"
          },
          {
            value: "87%",
            title: "Sprint Progress",
            subtitle: "3 days remaining",
            color: "green"
          },
          {
            value: "4.2",
            title: "Avg Story Points",
            subtitle: "Per developer",
            color: "purple"
          }
        ]}
        actions={[
          { label: 'Add Member', onClick: () => console.log('Add'), variant: 'outline' },
          { label: 'Sprint Planning', onClick: () => console.log('Sprint'), variant: 'default' },
          { label: 'Start Standup', onClick: () => console.log('Standup'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Team dashboard with insights showing team performance metrics.',
      },
    },
  },
};

export const DatabaseManagement: Story = {
  render: () => (
    <Stack gap="lg" w={700}>
      <PageContentHeader
        title="Production Database"
        subhead="PostgreSQL Cluster"
        badge="Healthy"
        icon={<RiDatabaseLine />}
        contentSection="nameValuePairs"
        nameValuePairs={[
          { name: "Host", value: "prod-db-01.company.com", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
          { name: "Port", value: "5432" },
          { name: "Database", value: "ecommerce_prod" },
          { name: "Version", value: "PostgreSQL 15.3" },
          { name: "Size", value: "2.4 TB" },
          { name: "Connections", value: "45/100" },
          { name: "Uptime", value: "127 days" },
          { name: "Last Backup", value: "2 hours ago" }
        ]}
        nameValueColumns={2}
        actions={[
          { label: 'Create Backup', onClick: () => console.log('Backup'), variant: 'outline' },
          { label: 'View Logs', onClick: () => console.log('Logs'), variant: 'default' },
          { label: 'Monitor', onClick: () => console.log('Monitor'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Database management header with copyable connection details.',
      },
    },
  },
};

export const ApplicationSettings: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <PageContentHeader
        title="Application Settings"
        subhead="Configuration"
        icon={<RiSettingsLine />}
        contentSection="description"
        descriptionTitle="Environment Configuration"
        description="Manage your application settings, environment variables, and feature flags. Changes made here will affect the production environment and require careful review."
        allowLinks={false}
        actions={[
          { label: 'Reset to Default', onClick: () => console.log('Reset'), variant: 'outline' },
          { label: 'Export Config', onClick: () => console.log('Export'), variant: 'default' },
          { label: 'Save Changes', onClick: () => console.log('Save'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings page header with description section and action buttons.',
      },
    },
  },
};

export const APIDocumentation: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <PageContentHeader
        title="REST API v2.1"
        subhead="API Documentation"
        badge="Stable"
        icon={<RiGlobalLine />}
        contentSection="descriptionBlock"
        descriptionBlockTitle="Getting Started"
        descriptionBlockText="Welcome to our REST API documentation. This API provides access to user data, product information, and order management. <a href='/api/auth'>Authentication</a> is required for most endpoints. Check out our <a href='/api/examples'>code examples</a> to get started quickly."
        descriptionBlockAllowHtml={true}
        actions={[
          { label: 'View Examples', onClick: () => console.log('Examples'), variant: 'outline' },
          { label: 'Test API', onClick: () => console.log('Test'), variant: 'default' },
          { label: 'Get API Key', onClick: () => console.log('API Key'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'API documentation header with HTML-enabled description block.',
      },
    },
  },
};

export const CloudInfrastructure: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <PageContentHeader
        title="AWS Infrastructure"
        subhead="Cloud Resources"
        badge="Multi-Region"
        icon={<RiCloudLine />}
        contentSection="insights"
        insights={[
          {
            value: "12",
            title: "EC2 Instances",
            subtitle: "Running",
            color: "blue"
          },
          {
            value: "$1,247",
            title: "Monthly Cost",
            subtitle: "Current billing",
            color: "orange"
          },
          {
            value: "99.9%",
            title: "Uptime",
            subtitle: "Last 30 days",
            color: "green"
          },
          {
            value: "3",
            title: "Regions",
            subtitle: "Active deployments",
            color: "purple"
          }
        ]}
        actions={[
          { label: 'View Costs', onClick: () => console.log('Costs'), variant: 'outline' },
          { label: 'Scale Resources', onClick: () => console.log('Scale'), variant: 'default' },
          { label: 'Deploy', onClick: () => console.log('Deploy'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cloud infrastructure overview with cost and performance insights.',
      },
    },
  },
};

export const DocumentationPage: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <PageContentHeader
        title="Component Library"
        subhead="Design System Documentation"
        badge="v2.1.0"
        icon={<RiFileTextLine />}
        editable={true}
        onEdit={() => console.log('Edit documentation')}
        contentSection="description"
        descriptionTitle="About this library"
        description="A comprehensive React component library built with TypeScript and Mantine. Includes over 50 components with full TypeScript support, Storybook documentation, and automated testing. Perfect for building consistent user interfaces across your applications."
        allowLinks={false}
        actions={[
          { label: 'View Components', onClick: () => console.log('Components'), variant: 'outline' },
          { label: 'Download', onClick: () => console.log('Download'), variant: 'default' },
          { label: 'Get Started', onClick: () => console.log('Start'), variant: 'primary' }
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Documentation page header with editable title and description.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Example',
    subhead: 'Customize me',
    badge: 'Demo',
    contentSection: 'description',
    description: 'Use the controls below to customize this PageContentHeader component and see how different props affect the appearance and behavior.',
    editable: false,
    spacing: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the PageContentHeader and see different combinations.',
      },
    },
  },
}; 