import { DateInput as MantineDateInput, DateInputProps as MantineDateInputProps, DatePickerInput as MantineDatePickerInput, DatePickerInputProps as MantineDatePickerInputProps } from "@mantine/dates@7";

export interface DSDateInputProps extends MantineDateInputProps { makeId?: string }
export function DateInput({ makeId, ...props }: DSDateInputProps) {
  return <MantineDateInput data-make-id={makeId} radius="sm" {...props} />;
}

export interface DSDatePickerInputProps extends MantineDatePickerInputProps { makeId?: string }
export function DatePickerInput({ makeId, ...props }: DSDatePickerInputProps) {
  return <MantineDatePickerInput data-make-id={makeId} radius="sm" {...props} />;
}




