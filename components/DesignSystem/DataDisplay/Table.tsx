import React, { forwardRef } from 'react';
import { Table as MantineTable, TableProps as MantineTableProps } from '@mantine/core';

// ========================== TYPES ==========================

export interface DSTableProps extends MantineTableProps {
  // All Mantine Table props are supported
}

// ========================== COMPONENT ==========================

/**
 * Table Component
 * 
 * A simple table component for displaying tabular data with consistent styling.
 * Built on top of Mantine's Table component with Design System patterns.
 * 
 * For complex data tables with features like sorting, filtering, and pagination,
 * use the ComplexComponents/DataTable component instead.
 * 
 * @example
 * Basic table usage with compound components
 * 
 * @example
 * Table with data prop for simple data
 * 
 * @example
 * Styled table with borders and spacing
 */
const TableBase = forwardRef<HTMLTableElement, DSTableProps>(
  (props, ref) => {
    return (
      <MantineTable
        ref={ref}
        horizontalSpacing="sm"
        verticalSpacing="xs"
        {...props}
      />
    );
  }
);

TableBase.displayName = 'DSTable';

// Create compound component with proper typing
export const Table = Object.assign(TableBase, {
  Thead: MantineTable.Thead,
  Tbody: MantineTable.Tbody,
  Tfoot: MantineTable.Tfoot,
  Tr: MantineTable.Tr,
  Th: MantineTable.Th,
  Td: MantineTable.Td,
  Caption: MantineTable.Caption,
  ScrollContainer: MantineTable.ScrollContainer,
}); 