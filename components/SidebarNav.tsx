import { NavLink, ThemeIcon, Divider, Group, Text } from '@mantine/core';
import React from 'react';

export type NavItem = {
  label: string;
  icon: string;
  active?: boolean;
  color?: string;
  rightSection?: React.ReactNode;
  style?: React.CSSProperties;
};

const navLinkStyles = {
  height: 44,
  gap: 'var(--mantine-spacing-sm)',
  paddingLeft: 'var(--mantine-spacing-xs)',
  borderTopLeftRadius: 'var(--mantine-radius-sm)',
  borderBottomLeftRadius: 'var(--mantine-radius-sm)',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
};

const navLinkHoverStyles = {
  root: {
    '&:hover': {
      background: '#f6f8fa',
      borderTopLeftRadius: 'var(--mantine-radius-sm)',
      borderBottomLeftRadius: 'var(--mantine-radius-sm)',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
};

export function SidebarNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav aria-label="Sidebar Navigation">
      <Group align="center" gap="sm" mb={0} style={{ minHeight: 66, height: 66, paddingLeft: 'var(--mantine-spacing-xs)' }}>
        <ThemeIcon variant="transparent" size="lg" color="dark">
          <i className="ri-group-line" style={{ fontSize: 28 }} />
        </ThemeIcon>
        <Text component="h5" fw={700} size="lg" style={{ margin: 0 }}>
          Advisor Portal
        </Text>
      </Group>
      <Divider mb="md" />
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          label={item.label}
          leftSection={
            <ThemeIcon variant="transparent" size="md" color={item.color || 'dark'}>
              <i className={item.icon} style={{ fontSize: 20 }} />
            </ThemeIcon>
          }
          rightSection={item.rightSection}
          active={item.active}
          style={{ ...navLinkStyles, ...item.style }}
          styles={navLinkHoverStyles}
          aria-current={item.active ? 'page' : undefined}
        />
      ))}
    </nav>
  );
} 