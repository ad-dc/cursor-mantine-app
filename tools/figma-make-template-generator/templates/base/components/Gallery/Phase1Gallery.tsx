import { Stack, Paper, Group, Divider } from "@mantine/core@7";
import { Title } from "../Typography/Title";
import { Text } from "../Typography/Text";
import { Anchor } from "../Typography/Anchor";
import { TextInput } from "../Inputs/TextInput";
import { Select } from "../Inputs/Select";
import { Checkbox } from "../Inputs/Checkbox";
import { Switch } from "../Inputs/Switch";
import { Textarea } from "../Inputs/Textarea";
import { NumberInput } from "../Inputs/NumberInput";
import { Tabs } from "../Navigation/Tabs";
import { Card } from "../Layout/Card";
import { Grid, Col } from "../Layout/Grid";
import { ScrollArea } from "../Layout/ScrollArea";

export function Phase1Gallery() {
  return (
    <Stack gap="lg" data-make-id="gallery:phase-1">
      <Paper withBorder p="md" data-make-id="gallery:typography">
        <Group>
          <Title order={3} makeId="gallery:typography:title">Typography</Title>
        </Group>
        <Divider my="sm" />
        <Grid gutter="xs" makeId="gallery:typography:grid">
          <Col span={12} makeId="gallery:typography:col:section">
            <Card p="xs" makeId="gallery:typography:card:section">
              <Title order={2} makeId="gallery:typography:section-title">Section title</Title>
            </Card>
          </Col>
          <Col span={4} makeId="gallery:typography:col:sm">
            <Card p="xs" makeId="gallery:typography:card:sm">
              <Text size="sm" makeId="gallery:typography:text:sm">Small text</Text>
            </Card>
          </Col>
          <Col span={4} makeId="gallery:typography:col:md">
            <Card p="xs" makeId="gallery:typography:card:md">
              <Text size="md" makeId="gallery:typography:text:md">Medium text</Text>
            </Card>
          </Col>
          <Col span={4} makeId="gallery:typography:col:lg">
            <Card p="xs" makeId="gallery:typography:card:lg">
              <Text size="lg" makeId="gallery:typography:text:lg">Large text</Text>
            </Card>
          </Col>
        </Grid>
      </Paper>

      <Paper withBorder p="md" data-make-id="gallery:inputs">
        <Group>
          <Title order={3} makeId="gallery:inputs:title">Inputs</Title>
        </Group>
        <Divider my="sm" />
        <Grid gutter="xs" makeId="gallery:inputs:grid">
          <Col span={6} makeId="gallery:inputs:col:name">
            <Card p="xs" makeId="gallery:inputs:card:name">
              <TextInput size="xs" label="Name" placeholder="Enter name" makeId="gallery:inputs:name" />
            </Card>
          </Col>
          <Col span={6} makeId="gallery:inputs:col:email">
            <Card p="xs" makeId="gallery:inputs:card:email">
              <TextInput size="xs" label="Email" placeholder="Enter email" required makeId="gallery:inputs:email" />
            </Card>
          </Col>
          <Col span={6} makeId="gallery:inputs:col:phone">
            <Card p="xs" makeId="gallery:inputs:card:phone">
              <TextInput size="xs" label="Phone" placeholder="Optional" showOptional makeId="gallery:inputs:phone" />
            </Card>
          </Col>
          <Col span={6} makeId="gallery:inputs:col:select">
            <Card p="xs" makeId="gallery:inputs:card:select">
              <Select size="xs" data={["A","B","C"]} placeholder="Select option" makeId="gallery:inputs:select" />
            </Card>
          </Col>
          <Col span={6} makeId="gallery:inputs:col:checkbox">
            <Card p="xs" makeId="gallery:inputs:card:checkbox">
              <Checkbox size="xs" label="Accept terms" makeId="gallery:inputs:checkbox" />
            </Card>
          </Col>
          <Col span={6} makeId="gallery:inputs:col:switch">
            <Card p="xs" makeId="gallery:inputs:card:switch">
              <Switch size="xs" label="Enable setting" makeId="gallery:inputs:switch" />
            </Card>
          </Col>
          <Col span={12} makeId="gallery:inputs:col:textarea">
            <Card p="xs" makeId="gallery:inputs:card:textarea">
              <Textarea size="xs" label="Notes" placeholder="Write something" makeId="gallery:inputs:textarea" />
            </Card>
          </Col>
          <Col span={6} makeId="gallery:inputs:col:number">
            <Card p="xs" makeId="gallery:inputs:card:number">
              <NumberInput size="xs" label="Count" placeholder="0" makeId="gallery:inputs:number" />
            </Card>
          </Col>
          <Col span={6} makeId="gallery:inputs:col:anchor">
            <Card p="xs" makeId="gallery:inputs:card:anchor">
              <Anchor href="#" makeId="gallery:inputs:anchor">Learn more</Anchor>
            </Card>
          </Col>
        </Grid>
      </Paper>

      <Paper withBorder p="md" data-make-id="gallery:layout">
        <Group>
          <Title order={3} makeId="gallery:layout:title">Layout</Title>
        </Group>
        <Divider my="sm" />
        <Card makeId="gallery:layout:card" p="xs" mt="xs">Card content</Card>
        <Grid gutter="xs" makeId="gallery:layout:grid" mt="xs">
          <Col span={6} makeId="gallery:layout:grid:col-1"><Paper p="xs" withBorder>Col 1</Paper></Col>
          <Col span={6} makeId="gallery:layout:grid:col-2"><Paper p="xs" withBorder>Col 2</Paper></Col>
        </Grid>
        <Card p="xs" makeId="gallery:layout:scroll-card" mt="xs">
          <ScrollArea h={80} makeId="gallery:layout:scroll">
            <Text>Scrollable area content</Text>
            <Text>More content...</Text>
            <Text>Even more content...</Text>
          </ScrollArea>
        </Card>
      </Paper>

      <Paper withBorder p="md" data-make-id="gallery:navigation">
        <Group>
          <Title order={3} makeId="gallery:navigation:title">Navigation</Title>
        </Group>
        <Divider my="sm" />
        <Card p="xs" makeId="gallery:navigation:tabs-card">
          <Tabs defaultValue="one" makeId="gallery:navigation:tabs">
          <Tabs.List>
            <Tabs.Tab value="one">One</Tabs.Tab>
            <Tabs.Tab value="two">Two</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="one">
            <Text>Tab one content</Text>
          </Tabs.Panel>
          <Tabs.Panel value="two">
            <Text>Tab two content</Text>
          </Tabs.Panel>
          </Tabs>
        </Card>
      </Paper>
    </Stack>
  );
}
