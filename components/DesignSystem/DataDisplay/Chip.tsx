import React from 'react';
import { Chip as MantineChip, ChipProps as MantineChipProps } from '@mantine/core';

// Define allowed chip variants
export type ChipVariant = 'info' | 'success' | 'danger' | 'pending' | 'default';

// Define the DS Chip props interface
export interface DSChipProps extends Omit<MantineChipProps, 'variant' | 'color' | 'radius'> {
  /** Semantic variant that determines color */
  variant?: ChipVariant;
  /** Whether the chip is selected */
  checked?: boolean;
  /** Called when chip selection changes */
  onChange?: (checked: boolean) => void;
}

// Map semantic variants to Mantine colors
const variantToColor: Record<ChipVariant, string> = {
  info: 'blue',
  success: 'green', 
  danger: 'red',
  pending: 'yellow',
  default: 'gray',
};

/**
 * Chip component with semantic color variants and selection states.
 * Built on top of Mantine's Chip component with consistent styling.
 * 
 * @example
 * ```tsx
 * // Basic chip
 * <Chip>Default</Chip>
 * 
 * // Colored variants
 * <Chip variant="info">Info</Chip>
 * <Chip variant="success">Success</Chip>
 * <Chip variant="danger">Danger</Chip>
 * 
 * // Controlled selection
 * <Chip checked={selected} onChange={setSelected}>
 *   Toggle me
 * </Chip>
 * ```
 */
export const Chip: React.FC<DSChipProps> = ({
  variant = 'default',
  checked,
  onChange,
  ...props
}) => {
  return (
    <MantineChip
      color={variantToColor[variant]}
      variant="outline"
      radius="sm"
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
};

export default Chip; 