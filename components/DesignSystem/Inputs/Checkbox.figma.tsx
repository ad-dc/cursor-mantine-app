import { figma } from '@figma/code-connect';
import { Checkbox } from '@mantine/core';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1188-1605&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma checkbox exposes matching props
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
      // indeterminate: figma.boolean('indeterminate'),
      // checked: figma.boolean('checked'),
    },
    example: () => (
      <Checkbox
        size="md"
        label="Remember me"
        description="Stay signed in"
        defaultChecked
      />
    ),
  }
);

