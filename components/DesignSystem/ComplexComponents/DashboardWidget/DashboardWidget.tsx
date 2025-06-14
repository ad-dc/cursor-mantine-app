import React from 'react';
import { Card } from '../../DataDisplay/Card';
import { Stack, Inline, Box } from '../../Layout';
import { Title } from '../../Typography/Title';
import { Text } from '../../Typography/Text';
import { Switch } from '../../Inputs/Switch';
import { SearchableSelect } from '../../Combobox/SearchableSelect';
import { Select } from '../../Combobox/Select';
import { Menu } from '../../Overlays/Menu';
import { ActionIcon } from '../../Buttons/ActionIcon';
import { RiMore2Fill, RiArrowRightSLine } from '@remixicon/react';

// ========================== TYPES ==========================

export interface DashboardWidgetLink {
  /** Link text */
  label: string;
  /** Click handler */
  onClick: () => void;
  /** Whether link is disabled */
  disabled?: boolean;
}

export interface DashboardWidgetProps {
  /** Widget title */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  
  // ==================== HEADER CONTROLS ====================
  /** Optional switch with label and handler */
  switch?: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
  };
  
  /** Optional actions menu */
  actionsMenu?: {
    sections: Array<{
      items: Array<{
        id: string;
        label: string;
        onClick: () => void;
        disabled?: boolean;
      }>;
    }>;
  };
  
  // ==================== CONTENT AREA ====================
  /** Main content area - can be any React node */
  children: React.ReactNode;
  
  // ==================== OPTIONAL CONTROLS ====================
  /** Optional combobox for filtering/selection */
  combobox?: {
    label?: string;
    placeholder?: string;
    data: string[] | { value: string; label: string }[];
    disabled?: boolean;
    /** Whether to use borderless style (default: false) */
    borderless?: boolean;
    /** Current selected value (for controlled component) */
    value?: string | null;
    /** Change handler (for controlled component) */
    onChange?: (value: string | null) => void;
    /** Whether the select is searchable */
    searchable?: boolean;
    /** Whether the select is clearable */
    clearable?: boolean;
    /** Position the select in the header (top-right) instead of below header */
    inHeader?: boolean;
  };
  
  /** Optional footer links */
  footerLinks?: DashboardWidgetLink[];
  
  // ==================== STYLING ====================
  /** Additional card props */
  cardProps?: Record<string, any>;
  /** Custom spacing */
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

// ========================== COMPONENT ==========================

/**
 * DashboardWidget Component
 * 
 * A flexible widget container for dashboard content with optional controls.
 * Built on top of the Card component with consistent spacing and styling.
 * 
 * @example
 * // Basic widget with content
 * <DashboardWidget title="A widget title">
 *   <Text>This is a slot. To use it:</Text>
 *   <ul>
 *     <li>Create a local component with autolayout on</li>
 *     <li>Switch out this slot with that component using the component instance switcher</li>
 *   </ul>
 * </DashboardWidget>
 * 
 * @example
 * // Widget with all features
 * <DashboardWidget
 *   title="Analytics Widget"
 *   subtitle="Real-time data"
 *   switch={{
 *     label: "Live updates",
 *     checked: true,
 *     onChange: (checked) => console.log(checked)
 *   }}
 *   actionsMenu={{
 *     sections: [{
 *       items: [
 *         { label: "Export", onClick: () => console.log("Export") },
 *         { label: "Settings", onClick: () => console.log("Settings") }
 *       ]
 *     }]
 *   }}
 *   combobox={{
 *     placeholder: "Select filter",
 *     data: ["Option 1", "Option 2", "Option 3"],
 *     onChange: (value) => console.log(value)
 *   }}
 *   footerLinks={[
 *     { label: "Link 1", onClick: () => console.log("Link 1") },
 *     { label: "Link 2", onClick: () => console.log("Link 2") },
 *     { label: "Link 3", onClick: () => console.log("Link 3") }
 *   ]}
 * >
 *   <YourCustomContent />
 * </DashboardWidget>
 */
