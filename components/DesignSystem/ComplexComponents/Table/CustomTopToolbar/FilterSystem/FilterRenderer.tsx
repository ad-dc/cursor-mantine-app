import React from 'react';
import { Box } from '@mantine/core';
import DateRangeFilter from './DateRangeFilter';
import SingleSelectFilter from './SingleSelectFilter';
import MultiSelectFilter from './MultiSelectFilter';
import { 
  FilterType, 
  FilterRendererProps, 
  FilterConfig,
  DateRangeFilterConfig,
  SingleSelectFilterConfig,
  MultiSelectFilterConfig 
} from './types';

/**
 * FilterRenderer - Factory component that renders the appropriate filter type
 * based on the configuration provided
 */
const FilterRenderer: React.FC<FilterRendererProps> = ({
  config,
  value,
  onChange,
}) => {
  // Don't render if filter is explicitly disabled
  if (config.enabled === false) {
    return null;
  }

  const renderFilter = () => {
    switch (config.type) {
      case FilterType.DATE_RANGE:
        return (
          <DateRangeFilter
            config={config as DateRangeFilterConfig}
            value={value}
            onChange={onChange}
          />
        );
        
      case FilterType.SINGLE_SELECT:
        return (
          <SingleSelectFilter
            config={config as SingleSelectFilterConfig}
            value={value}
            onChange={onChange}
          />
        );
        
      case FilterType.MULTI_SELECT:
        return (
          <MultiSelectFilter
            config={config as MultiSelectFilterConfig}
            value={value}
            onChange={onChange}
          />
        );
        
      default:
        console.warn(`Unknown filter type: ${(config as any).type}`);
        return null;
    }
  };

  return (
    <Box className={config.className}>
      {renderFilter()}
    </Box>
  );
};

export default FilterRenderer; 