import { figma } from '@figma/code-connect';
import { Tooltip, Button } from '@mantine/core';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1180-862&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma tooltip exposes matching props
      // label: figma.string('label'),
      // position: figma.enum('Tooltip Placement', {
      //   Bottom: 'bottom',
      //   Top: 'top',
      // }),
      // withArrow: figma.boolean('with arrow'),
      // multiline: figma.boolean('multiline'),
      // opened: figma.boolean('opened'),
      // children: figma.children('target'),
    },
    example: () => (
      <Tooltip label="Tooltip content" position="top" withArrow>
        <Button variant="subtle">Hover me</Button>
      </Tooltip>
    ),
  }
);

