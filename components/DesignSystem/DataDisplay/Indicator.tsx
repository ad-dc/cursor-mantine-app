import React, { forwardRef } from 'react';
import { Indicator as MantineIndicator, IndicatorProps as MantineIndicatorProps } from '@mantine/core';

// ========================== TYPES ==========================

export interface DSIndicatorProps extends Omit<MantineIndicatorProps, 'color'> {
  /** Semantic indicator type */
  type?: 'success' | 'danger' | 'pending' | 'info' | 'default';
  /** Custom indicator color (overrides type) */
  color?: string;
  /** Indicator size in pixels */
  size?: number;
  /** Indicator position */
  position?: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
  /** Whether indicator should have border */
  withBorder?: boolean;
  /** Whether indicator should be disabled */
  disabled?: boolean;
  /** Whether indicator should be processing (animated) */
  processing?: boolean;
  /** Number to display in indicator */
  count?: number;
  /** Custom label inside indicator (overrides count) */
  label?: React.ReactNode;
  /** Whether to show outline variant */
  withOutline?: boolean;
  /** Child element that indicator will be attached to */
  children: React.ReactNode;
}

// ========================== COMPONENT ==========================

/**
 * Indicator Component
 * 
 * Built on top of Mantine's Indicator component with design system styling.
 * Used to show notifications, status, or other supplementary information.
 * 
 * Mantine's Indicator automatically handles:
 * - Minimum size constraints (always at least a circle)
 * - Pill shape when content is added (label/count)
 * - Proper sizing and positioning
 * 
 * @example
 * // Basic semantic indicators (dots)
 * <Indicator type="success" size={12}>
 *   <Avatar />
 * </Indicator>
 * 
 * @example
 * // With count (pill-shaped)
 * <Indicator type="danger" count={5} size={16}>
 *   <Button>Messages</Button>
 * </Indicator>
 * 
 * @example
 * // With outline variant
 * <Indicator type="info" count={12} withOutline size={20}>
 *   <IconBell />
 * </Indicator>
 * 
 * @example
 * // Processing/animated indicator
 * <Indicator type="pending" processing size={14}>
 *   <Avatar />
 * </Indicator>
 */
export const Indicator = forwardRef<HTMLDivElement, DSIndicatorProps>(
  ({ 
    type = 'default',
    color,
    size = 12,
    position = 'top-end',
    withBorder = false,
    disabled = false,
    processing = false,
    count,
    label,
    withOutline = false,
    children,
    ...props 
  }, ref) => {

    // Map semantic types to colors
    const getTypeColor = (type: string) => {
      switch (type) {
        case 'success': return 'green';
        case 'danger': return 'red';
        case 'pending': return 'yellow';
        case 'info': return 'blue';
        case 'default': return 'gray';
        default: return 'gray';
      }
    };

    const indicatorColor = color || getTypeColor(type);
    const indicatorLabel = label || (count !== undefined ? count.toString() : undefined);

    return (
      <MantineIndicator
        ref={ref}
        color={indicatorColor}
        size={size}
        position={position}
        withBorder={withBorder || withOutline}
        disabled={disabled}
        processing={processing}
        label={indicatorLabel}
        {...props}
      >
        {children}
      </MantineIndicator>
    );
  }
);

Indicator.displayName = 'Indicator';

// Default export for convenience
export default Indicator; 