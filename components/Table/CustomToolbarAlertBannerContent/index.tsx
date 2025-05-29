import React, { ReactElement } from "react";
import { Group, Text, Button, ActionIcon } from "@mantine/core";
import { IconX } from '@tabler/icons-react';
import { RiFlashlightFill } from '@remixicon/react';
import { translate } from '../translations';

interface CustomToolbarAlertBannerContentProps {
  numberOfSelectedRows: number;
  onClearSelection: () => void;
}

const CustomToolbarAlertBannerContent = ({
  numberOfSelectedRows,
  onClearSelection,
}: CustomToolbarAlertBannerContentProps): ReactElement => {
  
  if (numberOfSelectedRows === 0) {
    return <></>;
  }

  const selectedRowsText = numberOfSelectedRows === 1 
    ? translate("table.selected.row") 
    : translate("table.selected.rows", { count: numberOfSelectedRows });
  

  return (
    <Group
      gap="sm"
      align="center"
      style={{
        background: 'var(--mantine-color-blue-6)',
        color: 'var(--mantine-color-white)',
        borderRadius: 0,
        minHeight: 'var(--mantine-spacing-xl)',
      }}
    >
      <ActionIcon
        variant="transparent"
        color="white"
        onClick={onClearSelection}
        aria-label="Clear selection"

        size="sm"
      >
        <IconX size={16} />
      </ActionIcon>
      <Button
        variant="outline"
        color="white"
        size="xs"
        leftSection={<RiFlashlightFill size={16} />}
      >
        Button one
      </Button>
      <Button
        variant="outline"
        color="white"
        size="xs"
        leftSection={<RiFlashlightFill size={16} />}
      >
        Button two
      </Button>
      <Text size="sm" c="white" fw={500}>
        {selectedRowsText}
      </Text>
    </Group>
  );
};

export default CustomToolbarAlertBannerContent; 