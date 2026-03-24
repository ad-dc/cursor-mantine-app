import React from 'react';
import { NavLink as MantineNavLink, ThemeIcon } from '@mantine/core';
import Link from 'next/link';

const navLinkStyles = {
  root: {
    height: 44,
    paddingLeft: 'var(--mantine-spacing-xs)',
    borderTopLeftRadius: 'var(--mantine-radius-sm)',
    borderBottomLeftRadius: 'var(--mantine-radius-sm)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
};

export interface DSSidebarNavLinkProps {
  label: string;
  icon: string;
  href?: string;
  active?: boolean;
  color?: string;
  rightSection?: React.ReactNode;
}

export function SidebarNavLink({
  label,
  icon,
  href,
  active,
  color = 'dark',
  rightSection,
}: DSSidebarNavLinkProps) {
  return (
    <MantineNavLink
      component={href ? Link : undefined}
      href={href ?? '#'}
      label={label}
      leftSection={
        <ThemeIcon variant="transparent" size="md" color={color}>
          <i className={icon} style={{ fontSize: 20 }} />
        </ThemeIcon>
      }
      rightSection={rightSection}
      active={active}
      aria-current={active ? 'page' : undefined}
      styles={navLinkStyles}
    />
  );
}

SidebarNavLink.displayName = 'SidebarNavLink';
