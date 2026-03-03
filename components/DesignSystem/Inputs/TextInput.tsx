import React, { forwardRef } from 'react';
import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps, ActionIcon, Group } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ComponentSize } from '../config';
import { Text } from '../Typography/Text';
import { Tooltip } from '../Overlays/Tooltip';

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
  /** Whether to show a help icon with a tooltip in the right section */
  hasHelpIcon?: boolean;
  /** Tooltip label shown when hovering the help icon. Also used as aria-label for a11y */
  helpIconLabel?: string;
  /** Optional click handler for the help icon */
  onHelpIconClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Optional error message text shown below the input when in error state.
   * Used with error={true} (from state) for red border + message; omit for red border only.
   */
  errorCaption?: string;
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
 *   leftSection={<IconUser />}
 *   placeholder="Username"
 * />
 * 
 * // With help icon tooltip (hover)
 * <TextInput
 *   label="API Key"
 *   hasHelpIcon
 *   helpIconLabel="Your API key can be found in account settings"
 * />
 * 
 * // With help icon click handler
 * <TextInput
 *   label="API Key"
 *   hasHelpIcon
 *   helpIconLabel="Learn more about API keys"
 *   onHelpIconClick={() => openHelpDrawer()}
 * />
 * ```
 */
export const TextInput = forwardRef<HTMLInputElement, DSTextInputProps>(
  (
    {
      size = 'md',
      leftSection,
      rightSection,
      showOptional = false,
      required,
      label,
      hasHelpIcon = false,
      helpIconLabel,
      onHelpIconClick,
      error,
      errorCaption,
      ...props
    },
    ref
  ) => {
    const effectiveError = error === true ? (errorCaption ?? true) : error;

    const enhancedLabel = React.useMemo(() => {
      if (!label) return label;
      if (showOptional && !required) {
        return (
          <>
            {label} <Text span c="dimmed" fw="normal">(Optional)</Text>
          </>
        );
      }
      return label;
    }, [label, showOptional, required]);

    const helpIconElement = hasHelpIcon ? (
      <Tooltip
        label={helpIconLabel ?? 'Help'}
        position="top"
        withArrow
      >
        <ActionIcon
          variant="transparent"
          size="xs"
          aria-label={helpIconLabel ?? 'Help'}
          onClick={onHelpIconClick}
          color="gray"
          style={{ cursor: onHelpIconClick ? 'pointer' : 'default' }}
        >
          <IconInfoCircle size={14} aria-hidden />
        </ActionIcon>
      </Tooltip>
    ) : null;

    const composedRightSection = (helpIconElement && rightSection)
      ? <Group gap={4} wrap="nowrap">{rightSection}{helpIconElement}</Group>
      : helpIconElement || rightSection;

    return (
      <MantineTextInput
        ref={ref}
        size={size}
        radius="sm"
        required={required}
        leftSection={leftSection}
        rightSection={composedRightSection}
        label={enhancedLabel}
        error={effectiveError}
        {...props}
      />
    );
  }
);

TextInput.displayName = 'TextInput'; 