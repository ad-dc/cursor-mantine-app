import { figma } from '@figma/code-connect';
import { Pill } from '@mantine/core';
import { RiCloseLine } from '@remixicon/react';

figma.connect(
  Pill,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1304-2489&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma pill exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // withRemoveButton: figma.boolean('removable'),
      // disabled: figma.boolean('disabled'),
      // children: figma.string('label'),
    },
    example: () => (
      <Pill withRemoveButton rightSection={<RiCloseLine size={12} />}>Pill label</Pill>
    ),
  }
);

