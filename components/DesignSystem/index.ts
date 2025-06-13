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
import { TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Checkbox, Radio, RadioGroup, DropZone, FileInput } from './Inputs';
import { Button, ActionButton, CloseButton } from './Buttons';
import { Alert, Avatar, Badge, Card, Chip, Pill, Indicator, Progress, ThemeIcon } from './DataDisplay';
import { SearchableSelect, AutocompleteClearable, Multiselect } from './Combobox';
import { Breadcrumb, BackBreadcrumb, NavLink, Stepper, Tabs } from './Navigation';
import { Drawer, Menu, Modal, ConfirmationModal, Popover, ConfirmationPopover, Tooltip } from './Overlays';
import { Kbd, Code, Text, Title } from './Typography';
import { Divider, Paper } from './Misc';
import { Stack, Inline, Box, Grid } from './Layout';
import { KeyInsight } from './ComplexComponents/KeyInsights';
import { NameValue, NameValueItem } from './ComplexComponents/NameValue';
import { CopyButton } from './ComplexComponents/Utilities';
import { PageContentHeader, DescriptionBlock } from './ComplexComponents/PageContentHeader';
import { Table } from './ComplexComponents/Table';

// ========================== INPUTS ==========================
export { TextInput, TextArea, NumberInput, ColorInput, Slider, Switch, SegmentedControl, Checkbox, Radio, RadioGroup, DropZone, FileInput } from './Inputs';
export type { DSTextInputProps, DSTextAreaProps, DSNumberInputProps, DSColorInputProps, DSSliderProps, DSSwitchProps, DSSegmentedControlProps, DSCheckboxProps, DSRadioProps, DSRadioGroupProps, DropZoneProps, DSFileInputProps } from './Inputs';

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
export { Alert, Avatar, Badge, Card, Chip, Pill, Indicator, Progress, ThemeIcon } from './DataDisplay';
export type { DSAlertProps, DSAvatarProps, AvatarVariant, AvatarSize, DSBadgeProps, DSCardProps, CardSize, CardVariant, CardPadding, DSChipProps, DSPillProps, DSIndicatorProps, DSProgressProps, DSThemeIconProps, ThemeIconSize, ThemeIconColor } from './DataDisplay';

// ========================== TYPOGRAPHY ==========================
export { Kbd, Code, Text, Title } from './Typography';
export type { DSKbdProps, CodeProps, DSTextProps, DSTitleProps } from './Typography';

// ========================== MISC ==========================
export { Divider, Paper } from './Misc';
export type { DividerProps, PaperProps } from './Misc';

// ========================== LAYOUT ==========================
export { Stack, Inline, Box, Grid } from './Layout';
export type { DSStackProps, DSInlineProps, DSBoxProps, DSGridProps, SpacingScale } from './Layout';

// ========================== COMPLEX COMPONENTS ==========================
export { KeyInsight } from './ComplexComponents/KeyInsights';
export type { KeyInsightProps } from './ComplexComponents/KeyInsights';
export { NameValue, NameValueItem } from './ComplexComponents/NameValue';
export type { NameValueProps, NameValuePair, NameValueItemProps } from './ComplexComponents/NameValue';
export { CopyButton } from './ComplexComponents/Utilities';
export type { CopyButtonProps } from './ComplexComponents/Utilities';
export { PageContentHeader, DescriptionBlock } from './ComplexComponents/PageContentHeader';
export type { PageContentHeaderProps, ContentSection, DescriptionBlockProps } from './ComplexComponents/PageContentHeader';
export { Table } from './ComplexComponents/Table';
export type { TableProps, TableColumn, PageInfo } from './ComplexComponents/Table';

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
  DropZone,
  FileInput,
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
  ThemeIcon,
};

export const Typography = {
  Kbd,
  Code,
  Text,
  Title,
};

export const Misc = {
  Divider,
  Paper,
};

export const Layout = {
  Stack,
  Inline,
  Box,
  Grid,
};

export const ComplexComponents = {
  KeyInsight,
  NameValue,
  NameValueItem,
  CopyButton,
  PageContentHeader,
  DescriptionBlock,
  Table,
};

// Placeholder export to prevent empty module errors
export {}; 