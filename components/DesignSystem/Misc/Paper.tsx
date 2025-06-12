'use client';

import { Paper as MantinePaper, PaperProps as MantinePaperProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface PaperProps extends Omit<MantinePaperProps, 'p' | 'padding'> {
  /** Paper variant - controls shadow and border */
  variant?: 'default' | 'shadow' | 'border' | 'border-shadow';
  /** Content of the paper */
  children: React.ReactNode;
}

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  ({ variant = 'default', children, ...props }, ref) => {
    const getVariantProps = () => {
      switch (variant) {
        case 'shadow':
          return { shadow: 'xs' as const, withBorder: false };
        case 'border':
          return { withBorder: true, shadow: undefined };
        case 'border-shadow':
          return { withBorder: true, shadow: 'xs' as const };
        case 'default':
        default:
          return { withBorder: false, shadow: undefined };
      }
    };

    const variantProps = getVariantProps();

    return (
      <MantinePaper
        ref={ref}
        p="sm"
        {...variantProps}
        {...props}
      >
        {children}
      </MantinePaper>
    );
  }
);

Paper.displayName = 'Paper'; 