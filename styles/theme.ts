import { MantineThemeOverride } from '@mantine/core';
import * as OpenColor from 'open-color';

// Convert Open Color to Mantine color format
const colors = Object.entries(OpenColor).reduce((acc, [key, value]) => {
  if (Array.isArray(value)) {
    acc[key] = value;
  }
  return acc;
}, {} as Record<string, string[]>);

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'blue',
  colors: {
    ...colors,
  },
  // Set default colors for light/dark mode
  black: OpenColor.gray[9],
  white: OpenColor.gray[0],
  // Set default background and text colors
  defaultRadius: 'sm',
  fontFamily: 'var(--font-inter), sans-serif',
  components: {
    // You can customize component-specific colors here
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
}; 