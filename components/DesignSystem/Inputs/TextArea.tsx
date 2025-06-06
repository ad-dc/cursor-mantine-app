import React from 'react';
import { Textarea as MantineTextarea, TextareaProps as MantineTextareaProps } from '@mantine/core';

// Define the DS TextArea props interface
export interface DSTextAreaProps extends Omit<MantineTextareaProps, 'radius'> {
  /** Show "(Optional)" text after label */
  showOptional?: boolean;
}

/**
 * TextArea component with consistent design system styling.
 * Built on top of Mantine's Textarea component with enforced radius.
 * 
 * @example
 * ```tsx
 * // Basic textarea
 * <TextArea label="Comments" placeholder="Enter your comments..." />
 * 
 * // Different sizes
 * <TextArea label="Small" size="sm" />
 * <TextArea label="Large" size="lg" />
 * 
 * // Required field (shows red asterisk)
 * <TextArea label="Description" required />
 * 
 * // Optional field (shows gray optional text)
 * <TextArea label="Additional Notes" showOptional />
 * 
 * // With rows and autosize
 * <TextArea 
 *   label="Article Content"
 *   placeholder="Write your article..."
 *   rows={5}
 *   autosize
 *   minRows={3}
 *   maxRows={10}
 * />
 * 
 * // With validation
 * <TextArea 
 *   label="Feedback"
 *   placeholder="Your feedback..."
 *   error="This field is required"
 *   description="Please provide detailed feedback"
 * />
 * ```
 */
export const TextArea: React.FC<DSTextAreaProps> = ({
  label,
  showOptional = false,
  required = false,
  ...props
}) => {
  // Create the label with optional indicator if needed
  const labelWithOptional = showOptional && !required && label
    ? `${label} (Optional)`
    : label;

  return (
    <MantineTextarea
      label={labelWithOptional}
      required={required}
      radius="sm"
      {...props}
    />
  );
};

export default TextArea; 