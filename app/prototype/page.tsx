'use client';

import Link from 'next/link';
import {
  AppShellLayout,
  Stack,
  Card,
  Title,
  Text,
  Badge,
  Inline,
  PageContentHeader,
} from '@/components/DesignSystem';
import manifest from '@/prototype-manifest.json';

export default function PrototypeIndexPage() {
  return (
    <AppShellLayout title="Prototypes" hideNav>
      <Stack gap="lg">
        <PageContentHeader
          title="Prototype Pages"
          subhead={manifest.prototypeName}
        />

        <Stack gap="md">
          {manifest.pages.map((page) => (
            <Link
              key={page.slug}
              href={`/prototype/${page.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card withBorder p="lg" style={{ cursor: 'pointer' }}>
                <Inline justify="space-between" align="center">
                  <Stack gap={4}>
                    <Title order={4}>{page.title}</Title>
                    {page.description && (
                      <Text size="sm" c="dimmed">{page.description}</Text>
                    )}
                  </Stack>
                  <Inline gap="xs">
                    <Badge color="info" variant="light">{page.template}</Badge>
                    <Badge color="default" variant="light">{page.contentLayout}</Badge>
                  </Inline>
                </Inline>
              </Card>
            </Link>
          ))}
        </Stack>
      </Stack>
    </AppShellLayout>
  );
}
