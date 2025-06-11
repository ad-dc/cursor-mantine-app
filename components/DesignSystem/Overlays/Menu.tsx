import React, { forwardRef } from 'react';
import { Menu as MantineMenu, MenuProps as MantineMenuProps } from '@mantine/core';

/**
 * Menu Item interface for structured menu data
 */
export interface MenuItem {
  /** Unique identifier for the menu item */
  id: string;
  /** Menu item label */
  label: string;
  /** Left section icon */
  leftSection?: React.ReactNode;
  /** Right section content (badge, shortcut, etc.) */
  rightSection?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Item color for semantic styling */
  color?: 'red' | 'default';
}

/**
 * Menu Section interface for organizing menu items
 */
export interface MenuSection {
  /** Section title/label */
  title?: string;
  /** Array of menu items in this section */
  items: MenuItem[];
}

/**
 * Enhanced Menu props
 */
export interface DSMenuProps {
  /** Menu trigger element */
  trigger: React.ReactNode;
  /** Array of menu sections */
  sections: MenuSection[];
  /** Menu width */
  width?: number;
  /** Menu shadow */
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Menu position */
  position?: 'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /** Whether menu is opened by default */
  defaultOpened?: boolean;
  /** Control menu opened state */
  opened?: boolean;
  /** Called when menu state changes */
  onChange?: (opened: boolean) => void;
}

/**
 * AppDirect Design System Menu Component
 * 
 * A dropdown menu component built on top of Mantine's Menu with
 * consistent design system styling and structured data approach.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Menu
 *   trigger={<Button>Actions</Button>}
 *   sections={[
 *     {
 *       title: "Actions",
 *       items: [
 *         {
 *           id: "edit",
 *           label: "Edit",
 *           leftSection: <RiEditLine size={14} />,
 *           onClick: () => console.log('Edit')
 *         },
 *         {
 *           id: "delete",
 *           label: "Delete",
 *           leftSection: <RiDeleteBinLine size={14} />,
 *           color: "red",
 *           onClick: () => console.log('Delete')
 *         }
 *       ]
 *     }
 *   ]}
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // With multiple sections and shortcuts
 * <Menu
 *   trigger={<Button>Menu</Button>}
 *   sections={[
 *     {
 *       title: "Application",
 *       items: [
 *         {
 *           id: "settings",
 *           label: "Settings",
 *           leftSection: <RiSettingsLine size={14} />,
 *           onClick: () => console.log('Settings')
 *         },
 *         {
 *           id: "search",
 *           label: "Search",
 *           leftSection: <RiSearchLine size={14} />,
 *           rightSection: "⌘K",
 *           onClick: () => console.log('Search')
 *         }
 *       ]
 *     },
 *     {
 *       title: "Danger Zone",
 *       items: [
 *         {
 *           id: "delete-account",
 *           label: "Delete Account",
 *           leftSection: <RiDeleteBinLine size={14} />,
 *           color: "red",
 *           onClick: () => console.log('Delete Account')
 *         }
 *       ]
 *     }
 *   ]}
 * />
 * ```
 */
export const Menu = forwardRef<HTMLDivElement, DSMenuProps>(
  (
    {
      trigger,
      sections,
      width = 200,
      shadow = 'md',
      position = 'bottom-start',
      defaultOpened,
      opened,
      onChange,
    },
    ref
  ) => {
    return (
      <MantineMenu
        width={width}
        shadow={shadow}
        position={position}
        radius="sm"
        defaultOpened={defaultOpened}
        opened={opened}
        onChange={onChange}
      >
        <MantineMenu.Target>
          {trigger}
        </MantineMenu.Target>

        <MantineMenu.Dropdown>
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {/* Add divider between sections (except before first section) */}
              {sectionIndex > 0 && <MantineMenu.Divider />}
              
              {/* Section title/label */}
              {section.title && (
                <MantineMenu.Label>{section.title}</MantineMenu.Label>
              )}
              
              {/* Section items */}
              {section.items.map((item) => (
                <MantineMenu.Item
                  key={item.id}
                  leftSection={item.leftSection}
                  rightSection={item.rightSection}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  color={item.color}
                >
                  {item.label}
                </MantineMenu.Item>
              ))}
            </React.Fragment>
          ))}
        </MantineMenu.Dropdown>
      </MantineMenu>
    );
  }
);

Menu.displayName = 'Menu'; 