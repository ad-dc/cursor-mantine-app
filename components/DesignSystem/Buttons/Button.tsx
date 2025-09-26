import React, { forwardRef, useEffect } from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { ComponentSize, ComponentColor, addsClassName } from '../config';
import styles from './Button.module.css';

/**
 * Enhanced Button props extending Mantine's ButtonProps
 */
export interface DSButtonProps extends Omit<MantineButtonProps, 'size' | 'color' | 'variant'> {
  /** Button size from design system scale */
  size?: ComponentSize;
  /** Button color from design system palette */
  color?: ComponentColor;
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'default' | 'disabled' | 'link' | 'secret' | 'outline' | 'danger';
  /** Whether button takes full width */
  fullWidth?: boolean;
  /** Loading state with spinner */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BUTTON_BUILD = 'button-2025-09-26';

/**
 * AppDirect Design System Button Component
 * 
 * A enhanced button component built on top of Mantine's Button with
 * consistent design system styling and additional functionality.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</ADDSButton>
 * 
 * // Primary button with icon
 * <Button variant="primary" leftIcon={<Icon />}>
 *   Save Changes
 * </Button>
 * 
 * // Loading state
 * <Button loading>Processing...</Button>
 * ```
 * 
 * @example
 * ```tsx
 * // Different variants
 * <Button variant="primary">Primary</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="default">Default</Button>
 * <Button variant="outline">Outline</Button>
 * <Button variant="danger">Danger</Button>
 * <Button variant="link">Link</Button>
 * <Button variant="secret">Secret</Button>
 * <Button variant="disabled">Disabled</Button>
 * ```
 * 
 * @example
 * ```tsx
 * // Sizes and colors
 * <ADDSButton size="sm" color="primary">Small Primary</ADDSButton>
 * <ADDSButton size="lg" color="secondary">Large Secondary</ADDSButton>
 * <ADDSButton fullWidth>Full Width Button</ADDSButton>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, DSButtonProps>(
  (
    {
      variant = 'default',
      size = 'sm',
      color = 'primary',
      className,
      children,
      leftIcon,
      rightIcon,
      leftSection,
      rightSection,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      // Mount fingerprint log for Figma verification
      // eslint-disable-next-line no-console
      console.log('@@BUTTON_MOUNT@@', BUTTON_BUILD, variant);
    }, []);

    // Map design system variants to Mantine variants
    const getMantineVariant = (addsVariant: DSButtonProps['variant']) => {
      switch (addsVariant) {
        case 'primary':
          return 'filled';  // Use Mantine's filled variant for primary
        case 'secondary':
          return 'filled';
        case 'default':
          return 'default';
        case 'disabled':
          return 'filled';  // Use filled but will be disabled via disabled prop
        case 'link':
          return 'subtle';  // Link-style button using subtle variant
        case 'secret':
          return 'subtle';  // Use Mantine's subtle variant
        case 'outline':
          return 'outline';
        case 'danger':
          return 'filled';  // Will use red color
        default:
          return addsVariant || 'default';
      }
    };

    // Determine the appropriate color based on variant
    const getButtonColor = (variant: DSButtonProps['variant'], defaultColor: ComponentColor) => {
      switch (variant) {
        case 'danger':
          return 'red';
        case 'primary':
          return 'blue';
        case 'secondary':
          return 'cyan';
        case 'outline':
          return 'blue';  
        case 'link':
          return 'blue';    
        case 'disabled':
          return 'gray';
        case 'secret':
          return 'gray';  // Use gray color for subtle secret variant
        default:
          return defaultColor;
      }
    };

    // Determine if button should be disabled
    const isDisabled = props.disabled || variant === 'disabled';

    // Generate component class names
    const componentClassName = [
      styles.addsButton,
      styles[`addsButton--${variant}`],
      styles[`addsButton--${size}`],
      leftIcon && styles.hasLeftIcon,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <MantineButton
        ref={ref}
        variant={getMantineVariant(variant)}
        size={size}
        color={getButtonColor(variant, color)}
        disabled={isDisabled}
        radius="sm"
        className={componentClassName}
        data-ui="Button"
        data-build={BUTTON_BUILD}
        leftSection={leftIcon || leftSection}
        rightSection={rightIcon || rightSection}
        {...props}
      >
        {children}
      </MantineButton>
    );
  }
);

Button.displayName = 'Button'; 