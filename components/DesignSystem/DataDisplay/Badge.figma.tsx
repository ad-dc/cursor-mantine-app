import { figma } from '@figma/code-connect';
import { Badge } from '@mantine/core';
import { RiInformationLine } from '@remixicon/react';

const colorMap: Record<string, string> = {
  info: 'blue',
  success: 'green',
  danger: 'red',
  pending: 'yellow',
  default: 'gray',
};

/**
 * Code Connect configuration for Badge component
 * 
 * Maps the Figma Badge component to the React Badge component with exact prop matching.
 * 
 * Expected Figma Properties:
 * - variant: "filled" | "outline"
 * - size: "xs" | "sm" | "md" | "lg" | "xl"
 * - color: "info" | "success" | "danger" | "pending" | "default"
 * - hasIcon: boolean
 * - children: text content
 */

figma.connect(
  Badge,
  'https://www.figma.com/design/ZdGe37wL0o1BqZyKzo2Z0j/ADDS-V2-Admin-Mantine-Core?node-id=686-2334',
  {
    props: {
      variant: figma.enum('variant', {
        'filled': 'filled',
        'outline': 'outline',
      }),
      size: figma.enum('size', {
        'xs': 'xs',
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
      }),
      color: figma.enum('color', {
        'info': 'info',
        'success': 'success',
        'danger': 'danger',
        'pending': 'pending',
        'default': 'default',
      }),
      hasIcon: figma.boolean('hasIcon'),
      leftSection: figma.instance('leftSection'),
      children: figma.string('children'),
    },
    // Example code snippet that will be shown in Figma
    example: (props) => (
      <Badge
        variant={props.variant ?? 'filled'}
        size={props.size ?? 'md'}
        color={colorMap[props.color ?? 'default']}
        leftSection={props.leftSection ?? (props.hasIcon ? <RiInformationLine size={12} /> : undefined)}
      >
        {props.children}
      </Badge>
    ),
  }
);