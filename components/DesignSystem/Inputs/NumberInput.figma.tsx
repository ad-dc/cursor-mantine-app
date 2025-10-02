import { figma } from '@figma/code-connect';
import { NumberInput } from '@mantine/core';

figma.connect(
  NumberInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1501-3350&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma number input exposes matching props
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
      // error: figma.string('error'),
      // required: figma.boolean('required'),
      // disabled: figma.boolean('disabled'),
      // prefix: figma.string('prefix'),
      // suffix: figma.string('suffix'),
    },
    example: () => (
      <NumberInput
        size="md"
        label="Amount"
        placeholder="Enter amount"
        min={0}
        max={100}
        step={1}
        defaultValue={10}
      />
    ),
  }
);

