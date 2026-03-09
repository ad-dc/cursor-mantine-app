import { MantineProvider, type MantineThemeOverride } from '@mantine/core';
import { appTheme } from './createTheme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider
    theme={appTheme as unknown as MantineThemeOverride}
  >
    {children}
  </MantineProvider>
);
