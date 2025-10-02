import { figma } from '@figma/code-connect';
import { Menu, Button } from '@mantine/core';

figma.connect(
  Menu,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1141-2603&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma component exposes these props
      // triggerLabel: figma.string('trigger label'),
      // position: figma.enum('position', {
      //   top: 'top',
      //   bottom: 'bottom',
      //   left: 'left',
      //   right: 'right',
      // }),
      // width: figma.number('width'),
      // children: figma.children('menu items'),
    },
    example: () => (
      <Menu position="bottom" withinPortal width={220}>
        <Menu.Target>
          <Button variant="light">Open menu</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <>
            <Menu.Item>Dashboard</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item color="red">Delete account</Menu.Item>
          </>
        </Menu.Dropdown>
      </Menu>
    ),
  }
);

