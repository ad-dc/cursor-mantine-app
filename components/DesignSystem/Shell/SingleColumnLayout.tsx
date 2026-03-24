import React, { ReactNode } from 'react';
import { Stack } from '../Layout/Stack';

export interface DSSingleColumnLayoutProps {
  children: ReactNode;
  /** Gap between content sections. Defaults to 'lg'. */
  gap?: string;
}

/**
 * Full-width single-column content layout.
 * Use inside AppShellLayout for standard page content.
 */
export function SingleColumnLayout({ children, gap = 'lg' }: DSSingleColumnLayoutProps) {
  return (
    <Stack gap={gap}>
      {children}
    </Stack>
  );
}

SingleColumnLayout.displayName = 'SingleColumnLayout';
