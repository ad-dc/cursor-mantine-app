import React from 'react';
import { Select, CloseButton } from '@mantine/core';
import { FilterRendererProps, SingleSelectFilterConfig } from './types';
import { translate } from '../../translations';

/**
 * SingleSelectFilter - Renders a single selection dropdown within the flexible filter system
 */
const SingleSelectFilter: React.FC<FilterRendererProps<string | null>> = ({
  config,
  value,
  onChange,
}) => {
  const selectConfig = config as SingleSelectFilterConfig;
  
  const handleClear = () => {
    onChange(null);
  };

  // Transform options to use translated labels
  const translatedOptions = selectConfig.options.map(option => ({
    value: option.value,
    label: translate(option.labelKey),
    disabled: option.disabled,
  }));

  const placeholder = config.placeholderKey 
    ? translate(config.placeholderKey)
    : translate('table.filters.placeholder.select.option');

  return (
    <Select
      label={translate(config.labelKey)}
      placeholder={placeholder}
      data={translatedOptions}
      value={value}
      onChange={onChange}
      searchable={selectConfig.searchable}
      clearable
      size="xs"
      rightSection={
        value ? (
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

export default SingleSelectFilter; 