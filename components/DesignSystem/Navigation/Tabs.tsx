import React, { forwardRef } from 'react';
import { Tabs as MantineTabs, TabsProps as MantineTabsProps } from '@mantine/core';

// ========================== TYPES ==========================

export interface TabData {
  /** Unique identifier for the tab */
  id: string;
  /** Tab label */
  label: string;
  /** Icon or element to display on the left */
  leftSection?: React.ReactNode;
  /** Badge, icon, or element to display on the right */
  rightSection?: React.ReactNode;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Tab content */
  children?: React.ReactNode;
}

export interface DSTabsProps extends Omit<MantineTabsProps, 'children'> {
  /** Array of tab data */
  tabs: TabData[];
  /** Currently active tab ID */
  value?: string;
  /** Callback when tab changes */
  onTabChange?: (value: string | null) => void;
  /** Tabs orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Tab variant */
  variant?: 'default' | 'outline' | 'pills';
}

// ========================== COMPONENT ==========================

/**
 * Tabs Component
 * 
 * Built on top of Mantine's Tabs component with design system styling.
 * Supports both horizontal and vertical orientations with left and right sections.
 * 
 * @example
 * const tabs = [
 *   { 
 *     id: 'overview', 
 *     label: 'Overview', 
 *     leftSection: <IconDashboard />,
 *     children: <div>Overview content</div>
 *   },
 *   { 
 *     id: 'analytics', 
 *     label: 'Analytics', 
 *     leftSection: <IconChart />,
 *     rightSection: <Badge>New</Badge>,
 *     children: <div>Analytics content</div>
 *   }
 * ];
 * 
 * <Tabs 
 *   tabs={tabs}
 *   value={activeTab}
 *   onTabChange={setActiveTab}
 *   orientation="horizontal"
 * />
 * 
 * @example
 * // Vertical tabs
 * <Tabs 
 *   tabs={tabs}
 *   orientation="vertical"
 *   placement="left"
 * />
 */
export const Tabs = forwardRef<HTMLDivElement, DSTabsProps>(
  ({ 
    tabs,
    value,
    onTabChange,
    orientation = 'horizontal',
    variant = 'default',
    ...props 
  }, ref) => {

    return (
      <MantineTabs
        ref={ref}
        value={value}
        onChange={onTabChange}
        orientation={orientation}
        variant={variant}
        {...props}
      >
        <MantineTabs.List>
          {tabs.map((tab) => (
            <MantineTabs.Tab
              key={tab.id}
              value={tab.id}
              disabled={tab.disabled}
              leftSection={tab.leftSection}
              rightSection={tab.rightSection}
            >
              {tab.label}
            </MantineTabs.Tab>
          ))}
        </MantineTabs.List>

        {tabs
          .filter((tab) => tab.children)
          .map((tab) => (
            <MantineTabs.Panel key={tab.id} value={tab.id}>
              {tab.children}
            </MantineTabs.Panel>
          ))}
      </MantineTabs>
    );
  }
);

Tabs.displayName = 'Tabs';

// Default export for convenience
export default Tabs; 