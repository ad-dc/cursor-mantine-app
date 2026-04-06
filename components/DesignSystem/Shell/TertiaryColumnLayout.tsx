import React, { ReactNode } from 'react';
import { Grid } from '../Layout/Grid';

export interface DSTertiaryColumnLayoutProps {
  /** Primary content area (left, wider) */
  main: ReactNode;
  /** Secondary aside area (right, narrower) */
  aside: ReactNode;
  /** Column span for the main area out of 12. Defaults to 8. */
  mainSpan?: number;
}

/**
 * Two-column content layout with a primary area and a narrower aside.
 * Use inside AppShellLayout for pages that need a side panel.
 */
export function TertiaryColumnLayout({
  main,
  aside,
  mainSpan = 8,
}: DSTertiaryColumnLayoutProps) {
  const asideSpan = 12 - mainSpan;

  return (
    <Grid gap="lg">
      <Grid.Col span={mainSpan}>{main}</Grid.Col>
      <Grid.Col span={asideSpan}>{aside}</Grid.Col>
    </Grid>
  );
}

TertiaryColumnLayout.displayName = 'TertiaryColumnLayout';
