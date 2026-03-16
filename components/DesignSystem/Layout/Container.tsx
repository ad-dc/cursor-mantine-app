import React, { forwardRef } from 'react';
import { Container as MantineContainer, ContainerProps as MantineContainerProps } from '@mantine/core';

export interface DSContainerProps extends MantineContainerProps {}

/**
 * AppDirect Design System Container Component
 *
 * Centers content and constrains max width using Mantine's Container API.
 */
export const Container = forwardRef<HTMLDivElement, DSContainerProps>(
  ({ ...props }, ref) => <MantineContainer ref={ref} {...props} />
);

Container.displayName = 'Container';
