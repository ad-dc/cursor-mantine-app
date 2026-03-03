import React, { forwardRef } from 'react';
import { NavLink as MantineNavLink, NavLinkProps as MantineNavLinkProps } from '@mantine/core';

// ========================== TYPES ==========================

export interface DSNavLinkProps extends MantineNavLinkProps {}

// ========================== COMPONENT ==========================

/**
 * NavLink Component
 *
 * Thin wrapper around Mantine's NavLink. Used for navigation items
 * in menus and sidebars.
 *
 * @example
 * <NavLink
 *   leftSection={<RiHomeLine size={18} />}
 *   label="Dashboard"
 *   onClick={() => navigate('/dashboard')}
 * />
 *
 * @example
 * <NavLink
 *   leftSection={<RiSettingsLine size={18} />}
 *   label="Settings"
 *   description="Manage your preferences"
 *   active
 * />
 */
export const NavLink = forwardRef<HTMLAnchorElement, DSNavLinkProps>(
  (props, ref) => <MantineNavLink ref={ref} {...props} />
);

NavLink.displayName = 'NavLink';