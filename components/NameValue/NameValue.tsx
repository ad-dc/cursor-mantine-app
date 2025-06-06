import React from 'react';
import { Stack, SimpleGrid } from '@mantine/core';
import { NameValueItem, NameValueItemProps } from './NameValueItem';

export interface NameValuePair {
  /** Name/label for the pair */
  name: string;
  /** Value for the pair */
  value: string;
  /** Optional color for the value text */
  valueColor?: string;
  /** Optional weight for the value text */
  valueWeight?: number | 'normal' | 'bold';
  /** Whether to show copy icon for this value */
  showCopy?: boolean;
  /** Callback when copy icon is clicked */
  onCopy?: (value: string) => void;
}

export interface NameValueProps {
  /** Single name-value pair (when used individually) */
  name?: string;
  /** Single value (when used individually) */
  value?: string;
  /** Array of name-value pairs (when used in groups) */
  pairs?: NameValuePair[];
  /** Number of columns for grid layout (when provided, uses grid instead of stack) */
  columns?: number;
  /** Size of the label text */
  labelSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Size of the value text */
  valueSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Spacing between pairs */
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Color for name/label text */
  nameColor?: string;
  /** Color for value text (applies to all if pairs don't specify individual colors) */
  valueColor?: string;
  /** Weight for value text */
  valueWeight?: number | 'normal' | 'bold';
  /** Whether to show copy icon for all values (can be overridden per pair) */
  showCopy?: boolean;
  /** Callback when copy icon is clicked (for single name/value usage) */
  onCopy?: (value: string) => void;
  /** Size of the copy icons */
  copyIconSize?: number;
}

/**
 * NameValue Component
 * 
 * A component for displaying name-value pairs in vertical layout.
 * Can be arranged in a grid format for multiple pairs using the columns prop.
 * Perfect for metadata display, specifications, statistics, or any key-value information.
 * 
 * @example
 * // Single name-value pair with copy functionality
 * <NameValue 
 *   name="API Key" 
 *   value="sk-1234567890abcdef" 
 *   valueColor="green"
 *   showCopy={true}
 *   onCopy={(value) => navigator.clipboard.writeText(value)}
 * />
 * 
 * @example
 * // Multiple pairs with selective copy functionality
 * const userInfo = [
 *   { name: "Name", value: "John Doe" },
 *   { name: "Email", value: "john@example.com", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
 *   { name: "User ID", value: "usr_123456", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
 *   { name: "Last Login", value: "2 hours ago" }
 * ];
 * 
 * <NameValue 
 *   pairs={userInfo}
 *   spacing="md"
 * />
 * 
 * @example
 * // Grid layout with copy functionality
 * const serverInfo = [
 *   { name: "Server ID", value: "srv-abc123", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
 *   { name: "IP Address", value: "192.168.1.100", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
 *   { name: "Port", value: "8080", showCopy: true, onCopy: (v) => navigator.clipboard.writeText(v) },
 *   { name: "Status", value: "Running" },
 *   { name: "Uptime", value: "15 days" },
 *   { name: "Load", value: "0.68" }
 * ];
 * 
 * <NameValue 
 *   pairs={serverInfo}
 *   columns={3}
 *   spacing="sm"
 * />
 * 
 * @example
 * // All values copyable by default
 * const credentials = [
 *   { name: "Username", value: "admin" },
 *   { name: "Password", value: "secret123" },
 *   { name: "Token", value: "eyJhbGciOiJIUzI1NiIs..." },
 *   { name: "Database URL", value: "postgresql://localhost:5432/db" }
 * ];
 * 
 * <NameValue 
 *   pairs={credentials}
 *   showCopy={true}
 *   onCopy={(value) => {
 *     navigator.clipboard.writeText(value);
 *     console.log('Copied:', value);
 *   }}
 *   columns={2}
 * />
 */
export function NameValue({
  name,
  value,
  pairs,
  columns,
  labelSize = 'xs',
  valueSize = 'sm',
  spacing = 'sm',
  nameColor = 'dimmed',
  valueColor,
  valueWeight = 500,
  showCopy = false,
  onCopy,
  copyIconSize = 24,
}: NameValueProps) {
  
  // Create pairs array from individual props if provided
  const allPairs = pairs || (name && value ? [{ name, value, showCopy, onCopy }] : []);
  
  if (allPairs.length === 0) {
    return null;
  }

  // Render a single name-value pair using NameValueItem
  const renderPair = (pair: NameValuePair, index: number) => {
    const itemProps: NameValueItemProps = {
      name: pair.name,
      value: pair.value,
      labelSize,
      valueSize,
      nameColor,
      valueColor: pair.valueColor || valueColor,
      valueWeight: pair.valueWeight || valueWeight,
      showCopy: pair.showCopy ?? showCopy,
      onCopy: pair.onCopy || onCopy,
      copyIconSize,
    };

    return <NameValueItem key={index} {...itemProps} />;
  };
  
  // Use grid layout if columns prop is provided
  if (columns) {
    return (
      <SimpleGrid cols={columns} spacing={0}>
        {allPairs.map((pair, index) => renderPair(pair, index))}
      </SimpleGrid>
    );
  }
  
  // Default: render all pairs in a vertical stack
  return (
    <Stack gap={spacing}>
      {allPairs.map((pair, index) => renderPair(pair, index))}
    </Stack>
  );
} 