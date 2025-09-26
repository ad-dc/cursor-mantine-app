import { Switch as MantineSwitch, SwitchProps as MantineSwitchProps } from "@mantine/core@7";

export interface DSSwitchProps extends MantineSwitchProps {
  makeId?: string;
}

export function Switch({ makeId, ...props }: DSSwitchProps) {
  return <MantineSwitch data-make-id={makeId} radius="sm" {...props} />;
}




