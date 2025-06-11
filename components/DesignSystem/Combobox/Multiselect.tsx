import { useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill as MantinePill, PillsInput, useCombobox, InputWrapper } from '@mantine/core';
import { Pill } from '../DataDisplay/Pill';

const technologies = ['React', 'Vue', 'Angular', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'MongoDB'];

const MAX_DISPLAYED_VALUES = 2;

export interface DSMultiselectProps {
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
  /** Maximum number of pills to display before showing "+X more" */
  maxDisplayedValues?: number;
}

export function Multiselect({
  label,
  placeholder = "Pick one or more technologies",
  description,
  error,
  required = false,
  showOptional = false,
  disabled = false,
  size = 'md',
  style,
  maxDisplayedValues = MAX_DISPLAYED_VALUES,
  ...props
}: DSMultiselectProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value
    .slice(
      0,
      maxDisplayedValues === value.length ? maxDisplayedValues : maxDisplayedValues - 1
    )
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)} size={size}>
        {item}
      </Pill>
    ));

  const options = technologies.map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)}>
      <Group gap="sm">
        <Checkbox
          checked={value.includes(item)}
          onChange={() => {}} // Handled by onOptionSubmit
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  // Determine the display label
  const displayLabel = showOptional && !required && label ? `${label} (optional)` : label;

  return (
    <div style={style}>
      <InputWrapper
        label={displayLabel}
        description={description}
        error={error}
        required={required && !showOptional}
        size={size}
        withAsterisk={required && !showOptional}
      >
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false} disabled={disabled}>
          <Combobox.DropdownTarget>
            <PillsInput 
              pointer 
              onClick={() => !disabled && combobox.toggleDropdown()}
              size={size}
              disabled={disabled}
              error={!!error}
            >
              <MantinePill.Group>
                {value.length > 0 ? (
                  <>
                    {values}
                    {value.length > maxDisplayedValues && (
                      <Pill size={size}>+{value.length - (maxDisplayedValues - 1)} more</Pill>
                    )}
                  </>
                ) : (
                  <Input.Placeholder>{placeholder}</Input.Placeholder>
                )}

                <Combobox.EventsTarget>
                  <PillsInput.Field
                    type="hidden"
                    onBlur={() => combobox.closeDropdown()}
                    onKeyDown={(event) => {
                      if (event.key === 'Backspace' && !disabled) {
                        event.preventDefault();
                        handleValueRemove(value[value.length - 1]);
                      }
                    }}
                    disabled={disabled}
                  />
                </Combobox.EventsTarget>
              </MantinePill.Group>
            </PillsInput>
          </Combobox.DropdownTarget>

          <Combobox.Dropdown>
            <Combobox.Options>{options}</Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </InputWrapper>
    </div>
  );
} 