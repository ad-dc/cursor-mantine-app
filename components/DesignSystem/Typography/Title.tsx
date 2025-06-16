'use client';

import { Title as MantineTitle, TitleProps as MantineTitleProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface DSTitleProps extends Omit<MantineTitleProps, 'size'> {
  /** Title content */
  children: React.ReactNode;
  /** Size of the title - supports Mantine t-shirt sizes. Only used when fz is not provided. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** HTML heading level (h1-h6) - automatically determines font size unless overridden */
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title = forwardRef<HTMLHeadingElement, DSTitleProps>(
  ({ children, size, order = 2, fz, ...props }, ref) => {
    // Only override font size if explicitly provided via fz or size
    // Otherwise, let Mantine handle the semantic sizing based on order
    const fontSize = fz || size;
    
    return (
      <MantineTitle
        ref={ref}
        order={order}
        fz={fontSize}
        {...props}
      >
        {children}
      </MantineTitle>
    );
  }
);

Title.displayName = 'Title'; 