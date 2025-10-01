import React from "react";
import { Stepper as MantineStepper, StepperProps as MantineStepperProps } from "@mantine/core@7";

export interface DSStepperProps extends MantineStepperProps { makeId?: string }

const BaseStepper: React.FC<DSStepperProps> = ({ makeId, ...props }) => {
  return <MantineStepper data-make-id={makeId} {...props} />;
};

export const Stepper = Object.assign(BaseStepper, {
  Step: MantineStepper.Step,
  Completed: MantineStepper.Completed,
});





