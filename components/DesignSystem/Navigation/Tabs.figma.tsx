import { figma } from '@figma/code-connect';
import { Tabs } from '@mantine/core';

figma.connect(
  Tabs,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1287-2232&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma tabs expose matching props/layers
      // value: figma.string('active tab'),
      // orientation: figma.enum('orientation', {
      //   horizontal: 'horizontal',
      //   vertical: 'vertical',
      // }),
      // variant: figma.enum('variant', {
      //   default: 'default',
      //   outline: 'outline',
      //   pills: 'pills',
      // }),
      // children: figma.children('tab list'),
      // panels: figma.children('tab panels'),
    },
    example: () => (
      <Tabs value="tab-1" orientation="horizontal" variant="default">
        <Tabs.List>
          <Tabs.Tab value="tab-1">Tab one</Tabs.Tab>
          <Tabs.Tab value="tab-2">Tab two</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab-1">Tab one content</Tabs.Panel>
        <Tabs.Panel value="tab-2">Tab two content</Tabs.Panel>
      </Tabs>
    ),
  }
);

