import { figma } from '@figma/code-connect';
import { Alert } from '@mantine/core';
import { RiInformationLine, RiCheckboxCircleLine, RiErrorWarningLine, RiTimeLine } from '@remixicon/react';

figma.connect(
  Alert,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1511-1265&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma alert exposes matching props
      // title: figma.string('title'),
      // children: figma.string('message'),
      // color: figma.enum('color', {
      //   blue: 'blue',
      //   green: 'green',
      //   red: 'red',
      //   yellow: 'yellow',
      //   gray: 'gray',
      // }),
      // variant: figma.enum('variant', {
      //   light: 'light',
      //   filled: 'filled',
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
      // withCloseButton: figma.boolean('closable'),
    },
    example: () => (
      <Alert
        title="Alert title"
        color="blue"
        variant="light"
        radius="md"
        withCloseButton
        icon={<RiInformationLine size={20} />}
      >
        Alert message goes here.
      </Alert>
    ),
  }
);

