import { useCallback } from 'react';
import {
  MRT_PaginationState as PaginationState,
  MRT_RowSelectionState as RowSelectionState,
  MRT_DensityState as DensityState,
  MRT_SortingState as SortingState,
} from 'mantine-react-table';
import { useTableState } from './useTableState';

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
 * Props interface for the useTableHandlers hook
 */
export interface UseTableHandlersProps {
  /** Callback fired when pagination state changes (page or page size) */
  onPaginationChange?: (pagination: PaginationState) => void;
  /** Callback fired when row selection changes */
  onRowSelectionChange?: (rowSelection: RowSelectionState) => void;
  /** Callback fired when table density (row height) changes */
  onDensityChange?: (density: DensityState) => void;
  /** Callback fired when column sorting changes */
  onSortChange?: (field: string, direction: SortDirection) => void;
}

/**
 * Custom hook for table event handlers
 * 
 * Manages all user interactions and state updates with proper memoization.
 * Provides handlers for pagination, row selection, density changes, and sorting.
 * All handlers are memoized to prevent unnecessary re-renders.
 * 
 * @param tableState - Current table state from useTableState hook
 * @param props - Callback props passed from parent component
 * @returns Object containing all memoized event handlers
 * 
 * @example
 * ```tsx
 * const tableState = useTableState(10, 'xs');
 * const handlers = useTableHandlers(tableState, {
 *   onPaginationChange: (pagination) => {
 *     console.log('Page changed:', pagination);
 *   },
 *   onRowSelectionChange: (selection) => {
 *     console.log('Selection changed:', selection);
 *   },
 * });
 * 
 * // Use handlers in table configuration
 * const { handlePaginationChange, handleRowSelectionChange } = handlers;
 * ```
 * 
 * @example
 * ```tsx
 * // With sorting and density change handlers
 * const handlers = useTableHandlers(tableState, {
 *   onSortChange: (field, direction) => {
 *     console.log(`Sorting ${field} in ${direction} order`);
 *   },
 *   onDensityChange: (density) => {
 *     console.log('Density changed:', density);
 *   },
 * });
 * 
 * // Clear all selections
 * handlers.handleClearSelection();
 * ```
 * 
 * @example
 * ```tsx
 * // Complete table setup with all handlers
 * const tableState = useTableState(20, 'md');
 * const handlers = useTableHandlers(tableState, {
 *   onPaginationChange: async (pagination) => {
 *     await fetchData(pagination.pageIndex, pagination.pageSize);
 *   },
 *   onRowSelectionChange: (selection) => {
 *     setSelectedRows(selection);
 *     updateBulkActions(Object.keys(selection));
 *   },
 *   onSortChange: async (field, direction) => {
 *     await fetchSortedData(field, direction);
 *   },
 *   onDensityChange: (density) => {
 *     localStorage.setItem('tableDensity', density);
 *   },
 * });
 * ```
 */
export function useTableHandlers(
  tableState: ReturnType<typeof useTableState>,
  props: UseTableHandlersProps
) {
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
} 