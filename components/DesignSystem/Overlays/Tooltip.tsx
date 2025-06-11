import React, { forwardRef } from 'react';
import { Tooltip as MantineTooltip, TooltipProps as MantineTooltipProps } from '@mantine/core';

// ========================== TYPES ==========================

export interface DSTooltipProps extends Omit<MantineTooltipProps, 'color' | 'radius'> {
  /** Tooltip content */
  label: React.ReactNode;
  /** Element that triggers the tooltip */
  children: React.ReactNode;
  /** Tooltip position relative to target */
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  /** Whether tooltip is disabled */
  disabled?: boolean;
  /** Delay in ms before showing tooltip */
  openDelay?: number;
  /** Delay in ms before hiding tooltip */
  closeDelay?: number;
  /** Whether tooltip stays open when hovering over it */
  keepMounted?: boolean;
  /** Custom width for tooltip */
  width?: number | 'auto';
  /** Whether to show arrow pointer */
  withArrow?: boolean;
  /** Size of arrow pointer */
  arrowSize?: number;
}

// ========================== COMPONENT ==========================

/**
 * Tooltip Component
 * 
 * Built on top of Mantine's Tooltip component with design system styling.
 * Uses consistent dark background with white text and arrow pointer.
 * 
 * @example
 * // Basic tooltip
 * <Tooltip label="This is a tooltip! Rejoice!">
 *   <Button>Hover me</Button>
 * </Tooltip>
 * 
 * @example
 * // Different positions
 * <Tooltip label="Top tooltip" position="top">
 *   <Button>Top</Button>
 * </Tooltip>
 * 
 * @example
 * // Custom width and multiline
 * <Tooltip 
 *   label="This is a longer tooltip that can span multiple lines"
 *   width={200}
 *   position="bottom"
 * >
 *   <Button>Long tooltip</Button>
 * </Tooltip>
 * 
 * @example
 * // With delays
 * <Tooltip 
 *   label="Delayed tooltip"
 *   openDelay={500}
 *   closeDelay={200}
 * >
 *   <Button>Delayed</Button>
 * </Tooltip>
 */
export const Tooltip = forwardRef<HTMLDivElement, DSTooltipProps>(
  ({ 
    label,
    children,
    position = 'top',
    disabled = false,
    openDelay = 0,
    closeDelay = 0,
    keepMounted = false,
    width = 'auto',
    withArrow = true,
    arrowSize = 6,
    ...props 
  }, ref) => {

    return (
      <MantineTooltip
        ref={ref}
        label={label}
        position={position}
        disabled={disabled}
        openDelay={openDelay}
        closeDelay={closeDelay}
        keepMounted={keepMounted}
        withArrow={withArrow}
        arrowSize={arrowSize}
        // Design system styling from Figma
        color="dark"
        radius="sm"
        // Custom styles to match Figma design exactly
        styles={{
          tooltip: {
            backgroundColor: '#212529',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.55,
            padding: '5px 8px',
            borderRadius: '4px',
            border: 'none',
            width: width !== 'auto' ? width : undefined,
            maxWidth: width === 'auto' ? '300px' : undefined,
          },
          arrow: {
            backgroundColor: '#212529',
            borderColor: '#212529',
          }
        }}
        {...props}
      >
        {children}
      </MantineTooltip>
    );
  }
);

Tooltip.displayName = 'Tooltip';

// Default export for convenience
export default Tooltip; 