import React, { ReactElement } from "react";
import { Group, Text, ActionIcon } from "@mantine/core";
import { IconArrowUp, IconArrowDown, IconArrowsSort } from '@tabler/icons-react';
import { translate } from '../translations';

interface SortableHeaderCellProps {
  label: string;
  sortDirection: "asc" | "desc" | null;
  onSort: () => void;
  isSortable?: boolean;
}

const SortableHeaderCell = ({
  label,
  sortDirection,
  onSort,
  isSortable = true,
}: SortableHeaderCellProps): ReactElement => {
  console.log('SortableHeader - label:', label, 'sortDirection:', sortDirection);
  
  const renderSortIcon = () => {
    if (!isSortable) return null;
    
    switch (sortDirection) {
      case "asc":
        return <IconArrowUp size={16} />;
      case "desc":
        return <IconArrowDown size={16} />;
      default:
        return <IconArrowsSort size={16} />;
    }
  };

  const directionText = sortDirection ? translate(`table.sort.${sortDirection}`) : translate("table.sort.none");
  const ariaLabel = translate("table.sort.aria", { 
    column: label,
    direction: directionText
  });
  
  console.log('SortableHeader - directionText:', directionText);
  console.log('SortableHeader - ariaLabel:', ariaLabel);

  return (
    <Group gap="xs" wrap="nowrap" style={{ cursor: isSortable ? "pointer" : "default" }}>
      <Text size="sm" fw={500}>
        {label}
      </Text>
      {isSortable && (
        <ActionIcon
          variant="subtle"
          onClick={onSort}
          aria-label={ariaLabel}
        >
          {renderSortIcon()}
        </ActionIcon>
      )}
    </Group>
  );
};

export default SortableHeaderCell;
