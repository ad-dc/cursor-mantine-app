import React from 'react';
import { SimpleGrid, Box, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import FilterRenderer from './FilterRenderer';
import { translate } from '../../translations';
import { 
  FilterSystemConfig, 
  FilterChangeEvent, 
  FilterValidationResult,
  FilterType 
} from './types';

/**
 * Validates filter system configuration
 */
const validateFilterConfig = (config: FilterSystemConfig): FilterValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Check maximum filters limit
  const maxFilters = config.maxFilters || 6;
  if (config.filters.length > maxFilters) {
    errors.push(translate('table.filters.system.validation.max.exceeded', {
      maxFilters: maxFilters.toString(),
      filterCount: config.filters.length.toString(),
    }));
  }
  
  // Check for duplicate IDs
  const filterIds = config.filters.map(f => f.id);
  const duplicateIds = filterIds.filter((id, index) => filterIds.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    errors.push(translate('table.filters.system.validation.duplicate.ids', {
      duplicateIds: duplicateIds.join(', '),
    }));
  }
  
  // Check for missing required fields
  config.filters.forEach(filter => {
    if (!filter.id) {
      errors.push(translate('table.filters.system.validation.missing.id'));
    }
    if (!filter.labelKey) {
      warnings.push(translate('table.filters.system.validation.missing.label', {
        filterId: filter.id,
      }));
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
};

/**
 * FilterSystem - Main component for managing multiple filters with layout and validation
 */
const FilterSystem: React.FC<FilterSystemConfig> = ({
  filters,
  values,
  onChange,
  visible = true,
  columns = 3,
  maxFilters = 6,
}) => {
  // Validate configuration
  const validation = validateFilterConfig({ 
    filters, 
    values, 
    onChange, 
    visible, 
    columns, 
    maxFilters 
  });
  
  // Don't render if not visible
  if (!visible) {
    return null;
  }
  
  // Show validation errors
  if (!validation.isValid) {
    return (
      <Alert 
        color="red" 
        icon={<IconAlertCircle size={16} />}
        title={translate('table.filters.system.validation.title')}
      >
        <ul>
          {validation.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </Alert>
    );
  }
  
  // Show warnings in development
  if (validation.warnings.length > 0 && process.env.NODE_ENV === 'development') {
    console.warn('Filter System Warnings:', validation.warnings);
  }
  
  // Limit filters to maximum allowed
  const limitedFilters = filters.slice(0, maxFilters);
  
  const handleFilterChange = (filterId: string, value: any, filterType: FilterType) => {
    const changeEvent: FilterChangeEvent = {
      filterId,
      value,
      filterType,
    };
    onChange(changeEvent);
  };
  
  return (
    <Box>
      <SimpleGrid 
        cols={Math.min(columns, limitedFilters.length)} 
        spacing="xs"
        role="region"
        aria-label="Data filters"
      >
        {limitedFilters.map((filterConfig) => {
          const currentValue = values[filterConfig.id];
          
          return (
            <FilterRenderer
              key={filterConfig.id}
              config={filterConfig}
              value={currentValue}
              onChange={(value) => 
                handleFilterChange(filterConfig.id, value, filterConfig.type)
              }
            />
          );
        })}
      </SimpleGrid>
      
      {filters.length > maxFilters && (
        <Alert 
          color="yellow" 
          mt="xs"
          icon={<IconAlertCircle size={14} />}
        >
          {translate('table.filters.system.overflow.warning', {
            maxFilters: maxFilters.toString(),
            hiddenCount: (filters.length - maxFilters).toString(),
          })}
        </Alert>
      )}
    </Box>
  );
};

export default FilterSystem; 