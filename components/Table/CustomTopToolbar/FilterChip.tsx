import React from "react";
import { Chip } from "@mantine/core";
import { RiCloseLine } from '@remixicon/react';

interface FilterChipProps {
  label: string;
  onClick: () => void;
}

/**
 * FilterChip component for displaying active filters with remove functionality
 * Shows as an outlined chip with a close icon for easy removal
 */
const FilterChip = ({ label, onClick }: FilterChipProps): JSX.Element => {
  return (
    <Chip
      color="gray"
      size="xs"
      variant="outline"
      checked={true}
      onChange={onClick}
      icon={<RiCloseLine size={12} />}
      styles={{
        root: {
          cursor: 'pointer',
          '&[data-checked]': {
            backgroundColor: 'transparent',
            border: '1px solid var(--mantine-color-gray-4)',
            color: 'var(--mantine-color-gray-7)',
          },
          '&:hover': {
            backgroundColor: 'var(--mantine-color-gray-0)',
          },
        },
        label: {
          cursor: 'pointer',
        },
        iconWrapper: {
          color: 'var(--mantine-color-gray-6)',
        },
      }}
    >
      {label}
    </Chip>
  );
};

export default FilterChip;
