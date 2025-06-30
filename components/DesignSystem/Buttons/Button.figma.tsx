import { figma } from '@figma/code-connect';
import { Button } from './Button';

/**
 * Code Connect configuration for Button component
 * 
 * This file connects the Button React component to its Figma design counterpart.
 * It maps Figma properties to React props, enabling designers and developers
 * to see how design decisions translate to code.
 * 
 * To use this:
 * 1. Create a Button component in Figma
 * 2. Copy the Figma node URL
 * 3. Replace the placeholder URL below with your actual Figma node URL
 * 4. Run `npx figma connect publish` to publish the connection
 */

figma.connect(
  Button,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=47-30&m=dev',
  {
    props: {
      // Map Figma variant properties to React props
      variant: figma.enum('Variant', {
        'Primary': 'primary',
        'Secondary': 'secondary', 
        'Default': 'default',
        'Outline': 'outline',
        'Danger': 'danger',
        'Link': 'link',
        'Secret': 'secret',
        'Disabled': 'disabled',
      }),
      
      // Map Figma size property to React size prop
      size: figma.enum('Size', {
        'Small': 'sm',
        'Medium': 'md', 
        'Large': 'lg',
        'Extra Large': 'xl',
      }),
      
      // Map Figma color property to React color prop
      color: figma.enum('Color', {
        'Primary': 'primary',
        'Secondary': 'secondary',
        'Blue': 'blue',
        'Cyan': 'cyan',
        'Green': 'green',
        'Red': 'red',
        'Gray': 'gray',
      }),
      
      // Map Figma text content to React children
      children: figma.textContent('Button Text'),
      
      // Map Figma boolean properties to React boolean props
      fullWidth: figma.boolean('Full Width'),
      loading: figma.boolean('Loading'),
      disabled: figma.boolean('Disabled'),
      
      // Map Figma icon instances to React icon props
      leftIcon: figma.instance('Left Icon'),
      rightIcon: figma.instance('Right Icon'),
    },
    
    // Example code snippet that will be shown in Figma
    example: (props) => (
      <Button
        variant={props.variant}
        size={props.size}
        color={props.color}
        fullWidth={props.fullWidth}
        loading={props.loading}
        disabled={props.disabled}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
      >
        {props.children}
      </Button>
    ),
  }
);

// Alternative: Multiple variants for different button states
figma.connect(
  Button,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=48-57&t=RRB9sqb0iiUi8Bwx-11',
  {
    variant: { 'Variant': 'Primary' },
    props: {
      variant: 'primary',
      children: figma.textContent('Button Text'),
      size: figma.enum('Size', {
        'Small': 'sm',
        'Medium': 'md',
        'Large': 'lg',
      }),
    },
    example: (props) => (
      <Button variant="primary" size={props.size}>
        {props.children}
      </Button>
    ),
  }
);

figma.connect(
  Button,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=48-57&t=RRB9sqb0iiUi8Bwx-11',
  {
    variant: { 'Variant': 'Secondary' },
    props: {
      variant: 'secondary',
      children: figma.textContent('Button Text'),
      size: figma.enum('Size', {
        'Small': 'sm',
        'Medium': 'md', 
        'Large': 'lg',
      }),
    },
    example: (props) => (
      <Button variant="secondary" size={props.size}>
        {props.children}
      </Button>
    ),
  }
); 