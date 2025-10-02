import { figma } from '@figma/code-connect';
import { TextInput } from '@mantine/core';
import { IconSearch, IconMail } from '@tabler/icons-react';

const parseCommaSeparated = (value?: string) =>
  value
    ?.split(',')
    .map((item) => item.trim())
    .filter(Boolean);

figma.connect(
  TextInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=502-742&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma text input exposes matching props
      // size: figma.string('size'),
      // label: figma.string('label'),
      // placeholder: figma.string('placeholder'),
      // description: figma.string('description'),
      // error: figma.string('error'),
      // required: figma.boolean('required'),
      // disabled: figma.boolean('disabled'),
      // value: figma.string('value'),
      // defaultValue: figma.string('defaultValue'),
      // type: figma.string('type'),
    },
    example: () => (
      <TextInput
        size="md"
        label="Email"
        placeholder="name@appdirect.com"
        leftSection={<IconSearch size={16} stroke={1.5} />}
        rightSection={<IconMail size={16} stroke={1.5} />}
      />
    ),
  }
);

