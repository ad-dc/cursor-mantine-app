'use client';

import { ThemeIcon as MantineThemeIcon, ThemeIconProps as MantineThemeIconProps } from '@mantine/core';
import { forwardRef } from 'react';

export type ThemeIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ThemeIconColor = 'default' | 'blue' | string;

export interface DSThemeIconProps extends Omit<MantineThemeIconProps, 'size' | 'color'> {
  /** ThemeIcon content */
  children: React.ReactNode;
  /** Size of the ThemeIcon - supports Mantine t-shirt sizes plus xxl (58x58px) */
  size?: ThemeIconSize;
  /** Color variant - default (gray icon) or blue (blue icon), both use default variant styling */
  color?: ThemeIconColor;
}

export const ThemeIcon = forwardRef<HTMLDivElement, DSThemeIconProps>(
  ({ children, size = 'md', color = 'default', style, ...props }, ref) => {
    // Handle xxl size which should be 58x58px
    const getSize = () => {
      if (size === 'xxl') {
        return 58;
      }
      return size;
    };

    // For blue variant, we want blue icon color with default variant
    const iconStyle = color === 'blue' ? { color: 'var(--mantine-color-blue-6)', ...style } : style;

    return (
      <MantineThemeIcon
        ref={ref}
        size={getSize()}
        variant="default"
        style={iconStyle}
        {...props}
      >
        {children}
      </MantineThemeIcon>
    );
  }
);

ThemeIcon.displayName = 'ThemeIcon'; 