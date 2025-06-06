import React from 'react';
import { ColorInput as MantineColorInput, ColorInputProps as MantineColorInputProps } from '@mantine/core';

// Define the DS ColorInput props interface
export interface DSColorInputProps extends Omit<MantineColorInputProps, 'radius'> {
  /** Show "(Optional)" text after label */
  showOptional?: boolean;
}

/**
 * ColorInput component with consistent design system styling.
 * Built on top of Mantine's ColorInput component with enforced radius.
 * 
 * @example
 * ```tsx
 * // Basic color input
 * <ColorInput label="Brand Color" placeholder="#000000" />
 * 
 * // Different sizes
 * <ColorInput label="Small" size="sm" />
 * <ColorInput label="Large" size="lg" />
 * 
 * // Required field (shows red asterisk)
 * <ColorInput label="Primary Color" required />
 * 
 * // Optional field (shows gray optional text)
 * <ColorInput label="Accent Color" showOptional />
 * 
 * // With all formats
 * <ColorInput 
 *   label="Theme Color" 
 *   format="hex"
 *   swatches={['#FF0000', '#00FF00', '#0000FF']}
 * />
 * ```
 */
export const ColorInput: React.FC<DSColorInputProps> = ({
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
    <MantineColorInput
      label={labelWithOptional}
      required={required}
      radius="sm"
      {...props}
    />
  );
};

export default ColorInput; 