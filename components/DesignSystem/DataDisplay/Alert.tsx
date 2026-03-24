'use client';

import React, { forwardRef } from 'react';
import { Alert as MantineAlert, AlertProps as MantineAlertProps } from '@mantine/core';
import { RiInformationLine, RiCheckboxCircleLine, RiErrorWarningLine, RiTimeLine } from '@remixicon/react';

/**
 * Enhanced Alert props extending Mantine's AlertProps
 */
export interface DSAlertProps extends Omit<MantineAlertProps, 'color' | 'variant' | 'icon'> {
  /** Alert semantic color */
  color?: 'info' | 'success' | 'danger' | 'pending' | 'default';
  /** Deprecated semantic alias kept for backward compatibility */
  type?: 'info' | 'success' | 'danger' | 'pending' | 'default';
  /** Custom icon (overrides default semantic icon) */
  icon?: React.ReactNode;
  /** Alert title */
  title?: string;
  /** Whether alert can be closed */
  withCloseButton?: boolean;
  /** Close button handler */
  onClose?: () => void;
  /** Alert content */
  children?: React.ReactNode;
}

/**
 * AppDirect Design System Alert Component
 * 
 * A semantic alert component built on top of Mantine's Alert with
 * consistent design system styling and semantic color options.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Alert color="info" title="Information">
 *   This is an informational alert message.
 * </Alert>
 * 
 * // Different semantic colors
 * <Alert color="success" title="Success">Operation completed successfully!</Alert>
 * <Alert color="danger" title="Error">Something went wrong.</Alert>
 * <Alert color="pending" title="Processing">Your request is being processed...</Alert>
 * ```
 * 
 * @example
 * ```tsx
 * // With close button
 * <Alert 
 *   color="info" 
 *   title="Notification"
 *   withCloseButton
 *   onClose={() => console.log('Alert closed')}
 * >
 *   This alert can be dismissed.
 * </Alert>
 * 
 * // With custom icon
 * <Alert 
 *   color="info" 
 *   title="Custom Alert"
 *   icon={<RiStarLine size={20} />}
 * >
 *   This alert uses a custom star icon instead of the default info icon.
 * </Alert>
 * ```
 * 
 * @example
 * ```tsx
 * // Different semantic colors
 * <Alert color="info" title="Information">Info message with light background</Alert>
 * <Alert color="success" title="Success">Success message with light background</Alert>
 * <Alert color="danger" title="Error">Error message with light background</Alert>
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, DSAlertProps>(
  (
    {
      color = 'default',
      type,
      icon: customIcon,
      title,
      withCloseButton = false,
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    // Keep `type` as a deprecated alias while `color` becomes the primary API.
    const semanticColor = color ?? type ?? 'default';

    // Map semantic colors to Mantine colors and default icons
    const getAlertConfig = (alertColor: NonNullable<DSAlertProps['color']>) => {
      switch (alertColor) {
        case 'info':
          return {
            color: 'blue',
            icon: <RiInformationLine size={20} />
          };
        case 'success':
          return {
            color: 'green',
            icon: <RiCheckboxCircleLine size={20} />
          };
        case 'danger':
          return {
            color: 'red',
            icon: <RiErrorWarningLine size={20} />
          };
        case 'pending':
          return {
            color: 'yellow',
            icon: <RiTimeLine size={20} />
          };
        case 'default':
          return {
            color: 'gray',
            icon: <RiInformationLine size={20} />
          };
        default:
          return {
            color: 'gray',
            icon: <RiInformationLine size={20} />
          };
      }
    };

    const { color: mantineColor, icon: defaultIcon } = getAlertConfig(semanticColor);
    const alertIcon = customIcon || defaultIcon;

    return (
      <MantineAlert
        ref={ref}
        variant="light"
        color={mantineColor}
        radius="sm"
        icon={alertIcon}
        title={title}
        withCloseButton={withCloseButton}
        onClose={onClose}
        {...props}
      >
        {children}
      </MantineAlert>
    );
  }
);

Alert.displayName = 'Alert'; 