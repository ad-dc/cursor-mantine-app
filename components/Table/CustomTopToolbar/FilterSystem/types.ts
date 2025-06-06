import { DatesRangeValue } from "@mantine/dates";
import { TranslationKey } from '../../translations';

/**
 * Supported filter types for the flexible filter system
 */
export enum FilterType {
  DATE_RANGE = "date_range",
  SINGLE_SELECT = "single_select", 
  MULTI_SELECT = "multi_select",
}

/**
 * Base interface for all filter configurations
 */
export interface BaseFilterConfig {
  /** Unique identifier for the filter */
  id: string;
  /** Translation key for the display label */
  labelKey: TranslationKey;
  /** Type of filter component to render */
  type: FilterType;
  /** Whether the filter is currently enabled */
  enabled?: boolean;
  /** Translation key for placeholder text */
  placeholderKey?: TranslationKey;
  /** Custom CSS classes */
  className?: string;
}

/**
 * Configuration for date range filters
 */
export interface DateRangeFilterConfig extends BaseFilterConfig {
  type: FilterType.DATE_RANGE;
  /** Locale for date formatting */
  locale?: string;
  /** Default date range value */
  defaultValue?: DatesRangeValue;
}

/**
 * Option for select-based filters with translation support
 */
export interface SelectOption {
  value: string;
  /** Translation key for the option label */
  labelKey: TranslationKey;
  disabled?: boolean;
}

/**
 * Configuration for single selection filters
 */
export interface SingleSelectFilterConfig extends BaseFilterConfig {
  type: FilterType.SINGLE_SELECT;
  /** Available options for selection */
  options: SelectOption[];
  /** Default selected value */
  defaultValue?: string;
  /** Whether to show search in dropdown */
  searchable?: boolean;
}

/**
 * Configuration for multi-selection filters
 */
export interface MultiSelectFilterConfig extends BaseFilterConfig {
  type: FilterType.MULTI_SELECT;
  /** Available options for selection */
  options: SelectOption[];
  /** Default selected values */
  defaultValue?: string[];
  /** Whether to show search in dropdown */
  searchable?: boolean;
  /** Translation key for placeholder when no items selected */
  placeholderEmptyKey?: TranslationKey;
  /** Translation key for placeholder when items are selected */
  placeholderWithSelectionKey?: TranslationKey;
}

/**
 * Union type for all filter configurations
 */
export type FilterConfig = 
  | DateRangeFilterConfig 
  | SingleSelectFilterConfig 
  | MultiSelectFilterConfig;

/**
 * Current values for all filters
 */
export interface FilterValues {
  [filterId: string]: any;
}

/**
 * Filter change event data
 */
export interface FilterChangeEvent {
  filterId: string;
  value: any;
  filterType: FilterType;
}

/**
 * Configuration for the entire filter system
 */
export interface FilterSystemConfig {
  /** Array of filter configurations (max 6) */
  filters: FilterConfig[];
  /** Current filter values */
  values: FilterValues;
  /** Callback when any filter value changes */
  onChange: (event: FilterChangeEvent) => void;
  /** Whether to show the filter system */
  visible?: boolean;
  /** Number of columns for layout (default: 3) */
  columns?: number;
  /** Maximum number of filters allowed (default: 6) */
  maxFilters?: number;
}

/**
 * Props for individual filter renderers
 */
export interface FilterRendererProps<T = any> {
  config: FilterConfig;
  value: T;
  onChange: (value: T) => void;
}

/**
 * Validation result for filter configurations
 */
export interface FilterValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} 