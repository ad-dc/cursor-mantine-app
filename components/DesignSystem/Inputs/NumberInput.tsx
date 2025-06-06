import React from 'react';
import { NumberInput as MantineNumberInput, NumberInputProps as MantineNumberInputProps } from '@mantine/core';

// Define the DS NumberInput props interface
export interface DSNumberInputProps extends Omit<MantineNumberInputProps, 'radius'> {
  /** Show "(Optional)" text after label */
  showOptional?: boolean;
}

/**
 * NumberInput component with consistent design system styling.
 * Built on top of Mantine's NumberInput component with enforced radius.
 * 
 * @example
 * ```tsx
 * // Basic number input
 * <NumberInput label="Quantity" placeholder="Enter a number" />
 * 
 * // Different sizes
 * <NumberInput label="Small" size="sm" />
 * <NumberInput label="Large" size="lg" />
 * 
 * // Required field (shows red asterisk)
 * <NumberInput label="Price" required />
 * 
 * // Optional field (shows gray optional text)
 * <NumberInput label="Discount" showOptional />
 * 
 * // With min/max and step
 * <NumberInput 
 *   label="Rating" 
 *   min={1}
 *   max={10}
 *   step={0.5}
 *   defaultValue={5}
 * />
 * 
 * // With custom formatting
 * <NumberInput 
 *   label="Price" 
 *   prefix="$"
 *   decimalScale={2}
 *   fixedDecimalScale
 * />
 * ```
 */
export const NumberInput: React.FC<DSNumberInputProps> = ({
  label,
  showOptional = false,
  required = false,
  ...props
}) => {
  // Create the label with optional indicator if needed
  const labelWithOptional = showOptional && !required && label
    ? `${label} (Optional)`
    : label;

  return (
    <MantineNumberInput
      label={labelWithOptional}
      required={required}
      radius="sm"
      {...props}
    />
  );
};

export default NumberInput; 