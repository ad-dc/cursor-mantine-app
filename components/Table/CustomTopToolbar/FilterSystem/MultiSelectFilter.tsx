import React, { useMemo } from 'react';
import { MultiSelect, CloseButton } from '@mantine/core';
import { FilterRendererProps, MultiSelectFilterConfig } from './types';
import { translate } from '../../translations';

/**
 * MultiSelectFilter - Renders a multiple selection dropdown within the flexible filter system
 */
const MultiSelectFilter: React.FC<FilterRendererProps<string[] | null>> = ({
  config,
  value,
  onChange,
}) => {
  const multiConfig = config as MultiSelectFilterConfig;
  
  const handleClear = () => {
    onChange(null);
  };

  // Transform options to use translated labels
  const translatedOptions = multiConfig.options.map(option => ({
    value: option.value,
    label: translate(option.labelKey),
    disabled: option.disabled,
  }));

  // Dynamic placeholder based on selection state
  const placeholder = useMemo(() => {
    if (!value || value.length === 0) {
      if (multiConfig.placeholderEmptyKey) {
        return translate(multiConfig.placeholderEmptyKey);
      }
      if (config.placeholderKey) {
        return translate(config.placeholderKey);
      }
      return translate('table.filters.placeholder.select.options');
    }
    
    if (multiConfig.placeholderWithSelectionKey) {
      return translate(multiConfig.placeholderWithSelectionKey);
    }
    return translate('table.filters.placeholder.select.more');
  }, [value, multiConfig.placeholderEmptyKey, multiConfig.placeholderWithSelectionKey, config.placeholderKey]);

  return (
    <MultiSelect
      label={translate(config.labelKey)}
      placeholder={placeholder}
      data={translatedOptions}
      value={value || []}
      onChange={onChange}
      searchable={multiConfig.searchable}
      clearable
      size="xs"
      rightSection={
        value && value.length > 0 ? (
          <CloseButton
            size="xs"
            variant="transparent"
            onMouseDown={(event) => event.preventDefault()}
            onClick={handleClear}
            aria-label={translate('table.filters.system.clear.aria', { 
              filterLabel: translate(config.labelKey) 
            })}
          />
        ) : undefined
      }
      styles={{
        label: {
          fontWeight: 600,
        },
      }}
      disabled={config.enabled === false}
      className={config.className}
    />
  );
};

export default MultiSelectFilter; 