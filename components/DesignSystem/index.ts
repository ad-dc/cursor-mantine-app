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
import { Button, ActionButton, CloseButton } from './Buttons';
import { Alert, Avatar, Badge, Card, Chip, Pill, Indicator, Progress } from './DataDisplay';
import { SearchableSelect, AutocompleteClearable, Multiselect } from './Combobox';
import { Breadcrumb, BackBreadcrumb, NavLink, Stepper, Tabs } from './Navigation';
import { Drawer, Menu, Modal, ConfirmationModal, Popover, ConfirmationPopover, Tooltip } from './Overlays';
import { Kbd } from './Typography';

// ========================== INPUTS ==========================
export { TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Checkbox, Radio, RadioGroup } from './Inputs';
export type { DSTextInputProps, DSTextAreaProps, DSNumberInputProps, DSColorInputProps, DSSliderProps, DSSwitchProps, DSSegmentedControlProps, DSCheckboxProps, DSRadioProps, DSRadioGroupProps } from './Inputs';

// ========================== BUTTONS ==========================
export { Button, ActionButton, CloseButton } from './Buttons';
export type { DSButtonProps, DSActionButtonProps, DSCloseButtonProps } from './Buttons';

// ========================== COMBOBOX ==========================
export { SearchableSelect, AutocompleteClearable, Multiselect } from './Combobox';
export type { DSSearchableSelectProps, DSAutocompleteClearableProps, DSMultiselectProps } from './Combobox';

// ========================== NAVIGATION ==========================
export { Breadcrumb, BackBreadcrumb, NavLink, Stepper, Tabs } from './Navigation';
export type { DSBreadcrumbProps, DSBackBreadcrumbProps, BreadcrumbItem, DSNavLinkProps, DSStepperProps, StepData, DSTabsProps, TabData } from './Navigation';

// ========================== FEEDBACK ==========================

// ========================== OVERLAYS ==========================
export { Drawer, Menu, Modal, ConfirmationModal, Popover, ConfirmationPopover, Tooltip } from './Overlays';
export type { DSDrawerProps, DSMenuProps, MenuItem, MenuSection, DSModalProps, ModalAction, ConfirmationModalProps, DSPopoverProps, PopoverAction, ConfirmationPopoverProps, DSTooltipProps } from './Overlays';

// ========================== DATA DISPLAY ==========================
export { Alert, Avatar, Badge, Card, Chip, Pill, Indicator, Progress } from './DataDisplay';
export type { DSAlertProps, DSAvatarProps, AvatarVariant, AvatarSize, DSBadgeProps, DSCardProps, CardSize, CardVariant, CardPadding, DSChipProps, DSPillProps, DSIndicatorProps, DSProgressProps } from './DataDisplay';

// ========================== TYPOGRAPHY ==========================
export { Kbd } from './Typography';
export type { DSKbdProps } from './Typography';

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

export const Buttons = {
  Button,
  ActionButton,
  CloseButton,
};

export const Combobox = {
  SearchableSelect,
  AutocompleteClearable,
  Multiselect,
};

export const Navigation = {
  Breadcrumb,
  BackBreadcrumb,
  NavLink,
  Stepper,
  Tabs,
};

export const Feedback = {};

export const Overlays = {
  Drawer,
  Menu,
  Modal,
  ConfirmationModal,
  Popover,
  ConfirmationPopover,
  Tooltip,
};

export const DataDisplay = {
  Alert,
  Avatar,
  Badge,
  Card,
  Chip,
  Pill,
  Indicator,
  Progress,
};

export const Typography = {
  Kbd,
};

export const Misc = {};

// Placeholder export to prevent empty module errors
export {}; 