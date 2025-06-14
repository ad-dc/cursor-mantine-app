import React from 'react';
import { Select as MantineSelect, SelectProps, Combobox } from '@mantine/core';

// ========================== TYPES ==========================

export interface DSSelectProps {
  /** Select data - can be strings or objects with value/label */
  data: string[] | { value: string; label: string }[];
  /** Current selected value */
  value?: string | null;
  /** Change handler */
  onChange?: (value: string | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select is searchable */
  searchable?: boolean;
  /** Whether the select is clearable */
  clearable?: boolean;
  /** Select size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to use borderless style */
  borderless?: boolean;
  /** Select label */
  label?: string;
  /** Additional Mantine Select props */
  selectProps?: Omit<SelectProps, 'data' | 'value' | 'onChange' | 'placeholder' | 'disabled' | 'searchable' | 'clearable' | 'size' | 'variant' | 'label'>;
}

// ========================== COMPONENT ==========================

/**
 * Select Component
 * 
 * A flexible select component that can be used with or without borders.
 * Supports both regular and borderless styles for different use cases.
 * 
 * @example
 * ```tsx
 * // Regular select with borders
 * <Select
 *   data={['Option 1', 'Option 2', 'Option 3']}
 *   value={selectedValue}
 *   onChange={setSelectedValue}
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
 *     { value: 'month', label: 'This Month' }
 *   ]}
 *   value={period}
 *   onChange={setPeriod}
 *   borderless
 *   searchable
 *   clearable
 * />
 * ```
 */
export function Select({
  data,
  value,
  onChange,
  placeholder,
  disabled = false,
  searchable = false,
  clearable = false,
  size = 'sm',
  borderless = false,
  label,
  selectProps = {},
}: DSSelectProps) {
  return (
    <MantineSelect
      data={data}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      searchable={searchable}
      clearable={clearable}
      size={size}
      label={label}
      variant={borderless ? "unstyled" : "default"}
      rightSection={<Combobox.Chevron />}
      {...selectProps}
    />
  );
} 