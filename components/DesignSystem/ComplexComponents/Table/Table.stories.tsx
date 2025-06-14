import type { Meta, StoryObj } from '@storybook/react';
import { useState, useMemo } from 'react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Table } from './Table';
import { Title } from '../../Typography/Title';
import { Text } from '../../Typography/Text';
import { Button } from '../../Buttons/Button';
import { Badge } from '../../DataDisplay/Badge';
import { 
  MRT_ColumnDef as ColumnDef,
  MRT_PaginationState as PaginationState,
  MRT_RowSelectionState as RowSelectionState,
} from 'mantine-react-table';

// Sample data types
interface User {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending';
  department: string;
  role: string;
  lastLogin: string;
  joinDate: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  supplier: string;
}

// Sample data generators
const generateUsers = (count: number): User[] => {
  const departments = ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'];
  const roles = ['Manager', 'Senior', 'Junior', 'Lead', 'Director'];
  const statuses: User['status'][] = ['Active', 'Inactive', 'Pending'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@company.com`,
    status: statuses[i % statuses.length],
    department: departments[i % departments.length],
    role: roles[i % roles.length],
    lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    joinDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  }));
};

const generateProducts = (count: number): Product[] => {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'];
  const suppliers = ['Supplier A', 'Supplier B', 'Supplier C', 'Supplier D'];
  const statuses: Product['status'][] = ['In Stock', 'Low Stock', 'Out of Stock'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: Math.floor(Math.random() * 1000) + 10,
    stock: Math.floor(Math.random() * 100),
    status: statuses[i % statuses.length],
    supplier: suppliers[i % suppliers.length],
  }));
};

const meta: Meta<typeof Table> = {
  title: 'Design System/Complex Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A powerful, feature-rich data table component built on top of Mantine React Table. Supports pagination, sorting, filtering, row selection, density controls, and more. Perfect for displaying large datasets with complex interaction requirements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Whether the table is currently loading data',
    },
    isError: {
      control: 'boolean',
      description: 'Whether an error has occurred while loading data',
    },
    showFilters: {
      control: 'boolean',
      description: 'Whether to show the filters panel',
    },
    showSearch: {
      control: 'boolean',
      description: 'Whether to show the global search input',
    },
    showDensityToggle: {
      control: 'boolean',
      description: 'Whether to show the density toggle button',
    },
    showFullScreenToggle: {
      control: 'boolean',
      description: 'Whether to show the fullscreen toggle button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// User table columns
const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    size: 150,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 200,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 100,
    Cell: ({ cell }) => {
      const status = cell.getValue<string>();
      const color = status === 'Active' ? 'success' : status === 'Pending' ? 'pending' : 'danger';
      return <Badge color={color} size="sm">{status}</Badge>;
    },
  },
  {
    accessorKey: 'department',
    header: 'Department',
    size: 120,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    size: 100,
  },
  {
    accessorKey: 'lastLogin',
    header: 'Last Login',
    size: 120,
  },
];

// Product table columns
const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Product Name',
    size: 200,
  },
  {
    accessorKey: 'category',
    header: 'Category',
    size: 120,
  },
  {
    accessorKey: 'price',
    header: 'Price',
    size: 100,
    Cell: ({ cell }) => `$${cell.getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
    size: 80,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 120,
    Cell: ({ cell }) => {
      const status = cell.getValue<string>();
      const color = status === 'In Stock' ? 'success' : status === 'Low Stock' ? 'pending' : 'danger';
      return <Badge color={color} size="sm">{status}</Badge>;
    },
  },
  {
    accessorKey: 'supplier',
    header: 'Supplier',
    size: 120,
  },
];

export const Default: Story = {
  render: () => {
    const data = useMemo(() => generateUsers(10), []);
    
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Basic Table</Title>
        <Table
          data={data}
          columns={userColumns}
          totalCount={data.length}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table with minimal configuration showing user data.',
      },
    },
  },
};

export const WithPagination: Story = {
  render: () => {
    const allData = useMemo(() => generateUsers(50), []);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });
    
    const data = useMemo(() => {
      const start = pagination.pageIndex * pagination.pageSize;
      const end = start + pagination.pageSize;
      return allData.slice(start, end);
    }, [allData, pagination]);
    
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Table with Pagination</Title>
        <Text size="sm" c="dimmed">
          Showing {data.length} of {allData.length} users
        </Text>
        <Table
          data={data}
          columns={userColumns}
          totalCount={allData.length}
          onPaginationChange={setPagination}
          defaultPageSize={10}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with pagination controls and page size selection.',
      },
    },
  },
};

