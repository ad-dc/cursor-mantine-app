import { figma } from '@figma/code-connect';
import { Kbd } from '@mantine/core';

figma.connect(
  Kbd,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1972-12623&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma Kbd exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // children: figma.string('content'),
    },
    example: () => (
      <Kbd size="sm">
        ⌘K
      </Kbd>
    ),
  }
);

