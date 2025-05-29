import React, { useMemo, useState, useCallback } from 'react';
import {
  useMantineReactTable,
  MantineReactTable,
  MRT_PaginationState as PaginationState,
  MRT_RowSelectionState as RowSelectionState,
  MRT_DensityState as DensityState,
  MRT_RowData,
  MRT_SortingState as SortingState,
  MRT_ColumnDef as ColumnDef,
} from 'mantine-react-table';
import CustomTopToolbar, { type Filters, type DateRange, type City } from './CustomTopToolbar';
import CustomBottomToolbar from './CustomBottomToolbar';
import CustomToolbarAlertBannerContent from './CustomToolbarAlertBannerContent';
import ErrorOverlay from './ErrorOverlay';
import SortableHeaderCell from './SortableHeaderCell';

// ========================== EXPORTS ==========================
/**
 * Re-export commonly used types from sub-components for convenience
 * This allows consumers to import these types directly from the Table component
 */
export type { Filters, DateRange, City };

// ========================== TYPES ==========================
/**
 * Generic type for state updater functions used by React state setters
 * Can accept either a direct value or a function that takes the previous value
 */
type OnChangeFn<T> = (updater: T | ((old: T) => T)) => void;

/**
 * Union type for sort directions used throughout the table
 * null represents no sorting applied to a column
 */
type SortDirection = 'asc' | 'desc' | null;

/**
 * Enhanced TableColumn interface with better typing and additional options
 * Extends the basic column definition with custom properties
 */
export interface TableColumn<T extends MRT_RowData> {
  /** The key from the data object to access the column value */
  accessorKey: keyof T;
  /** Column header - can be static text or a React component function */
  header: string | (() => React.ReactNode);
  /** Optional fixed width for the column in pixels */
  size?: number;
  /** Whether this column can be sorted by the user */
  enableSorting?: boolean;
  /** Whether filtering is enabled for this column */
  enableColumnFilter?: boolean;
}

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
 * Comprehensive props interface for the Table component
 * Organized by functionality for better maintainability
 */
export interface TableProps<T extends MRT_RowData> {
  // ==================== DATA PROPS ====================
  /** Array of data objects to display in the table */
  data: T[];
  /** Column definitions specifying how to render each column */
  columns: ColumnDef<T>[];
  /** Total number of items across all pages (for pagination display) */
  totalCount?: number;
  
  // ==================== LOADING AND ERROR STATES ====================
  /** Whether the table is currently loading data */
  isLoading?: boolean;
  /** Whether an error has occurred while loading data */
  isError?: boolean;
  /** Error message to display when isError is true */
  error?: string;
  /** Callback function to retry loading data after an error */
  onRetry?: () => void;
  
  // ==================== PAGINATION PROPS ====================
  /** Page information for cursor-based pagination */
  pageInfo?: PageInfo;
  /** Callback fired when pagination state changes (page or page size) */
  onPaginationChange?: (pagination: PaginationState) => void;
  /** Default number of rows to show per page */
  defaultPageSize?: number;
  
  // ==================== SELECTION PROPS ====================
  /** Callback fired when row selection changes */
  onRowSelectionChange?: (rowSelection: RowSelectionState) => void;
  
  // ==================== UI STATE PROPS ====================
  /** Callback fired when table density (row height) changes */
  onDensityChange?: (density: DensityState) => void;
  /** Default density setting for the table */
  defaultDensity?: DensityState;
  
  // ==================== SORTING PROPS ====================
  /** Callback fired when column sorting changes */
  onSortChange?: (field: string, direction: SortDirection) => void;
  
  // ==================== FILTER PROPS ====================
  /** Current state of all applied filters */
  filtersState?: Filters;
  /** Callback fired when filters are modified */
  onFiltersChange?: (filters: Filters) => void;
  /** Locale string for internationalization */
  locale?: string;
  
  // ==================== FEATURE TOGGLES ====================
  /** Whether to show the filters panel */
  showFilters?: boolean;
  /** Whether to show the global search input */
  showSearch?: boolean;
  /** Whether to show the density toggle button */
  showDensityToggle?: boolean;
  /** Whether to show the fullscreen toggle button */
  showFullScreenToggle?: boolean;
  