export const WithSelection: Story = {
  render: () => {
    const data = useMemo(() => generateUsers(15), []);
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    
    const selectedCount = Object.keys(rowSelection).length;
    
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Table with Row Selection</Title>
        <Inline gap="sm">
          <Text size="sm">Selected rows: {selectedCount}</Text>
          {selectedCount > 0 && (
            <Button 
              size="xs" 
              variant="outline" 
              onClick={() => setRowSelection({})}
            >
              Clear Selection
            </Button>
          )}
        </Inline>
        <Table
          data={data}
          columns={userColumns}
          totalCount={data.length}
          onRowSelectionChange={setRowSelection}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with row selection checkboxes and selection management.',
      },
    },
  },
};

export const LoadingState: Story = {
  render: () => {
    const data = useMemo(() => generateUsers(5), []);
    
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Loading State</Title>
        <Table
          data={data}
          columns={userColumns}
          totalCount={data.length}
          isLoading={true}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state with skeleton placeholders.',
      },
    },
  },
};

export const ErrorState: Story = {
  render: () => {
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Error State</Title>
        <Table
          data={[]}
          columns={userColumns}
          totalCount={0}
          isError={true}
          error="Failed to load user data. Please try again."
          onRetry={() => console.log('Retry clicked')}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in error state with retry functionality.',
      },
    },
  },
};

export const EmptyState: Story = {
  render: () => {
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Empty State</Title>
        <Table
          data={[]}
          columns={userColumns}
          totalCount={0}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with no data showing empty state message.',
      },
    },
  },
};

export const ProductTable: Story = {
  render: () => {
    const data = useMemo(() => generateProducts(20), []);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 8,
    });
    
    const paginatedData = useMemo(() => {
      const start = pagination.pageIndex * pagination.pageSize;
      const end = start + pagination.pageSize;
      return data.slice(start, end);
    }, [data, pagination]);
    
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Product Inventory Table</Title>
        <Text size="sm" c="dimmed">
          Product catalog with pricing, stock levels, and supplier information
        </Text>
        <Table
          data={paginatedData}
          columns={productColumns}
          totalCount={data.length}
          onPaginationChange={setPagination}
          defaultPageSize={8}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Product inventory table with custom cell renderers and formatting.',
      },
    },
  },
};

export const FullFeatured: Story = {
  render: () => {
    const allData = useMemo(() => generateUsers(100), []);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    });
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [filters, setFilters] = useState({});
    
    const data = useMemo(() => {
      const start = pagination.pageIndex * pagination.pageSize;
      const end = start + pagination.pageSize;
      return allData.slice(start, end);
    }, [allData, pagination]);
    
    const selectedCount = Object.keys(rowSelection).length;
    
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Full-Featured Table</Title>
        <Text size="sm" c="dimmed">
          Complete table with all features: pagination, selection, filtering, sorting, density controls, and fullscreen mode
        </Text>
        
        {selectedCount > 0 && (
          <Inline gap="sm">
            <Text size="sm" fw={500}>
              {selectedCount} row{selectedCount !== 1 ? 's' : ''} selected
            </Text>
            <Button size="xs" variant="outline" onClick={() => setRowSelection({})}>
              Clear Selection
            </Button>
            <Button size="xs" variant="primary">
              Bulk Action
            </Button>
          </Inline>
        )}
        
        <Table
          data={data}
          columns={userColumns}
          totalCount={allData.length}
          onPaginationChange={setPagination}
          onRowSelectionChange={setRowSelection}
          filtersState={filters}
          onFiltersChange={setFilters}
          defaultPageSize={15}
          showFilters={true}
          showSearch={true}
          showDensityToggle={true}
          showFullScreenToggle={true}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured table demonstrating all available functionality and controls.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    isLoading: false,
    isError: false,
    showFilters: true,
    showSearch: true,
    showDensityToggle: true,
    showFullScreenToggle: true,
  },
  render: (args) => {
    const data = useMemo(() => generateUsers(12), []);
    
    return (
      <Stack gap="lg" w="100%">
        <Title order={3} size="md">Interactive Table</Title>
        <Text size="sm" c="dimmed">
          Use the controls below to customize the table behavior and appearance
        </Text>
        <Table
          {...args}
          data={data}
          columns={userColumns}
          totalCount={data.length}
        />
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Table and see different combinations.',
      },
    },
  },
}; 