'use client';

import '@mantine/core/styles.layer.css';
import { ActionIcon, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderBar } from '@/components/HeaderBar';
import { SidebarNav, NavItem } from '@/components/SidebarNav';
import { MainLayout } from '@/components/MainLayout';
import { Table } from '@/components/Table';
import { useState } from 'react';
import { RiMoreFill } from '@remixicon/react';
import { MRT_PaginationState as PaginationState, MRT_ColumnDef as ColumnDef } from 'mantine-react-table';

// Import Filters type from the correct location
interface DateRange {
  start: Date | null;
  end: Date | null;
}

enum City {
  NEW_YORK = "New York",
  LOS_ANGELES = "Los Angeles", 
  CHICAGO = "Chicago",
  SAN_FRANCISCO = "San Francisco",
  BOSTON = "Boston",
  SEATTLE = "Seattle",
  DENVER = "Denver",
  PORTLAND = "Portland",
  AUSTIN = "Austin",
  MIAMI = "Miami",
  PHOENIX = "Phoenix",
  LAS_VEGAS = "Las Vegas",
  DETROIT = "Detroit",
  NASHVILLE = "Nashville",
  ATLANTA = "Atlanta",
  ORLANDO = "Orlando",
  TAMPA = "Tampa",
  CHARLOTTE = "Charlotte",
  INDIANAPOLIS = "Indianapolis",
  COLUMBUS = "Columbus",
}

interface Filters {
  cities?: City[] | null;
  dateRange?: DateRange | null;
  searchTerm?: string;
}

// Sample data interface
interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
  email: string;
  status: 'active' | 'inactive';
}

// Sample data
const sampleData: Person[] = [
  { id: '1', name: 'John Doe', age: 32, city: 'New York', email: 'john@example.com', status: 'active' },
  { id: '2', name: 'Jane Smith', age: 28, city: 'Los Angeles', email: 'jane@example.com', status: 'active' },
  { id: '3', name: 'Bob Johnson', age: 45, city: 'Chicago', email: 'bob@example.com', status: 'inactive' },
  { id: '4', name: 'Alice Brown', age: 35, city: 'San Francisco', email: 'alice@example.com', status: 'active' },
  { id: '5', name: 'Charlie Wilson', age: 29, city: 'Boston', email: 'charlie@example.com', status: 'inactive' },
  { id: '6', name: 'Diana Prince', age: 31, city: 'Seattle', email: 'diana@example.com', status: 'active' },
  { id: '7', name: 'Edward Norton', age: 42, city: 'Denver', email: 'edward@example.com', status: 'active' },
  { id: '8', name: 'Fiona Green', age: 26, city: 'Portland', email: 'fiona@example.com', status: 'inactive' },
  { id: '9', name: 'George Miller', age: 38, city: 'Austin', email: 'george@example.com', status: 'active' },
  { id: '10', name: 'Helen Davis', age: 33, city: 'Miami', email: 'helen@example.com', status: 'active' },
  { id: '11', name: 'Ian Thompson', age: 27, city: 'Phoenix', email: 'ian@example.com', status: 'inactive' },
  { id: '12', name: 'Julia Roberts', age: 41, city: 'Las Vegas', email: 'julia@example.com', status: 'active' },
  { id: '13', name: 'Kevin Hart', age: 30, city: 'Detroit', email: 'kevin@example.com', status: 'active' },
  { id: '14', name: 'Linda Carter', age: 36, city: 'Nashville', email: 'linda@example.com', status: 'inactive' },
  { id: '15', name: 'Michael Jordan', age: 44, city: 'Atlanta', email: 'michael@example.com', status: 'active' },
  { id: '16', name: 'Nancy Drew', age: 25, city: 'Orlando', email: 'nancy@example.com', status: 'active' },
  { id: '17', name: 'Oscar Wilde', age: 39, city: 'Tampa', email: 'oscar@example.com', status: 'inactive' },
  { id: '18', name: 'Patricia Hill', age: 34, city: 'Charlotte', email: 'patricia@example.com', status: 'active' },
  { id: '19', name: 'Quincy Jones', age: 37, city: 'Indianapolis', email: 'quincy@example.com', status: 'active' },
  { id: '20', name: 'Rachel Green', age: 29, city: 'Columbus', email: 'rachel@example.com', status: 'inactive' },
];

// Table columns configuration with proper typing
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    size: 200,
  },
  {
    accessorKey: 'age',
    header: 'Age',
    size: 100,
  },
  {
    accessorKey: 'city',
    header: 'City',
    size: 150,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 250,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 120,
  },
  {
    id: 'actions',
    header: 'Actions',
    Cell: () => (
      <ActionIcon size="xs" variant="subtle" aria-label="Row actions">
        <RiMoreFill size={16} />
      </ActionIcon>
    ),
    size: 60,
    enableSorting: false,
    enableColumnFilter: false,
  },
];

const navItems: NavItem[] = [
  {
    label: 'Home',
    icon: 'ri-home-4-line',
    active: true,
    color: 'dark',
    rightSection: null,
    style: { background: 'var(--mantine-color-blue-light)' },
  },
  {
    label: 'Communication Services',
    icon: 'ri-briefcase-4-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Energy',
    icon: 'ri-lightbulb-flash-line',
    color: 'dark',
  },
  {
    label: 'Managed Services',
    icon: 'ri-node-tree',
    color: 'dark',
  },
  {
    label: 'Capital',
    icon: 'ri-bank-card-line',
    color: 'dark',
  },
  {
    label: 'Commissions',
    icon: 'ri-money-dollar-circle-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Reports',
    icon: 'ri-bar-chart-line',
    rightSection: <i className="ri-arrow-right-s-line" style={{ fontSize: 20 }} />,
    color: 'dark',
  },
  {
    label: 'Settings',
    icon: 'ri-settings-3-line',
    color: 'dark',
  },
];

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const [selectedRows, setSelectedRows] = useState({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  // Add filter state management
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    cities: null,
    dateRange: null,
  });

  // Calculate the data for the current page
  const startIndex = pagination.pageIndex * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const currentPageData = sampleData.slice(startIndex, endIndex);

  const handlePaginationChange = (newPagination: PaginationState) => {
    setPagination(newPagination);
  };

  // Handle filter changes
  const handleFiltersChange = (newFilters: Partial<Filters>) => {
    setFilters((prevFilters: Filters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <MainLayout header={<HeaderBar />} navbar={<SidebarNav navItems={navItems} title="Some Title" />}>
      <Title order={2} fw={500} mb="md">Users</Title>
      <Table<Person>
        data={currentPageData}
        columns={columns}
        totalCount={sampleData.length}
        onRowSelectionChange={setSelectedRows}
        onPaginationChange={handlePaginationChange}
        filtersState={filters}
        onFiltersChange={handleFiltersChange}
        defaultPageSize={5}
      />
    </MainLayout>
  );
}
