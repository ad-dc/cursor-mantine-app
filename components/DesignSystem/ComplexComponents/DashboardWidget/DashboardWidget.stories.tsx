import type { Meta, StoryObj } from '@storybook/react';
import { DashboardWidget } from './DashboardWidget';
import { Text } from '../../Typography/Text';
import { Stack } from '../../Layout';
import { useState } from 'react';

const meta: Meta<typeof DashboardWidget> = {
  title: 'Design System/Complex Components/DashboardWidget',
  component: DashboardWidget,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible dashboard widget container that supports:
- **Header**: Title, subtitle, optional switch, and actions menu
- **Content Area**: Any React content (charts, tables, text, etc.)
- **Optional Controls**: Combobox for filtering/selection
- **Footer**: Optional action links with arrows

Built on top of our Card component with consistent Design System styling.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Widget title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or description',
    },
    spacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Internal spacing between elements',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardWidget>;

// ========================== BASIC EXAMPLES ==========================

export const Basic: Story = {
  args: {
    title: 'A widget title',
    children: (
      <Stack gap="sm">
        <Text>This is a slot. To use it:</Text>
        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
          <li>Create a local component with autolayout on</li>
          <li>Switch out this slot with that component using the component instance switcher</li>
        </ul>
      </Stack>
    ),
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Analytics Dashboard',
    subtitle: 'Real-time performance metrics',
    children: (
      <Stack gap="md">
        <Text>Your dashboard content goes here.</Text>
        <Text size="sm" c="dimmed">
          This could be charts, tables, metrics, or any other React components.
        </Text>
      </Stack>
    ),
  },
};

// ========================== WITH CONTROLS ==========================

export const WithSwitch: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true);
    
    return (
      <DashboardWidget
        title="Live Monitoring"
        subtitle="System health dashboard"
        switch={{
          label: "Live updates",
          checked: enabled,
          onChange: setEnabled,
        }}
      >
        <Stack gap="sm">
          <Text>Live updates: {enabled ? 'ON' : 'OFF'}</Text>
          <Text size="sm" c="dimmed">
            Toggle the switch to enable/disable real-time data updates.
          </Text>
        </Stack>
      </DashboardWidget>
    );
  },
};

export const WithActionsMenu: Story = {
  args: {
    title: 'User Analytics',
    subtitle: 'Weekly performance report',
    actionsMenu: {
      sections: [
        {
          items: [
            {
              id: 'export',
              label: 'Export Data',
              onClick: () => alert('Export clicked'),
            },
            {
              id: 'refresh',
              label: 'Refresh',
              onClick: () => alert('Refresh clicked'),
            },
            {
              id: 'settings',
              label: 'Settings',
              onClick: () => alert('Settings clicked'),
            },
          ],
        },
        {
          items: [
            {
              id: 'delete',
              label: 'Delete Widget',
              onClick: () => alert('Delete clicked'),
            },
          ],
        },
      ],
    },
    children: (
      <Text>Click the actions menu (⋯) in the top right to see available options.</Text>
    ),
  },
};

export const WithCombobox: Story = {
  args: {
    title: 'Sales Report',
    subtitle: 'Filter by time period',
    combobox: {
      label: 'Time Period',
      placeholder: 'Select time period',
      data: [
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' },
        { value: 'quarter', label: 'This Quarter' },
        { value: 'year', label: 'This Year' },
      ],
    },
    children: (
      <Stack gap="sm">
        <Text>Sales data will be filtered based on your selection above.</Text>
        <Text size="sm" c="dimmed">
          The combobox is searchable - try typing to filter options.
        </Text>
      </Stack>
    ),
  },
};

