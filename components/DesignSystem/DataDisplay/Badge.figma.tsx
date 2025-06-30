import { figma } from '@figma/code-connect';
import { Badge } from './Badge';

/**
 * Code Connect configuration for Badge component
 * 
 * This file connects the Badge React component to its Figma design counterpart.
 * It maps Figma properties to React props for semantic badge variants.
 */

figma.connect(
  Badge,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=686-2334&t=IRjjbQpCPaZTntoz-4',
  {
    props: {
      // Map Figma variant properties to React props
      variant: figma.enum('variant', {
        'Filled': 'filled',
        'Outline': 'outline',
      }),
      
      // Map Figma size property to React size prop (direct prop, not nested)
      size: figma.enum('Size', {
        'Extra Small': 'xs',
        'Small': 'sm',
        'Medium': 'md',
        'Large': 'lg',
        'Extra Large': 'xl',
      }),
        
      // Map Figma semantic color property to React color prop
      color: figma.enum('Type', {
        'Default': 'default',
        'Info': 'info',
        'Success': 'success',
        'Danger': 'danger',
        'Pending': 'pending',
      }),
      
      // Map Figma text content to React children
      children: figma.textContent('Badge Text'),
    },
    
    // Example code snippet that will be shown in Figma
    example: (props) => (
      <Badge
        variant={props.variant}
        size={props.size}
        color={props.color}
      >
        {props.children}
      </Badge>
    ),
  }
);

// Specific variants for different badge states