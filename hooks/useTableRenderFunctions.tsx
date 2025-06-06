import React, { useCallback } from 'react';
import { MRT_RowData } from 'mantine-react-table';
import CustomTopToolbar, { type Filters } from '@/components/Table/CustomTopToolbar';
import CustomBottomToolbar from '@/components/Table/CustomBottomToolbar';
import CustomToolbarAlertBannerContent from '@/components/Table/CustomToolbarAlertBannerContent';
import ErrorOverlay from '@/components/Table/ErrorOverlay';
import SortableHeaderCell from '@/components/Table/SortableHeaderCell';

/**
 * Page information interface for cursor-based pagination
 * Used to determine navigation availability and cursor positions
 */
export interface PageInfo {
  /** Whether there are more pages after the current one */
  hasNextPage: boolean;
  /** Whether there are pages before the current one */
  hasPreviousPage: boolean;
  /** Cursor pointing to the start of the current page (for cursor-based pagination) */
  startCursor?: string;
  /** Cursor pointing to the end of the current page (for cursor-based pagination) */
  endCursor?: string;
}

/**
 * ID used by Mantine React Table for the row selection column
 * Stored as constant to avoid magic strings
 */
const SELECTION_COLUMN_ID = 'mrt-row-select';

/**
 * Styling constants using Mantine design tokens
 * Ensures consistent theming and easy maintenance
 */
const TABLE_STYLES = {
  /** Styling for table header cells */
  headerCell: {
    fontWeight: 'bold',
  },
} as const;

/**
 * Props interface for rendering-related data
 */
export interface UseTableRenderFunctionsProps<T extends MRT_RowData> {
  /** Current state of all applied filters */
  filtersState: Filters;
  /** Locale string for internationalization */
  locale: string;
  /** Callback fired when filters are modified */
  onFiltersChange: (filters: Filters) => void;
  /** Array of data objects to display in the table */
  data: T[];
  /** Whether to show the filters panel */
  showFilters: boolean;
  /** Whether the table is currently loading data */
  isLoading: boolean;
  /** Total number of items across all pages (for pagination display) */
  totalCount: number;
  /** Page information for cursor-based pagination */
  pageInfo?: PageInfo;
  /** Error message to display when isError is true */
  error?: string;
  /** Callback function to retry loading data after an error */
  onRetry?: () => void;
}

/**
 * Interface for table state data needed by render functions
 */
export interface TableStateForRender {
  /** Number of currently selected rows across all pages */
  numberOfSelectedRows: number;
}

/**
 * Interface for handlers needed by render functions
 */
export interface HandlersForRender {
  /** Clears all selected rows and notifies parent component */
  handleClearSelection: () => void;
}

/**
 * Custom hook for table render functions
 * 
 * Manages all custom rendering logic with proper memoization.
 * Provides render functions for toolbars, alert banners, empty states, and header cells.
 * All render functions are memoized to prevent unnecessary re-renders.
 * 
 * @param props - Props needed for rendering (data, filters, etc.)
 * @param tableState - Current table state (selection count, etc.)
 * @param handlers - Event handlers for user interactions
 * @returns Object containing all memoized render functions
 * 
 * @example
 * ```tsx
 * const renderFunctions = useTableRenderFunctions(
 *   {
 *     filtersState: filters,
 *     locale: 'en',
 *     onFiltersChange: setFilters,
 *     data: tableData,
 *     showFilters: true,
 *     isLoading: false,
 *     totalCount: 100,
 *     pageInfo: { hasNextPage: true, hasPreviousPage: false },
 *   },
 *   { numberOfSelectedRows: 3 },
 *   { handleClearSelection: () => setSelection({}) }
 * );
 * 
 * // Use in table configuration
 * const tableConfig = {
 *   renderTopToolbar: renderFunctions.renderTopToolbar,
 *   renderBottomToolbar: renderFunctions.renderBottomToolbar,
 *   // ... other render functions
 * };
 * ```
 * 
 * @example
 * ```tsx
 * // Complete setup with error handling
 * const renderFunctions = useTableRenderFunctions(
 *   {
 *     filtersState: {},
 *     locale: 'en',
 *     onFiltersChange: () => {},
 *     data: [],
 *     showFilters: false,
 *     isLoading: true,
 *     totalCount: 0,
 *     error: 'Failed to load data',
 *     onRetry: () => refetch(),
 *   },
 *   { numberOfSelectedRows: 0 },
 *   { handleClearSelection: () => {} }
 * );
 * 
 * // Error state will be handled by renderEmptyRowsFallback
 * ```
 * 
 * @example
 * ```tsx
 * // With custom header rendering
 * const renderFunctions = useTableRenderFunctions(
 *   {
 *     filtersState: activeFilters,
 *     locale: userLocale,
 *     onFiltersChange: updateFilters,
 *     data: rows,
 *     showFilters: true,
 *     isLoading: false,
 *     totalCount: totalRows,
 *     pageInfo: paginationInfo,
 *   },
 *   { numberOfSelectedRows: selectedCount },
 *   { handleClearSelection: clearAll }
 * );
 * 
 * // Custom header cells with sorting support
 * const headerProps = renderFunctions.renderTableHeadCell({ column });
 * ```
 */