  // ==================== STYLE CUSTOMIZATION ====================
  /** Additional props to pass to the table container element */
  mantineTableContainerProps?: Record<string, any>;
  /** Additional props to pass to the paper wrapper element */
  mantinePaperProps?: Record<string, any>;
  
  // ==================== DEPRECATED/UNUSED PROPS ====================
  /** @deprecated Use totalCount instead - kept for backward compatibility */
  resultCount?: number;
}

// ========================== CONSTANTS ==========================
/**
 * Default values for various table configuration options
 * Centralized to ensure consistency and easy modification
 */
const DEFAULT_VALUES = {
  /** Default number of rows per page */
  PAGE_SIZE: 10,
  /** Default table density (row height) - 'xs' is most compact */
  DENSITY: 'xs' as DensityState,
  /** Default locale for internationalization */
  LOCALE: 'en',
  /** Default total count when not provided */
  TOTAL_COUNT: 0,
  /** Default result count (deprecated) */
  RESULT_COUNT: 0,
} as const;

/**
 * Feature flags that control which table features are enabled by default
 * Can be overridden by props but provide sensible defaults
 */
const FEATURE_FLAGS = {
  /** Enable filters panel by default */
  SHOW_FILTERS: true,
  /** Enable global search by default */
  SHOW_SEARCH: true,
  /** Enable density toggle by default */
  SHOW_DENSITY_TOGGLE: true,
  /** Enable fullscreen toggle by default */
  SHOW_FULL_SCREEN_TOGGLE: true,
} as const;

/**
 * Styling constants using Mantine design tokens
 * Ensures consistent theming and easy maintenance
 */
const TABLE_STYLES = {
  /** Styling for the table header row */
  headerRow: {
    borderBottom: '2px solid var(--mantine-color-gray-3)',
  },
  /** Styling for table body cells */
  bodyCell: {
    padding: 'var(--mantine-spacing-xs)',
  },
  /** Styling for table container and paper wrapper */
  container: {
    backgroundColor: 'var(--mantine-color-white)',
  },
  /** Styling for table header cells */
  headerCell: {
    fontWeight: 'bold',
  },
} as const;

/**
 * ID used by Mantine React Table for the row selection column
 * Stored as constant to avoid magic strings
 */
const SELECTION_COLUMN_ID = 'mrt-row-select';

// ========================== CUSTOM HOOKS ==========================
/**
 * Custom hook for managing all internal table state
 * Centralizes state management and provides computed values
 * 
 * @param defaultPageSize - Initial page size for pagination
 * @param defaultDensity - Initial density setting for table rows
 * @returns Object containing all state values and setters
 */
const useTableState = (defaultPageSize: number, defaultDensity: DensityState) => {
  // ==================== STATE DECLARATIONS ====================
  /** Pagination state containing current page index and page size */
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0, // Start at first page (0-based)
    pageSize: defaultPageSize,
  });

  /** Row selection state - object mapping row IDs to selection status */
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  
  /** Current table density setting affecting row height */
  const [density, setDensity] = useState<DensityState>(defaultDensity);

  // ==================== COMPUTED VALUES ====================
  /** 
   * Number of currently selected rows across all pages
   * Computed from the rowSelection object keys
   */
  const numberOfSelectedRows = useMemo(() => Object.keys(rowSelection).length, [rowSelection]);
  
  /** 
   * Whether to show the alert banner indicating selected rows
   * Only shown when there are selected rows
   */
  const showAlertBanner = useMemo(() => numberOfSelectedRows > 0, [numberOfSelectedRows]);

  // Return all state and computed values for use in component
  return {
    pagination,
    setPagination,
    rowSelection,
    setRowSelection,
    density,
    setDensity,
    numberOfSelectedRows,
    showAlertBanner,
  };
};

/**
 * Custom hook for table event handlers
 * Manages all user interactions and state updates with proper memoization
 * 
 * @param tableState - Current table state from useTableState hook
 * @param props - Callback props passed from parent component
 * @returns Object containing all memoized event handlers
 */
