import React, { ReactElement } from "react";
import { Stack, Text } from "@mantine/core";
import { Button } from '@/components/DesignSystem';
import { translate } from '../translations';

interface ErrorOverlayProps {
  error?: string;
  onRetry?: () => void;
}

const ErrorOverlay = ({ error, onRetry }: ErrorOverlayProps): ReactElement => {
  return (
    <Stack align="center" justify="center" h={200}>
      <Text size="lg" fw={500}>
        {translate("table.error.title")}
      </Text>
      <Text size="sm" c="dimmed">
        {error || translate("table.error.default")}
      </Text>
      {onRetry && (
        <Button variant="light" onClick={onRetry}>
          {translate("table.error.retry")}
        </Button>
      )}
    </Stack>
  );
};

export default ErrorOverlay;
