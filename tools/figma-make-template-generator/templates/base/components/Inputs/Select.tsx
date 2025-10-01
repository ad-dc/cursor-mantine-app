import React, { forwardRef } from "react";
import { Select as MantineSelect, SelectProps as MantineSelectProps } from "@mantine/core@7";

export interface DSSelectProps extends MantineSelectProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  makeId?: string;
}

export const Select = forwardRef<HTMLInputElement, DSSelectProps>(
  ({ leftIcon, rightIcon, leftSection, rightSection, makeId, ...props }, ref) => {
    return (
      <MantineSelect
        ref={ref}
        data-make-id={makeId}
        leftSection={leftIcon || leftSection}
        rightSection={rightIcon || rightSection}
        radius="sm"
        {...props}
      />
    );
  }
);

Select.displayName = "Select";





