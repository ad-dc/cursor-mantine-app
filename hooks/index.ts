/**
 * Hooks Module
 * 
 * This module exports all custom React hooks used throughout the application.
 * Custom hooks should be placed in individual files within this directory and
 * exported from this index file for easy importing.
 * 
 * @example
 * // Import individual hooks
 * import { useTableState, useSelectedRowsText } from '@/hooks';
 * 
 * @example
 * // Import specific hook
 * import { useTableState } from '@/hooks/useTableState';
 */

// Table-related hooks
export { useTableState } from './useTableState';
export { useTableHandlers } from './useTableHandlers';
export type { UseTableHandlersProps } from './useTableHandlers';
export { useTableRenderFunctions } from './useTableRenderFunctions';
export type { 
  UseTableRenderFunctionsProps, 
  TableStateForRender, 
  HandlersForRender 
} from './useTableRenderFunctions';
export { useSelectedRowsText } from './useSelectedRowsText';
export { usePaginationInfo } from './usePaginationInfo';
export type { PaginationInfo } from './usePaginationInfo';

// Mantine-related hooks
// export { useMantineRules } from './useMantineRules';

// Utility hooks
// Add other custom hooks here as they are created

// For now, this file serves as a placeholder for future hook exports
export {}; 