import { figma } from '@figma/code-connect';
import { Card } from '@mantine/core';

figma.connect(
  Card,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1992-5381&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma card exposes matching props/layers
      // withBorder: figma.boolean('with border'),
      // shadow: figma.enum('shadow', {
      //   none: 'none',
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // radius: figma.enum('radius', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // padding: figma.enum('padding', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // children: figma.children('content'),
      // sectionContent: figma.children('section content'),
    },
    example: () => (
      <Card withBorder shadow="xs" radius="md" padding="md">
        Card content
      </Card>
    ),
  }
);

