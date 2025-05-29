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
}

const SelectFilter = ({ label, data, selectedValue, onChange }: SelectFilterProps): ReactElement => {
  return (
    <MultiSelect
      size="xs"
      label={label}
      placeholder={translate("table.filters.show.all")}
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
