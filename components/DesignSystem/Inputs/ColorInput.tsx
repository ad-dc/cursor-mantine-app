import React, { forwardRef } from 'react';
import { ColorInput as MantineColorInput, ColorInputProps as MantineColorInputProps, ActionIcon, Group } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { ComponentSize } from '../config';
import { Text } from '../Typography/Text';
import { Tooltip } from '../Overlays/Tooltip';

// ========================== TYPES ==========================

export interface DSColorInputProps extends Omit<MantineColorInputProps, 'size' | 'radius'> {
  /** Input size from design system scale */
  size?: ComponentSize;
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

// ========================== COMPONENT ==========================

/**
 * AppDirect Design System ColorInput Component
 *
 * A color picker input built on top of Mantine's ColorInput with
 * consistent design system styling and enforced radius.
 *
 * @example
 * ```tsx
 * <ColorInput label="Brand Color" placeholder="#000000" format="hex" />
 * ```
 *
 * @example
 * ```tsx
 * <ColorInput
 *   label="Theme Color"
 *   format="hex"
 *   swatches={['#FF0000', '#00FF00', '#0000FF']}
 *   showOptional
 *   hasHelpIcon
 *   helpIconLabel="Choose the primary brand color"
 * />
 * ```
 */
export const ColorInput = forwardRef<HTMLInputElement, DSColorInputProps>(
  (
    {
      size = 'md',
      showOptional = false,
      required,
      label,
      hasHelpIcon = false,
      helpIconLabel,
      onHelpIconClick,
      rightSection,
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
      <MantineColorInput
        ref={ref}
        size={size}
        radius="sm"
        required={required}
        label={enhancedLabel}
        rightSection={composedRightSection}
        error={effectiveError}
        {...props}
      />
    );
  }
);

ColorInput.displayName = 'ColorInput';
