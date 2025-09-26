import { Paper, Stack, Group, Divider, Button } from "@mantine/core@7";
import { Title } from "../Typography/Title";
import { Text } from "../Typography/Text";
import { DateInput, DatePickerInput } from "../Inputs/DateInputs";
import { Stepper } from "../Workflow/Stepper";

export function Phase3Gallery() {
  return (
    <Stack gap="md" data-make-id="gallery:phase-3">
      <Paper withBorder p="md">
        <Group>
          <Title order={3} makeId="gallery:phase3:title">Phase 3 Components</Title>
        </Group>
        <Divider my="sm" />
        <Group>
          <DateInput label="Date" placeholder="Pick date" makeId="gallery:phase3:dateinput" />
          <DatePickerInput label="Date range" type="range" makeId="gallery:phase3:datepicker" />
        </Group>
        <Stepper active={1} makeId="gallery:phase3:stepper" mt="sm">
          <Stepper.Step label="First" description="Create an account">
            <Text>Step 1 content</Text>
          </Stepper.Step>
          <Stepper.Step label="Second" description="Verify email">
            <Text>Step 2 content</Text>
          </Stepper.Step>
          <Stepper.Completed>
            <Text>All steps completed</Text>
          </Stepper.Completed>
        </Stepper>
      </Paper>
    </Stack>
  );
}




