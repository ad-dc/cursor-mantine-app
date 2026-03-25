'use client';

import React, { forwardRef } from 'react';
import { Select as MantineSelect, SelectProps as MantineSelectProps, ActionIcon, Group } from '@mantine/core';
import { IconInfoCircle, IconSelector } from '@tabler/icons-react';
import { ComponentSize } from '../config';
import { Text } from '../Typography/Text';
import { Tooltip } from '../Overlays/Tooltip';

// ========================== TYPES ==========================

export interface DSSelectProps extends Omit<MantineSelectProps, 'size' | 'radius' | 'rightSection'> {
  /** Input size from design system scale */
  size?: ComponentSize;
  /** Whether to use borderless style (unstyled variant) */
  borderless?: boolean;
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
 * AppDirect Design System Select Component
 *
 * A select/dropdown component built on top of Mantine's Select with
 * consistent design system styling and enforced radius. Supports both
 * regular and borderless styles for different use cases.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select
 *   data={['Option 1', 'Option 2', 'Option 3']}
 *   placeholder="Select option"
 *   label="Choose an option"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Borderless select for dashboard widgets
 * <Select
 *   data={[
 *     { value: 'today', label: 'Today' },
 *     { value: 'week', label: 'This Week' },
 *     { value: 'month', label: 'This Month' },
 *   ]}
 *   value={period}
 *   onChange={setPeriod}
 *   borderless
 *   searchable
 *   clearable
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With help icon and optional label
 * <Select
 *   data={['Admin', 'Editor', 'Viewer']}
 *   label="Role"
 *   showOptional
 *   hasHelpIcon
 *   helpIconLabel="Select the user's permission level"
 * />
 * ```
 */
export const Select = forwardRef<HTMLInputElement, DSSelectProps>(
  (
    {
      size = 'sm',
      borderless = false,
      showOptional = false,
      required,
      label,
      hasHelpIcon = false,
      helpIconLabel,
      onHelpIconClick,
      error,
      errorCaption,
      variant,
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

    const selectorIcon = <IconSelector size={14} aria-hidden />;

    const composedRightSection = helpIconElement
      ? <Group gap={4} wrap="nowrap">{selectorIcon}{helpIconElement}</Group>
      : selectorIcon;

    return (
      <MantineSelect
        ref={ref}
        size={size}
        radius="sm"
        required={required}
        label={enhancedLabel}
        rightSection={composedRightSection}
        rightSectionPointerEvents={hasHelpIcon || props.clearable ? 'auto' : 'none'}
        variant={borderless ? 'unstyled' : (variant ?? 'default')}
        error={effectiveError}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';
