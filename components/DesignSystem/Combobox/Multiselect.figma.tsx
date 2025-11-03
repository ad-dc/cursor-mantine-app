import { figma } from '@figma/code-connect';
import { Combobox, PillsInput, Pill, Checkbox, Input } from '@mantine/core';

figma.connect(
  PillsInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1610-6659&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma multiselect exposes matching props/layers
      // label: figma.string('label'),
      // description: figma.string('description'),
      // error: figma.string('error'),
      // placeholder: figma.string('placeholder'),
      // disabled: figma.boolean('disabled'),
      // required: figma.boolean('required'),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // data: figma.children('options'),
      // values: figma.children('selected values'),
      // searchable: figma.boolean('searchable'),
    },
    example: () => (
      <Combobox withinPortal={false}>
        <Combobox.DropdownTarget>
          <PillsInput size="md">
            <Pill.Group>
              <Pill>One</Pill>
              <Pill>Two</Pill>
              <Combobox.EventsTarget>
                <PillsInput.Field placeholder="Select values" />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown>
          <Combobox.Options>
            {['React', 'Vue', 'Svelte'].map((option) => (
              <Combobox.Option key={option} value={option.toLowerCase()}>
                <Checkbox checked={false} readOnly tabIndex={-1} style={{ pointerEvents: 'none' }} />
                <Input.Label size="sm" ml="sm">
                  {option}
                </Input.Label>
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    ),
  }
);

