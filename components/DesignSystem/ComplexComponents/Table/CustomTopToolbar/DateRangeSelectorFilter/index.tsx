import React, { useMemo, useState, ReactElement } from "react";
import {
  CloseButton,
  Combobox,
  InputBase,
  InputPlaceholder,
  Popover,
  useCombobox,
} from "@mantine/core";
import { DatePicker, DatesRangeValue } from "@mantine/dates";
import { translate } from '../../translations';

/**
 * Props interface for the DateRangeSelector component
 */
interface DateRangeSelectorProps {
  /** Label text displayed above the selector */
  label: string;
  /** Locale string for date formatting (e.g., 'en-US', 'fr-FR') */
  locale: string;
  /** Callback function called when date range selection changes */
  onChange: (value: DatesRangeValue | null) => void;
}

/**
 * Enum defining available preset date range options
 */
enum Preset {
  WEEK = "week",
  MONTH = "month",
  QUARTER = "quarter",
  CUSTOM = "custom",
}

/**
 * Internal state interface for managing date filter selections
 */
interface DateFilterState {
  /** Previously selected preset (used for rollback on cancel) */
  previousPreset: string | null;
  /** Currently selected preset option */
  preset: string | null;
  /** Selected custom date range [startDate, endDate] */
  customDateRange: [Date | null, Date | null];
}

/**
 * Preset option interface for dropdown display
 */
interface PresetOption {
  /** Display label for the preset */
  label: string;
  /** Internal value for the preset */
  value: Preset;
}

/**
 * Returns available preset options with translated labels
 * @returns Array of preset options for the dropdown
 */
const getPresets = (): PresetOption[] => [
  {
    label: translate("table.filters.date.range.week"),
    value: Preset.WEEK,
  },
  {
    label: translate("table.filters.date.range.month"),
    value: Preset.MONTH,
  },
  {
    label: translate("table.filters.date.range.quarter"),
    value: Preset.QUARTER,
  },
  {
    label: translate("table.filters.date.range.custom"),
    value: Preset.CUSTOM,
  },
];

/**
 * Finds and returns the display label for a given preset value
 * @param value - The preset value to look up
 * @returns The translated label or empty string if not found
 */
const getPresetLabel = (value: string): string => {
  return getPresets().find(item => item.value === value)?.label || "";
};

/**
 * Calculates date range for preset options (last N days/months/quarters)
 * @param preset - The preset type to calculate range for
 * @returns Tuple of [startDate, endDate] or null for invalid preset
 */
const getDateRangeFromPreset = (preset: string): [Date | null, Date | null] | null => {
  const now = new Date();
  const start = new Date();
  
  switch (preset) {
    case Preset.WEEK:
      // Last 7 days from today
      start.setDate(now.getDate() - 7);
      break;
    case Preset.MONTH:
      // Last month from today
      start.setMonth(now.getMonth() - 1);
      break;
    case Preset.QUARTER:
      // Last 3 months from today
      start.setMonth(now.getMonth() - 3);
      break;
    default:
      return null;
  }
  
  return [start, now];
};

/**
 * DateRangeSelector - A sophisticated date range filter component with preset options
 * and custom date selection via floating calendar dialog.
 * 
 * Features:
 * - Preset options: Last week, month, quarter
 * - Custom date range selection with floating calendar
 * - Proper state management with rollback capability
 * - Localized date display and formatting
 * - Clear functionality with visual feedback
 */
