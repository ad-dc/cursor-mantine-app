import React, { forwardRef, useEffect } from 'react';
import { Badge as MantineBadge, BadgeProps as MantineBadgeProps } from '@mantine/core';
import { RiCircleFill } from '@remixicon/react';
import { ComponentSize } from '../config';

/**
 * Enhanced Badge props extending Mantine's BadgeProps
 */
export interface DSBadgeProps extends Omit<MantineBadgeProps, 'size' | 'color' | 'variant'> {
  /** Badge size from design system scale */
  size?: ComponentSize;
  /** Badge style variant */
  variant?: 'filled' | 'outline';
  /** Badge semantic color variant */
  color?: 'info' | 'success' | 'danger' | 'pending' | 'default';
  /** Whether to show an icon (defaults to circle-fill from Remix icons) */
  hasIcon?: boolean;
}

export const BADGE_BUILD = 'badge-2025-09-26';

/**
 * AppDirect Design System Badge Component
 * 
 * A semantic badge component built on top of Mantine's Badge with
 * consistent design system styling and restricted color options.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Badge>Default</Badge>
 * 
 * // Different variants
 * <Badge variant="filled" color="info">Info</Badge>
 * <Badge variant="outline" color="success">Success</Badge>
 * <Badge variant="filled" color="danger">Danger</Badge>
 * <Badge variant="outline" color="pending">Pending</Badge>
 * ```
 * 
 * @example
 * ```tsx
 * // Different sizes
 * <Badge size="sm" color="info">Small</Badge>
 * <Badge size="md" color="success">Medium</Badge>
 * <Badge size="lg" color="danger">Large</Badge>
 * ```
 * 
 * @example
 * ```tsx
 * // All color variants
 * <Badge color="default">Default</Badge>
 * <Badge color="info">Info</Badge>
 * <Badge color="success">Success</Badge>
 * <Badge color="danger">Danger</Badge>
 * <Badge color="pending">Pending</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLDivElement, DSBadgeProps>(
  (
    {
      variant = 'filled',
      size = 'md',
      color = 'default',
      hasIcon = false,
      children,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      // Mount fingerprint log for Figma verification
      // eslint-disable-next-line no-console
      console.log('@@BADGE_MOUNT@@', BADGE_BUILD, variant);
    }, []);

    // Map design system colors to Mantine colors
    const getMantineColor = (dsColor: DSBadgeProps['color']) => {
      switch (dsColor) {
        case 'info':
          return 'blue';
        case 'success':
          return 'green';
        case 'danger':
          return 'red';
        case 'pending':
          return 'yellow';
        case 'default':
          return 'gray';
        default:
          return 'gray';
      }
    };

    return (
      <MantineBadge
        ref={ref}
        variant={variant}
        size={size}
        color={getMantineColor(color)}
        radius="sm"
        data-ui="Badge"
        data-build={BADGE_BUILD}
        leftSection={hasIcon ? <RiCircleFill size={12} /> : undefined}
        {...props}
      >
        {children}
      </MantineBadge>
    );
  }
);

Badge.displayName = 'Badge'; 