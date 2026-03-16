import React, { forwardRef } from 'react';
import { Flex as MantineFlex, FlexProps as MantineFlexProps } from '@mantine/core';

export interface DSFlexProps extends MantineFlexProps {}

/**
 * AppDirect Design System Flex Component
 *
 * A lower-level flexbox primitive aligned with Mantine's Flex API. Use it when
 * Group or Stack are not expressive enough for the desired layout.
 */
export const Flex = forwardRef<HTMLDivElement, DSFlexProps>(
  ({ ...props }, ref) => <MantineFlex ref={ref} {...props} />
);

Flex.displayName = 'Flex';
