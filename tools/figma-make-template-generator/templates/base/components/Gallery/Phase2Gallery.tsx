import { Group, Paper, Stack, Divider, Button } from "@mantine/core@7";
import { Title } from "../Typography/Title";
import { Text } from "../Typography/Text";
import { Badge } from "../DataDisplay/Badge";
import { Avatar } from "../DataDisplay/Avatar";
import { ActionIcon } from "../Buttons/ActionIcon";
import { Breadcrumbs } from "../Navigation/Breadcrumbs";
import { SegmentedControl } from "../Navigation/SegmentedControl";
import { Menu } from "../Overlays/Menu";
import { Popover } from "../Overlays/Popover";
import { Accordion } from "../Disclosure/Accordion";
import { Collapse } from "../Disclosure/Collapse";
import { Autocomplete } from "../Inputs/Autocomplete";

export function Phase2Gallery() {
  return (
    <Stack gap="md" data-make-id="gallery:phase-2">
      <Paper withBorder p="md">
        <Group>
          <Title order={3} makeId="gallery:phase2:title">Phase 2 Components</Title>
        </Group>
        <Divider my="sm" />
        <Group gap="xs">
          <Badge makeId="gallery:phase2:badge">New</Badge>
          <Avatar makeId="gallery:phase2:avatar" radius="xl">AD</Avatar>
          <ActionIcon makeId="gallery:phase2:actionicon" variant="light">+</ActionIcon>
        </Group>
        <Breadcrumbs makeId="gallery:phase2:breadcrumbs" mt="xs">
          <a href="#">Home</a>
          <a href="#">Library</a>
          <a href="#">Data</a>
        </Breadcrumbs>
        <SegmentedControl makeId="gallery:phase2:segmented" mt="xs" data={[{ label: "One", value: "one" }, { label: "Two", value: "two" }]} />
        <Group mt="xs">
          <Menu>
            <Menu.Target>
              <Button size="xs">Open menu</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Item 1</Menu.Item>
              <Menu.Item>Item 2</Menu.Item>
              <Menu.Divider />
              <Menu.Item>Item 3</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Popover>
            <Popover.Target>
              <Button size="xs">Open popover</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text>Popover content</Text>
            </Popover.Dropdown>
          </Popover>
        </Group>
        <Accordion makeId="gallery:phase2:accordion" mt="xs">
          <Accordion.Item value="a1">
            <Accordion.Control>Section 1</Accordion.Control>
            <Accordion.Panel>Panel 1</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Collapse in={true} makeId="gallery:phase2:collapse" mt="xs">
          <Text>Collapsible content</Text>
        </Collapse>
        <Autocomplete placeholder="Search" data={["React","Vue","Svelte"]} makeId="gallery:phase2:autocomplete" mt="xs" />
      </Paper>
    </Stack>
  );
}





