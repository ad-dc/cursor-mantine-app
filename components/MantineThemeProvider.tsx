import { MantineProvider, Avatar, Card } from '@mantine/core';
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
          }),
          Card: Card.extend({
            styles: {
              root: {
                transition: 'box-shadow 200ms ease, transform 200ms ease',
                '&.ds-card--interactive:hover': {
                  boxShadow: 'var(--mantine-shadow-md)',
                  transform: 'translateY(-2px)',
                }
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