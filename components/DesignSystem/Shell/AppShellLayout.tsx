'use client';

import React, { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { Stack } from '../Layout/Stack';
import { HeaderBar, type DSHeaderBarProps } from './HeaderBar';
import { SidebarNav, type NavItem } from './SidebarNav';

const APP_DIRECT_NAVY = '#011B58';

export interface DSAppShellLayoutProps {
  children: ReactNode;
  /** Application or prototype title shown in the header */
  title?: string;
  /** Navigation items for the left sidebar */
  navItems?: NavItem[];
  /** Hide the left navigation to use header-only layout */
  hideNav?: boolean;
  /** Additional header props */
  headerProps?: Omit<DSHeaderBarProps, 'title'>;
}

export function AppShellLayout({
  children,
  title,
  navItems = [],
  hideNav = false,
}: DSAppShellLayoutProps) {
  const showNav = !hideNav && navItems.length > 0;

  return (
    <AppShell
      header={{ height: 68 }}
      navbar={showNav ? { width: 300, breakpoint: 'sm', collapsed: { mobile: false } } : undefined}
      padding="lg"
    >
      <AppShell.Header style={{ background: APP_DIRECT_NAVY }}>
        <HeaderBar title={title} />
      </AppShell.Header>

      {showNav && (
        <AppShell.Navbar pt={0} pb="md" pl="md" pr={0}>
          <SidebarNav navItems={navItems} title={title ?? 'Navigation'} />
        </AppShell.Navbar>
      )}

      <AppShell.Main>
        <Stack gap="xl">
          {children}
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

AppShellLayout.displayName = 'AppShellLayout';