const useTableHandlers = (
  tableState: ReturnType<typeof useTableState>,
  props: {
    onPaginationChange?: (pagination: PaginationState) => void;
    onRowSelectionChange?: (rowSelection: RowSelectionState) => void;
    onDensityChange?: (density: DensityState) => void;
    onSortChange?: (field: string, direction: SortDirection) => void;
  }
) => {
  // Extract state and callbacks for cleaner code
  const { pagination, setPagination, rowSelection, setRowSelection, density, setDensity } = tableState;
  const { onPaginationChange, onRowSelectionChange, onDensityChange, onSortChange } = props;

  /**
   * Handles pagination state changes (page navigation, page size changes)
   * Updates internal state and notifies parent component
   */
  const handlePaginationChange: OnChangeFn<PaginationState> = useCallback((updater) => {
    // Handle both direct values and updater functions
    const newPagination = typeof updater === 'function' ? updater(pagination) : updater;
    setPagination(newPagination);
    // Notify parent component of pagination change
    onPaginationChange?.(newPagination);
  }, [pagination, onPaginationChange, setPagination]);

  /**
   * Handles row selection state changes
   * Maintains selection state across pagination and notifies parent
   */
  const handleRowSelectionChange: OnChangeFn<RowSelectionState> = useCallback((updater) => {
    // Handle both direct values and updater functions
    const newRowSelection = typeof updater === 'function' ? updater(rowSelection) : updater;
    setRowSelection(newRowSelection);
    // Notify parent component of selection change
    onRowSelectionChange?.(newRowSelection);
  }, [rowSelection, onRowSelectionChange, setRowSelection]);

  /**
   * Handles table density changes (affects row height and spacing)
   * Updates UI density and notifies parent component
   */
  const handleDensityChange: OnChangeFn<DensityState> = useCallback((updater) => {
    // Handle both direct values and updater functions
    const newDensity = typeof updater === 'function' ? updater(density) : updater;
    setDensity(newDensity);
    // Notify parent component of density change
    onDensityChange?.(newDensity);
  }, [density, onDensityChange, setDensity]);

  /**
   * Clears all selected rows and notifies parent component
   * Used by the "Clear Selection" button in the alert banner
   */
  const handleClearSelection = useCallback(() => {
    setRowSelection({});
    onRowSelectionChange?.({});
  }, [onRowSelectionChange, setRowSelection]);

  /**
   * Handles column sorting changes
   * Converts Mantine React Table sorting format to our simplified format
   */
  const handleSortingChange = useCallback((updater: SortingState | ((old: SortingState) => SortingState)) => {
    // Handle both direct values and updater functions
    const sorting = typeof updater === 'function' ? updater([]) : updater;
    
    if (sorting.length > 0) {
      // Extract sorting information from first sort (single column sorting)
      const { id, desc } = sorting[0];
      onSortChange?.(id, desc ? 'desc' : 'asc');
    } else {
      // No sorting applied
      onSortChange?.('', null);
    }
  }, [onSortChange]);

  // Return all memoized handlers
  return {
    handlePaginationChange,
    handleRowSelectionChange,
    handleDensityChange,
    handleClearSelection,
    handleSortingChange,
  };
};

/**
 * Custom hook for table render functions
 * Manages all custom rendering logic with proper memoization
 * 
 * @param props - Props needed for rendering (data, filters, etc.)
 * @param tableState - Current table state (selection count, etc.)
 * @param handlers - Event handlers for user interactions
 * @returns Object containing all memoized render functions
 */
