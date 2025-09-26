import React from "react";
import { Tabs as MantineTabs, TabsProps as MantineTabsProps } from "@mantine/core@7";

export interface DSTabsProps extends MantineTabsProps {
  makeId?: string;
}

const BaseTabs: React.FC<DSTabsProps> = ({ makeId, ...props }) => {
  return <MantineTabs data-make-id={makeId} {...props} />;
};

export const Tabs = Object.assign(BaseTabs, {
  List: MantineTabs.List,
  Tab: MantineTabs.Tab,
  Panel: MantineTabs.Panel,
});


