/**
 * AppDirect Design System Components
 * 
 * This module exports all AppDirect design system components built on top of Mantine.
 * Components are organized by category and provide consistent styling,
 * behavior, and API across the application.
 * 
 * @example
 * // Import specific components
 * import { Button, TextInput, Badge } from '@/components/DesignSystem';
 * 
 * @example
 * // Import by category
 * import { Inputs, Buttons, DataDisplay } from '@/components/DesignSystem';
 */

// Import components for category exports
import { TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Checkbox, Radio, RadioGroup } from './Inputs';
import { Button } from './Buttons';
import { Badge, Chip } from './DataDisplay';

// ========================== INPUTS ==========================
export { TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Checkbox, Radio, RadioGroup } from './Inputs';
export type { DSTextInputProps, DSTextAreaProps, DSNumberInputProps, DSColorInputProps, DSSliderProps, DSSwitchProps, DSSegmentedControlProps, DSCheckboxProps, DSRadioProps, DSRadioGroupProps } from './Inputs';

// ========================== COMBOBOX ==========================

// ========================== BUTTONS ==========================
export { Button } from './Buttons';
export type { DSButtonProps } from './Buttons';

// ========================== NAVIGATION ==========================

// ========================== FEEDBACK ==========================

// ========================== OVERLAYS ==========================

// ========================== DATA DISPLAY ==========================
export { Badge, Chip } from './DataDisplay';
export type { DSBadgeProps, DSChipProps } from './DataDisplay';

// ========================== TYPOGRAPHY ==========================

// ========================== MISC ==========================

// ========================== CATEGORY EXPORTS ==========================
// Export components grouped by category for convenient importing
export const Inputs = {
  TextInput,
  TextArea,
  NumberInput,
  ColorInput,
  Slider,
  Switch,
  SegmentedControl,
  Checkbox,
  Radio,
  RadioGroup,
};

export const Combobox = {};

export const Buttons = {
  Button,
};

export const Navigation = {};

export const Feedback = {};

export const Overlays = {};

export const DataDisplay = {
  Badge,
  Chip,
};

export const Typography = {};

export const Misc = {};

// Placeholder export to prevent empty module errors
export {}; 