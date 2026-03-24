'use client';

import React, { forwardRef } from 'react';
import { Center as MantineCenter, CenterProps as MantineCenterProps } from '@mantine/core';

export interface DSCenterProps extends MantineCenterProps {}

/**
 * AppDirect Design System Center Component
 *
 * Centers content horizontally and vertically using Mantine's Center API.
 */
export const Center = forwardRef<HTMLDivElement, DSCenterProps>(
  ({ ...props }, ref) => <MantineCenter ref={ref} {...props} />
);

Center.displayName = 'Center';
