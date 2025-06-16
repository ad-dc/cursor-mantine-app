import React, { forwardRef } from 'react';
import { List as MantineList, ListProps as MantineListProps } from '@mantine/core';
import { ComponentSize } from '../config';

/**
 * Enhanced List props extending Mantine's ListProps
 */
export interface DSListProps extends Omit<MantineListProps, 'size' | 'spacing'> {
  /** List size from design system scale */
  size?: ComponentSize;
  /** Spacing between list items */
  spacing?: ComponentSize;
}

/**
 * AppDirect Design System List Component
 * 
 * A semantic list component built on top of Mantine's List with
 * consistent design system styling and spacing options.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <List>
 *   <List.Item>First item</List.Item>
 *   <List.Item>Second item</List.Item>
 *   <List.Item>Third item</List.Item>
 * </List>
 * ```
 * 
 * @example
 * ```tsx
 * // With custom icon
 * <List
 *   icon={<IconCheck size={16} />}
 *   spacing="md"
 *   size="sm"
 * >
 *   <List.Item>Task completed</List.Item>
 *   <List.Item>Another task done</List.Item>
 * </List>
 * ```
 * 
 * @example
 * ```tsx
 * // Ordered list
 * <List type="ordered" spacing="sm">
 *   <List.Item>Step one</List.Item>
 *   <List.Item>Step two</List.Item>
 *   <List.Item>Step three</List.Item>
 * </List>
 * ```
 * 
 * @example
 * ```tsx
 * // Different sizes and spacing
 * <List size="lg" spacing="xl">
 *   <List.Item>Large spaced item</List.Item>
 *   <List.Item>Another large item</List.Item>
 * </List>
 * ```
 */
const ListComponent = forwardRef<HTMLUListElement | HTMLOListElement, DSListProps>(
  (
    {
      size = 'md',
      spacing = 'sm',
      ...props
    },
    ref
  ) => {
    return (
      <MantineList
        ref={ref}
        size={size}
        spacing={spacing}
        {...props}
      />
    );
  }
);

ListComponent.displayName = 'List';

// Create a compound component with Item attached
export const List = Object.assign(ListComponent, {
  Item: MantineList.Item,
}); 