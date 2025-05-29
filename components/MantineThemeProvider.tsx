import { MantineProvider } from '@mantine/core';
import React from 'react';

export function MantineThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        // Add other theme customizations here if needed
      }}
    >
      {children}
    </MantineProvider>
  );
} 