const useTableRenderFunctions = <T extends MRT_RowData>(
  props: {
    filtersState: Filters;
    locale: string;
    onFiltersChange: (filters: Filters) => void;
    data: T[];
    showFilters: boolean;
    isLoading: boolean;
    totalCount: number;
    pageInfo?: PageInfo;
    error?: string;
    onRetry?: () => void;
  },
  tableState: { numberOfSelectedRows: number },
  handlers: { handleClearSelection: () => void }
) => {
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
      showFilters={showFilters}
      numberOfSelectedRows={numberOfSelectedRows}
      onFilterToggleChange={() => {}} // TODO: Implement filter toggle functionality
      isLoading={isLoading}
    />
  ), [filtersState, locale, onFiltersChange, data.length, showFilters, numberOfSelectedRows, isLoading]);

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
   * Handles both string headers and JSX component headers
   * Excludes the row selection column to let Mantine React Table handle it
   */
  const renderTableHeadCell = useCallback(({ column }: any) => {
    // Don't override the select column header - let Mantine React Table handle it
    if (column.id === SELECTION_COLUMN_ID) {
      return {};
    }
    
    const header = column.columnDef.header;
    
    // If header is a function (returns JSX), render it directly
    if (typeof header === 'function') {
      return {
        style: TABLE_STYLES.headerCell,
        children: header(),
      };
    }
    
    // If header is a string, use our custom SortableHeaderCell component
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
};

// ========================== MAIN COMPONENT ==========================
/**
 * A comprehensive table component built on top of Mantine React Table
 * 
 * Features include:
 * - Pagination with cursor-based navigation
 * - Row selection with cumulative selection across pages
 * - Column sorting and filtering
 * - Customizable density and fullscreen modes
 * - Error handling and loading states
 * - Internationalization support
 * - Fully customizable styling
 * 
 * @param props - Table configuration and data props
 * @returns Rendered table component with all features enabled
 */
export function Table<T extends MRT_RowData>({
  // ==================== DATA PROPS ====================
  data,
  columns,
  totalCount = DEFAULT_VALUES.TOTAL_COUNT,
  
  // ==================== LOADING AND ERROR STATES ====================
  isLoading = false,
  isError = false,
  error,
  onRetry,
  
  // ==================== PAGINATION PROPS ====================
  pageInfo,
  onPaginationChange,
  defaultPageSize = DEFAULT_VALUES.PAGE_SIZE,
  
  // ==================== SELECTION PROPS ====================
  onRowSelectionChange,
  
  // ==================== UI STATE PROPS ====================
  onDensityChange,
  defaultDensity = DEFAULT_VALUES.DENSITY,
  
  // ==================== SORTING PROPS ====================
  onSortChange,
  
  // ==================== FILTER PROPS ====================
  filtersState = {},
  onFiltersChange = () => {},
  locale = DEFAULT_VALUES.LOCALE,
  
  // ==================== FEATURE TOGGLES ====================
  showFilters = FEATURE_FLAGS.SHOW_FILTERS,
  showSearch = FEATURE_FLAGS.SHOW_SEARCH,
  showDensityToggle = FEATURE_FLAGS.SHOW_DENSITY_TOGGLE,
  showFullScreenToggle = FEATURE_FLAGS.SHOW_FULL_SCREEN_TOGGLE,
  
  // ==================== STYLE CUSTOMIZATION ====================
  mantineTableContainerProps = {},
  mantinePaperProps = {},
  
  // ==================== DEPRECATED/UNUSED PROPS ====================
  resultCount = DEFAULT_VALUES.RESULT_COUNT,
}: TableProps<T>) {
  // ==================== HOOK INITIALIZATION ====================
  /** Initialize table state management */
  const tableState = useTableState(defaultPageSize, defaultDensity);
  
  /** Initialize event handlers with proper memoization */
  const handlers = useTableHandlers(tableState, {
    onPaginationChange,
    onRowSelectionChange,
    onDensityChange,
    onSortChange,
  });
  
  /** Initialize render functions with all required dependencies */
  const renderFunctions = useTableRenderFunctions(
    {
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
    },
    { numberOfSelectedRows: tableState.numberOfSelectedRows },
    { handleClearSelection: handlers.handleClearSelection }
  );

  // ==================== TABLE CONFIGURATION ====================
  /**
   * Memoized table configuration object
   * Contains all options, state, and handlers for Mantine React Table
   */
  const tableConfig = useMemo(() => ({
    // ==================== CORE DATA AND COLUMNS ====================
    columns,
    data,
    /** Use the 'id' field from each row for unique identification (enables proper selection tracking) */
    getRowId: (row: T) => row.id as string,
    
    // ==================== FEATURE ENABLEMENT ====================
    /** Enable row selection with checkboxes */
    enableRowSelection: true,
    /** Allow multiple rows to be selected simultaneously */
    enableMultiRowSelection: true,
    /** Show select all checkbox in header */
    enableSelectAll: true,
    /** Enable column-specific filtering */
    enableColumnFilters: true,
    /** Enable column sorting */
    enableSorting: true,
    /** Allow users to resize columns */
    enableColumnResizing: true,
    /** Keep header visible when scrolling */
    enableStickyHeader: true,
    /** Show density toggle button */
    enableDensityToggle: showDensityToggle,
    /** Show fullscreen toggle button */
    enableFullScreenToggle: showFullScreenToggle,
    /** Enable pagination controls */
    enablePagination: true,
    /** Disable built-in row actions (we handle them manually) */
    enableRowActions: false,
    /** Use manual pagination (parent handles data slicing) */
    manualPagination: true,
    
    // ==================== DATA AND STATE ====================
    /** Total number of rows across all pages */
    rowCount: totalCount,
    /** Current state object passed to Mantine React Table */
    state: {
      pagination: tableState.pagination,
      rowSelection: tableState.rowSelection,
      density: tableState.density,
      isLoading,
      showAlertBanner: tableState.showAlertBanner,
    },
    
    // ==================== EVENT HANDLERS ====================
    /** Handle pagination changes (page navigation, page size changes) */
    onPaginationChange: handlers.handlePaginationChange,
    /** Handle row selection changes */
    onRowSelectionChange: handlers.handleRowSelectionChange,
    /** Handle density changes */
    onDensityChange: handlers.handleDensityChange,
    /** Handle sorting changes */
    onSortingChange: handlers.handleSortingChange,
    
    // ==================== RENDER FUNCTIONS ====================
    /** Custom top toolbar with filters and actions */
    renderTopToolbar: renderFunctions.renderTopToolbar,
    /** Custom bottom toolbar with pagination */
    renderBottomToolbar: renderFunctions.renderBottomToolbar,
    /** Custom alert banner for selection state */
    renderToolbarAlertBannerContent: renderFunctions.renderToolbarAlertBannerContent,
    /** Custom empty state with error handling */
    renderEmptyRowsFallback: renderFunctions.renderEmptyRowsFallback,
    
    // ==================== ACCESSIBILITY AND STYLING ====================
    /** Accessibility props for select all checkbox */
    mantineSelectAllCheckboxProps: {
      'aria-label': 'Select all rows on this page',
    },
    /** Accessibility props for individual row checkboxes */
    mantineSelectCheckboxProps: {
      'aria-label': 'Select row',
    },
    /** Table styling options */
    mantineTableProps: {
      striped: true, // Alternating row colors
      highlightOnHover: true, // Highlight rows on hover
      withColumnBorders: false, // No vertical borders between columns
    },
    /** Header row styling */
    mantineTableHeadRowProps: {
      style: TABLE_STYLES.headerRow,
    },
    /** Custom header cell renderer */
    mantineTableHeadCellProps: renderFunctions.renderTableHeadCell,
    /** Body cell styling */
    mantineTableBodyCellProps: {
      style: TABLE_STYLES.bodyCell,
    },
    /** Alert banner styling */
    mantineToolbarAlertBannerProps: {
      color: 'blue',
    },
    /** Table container styling */
    mantineTableContainerProps: {
      style: TABLE_STYLES.container,
      ...mantineTableContainerProps, // Allow prop overrides
    },
    /** Paper wrapper styling */
    mantinePaperProps: {
      style: TABLE_STYLES.container,
      ...mantinePaperProps, // Allow prop overrides
    },
  }), [
    // ==================== MEMOIZATION DEPENDENCIES ====================
    // Core data dependencies
    columns,
    data,
    showDensityToggle,
    showFullScreenToggle,
    totalCount,
    isLoading,
    // State dependencies
    tableState.pagination,
    tableState.rowSelection,
    tableState.density,
    tableState.showAlertBanner,
    // Handler dependencies
    handlers.handlePaginationChange,
    handlers.handleRowSelectionChange,
    handlers.handleDensityChange,
    handlers.handleSortingChange,
    // Render function dependencies
    renderFunctions.renderTopToolbar,
    renderFunctions.renderBottomToolbar,
    renderFunctions.renderToolbarAlertBannerContent,
    renderFunctions.renderEmptyRowsFallback,
    renderFunctions.renderTableHeadCell,
    // Style customization dependencies
    mantineTableContainerProps,
    mantinePaperProps,
  ]);

  // ==================== COMPONENT INITIALIZATION ====================
  /** Initialize the Mantine React Table instance with our configuration */
  const table = useMantineReactTable(tableConfig);

  // ==================== RENDER ====================
  /** Render the table component */
  return <MantineReactTable table={table} />;
} 