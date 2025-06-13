import React, { forwardRef } from 'react';
import { Group as MantineGroup, GroupProps as MantineGroupProps } from '@mantine/core';
import { SpacingScale } from './Stack';

/**
 * Enhanced Inline props extending Mantine's GroupProps
 */
export interface DSInlineProps extends Omit<MantineGroupProps, 'gap'> {
  /** Spacing between inline items using design system scale */
  gap?: SpacingScale | string | number;
  /** Alignment of items along the cross axis */
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Distribution of items along the main axis */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Whether items should wrap to new lines */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

/**
 * AppDirect Design System Inline Component
 * 
 * A layout primitive that arranges child elements horizontally with consistent spacing
 * using design system tokens. Built on top of Mantine's Group component.
 * 
 * @example
 * ```tsx
 * // Basic horizontal layout
 * <Inline gap="md">
 *   <Button>First</Button>
 *   <Button>Second</Button>
 *   <Button>Third</Button>
 * </Inline>
 * ```
 * 
 * @example
 * ```tsx
 * // Inline with alignment and wrapping
 * <Inline gap="sm" align="center" wrap="wrap">
 *   <Badge>Tag 1</Badge>
 *   <Badge>Tag 2</Badge>
 *   <Badge>Tag 3</Badge>
 * </Inline>
 * ```
 * 
 * @example
 * ```tsx
 * // Justified inline layout
 * <Inline justify="space-between">
 *   <Text>Left content</Text>
 *   <Button>Right action</Button>
 * </Inline>
 * ```
 */
export const Inline = forwardRef<HTMLDivElement, DSInlineProps>(
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

Inline.displayName = 'Inline'; 