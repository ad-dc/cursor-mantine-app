import React from 'react';
import { Switch as MantineSwitch, SwitchProps as MantineSwitchProps } from '@mantine/core';

// Define the DS Switch props interface
export interface DSSwitchProps extends Omit<MantineSwitchProps, 'color' | 'radius'> {
  /** Show "(Optional)" text after label */
  showOptional?: boolean;
}

/**
 * Switch component with consistent design system styling.
 * Built on top of Mantine's Switch component with enforced green color and xl radius.
 * 
 * NOTE: Prefer using Mantine's built-in props over CSS overrides when possible.
 * Only add CSS overrides as a last resort when built-in props don't achieve the desired result.
 * 
 * @example
 * ```tsx
 * // Basic switch
 * <Switch label="Enable notifications" />
 * 
 * // Different sizes
 * <Switch label="Small" size="sm" />
 * <Switch label="Large" size="lg" />
 * 
 * // Optional field (shows gray optional text)
 * <Switch label="Auto-save" showOptional />
 * 
 * // Controlled switch
 * <Switch 
 *   label="Dark mode"
 *   checked={darkMode}
 *   onChange={setDarkMode}
 * />
 * 
 * // Disabled states
 * <Switch label="Disabled" disabled />
 * <Switch label="Disabled Checked" disabled checked />
 * 
 * // With on/off labels inside
 * <Switch label="Power" onLabel="ON" offLabel="OFF" />
 * <Switch label="WiFi" onLabel="CONNECTED" offLabel="DISCONNECTED" />
 * ```
 */
export const Switch: React.FC<DSSwitchProps> = ({
  label,
  showOptional = false,
  ...props
}) => {
  // Create the label with optional indicator if needed
  const labelWithOptional = showOptional && label
    ? `${label} (Optional)`
    : label;

  return (
    <MantineSwitch
      label={labelWithOptional}
      color="green"
      radius="xl"
      {...props}
    />
  );
};

export default Switch; 