import { figma } from '@figma/code-connect';
import { Badge } from './Badge';
import { RiCircleFill } from '@remixicon/react';

figma.connect(
  Badge,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=686-2334',
  {
    props: {
      variant: figma.enum('variant', {
        filled: 'filled',
        outline: 'outline',
      }),
      size: figma.enum('size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
      }),
      color: figma.enum('color', {
        info: 'info',
        success: 'success',
        danger: 'danger',
        pending: 'pending',
        default: 'default',
        Default: 'default',
      }),
      leftSection: figma.boolean('leftSection', {
        true: <RiCircleFill size={12} />,
        false: undefined,
      }),
      children: figma.string('children'),
    },
    example: ({ variant, size, color, leftSection, children }) => (
      <Badge
        variant={variant}
        size={size}
        color={color}
        leftSection={leftSection}
      >
        {children}
      </Badge>
    ),
  }
);
