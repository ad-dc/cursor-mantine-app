import React, { forwardRef } from 'react';
import {
  Stepper as MantineStepper,
  StepperProps as MantineStepperProps,
} from '@mantine/core';

export interface DSStepperProps extends MantineStepperProps {}

export const Stepper = forwardRef<HTMLDivElement, DSStepperProps>(
  ({ ...props }, ref) => <MantineStepper ref={ref} {...props} />
) as typeof MantineStepper;

Stepper.displayName = 'Stepper';
Stepper.Step = MantineStepper.Step;
Stepper.Completed = MantineStepper.Completed;
