'use client';

import { Tabs as MantineTabs, TabsProps as MantineTabsProps } from '@mantine/core';

// ========================== TYPES ==========================

export type DSTabsProps = MantineTabsProps;

// ========================== COMPONENT ==========================

/**
 * Tabs Component
 *
 * Thin wrapper around Mantine's Tabs compound component.
 * Use Tabs.List, Tabs.Tab, and Tabs.Panel for composition.
 *
 * @example
 * <Tabs defaultValue="overview">
 *   <Tabs.List>
 *     <Tabs.Tab value="overview" leftSection={<RiDashboardLine size={14} />}>
 *       Overview
 *     </Tabs.Tab>
 *     <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
 *   </Tabs.List>
 *   <Tabs.Panel value="overview">Overview content</Tabs.Panel>
 *   <Tabs.Panel value="analytics">Analytics content</Tabs.Panel>
 * </Tabs>
 */
export const Tabs = MantineTabs;
