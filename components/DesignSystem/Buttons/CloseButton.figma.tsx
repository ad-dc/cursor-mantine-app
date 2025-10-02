import { figma } from '@figma/code-connect';
import { CloseButton } from '@mantine/core';

figma.connect(
  CloseButton,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1298-2247&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma close button exposes matching props
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // color: figma.enum('color', {
      //   gray: 'gray',
      //   blue: 'blue',
      //   red: 'red',
      //   green: 'green',
      //   orange: 'orange',
      // }),
      // disabled: figma.boolean('disabled'),
      // variant: figma.enum('variant', {
      //   transparent: 'transparent',
      //   subtle: 'subtle',
      //   filled: 'filled',
      // }),
    },
    example: () => (
      <CloseButton size="md" color="gray" variant="subtle" aria-label="Close" />
    ),
  }
);

