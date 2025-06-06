import React, { ReactElement } from "react";
import { UnstyledButton, Group, Text, Center, rem } from "@mantine/core";
import { IconArrowUp, IconArrowDown, IconArrowsSort } from '@tabler/icons-react';
import { translate } from '../translations';

interface SortableHeaderCellProps {
  label: string;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: () => void;
  isSortable?: boolean;
}

const SortableHeaderCell = ({
  label,
  sortDirection = null,
  onSort,
  isSortable = true,
}: SortableHeaderCellProps): ReactElement => {
  const renderSortIcon = () => {
    if (!isSortable) return null;
    
    switch (sortDirection) {
      case 'asc':
        return <IconArrowUp style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
      case 'desc':
        return <IconArrowDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
      default:
        return <IconArrowsSort style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
    }
  };

  const directionText = sortDirection ? translate(`table.sort.${sortDirection}`) : translate("table.sort.none");
  const ariaLabel = translate("table.sort.aria", { 
    column: label,
    direction: directionText
  });
  
  return (
    <UnstyledButton 
      onClick={isSortable ? onSort : undefined}
      disabled={!isSortable}
      aria-label={ariaLabel}
    >
      <Group justify="space-between">
        <Text fw={500} fz="sm">
          {label}
        </Text>
        <Center>
          {renderSortIcon()}
        </Center>
      </Group>
    </UnstyledButton>
  );
};

export default SortableHeaderCell;
