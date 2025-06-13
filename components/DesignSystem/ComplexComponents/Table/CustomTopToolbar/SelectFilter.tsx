import React, { ReactElement } from "react";
import { ComboboxData, MultiSelect } from "@mantine/core";

// Local translation function
const translate = (key: string, params?: Record<string, any>) => {
  if (!params) return key;
  return Object.entries(params).reduce((str, [key, value]) => {
    return str.replace(`{${key}}`, String(value));
  }, key);
};

export interface SelectFilterProps {
  label: string;
  data: ComboboxData;
  selectedValue: string[] | null;
  onChange: (value: string[] | null) => void;
  placeholderEmpty?: string;
  placeholderWithSelection?: string;
}

const SelectFilter = ({ 
  label, 
  data, 
  selectedValue, 
  onChange, 
  placeholderEmpty = "All", 
  placeholderWithSelection = "Select more" 
}: SelectFilterProps): ReactElement => {
  const hasSelection = selectedValue && selectedValue.length > 0;
  const placeholder = hasSelection ? placeholderWithSelection : placeholderEmpty;

  return (
    <MultiSelect
      size="xs"
      label={label}
      placeholder={placeholder}
      data={data}
      value={selectedValue || []}
      onChange={(value) => onChange(value.length > 0 ? value : null)}
      clearable
      styles={{
        label: {
          fontWeight: 600,
        },
      }}
    />
  );
};

export default SelectFilter;
