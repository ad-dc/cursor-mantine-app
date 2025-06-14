import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@/components/DesignSystem';
import { Inline } from '@/components/DesignSystem';
import { KeyInsight } from './KeyInsights';
import { Title } from '../../Typography/Title';
import { Text } from '../../Typography/Text';

const meta: Meta<typeof KeyInsight> = {
  title: 'Design System/Complex Components/KeyInsight',
  component: KeyInsight,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'KeyInsight component for displaying key metrics or insights with a title, value, and optional subtitle. Commonly used in dashboards, analytics pages, or summary sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Value to display (can be number or string)',
    },
    title: {
      control: 'text',
      description: 'Title/label for the insight',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or description',
    },

    showBorder: {
      control: 'boolean',
      description: 'Whether to show border on the right',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1250,
    title: 'Total Users',
  },
};

export const WithSubtitle: Story = {
  args: {
    value: '95%',
    title: 'Success Rate',
    subtitle: 'Last 30 days',
  },
};

export const WithColor: Story = {
  args: {
    value: 42,
    title: 'Active Projects',
  },
};

export const WithBorder: Story = {
  args: {
    value: 987,
    title: 'Active Users',
    showBorder: true,
  },
};

export const DashboardExample: Story = {
  render: () => (
    <Grid cols={4} spacing="md" w={800}>
      <KeyInsight
        value={1250}
        title="Total Users"
        color="blue"
        showBorder={true}
      />
      <KeyInsight
        value={987}
        title="Active Users"
        subtitle="Last 7 days"
        color="green"
        showBorder={true}
      />
      <KeyInsight
        value={263}
        title="New Users"
        subtitle="This month"
        color="purple"
        showBorder={true}
      />
      <KeyInsight
        value="95%"
        title="Success Rate"
        color="teal"
        showBorder={false}
      />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of KeyInsight components used in a dashboard layout with borders between items.',
      },
    },
  },
};

export const MetricsGrid: Story = {
  render: () => (
    <div style={{ width: 600 }}>
      <Title order={2} mb="lg">Analytics Overview</Title>
      <Grid cols={3} spacing="lg">
        <KeyInsight
          value="$24,500"
          title="Revenue"
          subtitle="This month"
          color="green"
        />
        <KeyInsight
          value={1847}
          title="Orders"
          subtitle="Last 30 days"
          color="blue"
        />
        <KeyInsight
          value="12.5%"
          title="Growth"
          subtitle="vs last month"
          color="orange"
        />
        <KeyInsight
          value={456}
          title="New Customers"
          color="purple"
        />
        <KeyInsight
          value="4.2"
          title="Avg Rating"
          subtitle="Customer satisfaction"
          color="yellow"
        />
        <KeyInsight
          value={89}
          title="Support Tickets"
          subtitle="Open"
          color="red"
        />
      </Grid>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of KeyInsight components in a comprehensive metrics grid layout.',
      },
    },
  },
};

export const HorizontalLayout: Story = {
  render: () => (
    <div style={{ width: 800 }}>
      <Title order={3} mb="md">Key Performance Indicators</Title>
      <Inline justify="space-between">
        <KeyInsight
          value={1250}
          title="Total Users"
          color="blue"
          showBorder={true}
        />
        <KeyInsight
          value={987}
          title="Active Users"
          color="green"
          showBorder={true}
        />
        <KeyInsight
          value={263}
          title="New Users"
          color="purple"
          showBorder={true}
        />
        <KeyInsight
          value="95%"
          title="Success Rate"
          color="teal"
          showBorder={false}
        />
      </Inline>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of KeyInsight components in a horizontal layout with separating borders.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    value: 1250,
    title: 'Total Users',
    subtitle: 'Last 30 days',
    showBorder: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the KeyInsight component and see different combinations.',
      },
    },
  },
}; 