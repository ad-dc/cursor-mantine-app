import type { Metadata } from "next";

// Mantine CSS imports (load first)
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';

// Design tokens — foundations (semantic vars) + Mantine adapter (component selectors)
import '@appdirect/design-tokens/css/foundations.css';
import '@appdirect/design-tokens/css/mantine.css';

// Custom CSS (load after Mantine to override)
import "./globals.css";
import 'remixicon/fonts/remixicon.css';

import { MantineProvider } from "@mantine/core";
import { theme } from "@/styles/theme";

export const metadata: Metadata = {
  title: "Cursor Mantine App",
  description: "Runtime shell for the AppDirect Mantine design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light" cssVariablesSelector=":root">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
