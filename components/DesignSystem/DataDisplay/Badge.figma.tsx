import { figma } from '@figma/code-connect';
import { Badge } from './Badge';

/**
 * Code Connect configuration for Badge component
 * 
 * This file connects the Badge React component to its Figma design counterpart.
 * It maps Figma properties to React props for all 10 semantic badge variants
 * with support for nested size and icon properties.
 */

// Main Badge component set - handles all 10 combinations (2 variants × 5 types)
figma.connect(
  Badge,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=686-2334&t=IRjjbQpCPaZTntoz-4',
  {
    props: {
      // Map Figma variant properties to React props
      variant: figma.enum('Variant', {
        'filled': 'filled',
        'default': 'outline',  // Figma "default" = our "outline"
      }),
      
      // Map Figma semantic color property to React color prop
      color: figma.enum('Type', {
        'default': 'default',
        'info': 'info',
        'success': 'success',
        'danger': 'danger',
        'pending': 'pending',
      }),
      
      // Map Figma text content to React children
      children: figma.textContent('BADGE'),
    },
    
    // Example code snippet that will be shown in Figma
    example: (props) => (
      <Badge
        variant={props.variant}
        color={props.color}
      >
        {props.children}
      </Badge>
    ),
  }
);

// Block .Core/Badge/ from generating Tailwind by connecting it to our Badge component too
figma.connect(
  Badge,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=656-2583&t=0I6siX1Ay34XuZpv-4', // Core/Badge node-id
  {
    props: {
      // Map size property 
      size: figma.enum('Size', {
        'Extra Small': 'xs',
        'Small': 'sm', 
        'Medium': 'md',
        'Large': 'lg',
        'Extra Large': 'xl',
      }),
      
      // Map icon presence
      hasIcon: figma.boolean('Has Icon'),
      
      // Map text content
      children: figma.textContent('BADGE'),
    },
    
    example: (props) => (
      <Badge
        size={props.size}
        hasIcon={props.hasIcon}
      >
        {props.children}
      </Badge>
    ),
  }
);