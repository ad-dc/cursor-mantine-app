import { figma } from '@figma/code-connect';
import { Textarea } from '@mantine/core';

figma.connect(
  Textarea,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1421-3843&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma textarea exposes matching props
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
      // autosize: figma.boolean('autosize'),
      // value: figma.string('value'),
      // defaultValue: figma.string('defaultValue'),
    },
    example: () => (
      <Textarea
        size="md"
        label="Description"
        placeholder="Add more details"
        description="Optional"
        minRows={3}
        maxRows={6}
      />
    ),
  }
);

