import { ScrollArea as MantineScrollArea, ScrollAreaProps as MantineScrollAreaProps } from "@mantine/core@7";

export interface DSScrollAreaProps extends MantineScrollAreaProps {
  makeId?: string;
}

export function ScrollArea({ makeId, ...props }: DSScrollAreaProps) {
  return <MantineScrollArea data-make-id={makeId} {...props} />;
}




