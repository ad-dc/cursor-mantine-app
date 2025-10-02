import { figma } from '@figma/code-connect';
import { Divider } from '@mantine/core';

figma.connect(
  Divider,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1209-875&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the horizontal divider exposes matching props
      // orientation: figma.enum('orientation', {
      //   horizontal: 'horizontal',
      //   vertical: 'vertical',
      // }),
      // size: figma.enum('size', {
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // label: figma.string('label'),
      // labelPosition: figma.enum('labelPosition', {
      //   left: 'left',
      //   center: 'center',
      //   right: 'right',
      // }),
      // withLabel: figma.boolean('withLabel'),
    },
    example: () => (
      <Divider orientation="horizontal" size="sm" />
    ),
  }
);

figma.connect(
  Divider,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=2606-10365&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      //orientation: 'vertical',
      // TODO: Restore bindings once the vertical divider exposes matching props
      // size: figma.enum('size', {
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // label: figma.string('label'),
      // labelPosition: figma.enum('labelPosition', {
      //   left: 'left',
      //   center: 'center',
      //   right: 'right',
      // }),
      // withLabel: figma.boolean('withLabel'),
    },
    example: () => (
      <Divider orientation="vertical" size="sm" />
    ),
  }
);

