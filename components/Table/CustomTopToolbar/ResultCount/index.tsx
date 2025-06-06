import React, { ReactElement } from "react";
import { Text } from "@mantine/core";
import { translate } from '../../translations';

interface ResultCountProps {
  resultCount?: number;
  totalCount?: number;
  isLoading: boolean;
  hasActiveFilters: boolean;
}

const ResultCount = ({ 
  resultCount, 
  totalCount, 
  isLoading, 
  hasActiveFilters 
}: ResultCountProps): ReactElement => {
  
  if (isLoading) {
    return (
      <Text size="xs" span>
        {translate("table.filters.result.count.loading")}
      </Text>
    );
  }

  // When filters are active, show filtered results
  if (hasActiveFilters) {
    const filteredCount = resultCount || 0;
    const total = totalCount || 0;
    
    if (filteredCount === 0) {
      return (
        <Text size="xs" span>
          {translate("table.filters.result.count.filtered.none", { total })}
        </Text>
      );
    }
    
    if (filteredCount === 1) {
      return (
        <Text size="xs" span>
          {translate("table.filters.result.count.filtered.one", { total })}
        </Text>
      );
    }
    
    return (
      <Text size="xs" span>
        {translate("table.filters.result.count.filtered.many", { 
          count: filteredCount, 
          total 
        })}
      </Text>
    );
  }

  // When no filters, show total records
  const count = totalCount || resultCount || 0;
  
  if (count === 1) {
    return (
      <Text size="xs" span>
        {translate("table.filters.result.count.total.one")}
      </Text>
    );
  }

  return (
    <Text size="xs" span>
      {translate("table.filters.result.count.total.many", { count })}
    </Text>
  );
};

export default ResultCount; 