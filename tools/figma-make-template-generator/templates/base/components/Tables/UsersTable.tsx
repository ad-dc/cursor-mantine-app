import { Table, Pagination, TextInput, Group, Paper, Alert } from "@mantine/core@7";
import { useState, useMemo } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { usePagination } from "../../hooks/usePagination";
import "../../styles/tables.css";

type User = { id: string | number; name: string; email: string; role?: string };

export function UsersTable({ users, makeId }: { users: unknown; makeId?: string }) {
  const safeUsers: User[] = Array.isArray(users) ? (users as User[]) : [];
  const [query, setQuery] = useState("");
  const [debounced] = useDebouncedValue(query, 200);

  const filtered = useMemo(() => {
    const q = debounced.toLowerCase();
    return safeUsers.filter(
      (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
  }, [safeUsers, debounced]);

  const { page, total, pageItems, setPage } = usePagination(filtered, 10);

  return (
    <Paper withBorder p="md" data-make-id={makeId || "users-table"}>
      <Group justify="space-between" mb="sm">
        <TextInput
          placeholder="Search users"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </Group>

      {!Array.isArray(users) && (
        <Alert color="red" mb="sm">Users data is not an array</Alert>
      )}
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Role</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {pageItems.map((u) => (
            <Table.Tr key={u.id}>
              <Table.Td>{u.name}</Table.Td>
              <Table.Td>{u.email}</Table.Td>
              <Table.Td>{u.role ?? "—"}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Group justify="center" mt="md">
        <Pagination value={page} onChange={setPage} total={total} />
      </Group>
    </Paper>
  );
}
