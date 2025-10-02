import { figma } from '@figma/code-connect';
import { Radio } from '@mantine/core';

figma.connect(
  Radio,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1205-372&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma radio exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // label: figma.string('label'),
      // description: figma.string('description'),
      // error: figma.string('error'),
      // required: figma.boolean('required'),
      // disabled: figma.boolean('disabled'),
      // checked: figma.boolean('checked'),
      // value: figma.string('value'),
      // name: figma.string('name'),
    },
    example: () => (
      <Radio size="md" label="Option" value="option" name="radio" />
    ),
  }
);

