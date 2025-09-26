import { useCallback } from 'react';
import {
  isAllowedMantineComponent,
  getUnsupportedComponentWarning,
  getComponentName,
  type AllowedMantineComponent,
  ALLOWED_MANTINE_COMPONENTS,
} from './mantine-rules';

export function useMantineRules() {
  const validateComponent = useCallback((component: any) => {
    if (!isAllowedMantineComponent(component)) {
      console.warn(getUnsupportedComponentWarning(getComponentName(component)));
      return false;
    }
    return true;
  }, []);

  const getSupportedComponents = useCallback(() => {
    return Object.keys(ALLOWED_MANTINE_COMPONENTS) as AllowedMantineComponent[];
  }, []);

  return {
    validateComponent,
    getSupportedComponents,
  };
}

/**
 * Figma Code Connect Rules
 */

// Rule: Nested Component Mapping for Code Connect
// When creating figma.connect mappings for components with nested structures,
// you MUST create explicit figma.connect mappings for EACH nested component
// to prevent Tailwind fallback code generation. Without explicit mappings,
// Figma will auto-generate mixed React/Tailwind output which is unacceptable
// for design system usage. Always map every component level that Figma might
// auto-detect to ensure clean React-only output.

// Example usage:
/*
import { Button, TextInput } from '@mantine/core';
import { useMantineRules } from '@/rules/useMantineRules';

function MyComponent() {
  const { validateComponent, getSupportedComponents } = useMantineRules();

  // This will pass
  const isButtonValid = validateComponent(Button);
  
  // This will fail and show a warning
  const isTextInputValid = validateComponent(TextInput);
  
  // Get list of supported components
  const supportedComponents = getSupportedComponents();
  
  return (
    <div>
      {isButtonValid && <Button>Click me</Button>}
      {isTextInputValid && <TextInput />}
    </div>
  );
}
*/ 