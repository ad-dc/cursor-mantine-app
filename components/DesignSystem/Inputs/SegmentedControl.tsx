import React from 'react';
import { SegmentedControl as MantineSegmentedControl, SegmentedControlProps as MantineSegmentedControlProps } from '@mantine/core';

// Define the DS SegmentedControl props interface
export interface DSSegmentedControlProps extends Omit<MantineSegmentedControlProps, 'radius'> {
  // All standard Mantine props are supported except radius which is enforced
}

/**
 * SegmentedControl component with consistent design system styling.
 * Built on top of Mantine's SegmentedControl component with enforced radius.
 * 
 * @example
 * ```tsx
 * // Basic segmented control
 * <SegmentedControl 
 *   data={['Segment 1', 'Segment 2', 'Segment 3']}
 *   defaultValue="Segment 1"
 * />
 * 
 * // With different sizes
 * <SegmentedControl 
 *   size="sm"
 *   data={['Small', 'Medium', 'Large']}
 * />
 * 
 * // With custom data structure
 * <SegmentedControl 
 *   data={[
 *     { label: 'React', value: 'react' },
 *     { label: 'Vue', value: 'vue' },
 *     { label: 'Angular', value: 'angular' }
 *   ]}
 *   defaultValue="react"
 * />
 * 
 * // Controlled component
 * <SegmentedControl 
 *   value={value}
 *   onChange={setValue}
 *   data={['Option 1', 'Option 2', 'Option 3']}
 * />
 * 
 * // Disabled state
 * <SegmentedControl 
 *   disabled
 *   data={['Disabled', 'Control']}
 * />
 * ```
 */
export const SegmentedControl: React.FC<DSSegmentedControlProps> = ({
  ...props
}) => {
  return (
    <MantineSegmentedControl
      radius="sm"
      {...props}
    />
  );
};

export default SegmentedControl; 