export const WithBorderlessSelect: Story = {
  render: () => {
    const [selectedPeriod, setSelectedPeriod] = useState<string | null>('month');
    
    return (
      <DashboardWidget
        title="Revenue Analytics"
        subtitle="Performance metrics"
        combobox={{
          borderless: true,
          inHeader: true,
          placeholder: 'This Month',
          data: [
            { value: 'today', label: 'Today' },
            { value: 'week', label: 'This Week' },
            { value: 'month', label: 'This Month' },
            { value: 'quarter', label: 'This Quarter' },
            { value: 'year', label: 'This Year' },
          ],
          value: selectedPeriod,
          onChange: setSelectedPeriod,
          searchable: true,
          clearable: true,
        }}
      >
        <Stack gap="sm">
          <Text>Selected period: <strong>{selectedPeriod || 'None'}</strong></Text>
          <Text size="sm" c="dimmed">
            The select with borderless option is positioned in the top-right header, replacing the actions menu.
          </Text>
        </Stack>
      </DashboardWidget>
    );
  },
};

export const WithFooterLinks: Story = {
  args: {
    title: 'System Overview',
    footerLinks: [
      {
        label: 'View Details',
        onClick: () => alert('View Details clicked'),
      },
      {
        label: 'Export Report',
        onClick: () => alert('Export Report clicked'),
      },
      {
        label: 'Configure',
        onClick: () => alert('Configure clicked'),
      },
    ],
    children: (
      <Stack gap="sm">
        <Text>System is running normally.</Text>
        <Text size="sm" c="dimmed">
          Check the footer links below for additional actions.
        </Text>
      </Stack>
    ),
  },
};

// ========================== FULL FEATURED ==========================

export const FullFeatured: Story = {
  render: () => {
    const [liveUpdates, setLiveUpdates] = useState(true);
    const [dataSource, setDataSource] = useState<string | null>('production');
    
    return (
      <DashboardWidget
        title="Advanced Analytics"
        subtitle="Comprehensive system monitoring"
        switch={{
          label: "Live updates",
          checked: liveUpdates,
          onChange: setLiveUpdates,
        }}
        combobox={{
          borderless: true,
          inHeader: true,
          placeholder: 'Production Database',
          data: [
            { value: 'production', label: 'Production Database' },
            { value: 'staging', label: 'Staging Environment' },
            { value: 'development', label: 'Development Environment' },
            { value: 'analytics', label: 'Analytics Warehouse' },
          ],
          value: dataSource,
          onChange: setDataSource,
          searchable: true,
          clearable: true,
        }}
        footerLinks={[
          {
            label: 'View Full Report',
            onClick: () => alert('Full Report clicked'),
          },
          {
            label: 'Historical Data',
            onClick: () => alert('Historical Data clicked'),
          },
          {
            label: 'API Documentation',
            onClick: () => alert('API Docs clicked'),
          },
        ]}
      >
        <Stack gap="md">
          <Text fw={500}>System Status: {liveUpdates ? '🟢 Live' : '🔴 Paused'}</Text>
          <Text fw={500}>Data Source: {dataSource || 'None selected'}</Text>
          <Stack gap="xs">
            <Text size="sm">• CPU Usage: 45%</Text>
            <Text size="sm">• Memory Usage: 67%</Text>
            <Text size="sm">• Disk Usage: 23%</Text>
            <Text size="sm">• Network I/O: 1.2 GB/s</Text>
          </Stack>
          <Text size="sm" c="dimmed">
            The select with borderless option in the header replaces the actions menu for a cleaner look.
          </Text>
        </Stack>
      </DashboardWidget>
    );
  },
};

// ========================== CONTENT VARIATIONS ==========================

export const WithTableContent: Story = {
  args: {
    title: 'Recent Transactions',
    subtitle: 'Last 10 transactions',
    footerLinks: [
      {
        label: 'View All Transactions',
        onClick: () => alert('View All clicked'),
      },
    ],
    children: (
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
              <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '14px', fontWeight: 500 }}>ID</th>
              <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '14px', fontWeight: 500 }}>Amount</th>
              <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '14px', fontWeight: 500 }}>Status</th>
              <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '14px', fontWeight: 500 }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: '#1234', amount: '$125.00', status: 'Completed', date: '2024-01-15' },
              { id: '#1235', amount: '$89.50', status: 'Pending', date: '2024-01-15' },
              { id: '#1236', amount: '$234.75', status: 'Completed', date: '2024-01-14' },
            ].map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid var(--mantine-color-gray-1)' }}>
                <td style={{ padding: '8px 0', fontSize: '14px' }}>{row.id}</td>
                <td style={{ padding: '8px 0', fontSize: '14px' }}>{row.amount}</td>
                <td style={{ padding: '8px 0', fontSize: '14px' }}>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: row.status === 'Completed' ? 'var(--mantine-color-green-1)' : 'var(--mantine-color-yellow-1)',
                    color: row.status === 'Completed' ? 'var(--mantine-color-green-7)' : 'var(--mantine-color-yellow-7)',
                  }}>
                    {row.status}
                  </span>
                </td>
                <td style={{ padding: '8px 0', fontSize: '14px', color: 'var(--mantine-color-gray-6)' }}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
};

