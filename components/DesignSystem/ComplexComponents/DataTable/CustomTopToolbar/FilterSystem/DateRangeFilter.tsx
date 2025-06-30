import React from 'react';
import { DatesRangeValue } from '@mantine/dates';
import DateRangeSelector from '../DateRangeSelectorFilter';
import { FilterRendererProps, DateRangeFilterConfig } from './types';
import { translate } from '../../translations';

/**
 * DateRangeFilter - Renders a date range picker within the flexible filter system
 */
const DateRangeFilter: React.FC<FilterRendererProps<DatesRangeValue | null>> = ({
  config,
  value,
  onChange,
}) => {
  const dateConfig = config as DateRangeFilterConfig;
  
  return (
    <DateRangeSelector
      label={translate(config.labelKey)}
      locale={dateConfig.locale || 'en-US'}
      onChange={onChange}
    />
  );
};

export default DateRangeFilter; 