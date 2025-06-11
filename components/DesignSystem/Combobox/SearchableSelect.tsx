import { useState } from 'react';
import { Combobox, InputBase, useCombobox } from '@mantine/core';

const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'Go',
  'Rust',
  'Swift',
];

export interface DSSearchableSelectProps {
  /** Label for the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Data array for options - can be strings or objects with value/label */
  data?: string[] | { value: string; label: string }[];
  /** Description text displayed below the input */
  description?: string;
  /** Error message */
  error?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether to show "(optional)" next to the label */
  showOptional?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the select is searchable */
  searchable?: boolean;
  /** Input size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Style object for the component */
  style?: React.CSSProperties;
}

export function SearchableSelect({
  label,
  placeholder = "Search programming languages",
  data = languages,
  description,
  error,
  required = false,
  showOptional = false,
  disabled = false,
  searchable = true,
  size = 'md',
  style,
  ...props
}: DSSearchableSelectProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Convert data to consistent format
  const normalizedData = data.map(item => 
    typeof item === 'string' ? { value: item, label: item } : item
  );

  const shouldFilterOptions = normalizedData.every((item) => item.value !== search);
  const filteredOptions = shouldFilterOptions && searchable
    ? normalizedData.filter((item) => 
        item.label.toLowerCase().includes(search.toLowerCase().trim()) ||
        item.value.toLowerCase().includes(search.toLowerCase().trim())
      )
    : normalizedData;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      {item.label}
    </Combobox.Option>
  ));

  return (
    <div style={style}>
      <Combobox
        store={combobox}
        withinPortal={false}
        onOptionSubmit={(val) => {
          setValue(val);
          setSearch(val);
          combobox.closeDropdown();
        }}
      >
      <Combobox.Target>
        <InputBase
          label={label}
          description={description}
          error={error}
          required={required}
          size={size}
          disabled={disabled}
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder={placeholder}
          rightSectionPointerEvents="none"
          withAsterisk={required && !showOptional}
          {...(showOptional && !required && { 
            label: label ? `${label} (optional)` : undefined 
          })}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
    </div>
  );
} 