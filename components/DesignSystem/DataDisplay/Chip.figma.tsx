import { figma } from '@figma/code-connect';
import { Chip } from '@mantine/core';

figma.connect(
  Chip,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=688-4120&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma chip exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // color: figma.enum('color', {
      //   default: 'gray',
      //   info: 'blue',
      //   success: 'green',
      //   danger: 'red',
      //   pending: 'yellow',
      // }),
      // checked: figma.boolean('checked'),
      // disabled: figma.boolean('disabled'),
      // children: figma.string('label'),
      // value: figma.string('value'),
    },
    example: () => (
      <Chip value="chip-value" color="blue" checked>
        Chip label
      </Chip>
    ),
  }
);

