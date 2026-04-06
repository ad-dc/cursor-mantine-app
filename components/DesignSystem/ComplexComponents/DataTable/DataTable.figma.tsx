import React from 'react';
import { figma } from '@figma/code-connect';
import type { MRT_ColumnDef } from 'mantine-react-table-open';
import { DataTable } from './DataTable';

// Code Connect — `Datatable` (node 5789:113058)
//
// Static example for Dev Mode. Import `DataTable` from `@/components/DesignSystem`.
// Column types come from `mantine-react-table-open` (same API as legacy MRT v2 beta).
//
// Docs: components/DesignSystem/FIGMA_PROPS_REGISTRY.md → DataTable

type DemoRow = { id: string; name: string; email: string; status: string; createdAt: string };

const columns: MRT_ColumnDef<DemoRow>[] = [
  { accessorKey: 'name', header: 'Name', size: 150 },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'createdAt', header: 'Created' },
];

const data: DemoRow[] = [];
const totalCount = 0;
const isLoading = false;
const isError = false;
const pageInfo = { hasNextPage: false, hasPreviousPage: false };
const filters = undefined;

const refetch = (): void => {};
const handlePaginationChange = (): void => {};
const handleSortChange = (): void => {};
const handleFiltersChange = (): void => {};
const handleRowSelection = (): void => {};

figma.connect(
  DataTable,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=5789-113058',
  {
    props: {
      children: figma.slot('children'),
    },
    example: () => (
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
