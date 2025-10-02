import { figma } from '@figma/code-connect';
import { Drawer, Button, Stack, Text } from '@mantine/core';

figma.connect(
  Drawer,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1624-1599&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma drawer exposes matching props/layers
      // title: figma.string('title'),
      // position: figma.enum('position', {
      //   left: 'left',
      //   right: 'right',
      //   top: 'top',
      //   bottom: 'bottom',
      // }),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      //   full: '100%',
      // }),
      // children: figma.children('content'),
      // withCloseButton: figma.boolean('with close'),
    },
    example: () => (
      <Drawer opened onClose={() => undefined} title="Drawer title" position="right" size="md" withCloseButton>
        <Stack gap="sm">
          <Text size="sm">
            Drawer content goes here. Use this space to present detailed forms or flows.
          </Text>
          <Button variant="filled">Primary action</Button>
        </Stack>
      </Drawer>
    ),
  }
);

