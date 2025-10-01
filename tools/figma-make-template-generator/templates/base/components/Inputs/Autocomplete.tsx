import { Autocomplete as MantineAutocomplete, AutocompleteProps as MantineAutocompleteProps } from "@mantine/core@7";

export interface DSAutoProps extends MantineAutocompleteProps { makeId?: string }

export function Autocomplete({ makeId, ...props }: DSAutoProps) {
  return <MantineAutocomplete data-make-id={makeId} radius="sm" {...props} />;
}