export const WithMetricsContent: Story = {
  args: {
    title: 'Key Performance Indicators',
    subtitle: 'Current month performance',
    combobox: {
      placeholder: 'Select metric type',
      data: ['Revenue', 'Users', 'Conversion', 'Retention'],
    },
    footerLinks: [
      {
        label: 'Detailed Analytics',
        onClick: () => alert('Detailed Analytics clicked'),
      },
    ],
    children: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {[
          { label: 'Total Revenue', value: '$45,231', change: '+12.5%', positive: true },
          { label: 'Active Users', value: '2,847', change: '+8.2%', positive: true },
          { label: 'Conversion Rate', value: '3.4%', change: '-0.3%', positive: false },
          { label: 'Avg. Session', value: '4m 32s', change: '+1.1%', positive: true },
        ].map((metric, index) => (
          <div key={index} style={{ 
            padding: '12px', 
            border: '1px solid var(--mantine-color-gray-2)', 
            borderRadius: '6px',
            backgroundColor: 'var(--mantine-color-gray-0)',
          }}>
            <Text size="sm" c="dimmed" mb={4}>{metric.label}</Text>
            <Text size="lg" fw={600} mb={2}>{metric.value}</Text>
            <Text 
              size="xs" 
              c={metric.positive ? 'green' : 'red'}
              style={{ fontWeight: 500 }}
            >
              {metric.change}
            </Text>
          </div>
        ))}
      </div>
    ),
  },
};

// ========================== LAYOUT VARIATIONS ==========================

export const CompactSpacing: Story = {
  args: {
    title: 'Compact Widget',
    subtitle: 'Minimal spacing',
    spacing: 'xs',
    children: (
      <Text>This widget uses compact spacing for dense layouts.</Text>
    ),
  },
};

export const GenerousSpacing: Story = {
  args: {
    title: 'Spacious Widget',
    subtitle: 'Generous spacing',
    spacing: 'xl',
    children: (
      <Text>This widget uses generous spacing for a more relaxed layout.</Text>
    ),
  },
};

export const WithBothSelectAndActions: Story = {
  render: () => {
    const [selectedPeriod, setSelectedPeriod] = useState<string | null>('month');
    
    return (
      <DashboardWidget
        title="Analytics Dashboard"
        subtitle="With both select and actions menu"
        actionsMenu={{
          sections: [
            {
              items: [
                {
                  id: 'export',
                  label: 'Export Data',
                  onClick: () => alert('Export clicked'),
                },
                {
                  id: 'settings',
                  label: 'Settings',
                  onClick: () => alert('Settings clicked'),
                },
              ],
            },
          ],
        }}
        combobox={{
          borderless: true,
          // inHeader: false (default) - select appears below header
          placeholder: 'Select time period',
          data: [
            { value: 'today', label: 'Today' },
            { value: 'week', label: 'This Week' },
            { value: 'month', label: 'This Month' },
            { value: 'quarter', label: 'This Quarter' },
          ],
          value: selectedPeriod,
          onChange: setSelectedPeriod,
          searchable: true,
          clearable: true,
        }}
      >
        <Stack gap="sm">
          <Text>Selected period: <strong>{selectedPeriod || 'None'}</strong></Text>
          <Text size="sm" c="dimmed">
            When the select is not in the header, both actions menu and select can coexist.
          </Text>
        </Stack>
      </DashboardWidget>
    );
  },
}; 