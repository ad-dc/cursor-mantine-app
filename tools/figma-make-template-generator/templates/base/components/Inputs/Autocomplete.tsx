import { Autocomplete as MantineAutocomplete, AutocompleteProps as MantineAutocompleteProps } from "@mantine/core@9";

export interface DSAutoProps extends MantineAutocompleteProps { makeId?: string }

export function Autocomplete({ makeId, ...props }: DSAutoProps) {
  return <MantineAutocomplete data-make-id={makeId} radius="sm" {...props} />;
}





