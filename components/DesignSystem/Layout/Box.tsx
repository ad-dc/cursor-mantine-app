import React, { forwardRef } from 'react';
import { Box as MantineBox, BoxProps as MantineBoxProps } from '@mantine/core';
import { ComponentColor } from '../config';
import { SpacingScale } from './Stack';

/**
 * Enhanced Box props extending Mantine's BoxProps
 */
export interface DSBoxProps extends MantineBoxProps {
  /** Padding using design system scale */
  p?: SpacingScale | string | number;
  /** Margin using design system scale */
  m?: SpacingScale | string | number;
  /** Background color from design system palette */
  bg?: ComponentColor | string;
  /** Text color from design system palette */
  c?: ComponentColor | string;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * AppDirect Design System Box Component
 * 
 * A flexible container primitive that provides easy access to design system tokens
 * for spacing, colors, and other styling properties. Built on top of Mantine's Box.
 * 
 * @example
 * ```tsx
 * // Basic container with padding
 * <Box p="md">
 *   <Text>Content with medium padding</Text>
 * </Box>
 * ```
 * 
 * @example
 * ```tsx
 * // Styled container with background and radius
 * <Box p="lg" bg="gray.1" radius="md">
 *   <Title>Card-like container</Title>
 *   <Text>With background and rounded corners</Text>
 * </Box>
 * ```
 * 
 * @example
 * ```tsx
 * // Polymorphic usage as different elements
 * <Box component="section" p="xl" m="md">
 *   <Text>Semantic section element</Text>
 * </Box>
 * ```
 */
export const Box = forwardRef<HTMLDivElement, DSBoxProps>(
  (
    {
      p,
      m,
      bg,
      c,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <MantineBox
        ref={ref}
        p={p}
        m={m}
        bg={bg}
        c={c}
        {...props}
      >
        {children}
      </MantineBox>
    );
  }
);

Box.displayName = 'Box'; 