import { forwardRef } from 'react';
import { ActionIcon as MantineActionIcon, ActionIconProps } from '@mantine/core';

export interface DSActionIconProps extends Omit<ActionIconProps, 'size' | 'variant'> {
  /** ActionIcon content (typically an icon) */
  children: React.ReactNode;
  /** Size of the action icon */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Override the default size with custom dimensions */
  customSize?: number;
  /** Override the default border */
  customBorder?: string;
  /** Override the default fill/background */
  customFill?: string;
  /** Style object for the component */
  style?: React.CSSProperties;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Size configurations
const sizeConfig = {
  xs: {
    size: 24,
    iconSize: 12,
  },
  sm: {
    size: 28,
    iconSize: 14,
  },
  md: {
    size: 32,
    iconSize: 16,
  },
  lg: {
    size: 36,
    iconSize: 18,
  },
  xl: {
    size: 40,
    iconSize: 20,
  },
};

export const ActionIcon = forwardRef<HTMLButtonElement, DSActionIconProps>(
  ({ 
    children, 
    size = 'md', 
    disabled = false,
    customSize,
    customBorder,
    customFill,
    style,
    ...others 
  }, ref) => {
    const config = sizeConfig[size];
    const buttonSize = customSize || config.size;
    
    // Define the light variant styling
    const getColors = () => {
      if (disabled) {
        return {
          backgroundColor: customFill || 'var(--mantine-color-gray-1)',
          color: 'var(--mantine-color-gray-5)',
          border: customBorder || '1px solid var(--mantine-color-gray-2)',
        };
      }

      return {
        backgroundColor: customFill || 'var(--mantine-color-gray-0)',
        color: 'var(--mantine-color-gray-7)',
        border: customBorder || '1px solid var(--mantine-color-gray-3)',
      };
    };

    const colors = getColors();

    return (
      <MantineActionIcon
        ref={ref}
        variant="subtle"
        disabled={disabled}
        size={buttonSize}
        style={{
          ...colors,
          borderRadius: 'var(--mantine-radius-sm)',
          transition: 'all 0.15s ease',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          '&:hover': disabled ? {} : {
            backgroundColor: customFill || 'var(--mantine-color-gray-1)',
            borderColor: customBorder ? customBorder : 'var(--mantine-color-gray-4)',
          },
          '&:active': disabled ? {} : {
            backgroundColor: customFill || 'var(--mantine-color-gray-2)',
          },
          ...style,
        }}
        {...others}
      >
        {children}
      </MantineActionIcon>
    );
  }
);

ActionIcon.displayName = 'ActionIcon'; 