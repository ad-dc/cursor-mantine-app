'use client';

import { Text as MantineText, TextProps as MantineTextProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface DSTextProps extends MantineTextProps {
  /** Text content */
  children: React.ReactNode;
  /** Size of the text - supports Mantine t-shirt sizes */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Text = forwardRef<HTMLParagraphElement, DSTextProps>(
  ({ children, size = 'sm', fz, ...props }, ref) => {
    return (
      <MantineText
        ref={ref}
        fz={fz || size}
        {...props}
      >
        {children}
      </MantineText>
    );
  }
);

Text.displayName = 'Text'; 