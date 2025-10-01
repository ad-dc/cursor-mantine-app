import React from "react";
import { Popover as MantinePopover, PopoverProps as MantinePopoverProps } from "@mantine/core@7";

export interface DSPopoverProps extends MantinePopoverProps { makeId?: string }

const BasePopover: React.FC<DSPopoverProps> = ({ makeId, children, ...props }) => {
  return <MantinePopover {...props}>{children}</MantinePopover>;
};

export const Popover = Object.assign(BasePopover, {
  Target: MantinePopover.Target,
  Dropdown: MantinePopover.Dropdown,
});





