import { figma } from '@figma/code-connect';
import { Slider } from '@mantine/core';

figma.connect(
  Slider,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1585-5481&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma slider exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // label: figma.string('label'),
      // disabled: figma.boolean('disabled'),
    },
    example: () => (
      <Slider min={0} max={100} step={5} defaultValue={40} />
    ),
  }
);

