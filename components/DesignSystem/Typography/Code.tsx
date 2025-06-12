'use client';

import { Code as MantineCode, CodeProps as MantineCodeProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface CodeProps extends MantineCodeProps {
  /** Code content */
  children: React.ReactNode;
  /** Size of the code text - supports Mantine t-shirt sizes */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ children, size = 'sm', fz, ...props }, ref) => {
    return (
      <MantineCode
        ref={ref}
        fz={fz || size}
        {...props}
      >
        {children}
      </MantineCode>
    );
  }
);

Code.displayName = 'Code'; 