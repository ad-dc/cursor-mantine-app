'use client';

import { Title as MantineTitle, TitleProps as MantineTitleProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface DSTitleProps extends MantineTitleProps {
  /** Title content */
  children: React.ReactNode;
  /** Size of the title - supports Mantine t-shirt sizes */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** HTML heading level (h1-h6) */
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title = forwardRef<HTMLHeadingElement, DSTitleProps>(
  ({ children, size = 'lg', order = 2, fz, ...props }, ref) => {
    return (
      <MantineTitle
        ref={ref}
        order={order}
        fz={fz || size}
        {...props}
      >
        {children}
      </MantineTitle>
    );
  }
);

Title.displayName = 'Title'; 