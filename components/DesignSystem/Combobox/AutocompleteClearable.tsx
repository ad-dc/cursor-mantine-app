import { useState } from 'react';
import { CloseButton, Combobox, TextInput, useCombobox } from '@mantine/core';

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Australia',
  'Japan',
  'Singapore',
];

export interface DSAutocompleteClearableProps {
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
  /** Input size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Style object for the component */
  style?: React.CSSProperties;
}

export function AutocompleteClearable({
  label,
  placeholder = "Pick a country or type anything",
  data = countries,
  description,
  error,
  required = false,
  showOptional = false,
  disabled = false,
  size = 'md',
  style,
  ...props
}: DSAutocompleteClearableProps) {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  
  // Convert data to consistent format
  const normalizedData = data.map(item => 
    typeof item === 'string' ? { value: item, label: item } : item
  );

  const shouldFilterOptions = !normalizedData.some((item) => item.value === value);
  const filteredOptions = shouldFilterOptions
    ? normalizedData.filter((item) => 
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.value.toLowerCase().includes(value.toLowerCase().trim())
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
        onOptionSubmit={(optionValue) => {
          setValue(optionValue);
          combobox.closeDropdown();
        }}
        store={combobox}
        withinPortal={false}
      >
      <Combobox.Target>
        <TextInput
          label={label}
          description={description}
          error={error}
          required={required}
          size={size}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          withAsterisk={required && !showOptional}
          {...(showOptional && !required && { 
            label: label ? `${label} (optional)` : undefined 
          })}
          rightSection={
            value !== '' && !disabled && (
              <CloseButton
                size="sm"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => setValue('')}
                aria-label="Clear value"
              />
            )
          }
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
    </div>
  );
} 