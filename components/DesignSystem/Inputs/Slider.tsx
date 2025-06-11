import React from 'react';
import { Slider as MantineSlider, SliderProps as MantineSliderProps } from '@mantine/core';

// Define the DS Slider props interface
export interface DSSliderProps extends Omit<MantineSliderProps, 'radius'> {
  /** Show "(Optional)" text after label */
  showOptional?: boolean;
}

/**
 * Slider component with consistent design system styling.
 * Built on top of Mantine's Slider component with enforced xl radius.
 * 
 * NOTE: Prefer using Mantine's built-in props over CSS overrides when possible.
 * Only add CSS overrides as a last resort when built-in props don't achieve the desired result.
 * 
 * @example
 * ```tsx
 * // Basic slider
 * <Slider label="Volume" defaultValue={50} />
 * 
 * // Optional field (shows gray optional text)
 * <Slider label="Opacity" showOptional min={0} max={100} />
 * 
 * // With min/max and step
 * <Slider 
 *   label="Rating" 
 *   min={1}
 *   max={10}
 *   step={0.5}
 *   defaultValue={5}
 *   marks={[
 *     { value: 1, label: '1' },
 *     { value: 5, label: '5' },
 *     { value: 10, label: '10' }
 *   ]}
 * />
 * 
 * // Range slider
 * <Slider 
 *   label="Price Range" 
 *   min={0}
 *   max={1000}
 *   defaultValue={[200, 800]}
 * />
 * ```
 */
export const Slider: React.FC<DSSliderProps> = ({
  label,
  showOptional = false,
  ...props
}) => {
  // Create the label with optional indicator if needed
  const labelWithOptional = showOptional && label
    ? `${label} (Optional)`
    : label;

  return (
    <MantineSlider
      label={labelWithOptional}
      radius="xl"
      {...props}
    />
  );
};

export default Slider; 