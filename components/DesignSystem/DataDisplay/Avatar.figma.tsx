import { figma } from '@figma/code-connect';
import { Avatar } from '@mantine/core';
import { RiUser3Fill } from '@remixicon/react';

figma.connect(
  Avatar,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1640-29&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma avatar exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // variant: figma.enum('variant', {
      //   filled: 'filled',
      //   light: 'light',
      //   outline: 'outline',
      //   transparent: 'transparent',
      // }),
      // radius: figma.enum('radius', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // src: figma.string('image url'),
      // alt: figma.string('alt text'),
      // initials: figma.string('initials'),
      // color: figma.enum('color', {
      //   gray: 'gray',
      //   blue: 'blue',
      //   red: 'red',
      //   green: 'green',
      //   yellow: 'yellow',
      //   violet: 'violet',
      // }),
    },
    example: () => (
      <Avatar size="md" color="blue" radius="xl">
        <RiUser3Fill size={24} />
      </Avatar>
    ),
  }
);

