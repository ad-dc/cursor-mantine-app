import { figma } from '@figma/code-connect';
import { Switch } from '@mantine/core';

figma.connect(
  Switch,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=710-2351&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma switch exposes matching props
      // size: figma.enum('size', {
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      // }),
      // state: figma.enum('state', {
      //   on: true,
      //   off: false,
      // }),
      // showLabel: figma.boolean('show label'),
    },
    example: () => (
      <Switch
        size="md"
        label="Enable notifications"
        description="Receive updates by email"
        checked
        onLabel="ON"
        offLabel="OFF"
      />
    ),
  }
);

