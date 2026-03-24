import React from 'react';
import { ThemeIcon, Divider, Title } from '@mantine/core';
import { Inline } from '../Layout/Inline';
import { SidebarNavLink } from './SidebarNavLink';

export interface NavItem {
  label: string;
  icon: string;
  href?: string;
  active?: boolean;
  color?: string;
  rightSection?: React.ReactNode;
}

export interface DSSidebarNavProps {
  navItems: NavItem[];
  title: string;
}

export function SidebarNav({ navItems, title }: DSSidebarNavProps) {
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
          href={item.href}
          active={item.active}
          color={item.color}
          rightSection={item.rightSection}
        />
      ))}
    </nav>
  );
}

SidebarNav.displayName = 'SidebarNav';
