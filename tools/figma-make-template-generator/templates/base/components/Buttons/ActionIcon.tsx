import { ActionIcon as MantineActionIcon, ActionIconProps as MantineActionIconProps } from "@mantine/core@7";

export interface DSActionIconProps extends MantineActionIconProps {
  makeId?: string;
}

export function ActionIcon({ makeId, ...props }: DSActionIconProps) {
  return <MantineActionIcon data-make-id={makeId} radius="sm" size="sm" {...props} />;
}




