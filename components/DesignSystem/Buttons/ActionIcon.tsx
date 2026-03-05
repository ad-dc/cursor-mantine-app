import { forwardRef } from 'react';
import { ActionIcon as MantineActionIcon, ActionIconProps as MantineActionIconProps } from '@mantine/core';

type ActionIconVariant = 'default' | 'link';

export interface DSActionIconProps extends Omit<MantineActionIconProps, 'variant' | 'radius'> {
  /** Semantic variant: "default" (light blue bg) or "link" (transparent, text only) */
  variant?: ActionIconVariant;
}

const variantMap: Record<ActionIconVariant, { variant: MantineActionIconProps['variant']; color: string }> = {
  default: { variant: 'light', color: 'blue' },
  link: { variant: 'subtle', color: 'blue' },
};

export const ActionIcon = forwardRef<HTMLButtonElement, DSActionIconProps>(
  ({ variant = 'default', ...props }, ref) => {
    const mapped = variantMap[variant];

    return (
      <MantineActionIcon
        ref={ref}
        variant={mapped.variant}
        color={mapped.color}
        radius="sm"
        {...props}
      />
    );
  }
);

ActionIcon.displayName = 'ActionIcon';
