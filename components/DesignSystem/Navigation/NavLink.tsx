import React, { forwardRef } from 'react';
import { NavLink as MantineNavLink, NavLinkProps as MantineNavLinkProps, ThemeIcon } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

// ========================== TYPES ==========================

export interface DSNavLinkProps extends Omit<MantineNavLinkProps, 'leftSection' | 'rightSection'> {
  /** NavLink label */
  label: string;
  /** Optional description text */
  description?: string;
  /** Icon to display on the left */
  icon?: React.ReactNode;
  /** Whether this nav item has children (shows chevron) */
  hasChildren?: boolean;
  /** Custom right section (overrides hasChildren chevron) */
  rightSection?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Navigation href */
  href?: string;
  /** Whether the nav item is active */
  active?: boolean;
}

// ========================== COMPONENT ==========================

/**
 * Menu NavLink Component
 * 
 * Built on top of Mantine's NavLink component with design system styling.
 * Used for navigation items in menus and sidebars.
 * Supports icons, descriptions, and children indicators.
 * 
 * @example
 * <NavLink 
 *   icon={<IconHome />}
 *   label="Dashboard" 
 *   onClick={() => navigate('/dashboard')}
 * />
 * 
 * @example
 * <NavLink 
 *   icon={<IconSettings />}
 *   label="Settings"
 *   description="Manage your preferences"
 *   hasChildren
 *   onClick={() => toggleSettingsMenu()}
 * />
 */
export const NavLink = forwardRef<HTMLAnchorElement, DSNavLinkProps>(
  ({ 
    icon, 
    label, 
    description, 
    hasChildren = false, 
    rightSection, 
    ...props 
  }, ref) => {
    
    // Create left section with icon
    const leftSection = icon ? (
      <ThemeIcon size={18} variant="white" bg="none" color="black">
        {icon}
      </ThemeIcon>
    ) : undefined;

    // Create right section with chevron if hasChildren
    const finalRightSection = rightSection || (hasChildren ? (
      <IconChevronRight size={18} />
    ) : undefined);

    return (
      <MantineNavLink
        ref={ref}
        label={label}
        description={description}
        leftSection={leftSection}
        rightSection={finalRightSection}
        {...props}
      />
    );
  }
);

NavLink.displayName = 'NavLink';

// Default export for convenience
export default NavLink; 