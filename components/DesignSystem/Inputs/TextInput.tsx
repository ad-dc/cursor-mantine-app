import React, { forwardRef } from 'react';
import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core';
import { ComponentSize } from '../config';

/**
 * Enhanced TextInput props extending Mantine's TextInputProps
 */
export interface DSTextInputProps extends Omit<MantineTextInputProps, 'size' | 'radius'> {
  /** Input size from design system scale */
  size?: ComponentSize;
  /** Whether input is required (shows asterisk) */
  required?: boolean;
  /** Whether to show "(Optional)" text after label */
  showOptional?: boolean;
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
}

/**
 * AppDirect Design System TextInput Component
 * 
 * A clean text input component built on top of Mantine's TextInput with
 * consistent design system styling and enforced radius.
 * 
 * @example
 * ```tsx
 * // Basic usage (no indication)
 * <TextInput label="Name" placeholder="Enter your name" />
 * 
 * // Required field (shows asterisk)
 * <TextInput
 *   label="Email"
 *   placeholder="Enter email"
 *   required
 * />
 * 
 * // Optional field (shows "(Optional)")
 * <TextInput
 *   label="Phone"
 *   placeholder="Enter phone"
 *   showOptional
 * />
 * 
 * // With error
 * <TextInput
 *   label="Password"
 *   error="Password is required"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Different sizes
 * <TextInput size="xs" placeholder="Extra small" />
 * <TextInput size="sm" placeholder="Small" />
 * <TextInput size="md" placeholder="Medium" />
 * <TextInput size="lg" placeholder="Large" />
 * <TextInput size="xl" placeholder="Extra large" />
 * 
 * // With icons
 * <TextInput
 *   leftIcon={<IconUser />}
 *   placeholder="Username"
 * />
 * ```
 */
export const TextInput = forwardRef<HTMLInputElement, DSTextInputProps>(
  (
    {
      size = 'md',
      className,
      leftIcon,
      rightIcon,
      leftSection,
      rightSection,
      showOptional = false,
      label,
      ...props
    },
    ref
  ) => {
    // Construct label with optional text if needed
    const enhancedLabel = React.useMemo(() => {
      if (!label) return label;
      if (showOptional && !props.required) {
        return (
          <>
            {label} <span style={{ fontWeight: 'normal', color: 'var(--mantine-color-gray-6)' }}>(Optional)</span>
          </>
        );
      }
      return label;
    }, [label, showOptional, props.required]);

    return (
      <MantineTextInput
        ref={ref}
        size={size}
        radius="sm"
        className={className}
        leftSection={leftIcon || leftSection}
        rightSection={rightIcon || rightSection}
        label={enhancedLabel}
        {...props}
      />
    );
  }
);

TextInput.displayName = 'TextInput'; 