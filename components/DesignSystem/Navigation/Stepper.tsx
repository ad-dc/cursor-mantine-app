import React, { forwardRef } from 'react';
import { Stepper as MantineStepper, StepperProps as MantineStepperProps } from '@mantine/core';

// ========================== TYPES ==========================

export interface StepData {
  /** Unique identifier for the step */
  id: string;
  /** Step label */
  label: string;
  /** Optional step description */
  description?: string;
  /** Custom icon for the step */
  icon?: React.ReactNode;
  /** Icon to show when step is completed */
  completedIcon?: React.ReactNode;
  /** Whether this step allows completion */
  allowStepSelect?: boolean;
}

export interface DSStepperProps extends Omit<MantineStepperProps, 'children'> {
  /** Array of step data */
  steps: StepData[];
  /** Currently active step index (0-based) */
  active: number;
  /** Callback when step is clicked */
  onStepClick?: (stepIndex: number) => void;
  /** Stepper orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Stepper size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Color for completed steps */
  completedStepColor?: string;
  /** Icon size */
  iconSize?: number;
}

// ========================== COMPONENT ==========================

/**
 * Stepper Component
 * 
 * Built on top of Mantine's Stepper component with design system styling.
 * Supports both horizontal and vertical orientations with custom icons.
 * 
 * @example
 * const steps = [
 *   { id: 'step1', label: 'User Info', description: 'Enter details' },
 *   { id: 'step2', label: 'Payment', description: 'Add payment method' },
 *   { id: 'step3', label: 'Review', description: 'Confirm order' }
 * ];
 * 
 * <Stepper 
 *   steps={steps}
 *   active={1}
 *   onStepClick={setActiveStep}
 *   orientation="horizontal"
 * />
 * 
 * @example
 * // With custom icons
 * const iconSteps = [
 *   { id: 'user', label: 'User', icon: <IconUser /> },
 *   { id: 'payment', label: 'Payment', icon: <IconCreditCard /> }
 * ];
 * 
 * <Stepper steps={iconSteps} active={0} orientation="vertical" />
 */
export const Stepper = forwardRef<HTMLDivElement, DSStepperProps>(
  ({ 
    steps,
    active,
    onStepClick,
    orientation = 'horizontal',
    size = 'md',
    iconSize = 18,
    ...props 
  }, ref) => {

    return (
      <MantineStepper
        ref={ref}
        active={active}
        onStepClick={onStepClick}
        orientation={orientation}
        size={size}
        {...props}
      >
        {steps.map((step, index) => (
          <MantineStepper.Step
            key={step.id}
            label={step.label}
            description={step.description}
            icon={step.icon && React.cloneElement(step.icon as React.ReactElement, { size: iconSize })}
            completedIcon={step.completedIcon && React.cloneElement(step.completedIcon as React.ReactElement, { size: iconSize })}
            allowStepSelect={step.allowStepSelect}
          />
        ))}
      </MantineStepper>
    );
  }
);

Stepper.displayName = 'Stepper';

// Default export for convenience
export default Stepper; 