import { SegmentedControl as MantineSegmentedControl, SegmentedControlProps as MantineSegmentedControlProps } from "@mantine/core@7";

export interface DSSegmentedProps extends MantineSegmentedControlProps {
  makeId?: string;
}

export function SegmentedControl({ makeId, ...props }: DSSegmentedProps) {
  return <MantineSegmentedControl data-make-id={makeId} radius="sm" size="xs" {...props} />;
}





