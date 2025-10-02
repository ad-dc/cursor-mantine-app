import { figma } from '@figma/code-connect';
import { NavLink, ThemeIcon } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

figma.connect(
  NavLink,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=959-1668&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma nav link exposes matching props/layers
      // label: figma.string('label'),
      // description: figma.string('description'),
      // active: figma.boolean('active'),
      // disabled: figma.boolean('disabled'),
      // rightSection: figma.instance('right section'),
      // leftSection: figma.instance('left section'),
      // hasChildren: figma.boolean('has children'),
    },
    example: () => (
      <NavLink
        label="Nav label"
        description="Optional description"
        leftSection={(
          <ThemeIcon variant="light" color="blue" size="sm">
            <IconChevronRight size={14} />
          </ThemeIcon>
        )}
        rightSection={<IconChevronRight size={16} />}
      />
    ),
  }
);

