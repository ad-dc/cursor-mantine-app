import { figma } from '@figma/code-connect';
import { ThemeIcon } from '@mantine/core';
import { RiStarLine } from '@remixicon/react';

figma.connect(
  ThemeIcon,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1254-1094&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma theme icon exposes matching props
      // radius: figma.enum('radius', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // color: figma.enum('color', {
      //   gray: 'gray',
      //   blue: 'blue',
      //   green: 'green',
      //   red: 'red',
      //   yellow: 'yellow',
      //   violet: 'violet',
      // }),
      // variant: figma.enum('variant', {
      //   filled: 'filled',
      //   light: 'light',
      //   outline: 'outline',
      //   gradient: 'gradient',
      //   transparent: 'transparent',
      // }),
    },
    example: () => (
      <ThemeIcon size={32} radius="xl" color="blue" variant="light">
        <RiStarLine size={16} />
      </ThemeIcon>
    ),
  }
);

