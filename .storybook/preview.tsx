import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider } from '../design/ThemeProvider'; // <- bring in your tokenized theme
import '@mantine/core/styles.layer.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
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
      test: 'todo',
    },
  },
  tags: ['autodocs'],
};

export default preview;