export function DashboardWidget({
  title,
  subtitle,
  switch: switchConfig,
  actionsMenu,
  children,
  combobox,
  footerLinks,
  cardProps = {},
  spacing = 'md',
}: DashboardWidgetProps) {
  
  // ==================== RENDER FUNCTIONS ==========================
  
  const renderHeader = () => (
    <Inline justify="space-between" align="flex-start">
      {/* Title and subtitle */}
      <Stack gap="xs">
        <Title order={4} size="md">
          {title}
        </Title>
        {subtitle && (
          <Text size="sm" c="dimmed">
            {subtitle}
          </Text>
        )}
      </Stack>
      
      {/* Header controls */}
      <Inline gap="sm" align="center">
        {/* Switch */}
        {switchConfig && (
          <Inline gap="xs" align="center">
            <Text size="sm">{switchConfig.label}</Text>
            <Switch
              checked={switchConfig.checked}
              onChange={(event) => switchConfig.onChange(event.currentTarget.checked)}
              disabled={switchConfig.disabled}
              size="sm"
            />
          </Inline>
        )}
        
        {/* Header combobox (borderless select in top-right) */}
        {combobox?.inHeader && combobox.borderless && (
          <Select
            data={combobox.data}
            value={combobox.value}
            onChange={combobox.onChange}
            placeholder={combobox.placeholder}
            disabled={combobox.disabled}
            searchable={combobox.searchable}
            clearable={combobox.clearable}
            borderless
            size="sm"
          />
        )}
        
        {/* Actions menu - only show if no header combobox */}
        {actionsMenu && !(combobox?.inHeader && combobox.borderless) && (
          <Menu
            trigger={
              <ActionIcon size="sm" aria-label="Widget actions">
                <RiMore2Fill size={16} />
              </ActionIcon>
            }
            position="bottom-end"
            sections={actionsMenu.sections}
          />
        )}
      </Inline>
    </Inline>
  );
  
  const renderCombobox = () => {
    if (!combobox) return null;
    
    // Don't render here if it's positioned in the header
    if (combobox.inHeader && combobox.borderless) return null;
    
    // Use borderless select if specified
    if (combobox.borderless) {
      return (
        <Box mb={spacing}>
          <Select
            data={combobox.data}
            value={combobox.value}
            onChange={combobox.onChange}
            placeholder={combobox.placeholder}
            disabled={combobox.disabled}
            searchable={combobox.searchable}
            clearable={combobox.clearable}
            borderless
            size="sm"
          />
        </Box>
      );
    }
    
    // Default to SearchableSelect with borders
    return (
      <Box mb={spacing}>
        <SearchableSelect
          label={combobox.label}
          placeholder={combobox.placeholder}
          data={combobox.data}
          disabled={combobox.disabled}
          size="sm"
        />
      </Box>
    );
  };
  
  const renderFooterLinks = () => {
    if (!footerLinks || footerLinks.length === 0) return null;
    
    return (
      <Card.Section inheritPadding pt="md" mt="md" pb="md">
        <Inline gap="lg">
          {footerLinks.map((link, index) => (
            <Inline
              key={index}
              gap="xs"
              align="center"
              onClick={link.disabled ? undefined : link.onClick}
              style={{
                cursor: link.disabled ? 'not-allowed' : 'pointer',
                opacity: link.disabled ? 0.5 : 1,
                color: link.disabled ? 'var(--mantine-color-gray-5)' : 'var(--mantine-color-blue-6)',
                fontSize: 'var(--mantine-font-size-sm)',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
            >
              <Text size="sm" c={link.disabled ? 'dimmed' : 'blue'}>
                {link.label}
              </Text>
              <RiArrowRightSLine size={14} />
            </Inline>
          ))}
        </Inline>
      </Card.Section>
    );
  };
  
  // ==================== MAIN RENDER ==========================
  
  return (
    <Card {...cardProps}>
      {/* Header */}
      <Stack gap={spacing}>
        {renderHeader()}
        
        {/* Optional combobox */}
        {renderCombobox()}
        
        {/* Main content area */}
        <Box>
          {children}
        </Box>
      </Stack>
      
      {/* Optional footer links */}
      {renderFooterLinks()}
    </Card>
  );
} 