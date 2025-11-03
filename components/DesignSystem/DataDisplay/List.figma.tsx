import { figma } from '@figma/code-connect';
import { List } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

// Disabled: List shares node-id=4129-10931 with Select and Table
// TODO: Get unique Figma node URL, then uncomment
/*
figma.connect(
  List,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=4129-10931&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma list exposes matching props/layers
      // type: figma.enum('type', {
      //   unordered: 'unordered',
      //   ordered: 'ordered',
      // }),
      // spacing: figma.enum('spacing', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      // }),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      // }),
      // icon: figma.instance('icon'),
      // withPadding: figma.boolean('with padding'),
      // children: figma.children('items'),
    },
    example: () => (
      <List spacing="sm" size="sm" icon={<IconCheck size={16} />}>
        <List.Item>First item</List.Item>
        <List.Item>Second item</List.Item>
        <List.Item>Third item</List.Item>
      </List>
    ),
  }
);
*/

