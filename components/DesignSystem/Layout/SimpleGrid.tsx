'use client';

import React, { forwardRef } from 'react';
import { SimpleGrid as MantineSimpleGrid, SimpleGridProps as MantineSimpleGridProps } from '@mantine/core';
import { SpacingScale } from './Stack';

/**
 * Enhanced SimpleGrid props extending Mantine's SimpleGridProps
 */
export interface DSSimpleGridProps extends Omit<MantineSimpleGridProps, 'spacing'> {
  /** Number of columns */
  cols?: number | { base?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  /** Spacing between grid items using design system scale */
  spacing?: SpacingScale | string | number;
  /** Vertical spacing between rows */
  verticalSpacing?: SpacingScale | string | number;
}

/**
 * AppDirect Design System SimpleGrid Component
 *
 * A responsive equal-width grid primitive aligned with Mantine's SimpleGrid
 * naming. Use it when all columns should have the same width.
 */
export const SimpleGrid = forwardRef<HTMLDivElement, DSSimpleGridProps>(
  (
    {
      cols = 1,
      spacing = 'md',
      verticalSpacing,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <MantineSimpleGrid
        ref={ref}
        cols={cols}
        spacing={spacing}
        verticalSpacing={verticalSpacing}
        {...props}
      >
        {children}
      </MantineSimpleGrid>
    );
  }
);

SimpleGrid.displayName = 'SimpleGrid';
