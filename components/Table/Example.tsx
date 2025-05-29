import React from 'react';
import { Table, TableColumn } from './Table';

// Define your data type
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  city: string;
  status: 'active' | 'inactive';
}

// Define your columns
const columns: TableColumn<User>[] = [
  { accessorKey: 'name', header: 'Name', size: 200 },
  { accessorKey: 'email', header: 'Email', size: 250 },
  { accessorKey: 'age', header: 'Age', size: 100 },
  { accessorKey: 'city', header: 'City', size: 150 },
  { accessorKey: 'status', header: 'Status', size: 120 },
];

// Create some dummy data
const dummyData: User[] = [
  { id: '1', name: 'John Duck', email: 'john@example.com', age: 30, city: 'New York', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', age: 25, city: 'Los Angeles', status: 'active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', age: 35, city: 'Chicago', status: 'inactive' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', age: 28, city: 'Denver', status: 'active' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', age: 32, city: 'Seattle', status: 'inactive' },
];

// Example component using the Table
export function ExampleTable() {
  return (
    <Table
      data={dummyData}
      columns={columns}
      defaultPageSize={10}
      showFilters={true}
      showSearch={true}
      onRowSelectionChange={(selection) => console.log('Selected rows:', selection)}
    />
  );
}

// Example with loading state
export function LoadingExampleTable() {
  return (
    <Table
      data={[]}
      columns={columns}
      isLoading={true}
      defaultPageSize={10}
    />
  );
}

// Example with error state
export function ErrorExampleTable() {
  return (
    <Table
      data={[]}
      columns={columns}
      isError={true}
      error="Failed to load data. Please try again."
      onRetry={() => console.log('Retrying...')}
      defaultPageSize={10}
    />
  );
}

// Example with minimal configuration
export function MinimalExampleTable() {
  return (
    <Table
      data={dummyData}
      columns={columns}
      showFilters={false}
      showSearch={false}
      showDensityToggle={false}
      showFullScreenToggle={false}
    />
  );
} 