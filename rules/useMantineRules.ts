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