import { Group, ThemeIcon, Title } from '@mantine/core';
import Image from 'next/image';

export function HeaderBar() {
  return (
    <Group h="100%" px="xl" gap="lg">
      <ThemeIcon variant="transparent" size="lg" color="white">
        <i className="ri-grid-fill" style={{ fontSize: 28 }} />
      </ThemeIcon>
      <ThemeIcon variant="transparent" p="xs" size={48}>
        <Image src="/assets/AppDirect-Mark_White.svg" alt="Logo" width={38} height={38} />
      </ThemeIcon>
      <Title order={1} c="white" fw={300} fz={22} ml={12}>
        Prototype Name
      </Title>
    </Group>
  );
} 