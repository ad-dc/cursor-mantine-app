import { MantineProvider } from '@mantine/core';
import { appTheme } from './createTheme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider
    theme={appTheme}
    withGlobalStyles
    withNormalizeCSS
  >
    {children}
  </MantineProvider>
);