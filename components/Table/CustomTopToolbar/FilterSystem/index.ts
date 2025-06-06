// Main components
export { default as FilterSystem } from './FilterSystem';
export { default as FilterRenderer } from './FilterRenderer';
export { default as DateRangeFilter } from './DateRangeFilter';
export { default as SingleSelectFilter } from './SingleSelectFilter';
export { default as MultiSelectFilter } from './MultiSelectFilter';

// Types and interfaces
export * from './types';

// Import types for helper functions
import {
  FilterType,
  DateRangeFilterConfig,
  SingleSelectFilterConfig,
  MultiSelectFilterConfig,
  SelectOption,
} from './types';
import { TranslationKey } from '../../translations';

// Helper function to create filter configurations
export const createFilterConfig = {
  dateRange: (
    id: string, 
    labelKey: TranslationKey, 
    options?: Partial<Omit<DateRangeFilterConfig, 'id' | 'labelKey' | 'type'>>
  ): DateRangeFilterConfig => ({
    id,
    labelKey,
    type: FilterType.DATE_RANGE,
    ...options,
  }),
  
  singleSelect: (
    id: string, 
    labelKey: TranslationKey, 
    optionsArray: SelectOption[], 
    config?: Partial<Omit<SingleSelectFilterConfig, 'id' | 'labelKey' | 'type' | 'options'>>
  ): SingleSelectFilterConfig => ({
    id,
    labelKey,
    type: FilterType.SINGLE_SELECT,
    options: optionsArray,
    ...config,
  }),
  
  multiSelect: (
    id: string, 
    labelKey: TranslationKey, 
    optionsArray: SelectOption[], 
    config?: Partial<Omit<MultiSelectFilterConfig, 'id' | 'labelKey' | 'type' | 'options'>>
  ): MultiSelectFilterConfig => ({
    id,
    labelKey,
    type: FilterType.MULTI_SELECT,
    options: optionsArray,
    ...config,
  }),
};

// Helper function to create select options with translation keys
export const createSelectOption = (
  value: string,
  labelKey: TranslationKey,
  disabled?: boolean
): SelectOption => ({
  value,
  labelKey,
  disabled,
}); 