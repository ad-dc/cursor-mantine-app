import React from 'react'
import type { Preview } from '@storybook/nextjs-vite'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.layer.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    options: {
      storySort: {
        order: [],
        method: 'alphabetical',
        includeNames: false,
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
      expanded: true,
    },
    docs: {
      toc: true,
    },
    a11y: {
      test: 'todo'
    }
  },
  tags: ['autodocs'],
};

export default preview; 