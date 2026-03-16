import React, { forwardRef } from 'react';
import { Group as MantineGroup, GroupProps as MantineGroupProps } from '@mantine/core';
import { SpacingScale } from './Stack';

/**
 * Enhanced Group props extending Mantine's GroupProps
 */
export interface DSGroupProps extends Omit<MantineGroupProps, 'gap'> {
  /** Spacing between group items using design system scale */
  gap?: SpacingScale | string | number;
  /** Alignment of items along the cross axis */
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Distribution of items along the main axis */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Whether items should wrap to new lines */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

/**
 * AppDirect Design System Group Component
 *
 * A horizontal layout primitive aligned with Mantine's Group naming and API.
 * Use it for common row layouts with consistent spacing between children.
 */
export const Group = forwardRef<HTMLDivElement, DSGroupProps>(
  (
    {
      gap = 'md',
      align = 'center',
      justify = 'flex-start',
      wrap = 'wrap',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <MantineGroup
        ref={ref}
        gap={gap}
        align={align}
        justify={justify}
        wrap={wrap}
        {...props}
      >
        {children}
      </MantineGroup>
    );
  }
);

Group.displayName = 'Group';
