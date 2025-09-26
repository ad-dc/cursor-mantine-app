import React, { forwardRef } from "react";
import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from "@mantine/core@7";

export interface DSTextInputProps extends Omit<MantineTextInputProps, "size" | "radius"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  required?: boolean;
  showOptional?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, DSTextInputProps & { makeId?: string }>(
  (
    { size = "md", className, leftIcon, rightIcon, leftSection, rightSection, showOptional = false, label, makeId, ...props },
    ref
  ) => {
    const enhancedLabel = React.useMemo(() => {
      if (!label) return label;
      if (showOptional && !props.required) {
        return (
          <>
            {label} <span style={{ fontWeight: "normal", color: "var(--mantine-color-gray-6)" }}>(Optional)</span>
          </>
        );
      }
      return label;
    }, [label, showOptional, props.required]);

    return (
      <MantineTextInput
        ref={ref}
        size={size}
        radius="sm"
        className={className}
        data-make-id={makeId}
        leftSection={leftIcon || leftSection}
        rightSection={rightIcon || rightSection}
        label={enhancedLabel}
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";
