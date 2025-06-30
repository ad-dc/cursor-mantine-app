import { useMemo } from 'react';
import { translate } from '@/components/DesignSystem/ComplexComponents/DataTable/translations';

/**
 * Custom hook for generating selected rows text
 * 
 * Generates appropriate text based on the number of selected rows.
 * Returns null if no rows are selected, otherwise returns the appropriate
 * singular or plural text based on the count.
 * 
 * @param numberOfSelectedRows - The number of currently selected rows
 * @returns String with selected rows text or null if no rows selected
 * 
 * @example
 * ```tsx
 * const selectedRowsText = useSelectedRowsText(3);
 * // Returns: "3 rows selected" (or localized equivalent)
 * 
 * if (selectedRowsText) {
 *   console.log(selectedRowsText);
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // No rows selected
 * const selectedRowsText = useSelectedRowsText(0);
 * // Returns: null
 * 
 * // Single row selected
 * const selectedRowsText = useSelectedRowsText(1);
 * // Returns: "1 row selected" (or localized equivalent)
 * ```
 * 
 * @example
 * ```tsx
 * // Using in a component
 * const CustomToolbar = ({ selectedCount }) => {
 *   const selectedText = useSelectedRowsText(selectedCount);
 *   
 *   return (
 *     <div>
 *       {selectedText && (
 *         <Text size="sm" color="blue">
 *           {selectedText}
 *         </Text>
 *       )}
 *     </div>
 *   );
 * };
 * ```
 * 
 * @example
 * ```tsx
 * // Multiple rows selected
 * const selectedRowsText = useSelectedRowsText(25);
 * // Returns: "25 rows selected" (or localized equivalent)
 * 
 * // Display in status bar
 * const StatusBar = ({ count }) => {
 *   const text = useSelectedRowsText(count);
 *   return text ? <span>{text}</span> : <span>No selection</span>;
 * };
 * ```
 */
export function useSelectedRowsText(numberOfSelectedRows: number): string | null {
  return useMemo(() => {
    if (numberOfSelectedRows === 0) return null;
    
    return numberOfSelectedRows === 1 
      ? translate("table.selected.row")
      : translate("table.selected.rows", { count: numberOfSelectedRows });
  }, [numberOfSelectedRows]);
} 