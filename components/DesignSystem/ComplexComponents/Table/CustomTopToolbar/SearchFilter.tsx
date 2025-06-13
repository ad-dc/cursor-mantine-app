import React, { ReactElement, useCallback, useState } from "react";
import { rem, TextInput } from "@mantine/core";
import { IconSearch, IconX } from '@tabler/icons-react';

// Local translation function
const translate = (key: string, params?: Record<string, any>) => {
  if (!params) return key;
  return Object.entries(params).reduce((str, [key, value]) => {
    return str.replace(`{${key}}`, String(value));
  }, key);
};

const debounce = (fn: (value: string) => void, timeout = 1000): ((value: string) => void) => {
  let timer: NodeJS.Timeout | undefined;
  return (value: string) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(value);
    }, timeout);
  };
};

interface SearchFilterProps {
  searchTerm: string;
  onChange: (value: string) => void;
}

const SearchFilter = ({ searchTerm, onChange }: SearchFilterProps): ReactElement => {
  const [value, setValue] = useState(searchTerm);

  const debouncedOnChange = useCallback(debounce(onChange), [onChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
    debouncedOnChange(newValue);
  };

  const handleClear = (): void => {
    setValue("");
    onChange("");
  };

  return (
    <TextInput
      size="xs"
      placeholder={translate("table.search.placeholder")}
      style={{ flexGrow: "1" }}
      onChange={handleChange}
      rightSection={
        value ? (
          <IconX
            data-testid="search-clear"
            onClick={handleClear}
            style={{ width: rem(14), height: rem(14), cursor: "pointer" }}
          />
        ) : (
          <IconSearch style={{ width: rem(14), height: rem(14) }} />
        )
      }
      value={value}
      styles={{
        wrapper: {
          fontSize: "var(--mantine-font-size-xs)",
        },
      }}
    />
  );
};

export default SearchFilter;
