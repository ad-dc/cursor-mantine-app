import React, { forwardRef } from 'react';
import { Chip as MantineChip, ChipProps as MantineChipProps } from '@mantine/core';
import { ComponentSize } from '../config';

// Define allowed chip colors (semantic) - matches Badge
export type ChipColor = 'info' | 'success' | 'danger' | 'pending' | 'default';

// Define the DS Chip props interface
export interface DSChipProps extends Omit<MantineChipProps, 'variant' | 'color' | 'radius' | 'size'> {
  /** Chip size from design system scale */
  size?: ComponentSize;
  /** Chip semantic color */
  color?: ChipColor;
  /** Whether the chip is selected */
  checked?: boolean;
  /** Called when chip selection changes */
  onChange?: (checked: boolean) => void;
}

// Map semantic colors to Mantine colors (same as Badge)
const getMantineColor = (dsColor: ChipColor): string => {
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

/**
 * Chip component with semantic colors and selection states.
 * Built on top of Mantine's Chip component with consistent styling.
 * 
 * Uses outline variant (hardcoded) with semantic color options.
 * Props are normalized with Badge for `color` and `size`.
 * 
 * @example
 * ```tsx
 * // Basic chip
 * <Chip>Default</Chip>
 * 
 * // Colored chips (matches Badge color API)
 * <Chip color="info">Info</Chip>
 * <Chip color="success">Success</Chip>
 * <Chip color="danger">Danger</Chip>
 * <Chip color="pending">Pending</Chip>
 * 
 * // With size
 * <Chip color="info" size="md">Medium Info</Chip>
 * 
 * // Controlled selection
 * <Chip checked={selected} onChange={setSelected}>
 *   Toggle me
 * </Chip>
 * ```
 */
export const Chip = forwardRef<HTMLInputElement, DSChipProps>(
  (
    {
      size = 'sm',
      color = 'default',
      checked,
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <MantineChip
        ref={ref}
        size={size}
        color={getMantineColor(color)}
        variant="outline"
        radius="sm"
        checked={checked}
        onChange={onChange}
        {...props}
      >
        {children}
      </MantineChip>
    );
  }
);

Chip.displayName = 'Chip';

export default Chip; 