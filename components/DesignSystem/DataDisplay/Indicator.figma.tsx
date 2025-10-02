import { figma } from '@figma/code-connect';
import { Indicator } from '@mantine/core';

figma.connect(
  Indicator,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=807-601&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma indicator exposes matching props/layers
      // color: figma.enum('color', {
      //   gray: 'gray',
      //   blue: 'blue',
      //   green: 'green',
      //   red: 'red',
      //   yellow: 'yellow',
      // }),
      // position: figma.enum('position', {
      //   'top-start': 'top-start',
      //   'top-center': 'top-center',
      //   'top-end': 'top-end',
      //   'middle-start': 'middle-start',
      //   'middle-center': 'middle-center',
      //   'middle-end': 'middle-end',
      //   'bottom-start': 'bottom-start',
      //   'bottom-center': 'bottom-center',
      //   'bottom-end': 'bottom-end',
      // }),
      // withBorder: figma.boolean('with border'),
      // disabled: figma.boolean('disabled'),
      // processing: figma.boolean('processing'),
      // label: figma.string('label'),
      // children: figma.children('target'),
    },
    example: () => (
      <Indicator color="gray" size={12} position="top-end" withBorder label="12">
        <div style={{ width: 64, height: 32, background: 'var(--mantine-color-gray-1)' }} />
      </Indicator>
    ),
  }
);

