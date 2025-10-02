import { figma } from '@figma/code-connect';
import { Button } from '@mantine/core';
import { RiCircleLine } from '@remixicon/react';

/**
 * Code Connect configuration for Button component (V2)
 * 
 * Maps the Figma Button V2 component to the React Button component using boolean
 * icon props for cleaner code generation and more flexible icon combinations.
 * 
 * Expected Figma Properties:
 * - size: "xs" | "sm" | "md" | "lg" | "xl" 
 * - variant: "primary" | "secondary" | "default" | "disabled" | "link" | "secret" | "outline" | "danger"
 * - hasIconLeft: boolean
 * - hasIconRight: boolean
 * - children: string
 */

figma.connect(
  Button,
  'https://www.figma.com/design/ZdGe37wL0o1BqZyKzo2Z0j/ADDS-V2-Admin-Mantine-Core?node-id=3609-18499',
  {
    props: {
      // Map Figma size property to React size prop
      size: figma.enum('size', {
        'xs': 'xs',
        'sm': 'sm',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
      }),
      
      // Map Figma variant property to React variant prop
      variant: figma.enum('variant', {
        'primary': 'primary',
        'secondary': 'secondary',
        'default': 'default',
        'disabled': 'disabled',
        'link': 'link',
        'secret': 'secret',
        'outline': 'outline',
        'danger': 'danger',
      }),
      
      // Map boolean icon properties
      hasIconLeft: figma.boolean('hasIconLeft'),
      hasIconRight: figma.boolean('hasIconRight'),
      
      // Map Figma text content to React children
      children: figma.string('children'),
    },
    
    // Example code snippet that will be shown in Figma
    example: (props) => {
      const leftSection = props.hasIconLeft ? <RiCircleLine size={14} /> : undefined;
      const rightSection = props.hasIconRight ? <RiCircleLine size={14} /> : undefined;
      
      return (
        <Button
          variant={props.variant}
          size={props.size}
          leftSection={leftSection}
          rightSection={rightSection}
        >
          {props.children}
        </Button>
      );
    },
  }
); 