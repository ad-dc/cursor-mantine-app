'use client';

import { Divider as MantineDivider, DividerProps as MantineDividerProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface DividerProps extends Omit<MantineDividerProps, 'color'> {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Thickness of the divider - supports Mantine t-shirt sizes */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', size = 'sm', ...props }, ref) => {
    return (
      <MantineDivider
        ref={ref}
        orientation={orientation}
        size={size}
        color="gray.4"
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider'; 