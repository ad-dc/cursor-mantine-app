import { figma } from '@figma/code-connect';
import { Paper } from '@mantine/core';

figma.connect(
  Paper,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1252-423&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma paper exposes matching props/layers
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
      // withBorder: figma.boolean('with border'),
      // padding: figma.enum('padding', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // children: figma.children('content'),
    },
    example: () => (
      <Paper shadow="xs" radius="md" withBorder p="md">
        Paper content goes here.
      </Paper>
    ),
  }
);

