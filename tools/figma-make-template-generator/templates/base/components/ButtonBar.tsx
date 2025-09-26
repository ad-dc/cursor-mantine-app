import { Button, Group } from "@mantine/core@7";

export function ButtonBar() {
  return (
    <Group>
      <Button variant="filled">Save</Button>
      <Button variant="light">Cancel</Button>
    </Group>
  );
}
