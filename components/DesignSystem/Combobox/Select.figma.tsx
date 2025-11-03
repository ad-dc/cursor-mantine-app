import { figma } from '@figma/code-connect';
import { Select, Combobox } from '@mantine/core';

figma.connect(
  Select,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=4129-10931&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma select exposes matching props/layers
      // data: figma.children('options'),
      // value: figma.string('value'),
      // placeholder: figma.string('placeholder'),
      // label: figma.string('label'),
      // description: figma.string('description'),
      // error: figma.string('error'),
      // disabled: figma.boolean('disabled'),
      // searchable: figma.boolean('searchable'),
      // clearable: figma.boolean('clearable'),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // variant: figma.enum('variant', {
      //   default: 'default',
      //   filled: 'filled',
      //   unstyled: 'unstyled',
      // }),
    },
    example: () => (
      <Select
        data={[
          { value: 'option-1', label: 'Option 1' },
          { value: 'option-2', label: 'Option 2' },
          { value: 'option-3', label: 'Option 3' },
        ]}
        placeholder="Select option"
        size="md"
        variant="default"
        rightSection={<Combobox.Chevron />}
      />
    ),
  }
);
