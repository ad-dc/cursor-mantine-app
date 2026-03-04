import { MantineProvider, Avatar } from '@mantine/core';
import React from 'react';

export function MantineThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        components: {
          Avatar: Avatar.extend({
            styles: {
              root: {
                backgroundColor: '#ffffff',
                border: '1px solid var(--mantine-color-gray-4)',
              },
              placeholder: {
                backgroundColor: '#ffffff',
                color: 'var(--mantine-color-dimmed)',
              }
            }
          })
        }
      }}
    >
      {children}
    </MantineProvider>
  );
} 