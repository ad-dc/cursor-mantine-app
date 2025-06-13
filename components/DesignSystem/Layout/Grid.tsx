import React, { forwardRef } from 'react';
import { SimpleGrid as MantineSimpleGrid, SimpleGridProps as MantineSimpleGridProps } from '@mantine/core';
import { SpacingScale } from './Stack';

/**
 * Enhanced Grid props extending Mantine's SimpleGridProps
 */
export interface DSGridProps extends Omit<MantineSimpleGridProps, 'spacing'> {
  /** Number of columns */
  cols?: number | { base?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  /** Spacing between grid items using design system scale */
  spacing?: SpacingScale | string | number;
  /** Vertical spacing between rows */
  verticalSpacing?: SpacingScale | string | number;
}

/**
 * AppDirect Design System Grid Component
 * 
 * A layout primitive that creates responsive grid layouts with consistent spacing
 * using design system tokens. Built on top of Mantine's SimpleGrid component.
 * 
 * @example
 * ```tsx
 * // Basic 3-column grid
 * <Grid cols={3} spacing="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 * ```
 * 
 * @example
 * ```tsx
 * // Responsive grid with breakpoints
 * <Grid 
 *   cols={{ base: 1, sm: 2, md: 3, lg: 4 }} 
 *   spacing="lg"
 * >
 *   <Card>Responsive item 1</Card>
 *   <Card>Responsive item 2</Card>
 *   <Card>Responsive item 3</Card>
 *   <Card>Responsive item 4</Card>
 * </Grid>
 * ```
 * 
 * @example
 * ```tsx
 * // Grid with different vertical spacing
 * <Grid cols={2} spacing="md" verticalSpacing="xl">
 *   <Card>Item with custom vertical spacing</Card>
 *   <Card>Item with custom vertical spacing</Card>
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, DSGridProps>(
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

Grid.displayName = 'Grid'; 