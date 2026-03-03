import { figma } from '@figma/code-connect';
import { Button } from '@mantine/core';
import { RiCircleLine } from '@remixicon/react';

/**
 * Code Connect configuration for Button component (V2)
 * 
 * Maps the Figma Button V2 component to the React Button component using boolean
 * section props for cleaner code generation and more flexible content combinations.
 * 
 * Expected Figma Properties:
 * - size: "xs" | "sm" | "md" | "lg" | "xl" 
 * - variant: "primary" | "secondary" | "default" | "disabled" | "link" | "secret" | "outline" | "danger"
 * - hasLeftSection: boolean
 * - hasRightSection: boolean
 * - children: string
 */

figma.connect(
  Button,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=5331-12700&t=RcqEK5uoQUTmRFvI-11',
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
      
      // Map boolean section properties
      hasLeftSection: figma.boolean('hasLeftSection'),
      hasRightSection: figma.boolean('hasRightSection'),
      
      // Map Figma text content to React children
      children: figma.string('children'),
    },
    
    // Example code snippet that will be shown in Figma
    example: (props) => {
      const leftSection = props.hasLeftSection ? <RiCircleLine size={14} /> : undefined;
      const rightSection = props.hasRightSection ? <RiCircleLine size={14} /> : undefined;
      
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