import React, { useMemo, useState, MutableRefObject, ReactElement } from "react";
import {
  CloseButton,
  Combobox,
  InputBase,
  InputPlaceholder,
  Popover,
  useCombobox,
  Box,
  rem,
} from "@mantine/core";
import { DatePicker, DatesRangeValue } from "@mantine/dates";
import { Preset, getPresetLabel, getPresets, getDateRangeFromPreset } from "./utils";
import { useClickOutside } from '@mantine/hooks';
import SelectFilter from '../SelectFilter';
import FilterChip from '../FilterChip';
import ResultCount from '../ResultCount';

// Local fallback for translation
const translate = (key: string) => key;

// Local Person type (adjust as needed)
export interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
  email: string;
  status: 'active' | 'inactive';
}

interface DateRangeSelectorProps {
  label: string;
  locale: string;
  onChange: (value: DatesRangeValue | null) => void;
}

const DateRangeSelector = ({ label, locale, onChange }: DateRangeSelectorProps): ReactElement => {
  const [dateFilterState, setDateFilterState] = useState({
    previousPreset: null as string | null,
    preset: null as string | null,
    customDateRange: [null, null] as [Date | null, Date | null],
  });
  const { preset, customDateRange } = dateFilterState;

  const [isDatePickerOpened, setIsDatePickerOpened] = useState(false);

  const presetSelectRef = useClickOutside(() => {
    if (isDatePickerOpened) {
      setDateFilterState(prev => ({
        ...prev,
        preset: prev.previousPreset,
      }));
      setIsDatePickerOpened(false);
    }
  }, ["date-picker"]) as MutableRefObject<HTMLDivElement>;

  const isDateRangeSelected = (value: string | null): boolean => {
    return value === Preset.CUSTOM && customDateRange[0] !== null && customDateRange[1] !== null;
  };

  const getValueDisplayed = useMemo(() => {
    if (isDateRangeSelected(preset)) {
      return `${customDateRange[0]?.toLocaleDateString(
        locale
      )} - ${customDateRange[1]?.toLocaleDateString(locale)}`;
    }
    if (preset === Preset.CUSTOM) {
      return "Select a date";
    }
    if (preset) {
      return getPresetLabel(preset);
    }
    return <InputPlaceholder>{translate("table.filters.show.all")}</InputPlaceholder>;
  }, [preset, customDateRange]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = getPresets().map(item => (
    <Combobox.Option value={item.value} key={item.value}>
      {item.label}
    </Combobox.Option>
  ));

  const handleClearClick = (): void => {
    setDateFilterState(prev => ({
      previousPreset: prev.preset,
      preset: null,
      customDateRange: [null, null],
    }));
    setIsDatePickerOpened(false);
    onChange(null);
  };

  const handlePresetChange = (value: string): void => {
    combobox.closeDropdown();
    if (preset === Preset.CUSTOM && value !== Preset.CUSTOM) {
      setDateFilterState(prev => ({
        previousPreset: prev.preset,
        preset: prev.preset,
        customDateRange: [null, null],
      }));
    }
    setDateFilterState(prev => ({
      ...prev,
      previousPreset: prev.preset,
      preset: value,
    }));

    if (value === Preset.CUSTOM) {
      setIsDatePickerOpened(true);
    } else {
      setIsDatePickerOpened(false);
      onChange(getDateRangeFromPreset(value));
    }
  };

  const handleInputBaseClick = (): void => {
    if (!isDatePickerOpened) {
      combobox.toggleDropdown();
    } else {
      setIsDatePickerOpened(false);
      if (customDateRange[0] === null && customDateRange[1] === null) {
        setDateFilterState(prev => ({
          ...prev,
          previousPreset: prev.preset,
          preset: prev.previousPreset,
        }));
      }
    }
  };

  const handleDatePickerChange = (value: DatesRangeValue): void => {
    if (value[0] !== null && value[1] !== null) {
      setIsDatePickerOpened(false);
    }
    setDateFilterState(prev => ({ ...prev, customDateRange: value }));
    onChange(value);
  };

  return (
    <Popover opened={isDatePickerOpened} position="bottom-start">
      <Popover.Target>
        <div ref={presetSelectRef} role="menuitem">
          <Combobox
            size="xs"
            store={combobox}
            withinPortal={false}
            onOptionSubmit={handlePresetChange}
          >
            <Combobox.Target>
              <InputBase
                component="button"
                type="button"
                size="xs"
                pointer
                rightSection={
                  preset ? (
                    <CloseButton
                      size="xs"
                      variant="transparent"
                      onMouseDown={(event): void => event.preventDefault()}
                      onClick={handleClearClick}
                      aria-label="Clear date range"
                    />
                  ) : (
                    <Combobox.Chevron size="xs" />
                  )
                }
                onClick={handleInputBaseClick}
                rightSectionPointerEvents={preset === null ? "none" : "all"}
                label={label}
                styles={{
                  label: {
                    fontWeight: 600,
                  },
                }}
              >
                {getValueDisplayed}
              </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
              <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <DatePicker
          id="date-picker"
          data-testid="date-picker"
          type="range"
          value={customDateRange}
          onChange={handleDatePickerChange}
          defaultDate={customDateRange[0] || customDateRange[1] || new Date()}
        />
      </Popover.Dropdown>
    </Popover>
  );
};

export default DateRangeSelector;
