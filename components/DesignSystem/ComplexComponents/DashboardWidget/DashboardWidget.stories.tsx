import type { Meta, StoryObj } from '@storybook/react';
import { DashboardWidget } from './DashboardWidget';
import { Text } from '../../Typography/Text';
import { Title } from '../../Typography/Title';
import { Stack, Grid } from '../../Layout';
import { List, Table } from '../../DataDisplay';
import { Pill } from '../../DataDisplay/Pill';
import { KeyInsight } from '../KeyInsights';
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
- **Header**: Title, optional switch, and actions menu
- **Content Area**: Any React content (charts, tables, text, etc.)
- **Optional Controls**: Header select for filtering/selection
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
    footerLinks: [
      {
        label: 'Link 1',
        onClick: () => alert('Link 1 clicked'),
      },
      {
        label: 'Link 2',
        onClick: () => alert('Link 2 clicked'),
      },
    ],

    children: (
      <Stack gap="sm">
        <Title order={5}>This is the content:</Title>
        <List spacing="xs">
          <List.Item>Dashboard widgets are a great way to display data in a structured way.</List.Item>
          <List.Item>Content supports any React component, including charts, tables, metrics, or any other components.</List.Item>
        </List>
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
        title="Data"
        
        switch={{
          label: "Sync all data",
          checked: enabled,
          onChange: setEnabled,
        }}
      >
        <Stack gap="sm">
          <Text>Sync all data: {enabled ? 'ON' : 'OFF'}</Text>
          <Text size="sm" c="dimmed">
            Toggle the switch to enable/disable sync all data.
          </Text>
        </Stack>
      </DashboardWidget>
    );
  },
};

