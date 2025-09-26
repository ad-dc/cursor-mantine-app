import { MantineProvider, createTheme, Button, Container, Stack } from "@mantine/core@7";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications@7";
import "@mantine/notifications/styles.css";
import { ModalsProvider } from "@mantine/modals@7";
import { DatesProvider } from "@mantine/dates@7";
import "@mantine/dates/styles.css";
import "dayjs@1";
import "./styles/globals.css";

import { useEffect, useState } from "react";
import { fetchJson } from "./lib/fetchJson";
import { Page } from "./components/Layout/Page";
import { UsersTable } from "./components/Tables/UsersTable";
import { Phase1Gallery } from "./components/Gallery/Phase1Gallery";
import { Phase2Gallery } from "./components/Gallery/Phase2Gallery";
import { Phase3Gallery } from "./components/Gallery/Phase3Gallery";
import { Phase1Gallery } from "./components/Gallery/Phase1Gallery";

export type User = { id: string | number; name: string; email: string; role?: string };

const theme = createTheme({});

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchJson<User[]>("./data/seed-users.json").then(setUsers).catch(() => setUsers([]));
  }, []);

  return (
    <MantineProvider theme={theme}>
      <DatesProvider>
        <ModalsProvider>
          <Notifications />
          <Page>
            <Container>
              <Stack gap="md">
                <Button>Primary action</Button>
                <UsersTable users={users} makeId="demo:users-table" />
                <Phase1Gallery />
                <Phase2Gallery />
                <Phase3Gallery />
              </Stack>
            </Container>
          </Page>
        </ModalsProvider>
      </DatesProvider>
    </MantineProvider>
  );
}
