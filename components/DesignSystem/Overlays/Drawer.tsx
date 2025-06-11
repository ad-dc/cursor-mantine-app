import React, { forwardRef } from 'react';
import { Drawer as MantineDrawer, DrawerProps as MantineDrawerProps } from '@mantine/core';
import { ComponentSize } from '../config';

/**
 * Enhanced Drawer props extending Mantine's DrawerProps
 */
export interface DSDrawerProps extends Omit<MantineDrawerProps, 'size'> {
  /** Whether the drawer is open */
  opened: boolean;
  /** Callback fired when drawer should close */
  onClose: () => void;
  /** Drawer title */
  title?: React.ReactNode;
  /** Drawer content */
  children: React.ReactNode;
  /** Drawer size from design system scale */
  size?: ComponentSize | number;
  /** Position of the drawer */
  position?: 'top' | 'left' | 'right' | 'bottom';
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
 * consistent design system styling and positioning options.
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
 * // Different positions and sizes
 * <Drawer
 *   opened={opened}
 *   onClose={close}
 *   title="Navigation"
 *   position="left"
 *   size="sm"
 * >
 *   <Navigation />
 * </Drawer>
 * 
 * <Drawer
 *   opened={opened}
 *   onClose={close}
 *   title="Details"
 *   position="right"
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
    // Map design system sizes to drawer widths
    const getDrawerSize = (drawerSize: ComponentSize | number) => {
      if (typeof drawerSize === 'number') {
        return drawerSize;
      }
      
      switch (drawerSize) {
        case 'xs':
          return 320; // From Figma design token: admin/drawer/size/xs: 320
        case 'sm':
          return 400;
        case 'md':
          return 500;
        case 'lg':
          return 600;
        case 'xl':
          return 720;
        default:
          return 500;
      }
    };

    return (
      <MantineDrawer
        ref={ref}
        opened={opened}
        onClose={onClose}
        title={title}
        size={getDrawerSize(size)}
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