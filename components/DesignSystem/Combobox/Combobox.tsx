'use client';

import React, { forwardRef } from 'react';
import { Select, DSSelectProps } from './Select';

// ========================== TYPES ==========================

export interface DSComboboxProps extends DSSelectProps {}

// ========================== COMPONENT ==========================

/**
 * AppDirect Design System Combobox Component
 *
 * Identical to Select — a single-selection dropdown built on Mantine's Select
 * with DS defaults (radius, IconSelector, label enhancements). This component
 * exists as a separate identity for Figma Code Connect, where the Combobox
 * Figma component maps to this wrapper.
 *
 * For basic single-select use cases, use either Select or Combobox.
 * For advanced use cases, use SearchableSelect or build on Mantine's
 * Combobox primitives directly.
 *
 * @example
 * ```tsx
 * <Combobox
 *   data={['Option 1', 'Option 2', 'Option 3']}
 *   placeholder="Select option"
 *   label="Choose an option"
 * />
 * ```
 */
export const Combobox = forwardRef<HTMLInputElement, DSComboboxProps>(
  (props, ref) => <Select ref={ref} {...props} />
);

Combobox.displayName = 'Combobox';
