import { NavLink, ThemeIcon } from '@mantine/core';
import React from 'react';

const navLinkStyle = {

};
// 'Styles' is a Mantine prop that allows you to override the default styles of a component.
// 'Style' is a Mantine prop that allows you to override the default style of a component.
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

export type SidebarNavLinkProps = {
  label: string;
  icon: string;
  active?: boolean;
  color?: string;
  rightSection?: React.ReactNode;
};

export function SidebarNavLink({
  label,
  icon,
  active,
  color = 'dark',
  rightSection,
}: SidebarNavLinkProps) {
  return (
    <NavLink
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