export function useTableRenderFunctions<T extends MRT_RowData>(
  props: UseTableRenderFunctionsProps<T>,
  tableState: TableStateForRender,
  handlers: HandlersForRender
) {
  // Extract props for cleaner destructuring
  const {
    filtersState,
    locale,
    onFiltersChange,
    data,
    showFilters,
    isLoading,
    totalCount,
    pageInfo,
    error,
    onRetry,
  } = props;
  const { numberOfSelectedRows } = tableState;
  const { handleClearSelection } = handlers;

  /**
   * Renders the top toolbar with filters, search, and action buttons
   * Memoized to prevent unnecessary re-renders
   */
  const renderTopToolbar = useCallback((toolbarProps: any) => (
    <CustomTopToolbar
      {...toolbarProps}
      filtersState={filtersState}
      locale={locale}
      onChange={onFiltersChange}
      resultCount={data.length}
      totalCount={totalCount}
      showFilters={showFilters}
      numberOfSelectedRows={numberOfSelectedRows}
      onFilterToggleChange={() => {}} // TODO: Implement filter toggle functionality
      isLoading={isLoading}
    />
  ), [filtersState, locale, onFiltersChange, data.length, totalCount, showFilters, numberOfSelectedRows, isLoading]);

  /**
   * Renders the bottom toolbar with pagination controls and row count
   * Includes custom cursor-based pagination with ActionIcon chevrons
   */
  const renderBottomToolbar = useCallback((toolbarProps: any) => (
    <CustomBottomToolbar
      {...toolbarProps}
      totalCount={totalCount}
      pageInfo={pageInfo}
      numberOfSelectedRows={numberOfSelectedRows}
    />
  ), [totalCount, pageInfo, numberOfSelectedRows]);

  /**
   * Renders the alert banner content shown when rows are selected
   * Displays selection count and clear selection button
   */
  const renderToolbarAlertBannerContent = useCallback(() => (
    <CustomToolbarAlertBannerContent
      numberOfSelectedRows={numberOfSelectedRows}
      onClearSelection={handleClearSelection}
    />
  ), [numberOfSelectedRows, handleClearSelection]);

  /**
   * Renders the fallback content when the table is empty or has errors
   * Shows error message with retry button when applicable
   */
  const renderEmptyRowsFallback = useCallback(() => (
    <ErrorOverlay error={error} onRetry={onRetry} />
  ), [error, onRetry]);

  /**
   * Custom renderer for table header cells
   * Provides custom styling while preserving column actions functionality
   * Excludes the row selection column to let Mantine React Table handle it
   */
  const renderTableHeadCell = useCallback(({ column }: any) => {
    // Don't override the select column header - let Mantine React Table handle it
    if (column.id === SELECTION_COLUMN_ID) {
      return {};
    }
    
    // Don't override the actions column header - let Mantine React Table handle it for proper pinning
    if (column.id === 'actions') {
      return {};
    }
    
    const header = column.columnDef.header;
    
    // If header is a function (custom Header component), let it render
    if (typeof header === 'function' || column.columnDef.Header) {
      return {
        style: TABLE_STYLES.headerCell,
      };
    }
    
    // For string headers, provide custom styling with SortableHeaderCell
    return {
      style: TABLE_STYLES.headerCell,
      children: (
        <SortableHeaderCell
          label={header as string}
          sortDirection={column.getIsSorted() as "asc" | "desc" | null}
          onSort={() => column.toggleSorting()}
          isSortable={column.getCanSort()}
        />
      ),
    };
  }, []);

  // Return all memoized render functions
  return {
    renderTopToolbar,
    renderBottomToolbar,
    renderToolbarAlertBannerContent,
    renderEmptyRowsFallback,
    renderTableHeadCell,
  };
}