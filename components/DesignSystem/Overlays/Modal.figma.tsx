import { figma } from '@figma/code-connect';
import { Modal, Button } from '@mantine/core';

figma.connect(
  Modal,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1450-3751&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma modal component exposes matching props
      // title: figma.string('title'),
      // centered: figma.boolean('centered'),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      //   full: 'full',
      // }),
      // radius: figma.enum('radius', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // children: figma.children('content'),
      // withCloseButton: figma.boolean('with close'),
    },
    example: () => (
      <Modal opened onClose={() => undefined} title="Modal title" centered size="md" radius="md" withCloseButton>
        Modal content goes here.
        <Button mt="md" fullWidth>
          Primary action
        </Button>
      </Modal>
    ),
  }
);

