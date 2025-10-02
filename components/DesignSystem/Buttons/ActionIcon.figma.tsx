import { figma } from '@figma/code-connect';
import { ActionIcon } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

figma.connect(
  ActionIcon,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1386-7331&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma ActionIcon exposes matching props
      // variant: figma.enum('variant', {
      //   subtle: 'subtle',
      //   light: 'light',
      //   default: 'default',
      //   outline: 'outline',
      //   filled: 'filled',
      // }),
      // color: figma.enum('color', {
      //   gray: 'gray',
      //   blue: 'blue',
      //   red: 'red',
      //   green: 'green',
      //   yellow: 'yellow',
      //   orange: 'orange',
      // }),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // radius: figma.enum('radius', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // disabled: figma.boolean('disabled'),
      // loading: figma.boolean('loading'),
    },
    example: () => (
      <ActionIcon variant="subtle" color="gray" size="md" radius="sm">
        <IconStar size={16} />
      </ActionIcon>
    ),
  }
);

