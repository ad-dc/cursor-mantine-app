import React from 'react';
import { ThemeIcon, Title } from '@mantine/core';
import { Inline } from '../Layout/Inline';

export interface DSHeaderBarProps {
  /** Application or prototype title shown in the header */
  title?: string;
}

export function HeaderBar({ title = 'Prototype' }: DSHeaderBarProps) {
  return (
    <Inline h="100%" px="xl" gap="lg">
      <ThemeIcon variant="transparent" size="lg" color="white">
        <i className="ri-grid-fill" style={{ fontSize: 28 }} />
      </ThemeIcon>
      <ThemeIcon variant="transparent" p="xs" size={48}>
        <img src="/assets/AppDirect-Mark_White.svg" alt="Logo" width={38} height={38} />
      </ThemeIcon>
      <Title order={1} c="white" fw={300} fz={22} ml={12}>
        {title}
      </Title>
    </Inline>
  );
}

HeaderBar.displayName = 'HeaderBar';
