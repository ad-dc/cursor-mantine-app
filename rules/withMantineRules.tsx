import { ComponentType } from 'react';
import {
  isAllowedMantineComponent,
  getUnsupportedComponentWarning,
  getComponentName,
} from './mantine-rules';

export function withMantineRules<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function WithMantineRules(props: P) {
    if (!isAllowedMantineComponent(WrappedComponent)) {
      console.warn(getUnsupportedComponentWarning(getComponentName(WrappedComponent)));
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

// Example usage:
/*
import { Button } from '@mantine/core';
import { withMantineRules } from '@/rules/withMantineRules';

const SafeButton = withMantineRules(Button);

function MyComponent() {
  return <SafeButton>Click me</SafeButton>;
}
*/ 