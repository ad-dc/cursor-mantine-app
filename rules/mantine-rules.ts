import { ComponentType } from 'react';
import {
  // Layout components
  AppShell,
  AspectRatio,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  
  // Form components
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  Fieldset,
  FileInput,
  Input,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  SegmentedControl,
  Slider,
  Switch,
  Textarea,
  TextInput,
  
  // Action components
  ActionIcon,
  Button,
  CloseButton,
  
  // Navigation components
  Breadcrumbs,
  NavLink,
  Pagination,
  Stepper,
  Tabs,
  
  // Feedback components
  Progress,
  Skeleton,
  
  // Overlay components
  Dialog,
  Menu,
  Modal,
  Popover,
  Tooltip,
  
  // Display components
  Avatar,
  Badge,
  Card,
  Image,
  Indicator,
  Kbd,
  ThemeIcon,
  Timeline,
  
  // Data display
  Table,
} from '@mantine/core';

// Define the allowed components
export const ALLOWED_MANTINE_COMPONENTS = {
  // Layout components
  AppShell,
  AspectRatio,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  
  // Form components
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  Fieldset,
  FileInput,
  Input,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  SegmentedControl,
  Slider,
  Switch,
  Textarea,
  TextInput,
  
  // Action components
  ActionIcon,
  Button,
  CloseButton,
  
  // Navigation components
  Breadcrumbs,
  NavLink,
  Pagination,
  Stepper,
  Tabs,
  
  // Feedback components
  Progress,
  Skeleton,
  
  // Overlay components
  Dialog,
  Menu,
  Modal,
  Popover,
  Tooltip,
  
  // Display components
  Avatar,
  Badge,
  Card,
  Image,
  Indicator,
  Kbd,
  ThemeIcon,
  Timeline,
  
  // Data display
  Table,
} as const;

// Type for component names
export type AllowedMantineComponent = keyof typeof ALLOWED_MANTINE_COMPONENTS;

// Type guard to check if a component is allowed
export function isAllowedMantineComponent(
  component: ComponentType<any>
): component is typeof ALLOWED_MANTINE_COMPONENTS[AllowedMantineComponent] {
  return Object.values(ALLOWED_MANTINE_COMPONENTS).includes(component as any);
}

// Helper function to get component name
export function getComponentName(component: ComponentType<any>): string {
  return component.displayName || component.name || 'Unknown Component';
}

// Warning message for unsupported components
export function getUnsupportedComponentWarning(componentName: string): string {
  return `⚠️ Warning: "${componentName}" is not in the list of supported Mantine components. 
Please use one of the following components:
${Object.keys(ALLOWED_MANTINE_COMPONENTS).join(', ')}`;
}

// Example usage in a component:
/*
import { Button, Text } from '@mantine/core';
import { isAllowedMantineComponent, getUnsupportedComponentWarning } from '@/rules/mantine-rules';

function MyComponent() {
  const Component = Button; // or any other component
  
  if (!isAllowedMantineComponent(Component)) {
    console.warn(getUnsupportedComponentWarning(getComponentName(Component)));
    return null;
  }
  
  return <Component>Hello World</Component>;
}
*/ 