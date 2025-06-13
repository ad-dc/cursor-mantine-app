import React from 'react';
import { Group, Stack } from '@mantine/core';
import { Text } from '../../Typography/Text';
import { CopyButton } from '../Utilities/CopyButton';

export interface NameValueItemProps {
  /** Name/label for the pair */
  name: string;
  /** Value for the pair */
  value: string;
  /** Size of the label text */
  labelSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Size of the value text */
  valueSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Color for name/label text */
  nameColor?: string;
  /** Optional color for the value text */
  valueColor?: string;
  /** Optional weight for the value text */
  valueWeight?: number | 'normal' | 'bold';
  /** Whether to show copy icon for this value */
  showCopy?: boolean;
  /** Callback when copy icon is clicked */
  onCopy?: (value: string) => void;
  /** Size of the copy icon */
  copyIconSize?: number;
}

/**
 * NameValueItem Component
 * 
 * A component for displaying a single name-value pair with optional copy functionality.
 * Designed to be used within the NameValue component or as a standalone item.
 * 
 * @example
 * // Basic name-value pair
 * <NameValueItem
 *   name="Status"
 *   value="Active"
 * />
 * 
 * @example
 * // With copy functionality
 * <NameValueItem
 *   name="API Key"
 *   value="sk-1234567890abcdef"
 *   valueColor="green"
 *   showCopy={true}
 *   onCopy={(value) => navigator.clipboard.writeText(value)}
 * />
 * 
 * @example
 * // Custom styling
 * <NameValueItem
 *   name="Revenue"
 *   value="$125,430"
 *   labelSize="sm"
 *   valueSize="lg"
 *   valueColor="green"
 *   valueWeight="bold"
 * />
 */
export function NameValueItem({
  name,
  value,
  labelSize = 'xs',
  valueSize = 'sm',
  nameColor = 'dimmed',
  valueColor,
  valueWeight = 500,
  showCopy = false,
  onCopy,
  copyIconSize = 24,
}: NameValueItemProps) {
  return (
    <Stack gap={0} p="xs">
      <Text size={labelSize} c={nameColor}>
        {name}
      </Text>
      <Group gap="xs" align="center">
        <Text 
          size={valueSize} 
          fw={valueWeight}
          c={valueColor}
        >
          {value}
        </Text>
        {showCopy && onCopy && (
          <CopyButton
            value={value}
            label={name}
            onCopy={onCopy}
            iconSize={copyIconSize}
          />
        )}
      </Group>
    </Stack>
  );
} 