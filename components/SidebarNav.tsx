import { NavLink, ThemeIcon, Divider,Title } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import React from 'react';
import { SidebarNavLink } from './SidebarNavLink';

export type NavItem = {
  label: string;
  icon: string;
  active?: boolean;
  color?: string;
  rightSection?: React.ReactNode;
  style?: React.CSSProperties;
};

interface SidebarNavProps {
  navItems: NavItem[];
  title: string;
}

export function SidebarNav({ navItems, title }: SidebarNavProps) {
  return (
    <nav aria-label="Sidebar Navigation">
      <Inline align="center" gap="sm" mb={0} h={66} pl="xs">
        <ThemeIcon variant="transparent" size="lg" color="dark">
          <i className="ri-group-line" style={{ fontSize: 28 }} />
        </ThemeIcon>
        <Title order={5} fw={700} m={0}>
          {title}
        </Title>
      </Inline>
      <Divider mb="md" />
      {navItems.map((item) => (
        <SidebarNavLink
          key={item.label}
          label={item.label}
          icon={item.icon}
          active={item.active}
          color={item.color}
          rightSection={item.rightSection}
        />
      ))}
    </nav>
  );
} 