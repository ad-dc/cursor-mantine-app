import React, { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { Tooltip } from '../../Overlays/Tooltip';
import { RiFileCopyLine } from '@remixicon/react';

export interface CopyButtonProps {
  /** Value to copy to clipboard */
  value: string;
  /** Label for accessibility and tooltip context */
  label: string;
  /** Callback when copy action is performed */
  onCopy?: (value: string) => void;
  /** Size of the copy icon */
  iconSize?: number;
}

/**
 * CopyButton Component
 * 
 * A reusable button component with copy-to-clipboard functionality and interactive tooltips.
 * Shows "Copy" on hover and "Copied" after clicking, resetting when cursor leaves.
 * 
 * @example
 * // Basic usage
 * <CopyButton
 *   value="Production"
 *   label="Environment"
 *   onCopy={(value) => navigator.clipboard.writeText(value)}
 * />
 * 
 * @example
 * // With custom icon size
 * <CopyButton
 *   value="sk-1234567890abcdef"
 *   label="API Key"
 *   iconSize={16}
 *   onCopy={(value) => {
 *     navigator.clipboard.writeText(value);
 *     console.log('API Key copied');
 *   }}
 * />
 */
export function CopyButton({
  value,
  label,
  onCopy,
  iconSize = 24,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (onCopy) {
      onCopy(value);
      setIsCopied(true);
    }
  };

  const handleMouseLeave = () => {
    setIsCopied(false);
  };

  return (
    <Tooltip
      label={isCopied ? "Copied" : "Copy"}
      position="top"
      withArrow
    >
      <ActionIcon
        variant="subtle"
        size="xs"
        c="blue"
        onClick={handleCopy}
        onMouseLeave={handleMouseLeave}
        aria-label={`Copy ${label}`}
      >
        <RiFileCopyLine size={iconSize} />
      </ActionIcon>
    </Tooltip>
  );
} 