import { forwardRef } from 'react';
import { Box, CloseButton } from '@mantine/core';
import { Inline } from '../Layout';

export interface DSPillProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Pill content */
  children: React.ReactNode;
  /** Size of the pill */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether the pill can be removed */
  withRemoveButton?: boolean;
  /** Called when remove button is clicked */
  onRemove?: () => void;
  /** Whether the pill is disabled */
  disabled?: boolean;
}

// Size configurations
const sizeConfig = {
  xs: {
    height: 20,
    fontSize: 10,
    px: 6,
    closeSize: 12,
  },
  sm: {
    height: 24,
    fontSize: 11,
    px: 8,
    closeSize: 14,
  },
  md: {
    height: 28,
    fontSize: 12,
    px: 10,
    closeSize: 16,
  },
  lg: {
    height: 32,
    fontSize: 13,
    px: 12,
    closeSize: 18,
  },
  xl: {
    height: 36,
    fontSize: 14,
    px: 14,
    closeSize: 20,
  },
};

export const Pill = forwardRef<HTMLDivElement, DSPillProps>(
  ({ 
    children, 
    size = 'md', 
    withRemoveButton = false, 
    onRemove, 
    disabled = false,
    style,
    ...others 
  }, ref) => {
    const config = sizeConfig[size];
    
    // Define grey colors
    const colors = disabled 
      ? {
          backgroundColor: 'var(--mantine-color-gray-1)',
          color: 'var(--mantine-color-gray-5)',
          border: 'none',
        }
      : {
          backgroundColor: 'var(--mantine-color-gray-1)',
          color: 'var(--mantine-color-gray-7)',
          border: 'none',
        };

    return (
      <Box
        ref={ref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: config.height,
          paddingLeft: config.px,
          paddingRight: withRemoveButton ? 4 : config.px,
          borderRadius: config.height / 2,
          fontSize: config.fontSize,
          fontWeight: 500,
          lineHeight: 1,
          userSelect: 'none',
          cursor: disabled ? 'not-allowed' : 'default',
          opacity: disabled ? 0.6 : 1,
          ...colors,
          ...style,
        }}
        {...others}
      >
        <Inline gap={4} wrap="nowrap">
          <span>{children}</span>
          {withRemoveButton && (
            <CloseButton
              size={config.closeSize}
              onClick={disabled ? undefined : onRemove}
              disabled={disabled}
              variant="transparent"
              style={{
                color: 'currentColor',
                minWidth: config.closeSize,
                minHeight: config.closeSize,
              }}
              aria-label="Remove"
            />
          )}
        </Inline>
      </Box>
    );
  }
);

Pill.displayName = 'Pill'; 