import { NumberInput as MantineNumberInput, NumberInputProps as MantineNumberInputProps } from "@mantine/core@7";

export interface DSNumberInputProps extends MantineNumberInputProps {
  makeId?: string;
}

export function NumberInput({ makeId, ...props }: DSNumberInputProps) {
  return <MantineNumberInput data-make-id={makeId} radius="sm" {...props} />;
}





