import { figma } from '@figma/code-connect';
import { Breadcrumbs, Anchor, Text } from '@mantine/core';

// Disabled: Breadcrumb shares node-id=959-1668 with NavLink
// TODO: Get unique Figma node URL, then uncomment
/*
figma.connect(
  Breadcrumbs,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=959-1668&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma breadcrumbs expose matching props/layers
      // separator: figma.string('separator'),
      // items: figma.children('items'),
    },
    example: () => (
      <Breadcrumbs separator="/">
        <Anchor href="#">Home</Anchor>
        <Anchor href="#">Library</Anchor>
        <Text fw={500}>Data</Text>
      </Breadcrumbs>
    ),
  }
);
*/

