'use client';

import {
  AppShellLayout,
  type NavItem,
  SingleColumnLayout,
  PageContentHeader,
  Card,
  Breadcrumb,
  Stack,
  Text,
} from '@/components/DesignSystem';

const navItems: NavItem[] = [
  // TODO: Add navigation items
  { label: 'Settings', icon: 'ri-settings-3-line', href: '/prototype/settings', active: true },
];

export default function SettingsPage() {
  return (
    <AppShellLayout navItems={navItems} title="AppDirect Prototype">
      <SingleColumnLayout>
        <Breadcrumb items={[{ label: 'Prototypes', href: '/prototype' }, { label: 'Settings' }]} />

        <PageContentHeader
          title="Settings"
          subhead=""
          badge="Prototype"
        />

        <Card>
          <Stack gap="sm">
            <Text>Replace this with your page content.</Text>
          </Stack>
        </Card>
      </SingleColumnLayout>
    </AppShellLayout>
  );
}
