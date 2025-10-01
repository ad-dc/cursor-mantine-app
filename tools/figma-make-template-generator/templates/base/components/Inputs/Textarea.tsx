import { Textarea as MantineTextarea, TextareaProps as MantineTextareaProps } from "@mantine/core@7";

export interface DSTextareaProps extends MantineTextareaProps {
  makeId?: string;
}

export function Textarea({ makeId, ...props }: DSTextareaProps) {
  return <MantineTextarea data-make-id={makeId} radius="sm" {...props} />;
}





