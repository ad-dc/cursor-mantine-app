import { AppShell } from "@mantine/core@7";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PropsWithChildren } from "react";

export function Page({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 56 }} footer={{ height: 40 }} padding="md" data-make-id="layout:appshell">
      <AppShell.Header data-make-id="layout:header">
        <Header />
      </AppShell.Header>
      <AppShell.Main data-make-id="layout:main">{children}</AppShell.Main>
      <AppShell.Footer data-make-id="layout:footer">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
