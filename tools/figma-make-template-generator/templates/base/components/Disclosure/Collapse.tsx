import { Collapse as MantineCollapse, CollapseProps as MantineCollapseProps } from "@mantine/core@7";

export interface DSCollapseProps extends MantineCollapseProps { makeId?: string }

export function Collapse({ makeId, ...props }: DSCollapseProps) {
  return <MantineCollapse data-make-id={makeId} {...props} />;
}





