import { useState, useMemo } from 'react';
import {
  MRT_PaginationState as PaginationState,
  MRT_RowSelectionState as RowSelectionState,
  MRT_DensityState as DensityState,
} from 'mantine-react-table';

/**
 * Custom hook for managing table state
 * 
 * Manages core table state including pagination, row selection, and density settings.
 * Provides computed values for selection count and alert banner visibility.
 * 
 * @param defaultPageSize - Initial page size for pagination
 * @param defaultDensity - Initial density setting for table rows  
 * @returns Object containing all state values and setters
 * 
 * @example
 * ```tsx
 * const tableState = useTableState(10, 'xs');
 * 
 * // Access state values
 * const { pagination, rowSelection, density } = tableState;
 * 
 * // Use state setters
 * const { setPagination, setRowSelection, setDensity } = tableState;
 * 
 * // Access computed values
 * const { numberOfSelectedRows, showAlertBanner } = tableState;
 * ```
 * 
 * @example
 * ```tsx
 * // With custom defaults
 * const tableState = useTableState(25, 'md');
 * 
 * // Check if any rows are selected
 * if (tableState.showAlertBanner) {
 *   console.log(`${tableState.numberOfSelectedRows} rows selected`);
 * }
 * ```
 */
export function useTableState(defaultPageSize: number, defaultDensity: DensityState) {
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
} 