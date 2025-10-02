import { figma } from '@figma/code-connect';
import { Popover, Button, Stack, Text } from '@mantine/core';

figma.connect(
  Popover,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1141-2603&t=F9hLR9eQ6A8lxsBi-4',
  {
    props: {
      // TODO: Restore bindings once the Figma popover exposes matching props
      // position: figma.enum('Popover Placement', {
      //   Bottom: 'bottom',
      //   Top: 'top',
      // }),
      // withArrow: figma.boolean('with arrow'),
      // triggerLabel: figma.string('trigger label'),
    },
    example: () => (
      <Popover opened onChange={() => undefined} position="bottom" withArrow>
        <Popover.Target>
          <Button variant="light">Open popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack gap="xs">
            <Text fw={600}>Popover title</Text>
            <Text size="sm">Popover content goes here.</Text>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    ),
  }
);

