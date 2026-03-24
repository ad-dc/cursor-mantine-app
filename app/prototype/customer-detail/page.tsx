'use client';

import {
  AppShellLayout,
  type NavItem,
  TertiaryColumnLayout,
  PageContentHeader,
  Card,
  Badge,
  NameValue,
  Breadcrumb,
  Stack,
  Text,
  Title,
  Button,
  Divider,
} from '@/components/DesignSystem';

const navItems: NavItem[] = [
  { label: 'Customers', icon: 'ri-team-line', href: '/prototype/customers' },
  { label: 'Customer Detail', icon: 'ri-user-line', href: '/prototype/customer-detail', active: true },
];

export default function CustomerDetailPage() {
  return (
    <AppShellLayout navItems={navItems} title="Revenue Ops">
      <Breadcrumb
        items={[
          { label: 'Prototypes', href: '/prototype' },
          { label: 'Customers', href: '/prototype/customers' },
          { label: 'Northwind Health' },
        ]}
      />

      <PageContentHeader
        title="Northwind Health"
        subhead="Enterprise customer"
        badge="Active"
      />

      <TertiaryColumnLayout
        main={
          <Stack gap="lg">
            <Card>
              <Stack gap="sm">
                <Title order={4}>Account Details</Title>
                <NameValue
                  columns={2}
                  pairs={[
                    { name: 'Account ID', value: 'cus_1024' },
                    { name: 'Plan', value: 'Enterprise' },
                    { name: 'Owner', value: 'Alicia Stone' },
                    { name: 'Region', value: 'North America' },
                    { name: 'MRR', value: '$12,400' },
                    { name: 'Contract End', value: 'Dec 2026' },
                  ]}
                />
              </Stack>
            </Card>

            <Card>
              <Stack gap="sm">
                <Title order={4}>Usage Summary</Title>
                <NameValue
                  pairs={[
                    { name: 'Active Users', value: '142' },
                    { name: 'API Calls (30d)', value: '1.2M' },
                    { name: 'Storage Used', value: '48 GB' },
                  ]}
                />
              </Stack>
            </Card>
          </Stack>
        }
        aside={
          <Stack gap="lg">
            <Card>
              <Stack gap="sm">
                <Title order={5}>Quick Actions</Title>
                <Button variant="primary" fullWidth>Contact Owner</Button>
                <Button variant="outline" fullWidth>View Invoices</Button>
                <Button variant="default" fullWidth>Edit Account</Button>
              </Stack>
            </Card>

            <Card>
              <Stack gap="sm">
                <Title order={5}>Health Score</Title>
                <Badge color="success" size="lg">Healthy</Badge>
                <Divider />
                <Text size="sm" c="dimmed">
                  Last reviewed 3 days ago by Alicia Stone.
                </Text>
              </Stack>
            </Card>
          </Stack>
        }
      />
    </AppShellLayout>
  );
}
