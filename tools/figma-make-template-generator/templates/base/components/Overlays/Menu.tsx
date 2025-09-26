import React from "react";
import { Menu as MantineMenu, MenuProps as MantineMenuProps } from "@mantine/core@7";

export interface DSMenuProps extends MantineMenuProps { makeId?: string }

const BaseMenu: React.FC<DSMenuProps> = ({ makeId, children, ...props }) => {
  return <MantineMenu {...props}>{children}</MantineMenu>;
};

export const Menu = Object.assign(BaseMenu, {
  Target: MantineMenu.Target,
  Dropdown: MantineMenu.Dropdown,
  Label: MantineMenu.Label,
  Item: MantineMenu.Item,
  Divider: MantineMenu.Divider,
});




