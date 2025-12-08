import { figma } from '@figma/code-connect';
import { Stepper } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

figma.connect(
  Stepper,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=2030-6865&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma stepper exposes matching props/layers
      // steps: figma.children('steps'),
      // orientation: figma.enum('orientation', {
      //   horizontal: 'horizontal',
      //   vertical: 'vertical',
      // }),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
    },
    example: () => (
      <Stepper active={1} orientation="horizontal" size="md" iconSize={28}>
        <Stepper.Step label="First step" description="Create an account" icon={<IconCircleCheck size={28} />} completedIcon={<IconCircleCheck size={28} />} />
        <Stepper.Step label="Second step" description="Verify email" icon={<IconCircleCheck size={28} />} completedIcon={<IconCircleCheck size={28} />} />
        <Stepper.Step label="Third step" description="Get full access" icon={<IconCircleCheck size={28} />} completedIcon={<IconCircleCheck size={28} />} />
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>
    ),
  }
);