export const WithActionsMenu: Story = {
  args: {
    title: 'User Analytics',
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

export const WithHeaderSelect: Story = {
  args: {
    title: 'Sales Report',
    
    headerSelect: {
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
          The header select is searchable - try typing to filter options.
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
        headerSelect={{
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
            The header select is positioned in the top-right header, replacing the actions menu.
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
        switch={{
          label: "Live updates",
          checked: liveUpdates,
          onChange: setLiveUpdates,
        }}
        headerSelect={{
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
            The header select replaces the actions menu for a cleaner look.
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
    footerLinks: [
      {
        label: 'View All Transactions',
        onClick: () => alert('View All clicked'),
      },
    ],
    children: (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {[
            { id: '#1234', amount: '$125.00', status: 'Completed', date: '2024-01-15' },
            { id: '#1235', amount: '$89.50', status: 'Pending', date: '2024-01-15' },
            { id: '#1236', amount: '$234.75', status: 'Completed', date: '2024-01-14' },
          ].map((row, index) => (
            <Table.Tr key={index}>
              <Table.Td>{row.id}</Table.Td>
              <Table.Td>{row.amount}</Table.Td>
              <Table.Td>
                <Pill
                  color={row.status === 'Completed' ? 'green' : 'yellow'}
                  size="sm"
                >
                  {row.status}
                </Pill>
              </Table.Td>
              <Table.Td style={{ color: 'var(--mantine-color-gray-6)' }}>
                {row.date}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    ),
  },
};

export const WithMetricsContent: Story = {
  args: {
    title: 'Key Performance Indicators',
    headerSelect: {
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
    spacing: 'xs',
    children: (
      <Text>This widget uses compact spacing for dense layouts.</Text>
    ),
  },
};

export const GenerousSpacing: Story = {
  args: {
    title: 'Spacious Widget',
    spacing: 'xl',
    children: (
      <Text>This widget uses generous spacing for a more relaxed layout.</Text>
    ),
  },
};

export const WithActionsMenuOnly: Story = {
  args: {
    title: "Analytics Dashboard",
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
              id: 'settings',
              label: 'Settings',
              onClick: () => alert('Settings clicked'),
            },
          ],
        },
      ],
    },
    children: (
      <Stack gap="sm">
        <Text>This widget shows the actions menu in the top-right corner.</Text>
        <Text size="sm" c="dimmed">
          The actions menu appears when no header select is configured.
        </Text>
      </Stack>
    ),
  },
};

export const ConsistentFooterSpacing: Story = {
  render: () => (
    <Grid cols={2} spacing="md">
      <DashboardWidget
        title="Widget Without Links"
      >
        <Stack gap="sm">
          <Text>This widget has no footer links.</Text>
          <Text size="sm" c="dimmed">
            The footer area still takes up space to maintain consistent heights across widgets.
          </Text>
        </Stack>
      </DashboardWidget>
      
      <DashboardWidget
        title="Widget With Links"
        footerLinks={[
          {
            label: 'View Details',
            onClick: () => alert('View Details clicked'),
          },
          {
            label: 'Export Report',
            onClick: () => alert('Export Report clicked'),
          },
        ]}
      >
        <Stack gap="sm">
          <Text>This widget has footer links.</Text>
          <Text size="sm" c="dimmed">
            Both widgets maintain the same overall height due to consistent footer spacing.
          </Text>
        </Stack>
      </DashboardWidget>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how the footer area always takes up space, ensuring consistent widget heights whether links are present or not.',
      },
    },
  },
};

export const ScrollableContent: Story = {
  render: () => (
    <Grid cols={2} spacing="md" style={{ height: '400px' }}>
      <DashboardWidget
        title="Short Content"
        footerLinks={[
          {
            label: 'View Details',
            onClick: () => alert('View Details clicked'),
          },
        ]}
      >
        <Stack gap="sm">
          <Text>This widget has minimal content.</Text>
          <Text size="sm" c="dimmed">
            Footer is fixed at the bottom.
          </Text>
        </Stack>
      </DashboardWidget>
      
      <DashboardWidget
        title="Long Scrollable Content"
        actionsMenu={{
          sections: [
            {
              items: [
                {
                  id: 'export',
                  label: 'Export Data',
                  onClick: () => alert('Export clicked'),
                },
              ],
            },
          ],
        }}
        footerLinks={[
          {
            label: 'View Full Report',
            onClick: () => alert('View Full Report clicked'),
          },
          {
            label: 'Export Data',
            onClick: () => alert('Export Data clicked'),
          },
        ]}
      >
        <Stack gap="sm">
          <Text fw={500}>This widget has a lot of content that will scroll:</Text>
          <List spacing="xs">
            {Array.from({ length: 20 }, (_, i) => (
              <List.Item key={i}>
                <Text size="sm">List item #{i + 1} - This is a sample item with some descriptive text that shows how content flows in a scrollable widget.</Text>
              </List.Item>
            ))}
          </List>
          <Text size="sm" c="dimmed" mt="md">
            Notice how the footer links stay fixed at the bottom while this content area scrolls.
          </Text>
          <KeyInsight
            title="Bottom Metric"
            value="99%"
            subtitle="This metric is at the bottom of the scrollable content"
          />
        </Stack>
      </DashboardWidget>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Demonstrates how DashboardWidget handles content overflow:

**Fixed Footer**: Footer links are always positioned at the bottom of the widget
**Scrollable Content**: When content exceeds the available space, the main content area becomes scrollable
**Consistent Layout**: Both widgets maintain the same overall structure regardless of content length

Try scrolling in the right widget to see the footer behavior in action.
        `,
      },
    },
  },
};

// ========================== SALES DASHBOARD ==========================

export const SalesDashboard: Story = {
  render: () => {
    const [liveUpdates, setLiveUpdates] = useState(true);
    const [selectedPeriod, setSelectedPeriod] = useState<string | null>('month');
    const [selectedRegion, setSelectedRegion] = useState<string | null>('all');
    
    return (
      <div style={{ 
        padding: '20px',
        backgroundColor: 'var(--mantine-color-gray-0)',
        minHeight: '100vh'
      }}>
        <Grid 
          cols={2} 
          spacing="lg"
          style={{
            gridTemplateRows: 'repeat(3, 275px)', // Fixed height rows for lg KeyInsights
          }}
        >
        {/* Row 1 */}
        <DashboardWidget
          title="Revenue Overview"
          switch={{
            label: "Live updates",
            checked: liveUpdates,
            onChange: setLiveUpdates,
          }}
          actionsMenu={{
            sections: [
              {
                items: [
                  {
                    id: 'export',
                    label: 'Export Revenue Data',
                    onClick: () => alert('Exporting revenue data...'),
                  },
                  {
                    id: 'settings',
                    label: 'Configure Metrics',
                    onClick: () => alert('Opening configuration...'),
                  },
                ],
              },
            ],
          }}
          footerLinks={[
            {
              label: 'View Detailed Report',
              onClick: () => alert('Opening detailed revenue report...'),
            },
          ]}
        >
          <KeyInsight
            size="lg"
            title="Total Revenue"
            value="$847,392"
            subtitle="+18.2% from last month"
          />
        </DashboardWidget>

        <DashboardWidget
          title="Sales Performance"
          headerSelect={{
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
          footerLinks={[
            {
              label: 'Sales Analytics',
              onClick: () => alert('Opening sales analytics...'),
            },
            {
              label: 'Team Performance',
              onClick: () => alert('Opening team performance...'),
            },
          ]}
        >
          <KeyInsight
            size="lg"
            title="New Deals"
            value="47"
            subtitle="+12 this week"
          />
        </DashboardWidget>

        <DashboardWidget
          title="Customer Metrics"
          actionsMenu={{
            sections: [
              {
                items: [
                  {
                    id: 'export',
                    label: 'Export Customer Data',
                    onClick: () => alert('Exporting customer data...'),
                  },
                  {
                    id: 'segment',
                    label: 'Customer Segmentation',
                    onClick: () => alert('Opening segmentation...'),
                  },
                ],
              },
            ],
          }}
          footerLinks={[
            {
              label: 'Customer Database',
              onClick: () => alert('Opening customer database...'),
            },
          ]}
        >
          <KeyInsight
            size="lg"
            title="Active Customers"
            value="1,847"
            subtitle="+156 new this month"
          />
        </DashboardWidget>

        {/* Row 2 */}
        <DashboardWidget
          title="Regional Sales"
          footerLinks={[
            {
              label: 'Regional Analysis',
              onClick: () => alert('Opening regional analysis...'),
            },
          ]}
        >
          <KeyInsight
            size="lg"
            title="Top Region"
            value="North America"
            subtitle="$312,847 (+15.2%)"
          />
        </DashboardWidget>

        <DashboardWidget
          title="Top Products"
          actionsMenu={{
            sections: [
              {
                items: [
                  {
                    id: 'export',
                    label: 'Export Product Data',
                    onClick: () => alert('Exporting product data...'),
                  },
                  {
                    id: 'inventory',
                    label: 'Check Inventory',
                    onClick: () => alert('Opening inventory...'),
                  },
                ],
              },
            ],
          }}
          footerLinks={[
            {
              label: 'Product Catalog',
              onClick: () => alert('Opening product catalog...'),
            },
            {
              label: 'Inventory Report',
              onClick: () => alert('Opening inventory report...'),
            },
          ]}
        >
          <KeyInsight
            size="lg"
            title="Best Seller"
            value="Enterprise License"
            subtitle="247 units sold ($284,392)"
          />
        </DashboardWidget>

        {/* Row 3 */}
        <DashboardWidget
          title="Sales Pipeline"
          switch={{
            label: "Auto-refresh",
            checked: liveUpdates,
            onChange: setLiveUpdates,
          }}
          actionsMenu={{
            sections: [
              {
                items: [
                  {
                    id: 'forecast',
                    label: 'Sales Forecast',
                    onClick: () => alert('Opening sales forecast...'),
                  },
                  {
                    id: 'pipeline',
                    label: 'Manage Pipeline',
                    onClick: () => alert('Opening pipeline management...'),
                  },
                ],
              },
            ],
          }}
          footerLinks={[
            {
              label: 'CRM System',
              onClick: () => alert('Opening CRM system...'),
            },
            {
              label: 'Pipeline Report',
              onClick: () => alert('Opening pipeline report...'),
            },
          ]}
        >
          <KeyInsight
            size="lg"
            title="Qualified Leads"
            value="342"
            subtitle="64 new this week"
          />
        </DashboardWidget>
        </Grid>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
A comprehensive sales dashboard demonstrating DashboardWidget components in a realistic grid layout. 

**Features demonstrated:**
- **Grid Layout**: 2x3 grid showing 6 different widgets
- **KeyInsight Components**: Used for displaying KPIs and metrics
- **Full Featured Widgets**: Each widget uses different combinations of features
- **Interactive Controls**: Switches, header selects, and action menus
- **Sales Data Theme**: Realistic sales metrics, regional data, and pipeline information
- **Consistent Styling**: Cohesive design with proper spacing and colors

**Widget Features Used:**
- Live update switches for real-time data
- Header selects for filtering
- Action menus for additional functionality
- Footer links for navigation
- Mixed content types (KeyInsights, lists, custom layouts)
        `,
      },
    },
  },
}; 