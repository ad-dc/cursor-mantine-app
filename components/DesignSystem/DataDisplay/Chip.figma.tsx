import { figma } from '@figma/code-connect';
import { Chip } from '@mantine/core';

figma.connect(
  Chip,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=4315-173&t=ESTuKt2GI8tuVBUK-0',
  {
    props: {
      size: figma.enum('size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
      }),
      variant: figma.enum('variant', {
        default: 'default',
        info: 'info',
        success: 'success',
        danger: 'danger',
        pending: 'pending',
      }),
      checked: figma.boolean('checked'),
    },
    example: (props) => (
      <Chip
        value="chip-value"
        size={props.size}
        variant={props.variant}
        checked={props.checked}
      >
        Chip label
      </Chip>
    ),
  }
);

