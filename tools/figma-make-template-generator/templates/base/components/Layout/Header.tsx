import { Group, Image, Text } from "@mantine/core@7";
import { logoPngDataUrl } from "../../lib/assets";

export function Header() {
  return (
    <Group justify="space-between" px="md" h="100%" data-make-id="layout:header:content">
      <Group gap="sm">
        <Image src={logoPngDataUrl} alt="Logo" w={24} h={24} />
        <Text fw={600}>App</Text>
      </Group>
    </Group>
  );
}
