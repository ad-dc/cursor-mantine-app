'use client';

import {
  AppShellLayout,
  type NavItem,
  SingleColumnLayout,
  PageContentHeader,
  Card,
  Badge,
  Breadcrumb,
  Inline,
  Stack,
  Text,
  Title,
} from '@/components/DesignSystem';

const navItems: NavItem[] = [
  { label: 'Customers', icon: 'ri-team-line', href: '/prototype/customers', active: true },
  { label: 'Customer Detail', icon: 'ri-user-line', href: '/prototype/customer-detail' },
];

interface Customer {
  id: string;
  name: string;
  plan: string;
  status: 'Active' | 'Pending' | 'Churned';
  mrr: number;
}

const customers: Customer[] = [
  { id: '1', name: 'Northwind Health', plan: 'Enterprise', status: 'Active', mrr: 12400 },
  { id: '2', name: 'Blue Mesa Energy', plan: 'Growth', status: 'Pending', mrr: 7200 },
  { id: '3', name: 'Lakeview Telecom', plan: 'Enterprise', status: 'Active', mrr: 15600 },
  { id: '4', name: 'Mercury Logistics', plan: 'Standard', status: 'Churned', mrr: 3900 },
  { id: '5', name: 'Harbor Retail Group', plan: 'Growth', status: 'Active', mrr: 8100 },
];

const statusColor = (status: Customer['status']) =>
  status === 'Active' ? 'success' : status === 'Pending' ? 'pending' : 'danger';

const fmt = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

export default function CustomersPage() {
  return (
    <AppShellLayout navItems={navItems} title="Revenue Ops">
      <SingleColumnLayout>
        <Breadcrumb items={[{ label: 'Prototypes', href: '/prototype' }, { label: 'Customers' }]} />

        <PageContentHeader
          title="Customer List"
          subhead="All managed accounts"
          badge="Prototype"
          insights={[
            { value: customers.length, title: 'Accounts' },
            { value: customers.filter((c) => c.status === 'Active').length, title: 'Active' },
            { value: fmt(customers.reduce((s, c) => s + c.mrr, 0)), title: 'Total MRR' },
          ]}
          contentSection="insights"
        />

        <Card>
          <Stack gap="xs">
            {customers.map((c) => (
              <Inline key={c.id} justify="space-between" align="center" py="xs">
                <Stack gap={0}>
                  <Title order={5}>{c.name}</Title>
                  <Text size="sm" c="dimmed">{c.plan}</Text>
                </Stack>
                <Inline gap="md" align="center">
                  <Text size="sm">{fmt(c.mrr)}</Text>
                  <Badge color={statusColor(c.status)}>{c.status}</Badge>
                </Inline>
              </Inline>
            ))}
          </Stack>
        </Card>
      </SingleColumnLayout>
    </AppShellLayout>
  );
}
