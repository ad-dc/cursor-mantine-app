import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';
import { AppDirectBrandingColors } from '@/styles/appdirect-branding-colors';
import { MantineThemeProvider } from './MantineThemeProvider';

interface MainLayoutProps {
  header: ReactNode;
  navbar: ReactNode;
  children: ReactNode;
}

export function MainLayout({ header, navbar, children }: MainLayoutProps) {
  return (
    <MantineThemeProvider>
      <AppShell
        header={{ height: 68 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: false } }}
        padding="md"
      >
        <AppShell.Header style={{ background: AppDirectBrandingColors.Navy }}>
          {header}
        </AppShell.Header>
        <AppShell.Navbar pt={0} pb="md" pl="md" pr={0}>
          {navbar}
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineThemeProvider>
  );
} 