import { figma } from '@figma/code-connect';
import { Combobox, InputBase } from '@mantine/core';

// Disabled: SearchableSelect shares node-id=1610-2362 with DropZone and Multiselect
// TODO: Get unique Figma node URL, then uncomment
/*
figma.connect(
  InputBase,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1610-2362&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma searchable select exposes matching props/layers
      // label: figma.string('label'),
      // placeholder: figma.string('placeholder'),
      // description: figma.string('description'),
      // error: figma.string('error'),
      // required: figma.boolean('required'),
      // disabled: figma.boolean('disabled'),
      // size: figma.enum('size', {
      //   xs: 'xs',
      //   sm: 'sm',
      //   md: 'md',
      //   lg: 'lg',
      //   xl: 'xl',
      // }),
      // data: figma.children('options'),
      // value: figma.string('value'),
      // search: figma.string('search'),
    },
    example: () => (
      <Combobox withinPortal={false}>
        <Combobox.Target>
          <InputBase
            label="Search"
            placeholder="Search options"
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            {['React', 'Vue', 'Svelte'].map((option) => (
              <Combobox.Option key={option} value={option.toLowerCase()}>
                {option}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    ),
  }
);
*/

