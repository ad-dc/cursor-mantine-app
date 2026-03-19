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

export interface LegacyMenuProps extends Omit<MantineMenuProps, 'children'> {
  /** Menu trigger element */
  trigger: React.ReactNode;
  /** Array of menu sections */
  sections: MenuSection[];
  /** Mantine-composed children are not used with the legacy API */
  children?: never;
}

/**
 * Thin Menu wrapper over Mantine Menu.
 *
 * Preferred usage mirrors Mantine composition directly:
 * `Menu -> Menu.Target -> Menu.Dropdown -> Menu.Item`.
 *
 * The legacy `trigger + sections` API is still supported to avoid breaking
 * existing DS consumers while Menu moves to a 1:1 Mantine/Figma prop model.
 */
export type DSMenuProps = MantineMenuProps | LegacyMenuProps;

const isLegacyMenuProps = (props: DSMenuProps): props is LegacyMenuProps =>
  'trigger' in props && 'sections' in props;

/**
 * AppDirect Design System Menu Component
 * 
 * A dropdown menu component built on top of Mantine's Menu with
 * consistent design system styling.
 * 
 * @example
 * ```tsx
 * // Mantine-aligned composition
 * <Menu shadow="md" width={220}>
 *   <Menu.Target>
 *     <Button>Actions</Button>
 *   </Menu.Target>
 *
 *   <Menu.Dropdown>
 *     <Menu.Item>Edit</Menu.Item>
 *     <Menu.Item>Duplicate</Menu.Item>
 *     <Menu.Divider />
 *     <Menu.Label>Danger zone</Menu.Label>
 *     <Menu.Item color="red">Delete</Menu.Item>
 *   </Menu.Dropdown>
 * </Menu>
 * ```
 * 
 * @example
 * ```tsx
 * // Legacy structured API still supported during migration
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
const MenuRoot = forwardRef<HTMLDivElement, DSMenuProps>((props, _ref) => {
  if (isLegacyMenuProps(props)) {
    const {
      trigger,
      sections,
      shadow = 'md',
      radius = 'sm',
      ...menuProps
    } = props;

    return (
      <MantineMenu
        shadow={shadow}
        radius={radius}
        {...menuProps}
      >
        <MantineMenu.Target>{trigger}</MantineMenu.Target>

        <MantineMenu.Dropdown>
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {sectionIndex > 0 && <MantineMenu.Divider />}

              {section.title && (
                <MantineMenu.Label>{section.title}</MantineMenu.Label>
              )}

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

  const {
    shadow = 'md',
    radius = 'sm',
    ...menuProps
  } = props;

  return (
    <MantineMenu
      shadow={shadow}
      radius={radius}
      {...menuProps}
    />
  );
});

MenuRoot.displayName = 'Menu';

export const Menu = Object.assign(MenuRoot, {
  Target: MantineMenu.Target,
  Dropdown: MantineMenu.Dropdown,
  Item: MantineMenu.Item,
  Label: MantineMenu.Label,
  Divider: MantineMenu.Divider,
});