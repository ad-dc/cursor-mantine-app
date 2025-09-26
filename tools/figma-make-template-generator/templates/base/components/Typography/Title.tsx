import { Title as MantineTitle, TitleProps as MantineTitleProps } from "@mantine/core@7";
import { forwardRef } from "react";

export interface DSTitleProps extends Omit<MantineTitleProps, "size"> {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title = forwardRef<HTMLHeadingElement, DSTitleProps & { makeId?: string }>(
  ({ children, size, order = 2, fz, makeId, ...props }, ref) => {
    const fontSize = fz || size;
    return (
      <MantineTitle ref={ref} order={order} fz={fontSize} data-make-id={makeId} {...props}>
        {children}
      </MantineTitle>
    );
  }
);

Title.displayName = "Title";
