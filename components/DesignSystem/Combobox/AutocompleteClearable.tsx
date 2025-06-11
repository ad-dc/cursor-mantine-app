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
  
  const shouldFilterOptions = !countries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? countries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : countries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
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