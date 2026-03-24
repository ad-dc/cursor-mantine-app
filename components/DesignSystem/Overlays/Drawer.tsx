'use client';

import React, { forwardRef } from 'react';
import { Drawer as MantineDrawer, DrawerProps as MantineDrawerProps } from '@mantine/core';
import { ComponentSize } from '../config';

/**
 * Enhanced Drawer props extending Mantine's DrawerProps
 */
export interface DSDrawerProps extends Omit<MantineDrawerProps, 'size' | 'position'> {
  /** Whether the drawer is open */
  opened: boolean;
  /** Callback fired when drawer should close */
  onClose: () => void;
  /** Drawer title */
  title?: React.ReactNode;
  /** Drawer content */
  children: React.ReactNode;
  /** Drawer size from design system scale */
  size?: ComponentSize;
  /** Position of the drawer */
  position?: 'right';
  /** Whether to show close button */
  withCloseButton?: boolean;
  /** Whether clicking overlay closes drawer */
  closeOnClickOutside?: boolean;
  /** Whether pressing escape closes drawer */
  closeOnEscape?: boolean;
}

/**
 * AppDirect Design System Drawer Component
 * 
 * A sliding overlay component built on top of Mantine's Drawer with
 * consistent design system styling for right-side drawer layouts.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Drawer
 *   opened={opened}
 *   onClose={() => setOpened(false)}
 *   title="Settings"
 * >
 *   <p>Drawer content goes here</p>
 * </Drawer>
 * ```
 * 
 * @example
 * ```tsx
 * // Different sizes
 * <Drawer
 *   opened={opened}
 *   onClose={close}
 *   title="Navigation"
 *   size="sm"
 * >
 *   <Navigation />
 * </Drawer>
 * 
 * <Drawer
 *   opened={opened}
 *   onClose={close}
 *   title="Details"
 *   size="lg"
 * >
 *   <Details />
 * </Drawer>
 * ```
 * 
 * @example
 * ```tsx
 * // Custom behavior
 * <Drawer
 *   opened={opened}
 *   onClose={close}
 *   title="Modal Dialog"
 *   closeOnClickOutside={false}
 *   closeOnEscape={false}
 *   withCloseButton={true}
 * >
 *   <Form />
 * </Drawer>
 * ```
 */
export const Drawer = forwardRef<HTMLDivElement, DSDrawerProps>(
  (
    {
      opened,
      onClose,
      title,
      children,
      size = 'md',
      position = 'right',
      withCloseButton = true,
      closeOnClickOutside = true,
      closeOnEscape = true,
      ...props
    },
    ref
  ) => {
    return (
      <MantineDrawer
        ref={ref}
        opened={opened}
        onClose={onClose}
        title={title}
        size={size}
        position={position}
        withCloseButton={withCloseButton}
        closeOnClickOutside={closeOnClickOutside}
        closeOnEscape={closeOnEscape}
        radius={0}
        shadow="lg"
        {...props}
      >
        {children}
      </MantineDrawer>
    );
  }
);

Drawer.displayName = 'Drawer'; 