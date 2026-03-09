'use client';

import { RiBarChartBoxLine, RiHome4Line, RiSettings3Line, RiTeamLine } from '@remixicon/react';

import { HeaderBar } from '@/components/HeaderBar';
import { MainLayout } from '@/components/MainLayout';
import { SidebarNav, type NavItem } from '@/components/SidebarNav';
import { Button } from '@/components/DesignSystem/Buttons/Button';
import { Alert } from '@/components/DesignSystem/DataDisplay/Alert';
import { Badge } from '@/components/DesignSystem/DataDisplay/Badge';
import { Card } from '@/components/DesignSystem/DataDisplay/Card';
import { NameValue } from '@/components/DesignSystem/ComplexComponents/NameValue';
import { PageContentHeader } from '@/components/DesignSystem/ComplexComponents/PageContentHeader';
import { Inline } from '@/components/DesignSystem/Layout/Inline';
import { Stack } from '@/components/DesignSystem/Layout/Stack';
import { Breadcrumb } from '@/components/DesignSystem/Navigation/Breadcrumb';
import { Text } from '@/components/DesignSystem/Typography/Text';
import { Title } from '@/components/DesignSystem/Typography/Title';

type AccountStatus = 'Active' | 'Pending' | 'At Risk';

interface CustomerRow {
  id: string;
  customer: string;
  owner: string;
  plan: string;
  mrr: number;
  status: AccountStatus;
}

const navItems: NavItem[] = [
  { label: 'Overview', icon: 'ri-home-4-line', active: true, color: 'dark' },
  { label: 'Customers', icon: 'ri-team-line', color: 'dark' },
  { label: 'Pipeline', icon: 'ri-briefcase-4-line', color: 'dark' },
  { label: 'Reports', icon: 'ri-bar-chart-box-line', color: 'dark' },
  { label: 'Settings', icon: 'ri-settings-3-line', color: 'dark' },
];

const rows: CustomerRow[] = [
  { id: 'cus_1024', customer: 'Northwind Health', owner: 'Alicia Stone', plan: 'Enterprise', mrr: 12400, status: 'Active' },
  { id: 'cus_1055', customer: 'Blue Mesa Energy', owner: 'Marcus Cole', plan: 'Growth', mrr: 7200, status: 'Pending' },
  { id: 'cus_1091', customer: 'Lakeview Telecom', owner: 'Priya Raman', plan: 'Enterprise', mrr: 15600, status: 'Active' },
  { id: 'cus_1138', customer: 'Mercury Logistics', owner: 'Tina Brooks', plan: 'Standard', mrr: 3900, status: 'At Risk' },
  { id: 'cus_1192', customer: 'Harbor Retail Group', owner: 'Jordan Lee', plan: 'Growth', mrr: 8100, status: 'Active' },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

export default function HomePage() {
  const totalMrr = rows.reduce((sum, row) => sum + row.mrr, 0);
  const activeCount = rows.filter((row) => row.status === 'Active').length;

  return (
    <MainLayout
      header={<HeaderBar />}
      navbar={<SidebarNav navItems={navItems} title="Revenue Ops" />}
    >
      <Stack gap="lg">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Revenue Ops' },
          ]}
        />

        <PageContentHeader
          subhead="Runtime dashboard"
          title="Customer health overview"
          badge="Prototype"
          icon={<RiHome4Line />}
          actions={[
            { label: 'Create report', onClick: () => undefined, variant: 'primary' },
            { label: 'Review accounts', onClick: () => undefined, variant: 'outline' },
          ]}
          contentSection="insights"
          insights={[
            { value: rows.length, title: 'Managed accounts' },
            { value: activeCount, title: 'Healthy accounts' },
            { value: formatCurrency(totalMrr), title: 'Monthly recurring revenue' },
          ]}
        />

        <Alert title="Repository status" type="info">
          The default route now exercises a smaller runtime surface. Storybook remains the canonical design-system showcase.
        </Alert>

        <Inline align="stretch" gap="lg">
          <Card style={{ flex: 1 }}>
            <Stack gap="sm">
              <Inline justify="space-between" align="center">
                <Title order={4}>Program snapshot</Title>
                <RiBarChartBoxLine size={18} />
              </Inline>
              <NameValue
                columns={2}
                pairs={[
                  { name: 'Portfolio owner', value: 'Revenue Operations' },
                  { name: 'Open risks', value: '3' },
                  { name: 'Expansion candidates', value: '8' },
                  { name: 'Renewals this month', value: '5' },
                ]}
              />
            </Stack>
          </Card>

          <Card style={{ width: 320 }}>
            <Stack gap="sm">
              <Inline justify="space-between" align="center">
                <Title order={4}>Actions</Title>
                <RiSettings3Line size={18} />
              </Inline>
              <Text size="sm" c="dimmed">
                Use Storybook for component review and keep the app route focused on runtime scenarios.
              </Text>
              <Button variant="primary">Open customer review</Button>
              <Button variant="default">Sync Figma connections</Button>
            </Stack>
          </Card>
        </Inline>

        <Card>
          <Stack gap="md">
            <Inline justify="space-between" align="center">
              <Inline gap="xs" align="center">
                <RiTeamLine size={18} />
                <Title order={4}>Customer portfolio</Title>
              </Inline>
              <Text size="sm" c="dimmed">
                {rows.length} tracked accounts
              </Text>
            </Inline>

            <Stack gap="xs">
              {rows.map((row) => {
                const color =
                  row.status === 'Active'
                    ? 'success'
                    : row.status === 'Pending'
                      ? 'pending'
                      : 'danger';

                return (
                  <Inline key={row.id} justify="space-between" align="center">
                    <Stack gap={0}>
                      <Title order={5}>{row.customer}</Title>
                      <Text size="sm" c="dimmed">
                        {row.owner} • {row.plan}
                      </Text>
                    </Stack>
                    <Inline gap="md" align="center">
                      <Text size="sm">{formatCurrency(row.mrr)}</Text>
                      <Badge color={color}>{row.status}</Badge>
                    </Inline>
                  </Inline>
                );
              })}
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </MainLayout>
  );
}
