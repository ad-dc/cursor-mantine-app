import React from 'react';
import { figma } from '@figma/code-connect';
import { DataTable } from './DataTable';

// Code Connect — `Datatable` (node 5789:113058)
//
// This is a STATIC BOILERPLATE example — the DataTable is configuration-driven
// and does not map individual Figma properties. Sub-components inside the table
// (Badge, Checkbox, Button, TextInput, Select, Chip, etc.) are already
// code-connected individually and will show their own snippets in Dev Mode.
//
// Import `DataTable` from `@/components/DesignSystem` — do NOT wire up
// mantine-react-table directly. The DS component handles toolbar, pagination,
// sorting, filtering, row selection, density, error/empty states, and styling.
//
// ─── Column definitions ───────────────────────────────────────────────
//
//   import { MRT_ColumnDef } from 'mantine-react-table';
//
//   interface YourRowType {
//     id: string;
//     name: string;
//     email: string;
//     status: string;
//     createdAt: string;
//   }
//
//   const columns: MRT_ColumnDef<YourRowType>[] = [
//     { accessorKey: 'name',      header: 'Name',       size: 150 },
//     { accessorKey: 'email',     header: 'Email'                 },
//     { accessorKey: 'status',    header: 'Status'                },
//     { accessorKey: 'createdAt', header: 'Created'               },
//   ];
//
// ─── Data fetching (cursor-based pagination) ──────────────────────────
//
//   const { data, isLoading, isError, refetch } = useYourDataHook(input);
//
// Docs: components/DesignSystem/FIGMA_PROPS_REGISTRY.md → DataTable
//
figma.connect(
  DataTable,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=5789-113058',
  {
    props: {
      children: figma.slot('children'),
    },
    example: (props) => (
      <DataTable
        columns={columns}
        data={data}
        totalCount={totalCount}
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        pageInfo={pageInfo}
        onPaginationChange={handlePaginationChange}
        onSortChange={handleSortChange}
        filtersState={filters}
        onFiltersChange={handleFiltersChange}
        onRowSelectionChange={handleRowSelection}
        showFilters
        showSearch
        showDensityToggle
        defaultPageSize={10}
        defaultDensity="xs"
      />
    ),
  }
);
