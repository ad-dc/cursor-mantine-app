import React, { forwardRef } from 'react';
import { Progress as MantineProgress, ProgressProps as MantineProgressProps } from '@mantine/core';
import { ComponentSize } from '../config';

/**
 * Enhanced Progress props extending Mantine's ProgressProps
 */
export interface DSProgressProps extends Omit<MantineProgressProps, 'size' | 'color' | 'radius'> {
  /** Progress bar size from design system scale */
  size?: ComponentSize;
  /** Progress value (0-100) */
  value: number;
  /** Whether to show animation */
  animated?: boolean;
}

/**
 * AppDirect Design System Progress Component
 * 
 * A progress bar component built on top of Mantine's Progress with
 * consistent design system styling and blue color scheme.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Progress value={60} />
 * 
 * // Different sizes
 * <Progress value={30} size="xs" />
 * <Progress value={50} size="sm" />
 * <Progress value={70} size="md" />
 * <Progress value={80} size="lg" />
 * <Progress value={90} size="xl" />
 * ```
 * 
 * @example
 * ```tsx
 * // With animation
 * <Progress value={75} animated />
 * ```
 * 
 * @example
 * ```tsx
 * // Different progress levels
 * <Progress value={25} />  // Low progress
 * <Progress value={60} />  // Medium progress
 * <Progress value={90} />  // High progress
 * <Progress value={100} /> // Complete
 * ```
 */
export const Progress = forwardRef<HTMLDivElement, DSProgressProps>(
  (
    {
      size = 'md',
      value,
      animated = false,
      ...props
    },
    ref
  ) => {
    return (
      <MantineProgress
        ref={ref}
        size={size}
        value={value}
        color="blue"
        radius="xl"
        animated={animated}
        {...props}
      />
    );
  }
);

Progress.displayName = 'Progress'; 