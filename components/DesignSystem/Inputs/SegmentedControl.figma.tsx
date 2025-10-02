import { figma } from '@figma/code-connect';
import { SegmentedControl } from '@mantine/core';

figma.connect(
  SegmentedControl,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1509-686&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma segmented control exposes matching props/layers
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // data: figma.children('segments'),
      // value: figma.string('value'),
      // defaultValue: figma.string('defaultValue'),
      // disabled: figma.boolean('disabled'),
      // readOnly: figma.boolean('readOnly'),
      // fullWidth: figma.boolean('fullWidth'),
      // orientation: figma.enum('orientation', {
      //   horizontal: 'horizontal',
      //   vertical: 'vertical',
      // }),
      // radius: figma.enum('radius', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
    },
    example: () => (
      <SegmentedControl
        data={['Option 1', 'Option 2']}
        value="Option 1"
        size="md"
      />
    ),
  }
);

