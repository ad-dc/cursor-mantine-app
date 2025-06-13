import React, { useState } from 'react';
import { Stack } from '@mantine/core';
import { Title } from '../../Typography/Title';
import { Code } from '../../Typography/Code';
import { Text } from '../../Typography/Text';
import { 
  FilterSystem, 
  FilterType, 
  FilterConfig, 
  FilterValues, 
  FilterChangeEvent,
  createFilterConfig,
  createSelectOption
} from './CustomTopToolbar/FilterSystem';

/**
 * Example demonstrating the flexible FilterSystem with all filter types using translation keys
 */
const FilterSystemExample: React.FC = () => {
  // Example filter configuration (max 6 filters) using translation keys
  const filterConfigs: FilterConfig[] = [
    // Date range filter
    createFilterConfig.dateRange(
      'date_applied',
      'table.filters.label.date.applied',
      {
        locale: 'en-US',
        placeholderKey: 'table.filters.placeholder.date.range',
      }
    ),
    
    // Single select filter
    createFilterConfig.singleSelect(
      'status',
      'table.filters.label.status',
      [
        createSelectOption('active', 'table.filters.status.active'),
        createSelectOption('inactive', 'table.filters.status.inactive'),
        createSelectOption('pending', 'table.filters.status.pending'),
        createSelectOption('suspended', 'table.filters.status.suspended'),
      ],
      {
        searchable: true,
        placeholderKey: 'table.filters.placeholder.select.option',
      }
    ),
    
    // Multi-select filter
    createFilterConfig.multiSelect(
      'cities',
      'table.filters.city',
      [
        createSelectOption('new-york', 'table.filters.city.new.york'),
        createSelectOption('los-angeles', 'table.filters.city.los.angeles'),
        createSelectOption('chicago', 'table.filters.city.chicago'),
        createSelectOption('san-francisco', 'table.filters.city.san.francisco'),
        createSelectOption('boston', 'table.filters.city.boston'),
        createSelectOption('seattle', 'table.filters.city.seattle'),
      ],
      {
        searchable: true,
        placeholderEmptyKey: 'table.filters.placeholder.all',
        placeholderWithSelectionKey: 'table.filters.placeholder.select.more',
      }
    ),
    
    // Another single select
    createFilterConfig.singleSelect(
      'department',
      'table.filters.label.department',
      [
        createSelectOption('engineering', 'table.filters.department.engineering'),
        createSelectOption('sales', 'table.filters.department.sales'),
        createSelectOption('marketing', 'table.filters.department.marketing'),
        createSelectOption('hr', 'table.filters.department.hr'),
      ]
    ),
    
    // Another multi-select
    createFilterConfig.multiSelect(
      'skills',
      'table.filters.label.skills',
      [
        createSelectOption('javascript', 'table.filters.skills.javascript'),
        createSelectOption('typescript', 'table.filters.skills.typescript'),
        createSelectOption('react', 'table.filters.skills.react'),
        createSelectOption('node', 'table.filters.skills.node'),
        createSelectOption('python', 'table.filters.skills.python'),
      ]
    ),
    
    // Another date range
    createFilterConfig.dateRange(
      'last_login',
      'table.filters.label.last.login',
      {
        locale: 'en-US',
      }
    ),
  ];

  // State for filter values
  const [filterValues, setFilterValues] = useState<FilterValues>({});

  // Handle filter changes
  const handleFilterChange = (event: FilterChangeEvent) => {
    console.log('Filter changed:', event);
    
    setFilterValues(prev => ({
      ...prev,
      [event.filterId]: event.value,
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilterValues({});
  };

  return (
    <Stack gap="lg" p="md">
      <div>
        <Title order={3}>FilterSystem Example (Internationalized)</Title>
        <Text size="sm" c="dimmed">
          Demonstrating all 3 filter types with translation keys for full i18n support
        </Text>
      </div>
      
      {/* The FilterSystem component */}
      <FilterSystem
        filters={filterConfigs}
        values={filterValues}
        onChange={handleFilterChange}
        visible={true}
        columns={3}
        maxFilters={6}
      />
      
      {/* Clear button and current values display */}
      <div>
        <button onClick={clearAllFilters}>Clear All Filters</button>
      </div>
      
      {/* Display current filter values */}
      <div>
        <Title order={4}>Current Filter Values:</Title>
        <Code block>
          {JSON.stringify(filterValues, null, 2)}
        </Code>
      </div>
      
      {/* Usage example */}
      <div>
        <Title order={4}>Usage Example (with Translation Keys):</Title>
        <Code block>{`
import { 
  FilterSystem, 
  createFilterConfig,
  createSelectOption 
} from './FilterSystem';

const filterConfigs = [
  // Date range picker with translation key
  createFilterConfig.dateRange(
    'date_applied', 
    'table.filters.label.date.applied'
  ),
  
  // Single selection dropdown with translated options
  createFilterConfig.singleSelect(
    'status', 
    'table.filters.label.status', 
    [
      createSelectOption('active', 'table.filters.status.active'),
      createSelectOption('inactive', 'table.filters.status.inactive'),
    ]
  ),
  
  // Multi-selection dropdown with translated placeholders
  createFilterConfig.multiSelect(
    'cities', 
    'table.filters.city', 
    [
      createSelectOption('nyc', 'table.filters.city.new.york'),
      createSelectOption('la', 'table.filters.city.los.angeles'),
    ],
    {
      placeholderEmptyKey: 'table.filters.placeholder.all',
      placeholderWithSelectionKey: 'table.filters.placeholder.select.more',
    }
  ),
];

const [filterValues, setFilterValues] = useState({});

const handleFilterChange = (event) => {
  setFilterValues(prev => ({
    ...prev,
    [event.filterId]: event.value,
  }));
};

<FilterSystem
  filters={filterConfigs}
  values={filterValues}
  onChange={handleFilterChange}
  maxFilters={6}
  columns={3}
/>
        `}</Code>
      </div>
    </Stack>
  );
};

export default FilterSystemExample; 