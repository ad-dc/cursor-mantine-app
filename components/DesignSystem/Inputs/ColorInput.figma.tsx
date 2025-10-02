import { figma } from '@figma/code-connect';
import { ColorInput } from '@mantine/core';

figma.connect(
  ColorInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1373-6404&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma color input exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // label: figma.string('label'),
      // placeholder: figma.string('placeholder'),
      // description: figma.string('description'),
      // error: figma.string('error message'),
      // required: figma.boolean('required'),
      // disabled: figma.boolean('disabled'),
      // format: figma.enum('format', {
      //   hex: 'hex',
      //   hexa: 'hexa',
      //   rgb: 'rgb',
      //   rgba: 'rgba',
      //   hsl: 'hsl',
      //   hsla: 'hsla',
      // }),
      // value: figma.string('value'),
    },
    example: () => (
      <ColorInput
        size="md"
        label="Favorite color"
        placeholder="#228be6"
        format="hex"
      />
    ),
  }
);