const DateRangeSelector = ({ label, locale, onChange }: DateRangeSelectorProps): ReactElement => {
  // Main state management for date filter selections
  const [dateFilterState, setDateFilterState] = useState<DateFilterState>({
    previousPreset: null,
    preset: null,
    customDateRange: [null, null],
  });
  
  // Destructure state for easier access
  const { preset, customDateRange } = dateFilterState;

  // Controls visibility of the floating date picker
  const [isDatePickerOpened, setIsDatePickerOpened] = useState(false);

  /**
   * Checks if a complete custom date range has been selected
   * @param value - The preset value to check
   * @returns True if custom preset with both start and end dates selected
   */
  const isDateRangeSelected = (value: string | null): boolean => {
    return value === Preset.CUSTOM && customDateRange[0] !== null && customDateRange[1] !== null;
  };

  /**
   * Determines what value to display in the input field
   * Handles different states: empty, preset selected, custom dates, partial custom selection
   */
  const getValueDisplayed = useMemo(() => {
    // Show formatted date range for completed custom selection
    if (isDateRangeSelected(preset)) {
      return `${customDateRange[0]?.toLocaleDateString(
        locale
      )} - ${customDateRange[1]?.toLocaleDateString(locale)}`;
    }
    
    // Show helper text for partial custom selection
    if (preset === Preset.CUSTOM) {
      return translate("table.filters.date.range.select");
    }
    
    // Show preset label for selected presets
    if (preset) {
      return getPresetLabel(preset);
    }
    
    // Show placeholder for empty state
    return <InputPlaceholder>{translate("table.filters.show.all")}</InputPlaceholder>;
  }, [preset, customDateRange, locale]);

  /**
   * Combobox configuration for dropdown behavior
   * Handles dropdown close events and option selection
   */
  const combobox = useCombobox({
    onDropdownClose: () => {
      // Reset selected option when dropdown closes
    },
  });

  /**
   * Renders preset options for the dropdown menu
   */
  const options = getPresets().map(item => (
    <Combobox.Option value={item.value} key={item.value}>
      {item.label}
    </Combobox.Option>
  ));

  /**
   * Handles clearing the current selection
   * Resets all state and notifies parent component
   */
  const handleClearClick = (): void => {
    setDateFilterState(prev => ({
      previousPreset: prev.preset,
      preset: null,
      customDateRange: [null, null],
    }));
    setIsDatePickerOpened(false);
    onChange(null);
  };

  /**
   * Handles selection of preset options from dropdown
   * @param value - The selected preset value
   */
  const handlePresetChange = (value: string): void => {
    combobox.closeDropdown();
    
    // Update state with new selection
    setDateFilterState(prev => ({
      ...prev,
      previousPreset: prev.preset,
      preset: value,
    }));

    if (value === Preset.CUSTOM) {
      // Open floating date picker for custom selection
      setIsDatePickerOpened(true);
    } else {
      // Apply preset date range immediately and close any open picker
      setIsDatePickerOpened(false);
      onChange(getDateRangeFromPreset(value));
    }
  };

  /**
   * Handles clicks on the main input button
   * Toggles dropdown or date picker based on current state
   */
  const handleInputBaseClick = (): void => {
    if (!isDatePickerOpened) {
      // Open dropdown for preset selection
      combobox.toggleDropdown();
    } else {
      // Close date picker
      setIsDatePickerOpened(false);
      
      // Revert to previous preset if no complete date range was selected
      if (customDateRange[0] === null && customDateRange[1] === null) {
        setDateFilterState(prev => ({
          ...prev,
          previousPreset: prev.preset,
          preset: prev.previousPreset,
        }));
      }
    }
  };

  /**
   * Handles date range changes from the floating date picker
   * @param value - The selected date range [startDate, endDate]
   */
  const handleDatePickerChange = (value: DatesRangeValue): void => {
    // Update state and notify parent immediately for real-time filtering
    setDateFilterState(prev => ({ ...prev, customDateRange: value }));
    onChange(value);
    
    // Auto-close the picker when both dates are selected (complete range)
    if (value[0] !== null && value[1] !== null) {
      setIsDatePickerOpened(false);
    }
  };

  return (
    <Popover opened={isDatePickerOpened} position="bottom-start">
      <Popover.Target>
        {/* Main container with click-outside detection */}
        <div role="menuitem">
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
                    /* Clear button - shown when something is selected */
                    <CloseButton
                      size="xs"
                      variant="transparent"
                      onMouseDown={(event): void => event.preventDefault()}
                      onClick={handleClearClick}
                      aria-label="Clear date range"
                    />
                  ) : (
                    /* Dropdown chevron - shown when nothing is selected */
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

            {/* Dropdown with preset options */}
            <Combobox.Dropdown>
              <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
        </div>
      </Popover.Target>
      
      {/* Floating date picker for custom date selection */}
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
