import React, { forwardRef } from 'react';
import {
  Grid as MantineGrid,
  GridProps as MantineGridProps,
  GridColProps as MantineGridColProps,
} from '@mantine/core';

/**
 * Enhanced Grid props extending Mantine's GridProps
 */
export interface DSGridProps extends MantineGridProps {}

/**
 * Enhanced Grid.Col props extending Mantine's GridColProps
 */
export interface DSGridColProps extends MantineGridColProps {}

/**
 * AppDirect Design System Grid Component
 *
 * A responsive 12-column grid aligned with Mantine's Grid API. Use `Grid.Col`
 * when layouts need explicit spans instead of equal-width columns.
 */
export const Grid = forwardRef<HTMLDivElement, DSGridProps>(
  ({ ...props }, ref) => <MantineGrid ref={ref} {...props} />
) as typeof MantineGrid;

Grid.displayName = 'Grid';
Grid.Col = MantineGrid.Col;