import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Stack } from '@/components/DesignSystem';
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
        component: 'KeyInsight component for displaying key metrics or insights with a title, value, and optional subtitle. Supports multiple sizes from xs to xxl. Commonly used in dashboards, analytics pages, or summary sections.',
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
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'jumbo', 'super-jumbo'],
      description: 'Size of the KeyInsight component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1250,
    title: 'Total Users',
    size: 'md',
  },
};

export const WithSubtitle: Story = {
  args: {
    value: '95%',
    title: 'Success Rate',
    subtitle: 'Last 30 days',
    size: 'lg',
  },
};

export const WithBorder: Story = {
  args: {
    value: 987,
    title: 'Active Users',
    showBorder: true,
    size: 'md',
  },
};

// ========================== SIZE SHOWCASE ==========================

export const AllSizes: Story = {
  render: () => (
    <Stack gap="xl" align="center">
      <Title order={2}>KeyInsight Size Variations</Title>
      <Stack gap="lg" align="center">
        <div>
          <Text size="sm" c="dimmed" mb="xs" ta="center">Extra Small (xs)</Text>
          <KeyInsight
            value={1250}
            title="Total Users"
            subtitle="Last 30 days"
            size="xs"
          />
        </div>
        <div>
          <Text size="sm" c="dimmed" mb="xs" ta="center">Small (sm)</Text>
          <KeyInsight
            value={1250}
            title="Total Users"
            subtitle="Last 30 days"
            size="sm"
          />
        </div>
        <div>
          <Text size="sm" c="dimmed" mb="xs" ta="center">Medium (md) - Default</Text>
          <KeyInsight
            value={1250}
            title="Total Users"
            subtitle="Last 30 days"
            size="md"
          />
        </div>
        <div>
          <Text size="sm" c="dimmed" mb="xs" ta="center">Large (lg)</Text>
          <KeyInsight
            value={1250}
            title="Total Users"
            subtitle="Last 30 days"
            size="lg"
          />
        </div>
        <div>
          <Text size="sm" c="dimmed" mb="xs" ta="center">Extra Large (jumbo)</Text>
          <KeyInsight
            value={1250}
            title="Total Users"
            subtitle="Last 30 days"
            size="jumbo"
          />
        </div>
        <div>
          <Text size="sm" c="dimmed" mb="xs" ta="center">Super Jumbo (super-jumbo)</Text>
          <KeyInsight
            value={1250}
            title="Total Users"
            subtitle="Last 30 days"
            size="super-jumbo"
          />
        </div>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available KeyInsight sizes from xs to super-jumbo. Each size adjusts the value text, title text, subtitle text, and padding proportionally.',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <Grid cols={3} spacing="lg" w={800}>
      <KeyInsight
        value="$24.5K"
        title="Revenue"
        subtitle="This month"
        size="sm"
      />
      <KeyInsight
        value={1847}
        title="Orders"
        subtitle="Last 30 days"
        size="md"
      />
      <KeyInsight
        value="12.5%"
        title="Growth"
        subtitle="vs last month"
        size="lg"
      />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of different KeyInsight sizes in a grid layout.',
      },
    },
  },
};

// ========================== DASHBOARD EXAMPLES ==========================

export const DashboardExample: Story = {
  render: () => (
    <Grid cols={4} spacing="md" w={800}>
      <KeyInsight
        value={1250}
        title="Total Users"
        size="md"
        showBorder={true}
      />
      <KeyInsight
        value={987}
        title="Active Users"
        subtitle="Last 7 days"
        size="md"
        showBorder={true}
      />
      <KeyInsight
        value={263}
        title="New Users"
        subtitle="This month"
        size="md"
        showBorder={true}
      />
      <KeyInsight
        value="95%"
        title="Success Rate"
        size="md"
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
          size="lg"
        />
        <KeyInsight
          value={1847}
          title="Orders"
          subtitle="Last 30 days"
          size="lg"
        />
        <KeyInsight
          value="12.5%"
          title="Growth"
          subtitle="vs last month"
          size="lg"
        />
        <KeyInsight
          value={456}
          title="New Customers"
          size="lg"
        />
        <KeyInsight
          value="4.2"
          title="Avg Rating"
          subtitle="Customer satisfaction"
          size="lg"
        />
        <KeyInsight
          value={89}
          title="Support Tickets"
          subtitle="Open"
          size="lg"
        />
      </Grid>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of KeyInsight components in a comprehensive metrics grid layout using large size.',
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
          size="md"
          showBorder={true}
        />
        <KeyInsight
          value={987}
          title="Active Users"
          size="md"
          showBorder={true}
        />
        <KeyInsight
          value={263}
          title="New Users"
          size="md"
          showBorder={true}
        />
        <KeyInsight
          value="95%"
          title="Success Rate"
          size="md"
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

export const HeroMetrics: Story = {
  render: () => (
    <Stack gap="xl" align="center">
      <Title order={1} ta="center">Company Performance</Title>
      <Grid cols={2} spacing="xl" w={800}>
        <KeyInsight
          value="$2.4M"
          title="Annual Revenue"
          subtitle="2024 Performance"
          size="super-jumbo"
        />
        <KeyInsight
          value="150K"
          title="Active Users"
          subtitle="Monthly Active"
          size="super-jumbo"
        />
      </Grid>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of KeyInsight components used as hero metrics with super-jumbo size for maximum impact.',
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
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the KeyInsight component and see different combinations of props including the new size options.',
      },
    },
  },
}; 