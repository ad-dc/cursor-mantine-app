import { Text as MantineText, TextProps as MantineTextProps } from "@mantine/core@7";
import { forwardRef } from "react";

export interface DSTextProps extends MantineTextProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Text = forwardRef<HTMLParagraphElement, DSTextProps & { makeId?: string }>(
  ({ children, size = "sm", fz, makeId, ...props }, ref) => {
    return (
      <MantineText ref={ref} fz={fz || size} data-make-id={makeId} {...props}>
        {children}
      </MantineText>
    );
  }
);

Text.displayName = "Text";
