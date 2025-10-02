import { figma } from '@figma/code-connect';
import { Progress } from '@mantine/core';

figma.connect(
  Progress,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1631-2265&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma progress component is a published component set
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
    },
    example: () => (
      <Progress size="md" value={50} radius="xl" striped animated />
    ),
  }
);

