import React, { forwardRef } from 'react';
import { Kbd as MantineKbd, KbdProps as MantineKbdProps } from '@mantine/core';

/**
 * Enhanced Kbd props extending Mantine's KbdProps
 */
export interface DSKbdProps extends Omit<MantineKbdProps, 'children'> {
  /** Keyboard key or combination to display */
  children: React.ReactNode;
  /** Size of the keyboard key */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * AppDirect Design System Kbd Component
 * 
 * A keyboard key component built on top of Mantine's Kbd with
 * consistent design system styling for displaying keyboard shortcuts.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Kbd>⌘K</Kbd>
 * ```
 * 
 * @example
 * ```tsx
 * // With different sizes
 * <Inline gap="sm">
 *   <Kbd size="xs">Esc</Kbd>
 *   <Kbd size="sm">⌘K</Kbd>
 *   <Kbd size="md">Ctrl+C</Kbd>
 *   <Kbd size="lg">Enter</Kbd>
 * </Inline>
 * ```
 * 
 * @example
 * ```tsx
 * // Common keyboard shortcuts
 * <Inline gap="sm">
 *   <Kbd>⌘</Kbd>
 *   <Kbd>⌘K</Kbd>
 *   <Kbd>⌘⇧P</Kbd>
 *   <Kbd>Ctrl+C</Kbd>
 *   <Kbd>Ctrl+V</Kbd>
 *   <Kbd>Enter</Kbd>
 *   <Kbd>Esc</Kbd>
 *   <Kbd>Tab</Kbd>
 *   <Kbd>Space</Kbd>
 * </Inline>
 * ```
 * 
 * @example
 * ```tsx
 * // In Menu items
 * <Menu.Item
 *   leftSection={<RiSearchLine size={14} />}
 *   rightSection={<Kbd>⌘K</Kbd>}
 * >
 *   Search
 * </Menu.Item>
 * ```
 */
export const Kbd = forwardRef<HTMLElement, DSKbdProps>(
  (
    {
      children,
      size = 'sm',
      ...props
    },
    ref
  ) => {
    return (
      <MantineKbd
        ref={ref}
        size={size}
        {...props}
      >
        {children}
      </MantineKbd>
    );
  }
);

Kbd.displayName = 'Kbd'; 