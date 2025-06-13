import React from 'react';
import {
  Stack,
  Group,
  SimpleGrid,
  Collapse,
  rem,
  Box,
} from '@mantine/core';
import { Button } from '../../Buttons/Button';
import { ActionButton } from '../../Buttons/ActionButton';
import { Badge } from '../../DataDisplay/Badge';
import { ThemeIcon } from '../../DataDisplay/ThemeIcon';
import { Text } from '../../Typography/Text';
import { Title } from '../../Typography/Title';
import { Paper } from '../../Misc/Paper';
import { useDisclosure } from '@mantine/hooks';
import { RiEditLine, RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';
import { KeyInsight, KeyInsightProps } from '../KeyInsights';
import { NameValue, NameValuePair } from '../NameValue';
import { DescriptionBlock } from './DescriptionBlock';

// ========================== TYPES ==========================

export type ContentSection = 'insights' | 'description' | 'descriptionBlock' | 'nameValuePairs' | 'drawer';

export interface PageContentHeaderProps {
  // ==================== HEADER SECTION ====================
  /** Subhead text above the title */
  subhead?: string;
  /** Main title/subhead */
  title: string;
  /** Optional badge text */
  badge?: string;
  /** Icon to display (can be component or icon name) */
  icon?: React.ReactNode;
  /** Icon size (for the icon inside the container) */
  iconSize?: number;
  /** Container size for the ThemeIcon */
  iconContainerSize?: number;
  /** Whether the title is editable */
  editable?: boolean;
  /** Callback when edit is clicked */
  onEdit?: () => void;
  
  // ==================== ACTION BUTTONS ====================
  /** Array of action buttons. Uses semantic variants instead of explicit colors. */
  actions?: Array<{
    label: string;
    onClick: () => void;
    /** Semantic variant that automatically determines appropriate color */
    variant?: 'primary' | 'secondary' | 'default' | 'disabled' | 'link' | 'secret' | 'outline' | 'danger';
  }>;
  
  // ==================== CONTENT SECTIONS (MUTUALLY EXCLUSIVE) ====================
  /** Which content section to display. Content sections bleed to edges like Card.Section */
  contentSection: ContentSection;
  
  // Key Insights Section
  /** Array of key insights to display */
  insights?: Omit<KeyInsightProps, 'showBorder'>[];
  
  // Description Section  
  /** Optional title for description section */
  descriptionTitle?: string;
  /** Description text content */
  description?: string;
  /** Whether description supports markdown/links */
  allowLinks?: boolean;
  
  // DescriptionBlock Section
  /** Title for the description block */
  descriptionBlockTitle?: string;
  /** Description text for the description block */
  descriptionBlockText?: string;
  /** Whether description block supports HTML/links */
  descriptionBlockAllowHtml?: boolean;
  
  // Name Value Pairs Section
  /** Array of name-value pairs */
  nameValuePairs?: NameValuePair[];
  /** Number of columns for name-value grid */
  nameValueColumns?: number;
  
  // Drawer Section
  /** Content to show in expanded drawer */
  drawerContent?: React.ReactNode;
  /** Text for the "View More" button */
  drawerLabel?: string;
  /** Whether drawer starts open */
  defaultDrawerOpen?: boolean;
  
  // ==================== STYLING ====================
  /** Additional styling for the paper container */
  paperProps?: Record<string, any>;
  /** Custom spacing */
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

// ========================== CONSTANTS ==========================

const ICON_STYLES = {
  width: rem(58),
  height: rem(58),
  minWidth: rem(58),
  minHeight: rem(58),
  borderColor: 'var(--mantine-color-black)',
} as const;

// ========================== COMPONENT ==========================

export function PageContentHeader({
  // Header props
  subhead,
  title,
  badge,
  icon,
  iconSize = 44,
  iconContainerSize = 58,
  editable = false,
  onEdit,
  
  // Action props
  actions = [],
  
  // Content props
  contentSection,
  insights = [],
  descriptionTitle,
  description,
  allowLinks = false,
  descriptionBlockTitle,
  descriptionBlockText,
  descriptionBlockAllowHtml,
  nameValuePairs = [],
  nameValueColumns = 2,
  drawerContent,
  drawerLabel = 'View More',
  defaultDrawerOpen = false,
  
  // Styling props
  paperProps = {},
  spacing = 'sm',
}: PageContentHeaderProps) {
  
  const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(defaultDrawerOpen);
  
  // ==================== RENDER FUNCTIONS ==========================
  
  const renderHeader = () => (
    <Group justify="space-between" align="flex-start">
      <Group gap="xs" align="flex-start">
        {/* Icon */}
        {icon && (
          <ThemeIcon 
            variant="outline"
            c="gray.9"
            size="xxl"
            radius="md"
            style={{
              ...ICON_STYLES,
              width: rem(iconContainerSize),
              height: rem(iconContainerSize),
              minWidth: rem(iconContainerSize),
              minHeight: rem(iconContainerSize),
            }}
          >
            {typeof icon === 'string' ? (
              <i className={icon} style={{ fontSize: iconSize }} />
            ) : React.isValidElement(icon) && icon.type === 'i' ? (
              React.cloneElement(icon as React.ReactElement, {
                style: { ...((icon as React.ReactElement).props.style || {}), fontSize: iconSize }
              })
            ) : (
              React.cloneElement(icon as React.ReactElement, { size: iconSize })
            )}
          </ThemeIcon>
        )}
        
        {/* Subhead, Title and Badge */}
        <Stack gap="0" align="flex-start">
          {subhead && (
            <Group justify="flex-start" align="center" gap="xs">
              <Text size="md">
                {subhead}
              </Text>
              {badge && (
                <Badge size="md" variant="outline" color="default">
                  {badge}
                </Badge>
              )}
            </Group>
          )}
          <Group gap="xs" align="center">
            <Title order={3}>
              {title}
            </Title>
            {editable && (
              <ActionButton
                size="sm"
                onClick={onEdit}
                aria-label="Edit title"
                style={{ marginLeft: rem(4) }}
              >
                <RiEditLine size={16} />
              </ActionButton>
            )}
          </Group>
        </Stack>
      </Group>
    </Group>
  );
  
  const renderActions = () => {
    if (actions.length === 0) return null;
    
    return (
      <Group gap="sm">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant || 'default'}
            onClick={action.onClick}
            size="sm"
          >
            {action.label}
          </Button>
        ))}
      </Group>
    );
  };
  
  const renderKeyInsights = () => (
    <Box p={spacing}>
      <SimpleGrid cols={insights.length} spacing="sm">
        {insights.map((insight, index) => (
          <KeyInsight
            key={index}
            value={insight.value}
            title={insight.title}
            subtitle={insight.subtitle}
            color={insight.color}
            showBorder={index < insights.length - 1}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
  
  const renderDescription = () => (
    <Box p={spacing}>
      <Stack gap="sm">
        {descriptionTitle && (
          <Text size="lg" fw={500}>
            {descriptionTitle}
          </Text>
        )}
        {allowLinks ? (
          <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
            <div dangerouslySetInnerHTML={{ __html: description || '' }} />
          </Text>
        ) : (
          <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
            {description}
          </Text>
        )}
      </Stack>
    </Box>
  );
  
  const renderDescriptionBlock = () => {
    if (!descriptionBlockText) return null;
    
    // DescriptionBlock bleeds to edges - no padding wrapper
    return (
      <DescriptionBlock
        title={descriptionBlockTitle}
        description={descriptionBlockText}
        allowHtml={descriptionBlockAllowHtml}
      />
    );
  };
  
  const renderNameValuePairs = () => (
    <Box p={spacing}>
      <NameValue 
        pairs={nameValuePairs}
        columns={nameValueColumns}
        spacing="md"
        labelSize="xs"
        valueSize="sm"
      />
    </Box>
  );
  
  const renderDrawer = () => (
    <Box p={spacing}>
      <Stack gap="sm">
        <Button
          variant="default"
          onClick={toggleDrawer}
          rightIcon={
            drawerOpened ? <RiArrowUpSLine size={16} /> : <RiArrowDownSLine size={16} />
          }
          fullWidth
          size="sm"
        >
          {drawerLabel}
        </Button>
        
        <Collapse in={drawerOpened}>
          <Box mt="sm">
            {drawerContent}
          </Box>
        </Collapse>
      </Stack>
    </Box>
  );
  
  const renderContentSection = () => {
    switch (contentSection) {
      case 'insights':
        return renderKeyInsights();
      case 'description':
        return renderDescription();
      case 'descriptionBlock':
        return renderDescriptionBlock();
      case 'nameValuePairs':
        return renderNameValuePairs();
      case 'drawer':
        return renderDrawer();
      default:
        return null;
    }
  };
  
  // ==================== MAIN RENDER ==========================
  
  return (
    <Paper 
      variant="border-shadow"
      {...paperProps}
    >
      {/* CORE STACK */}
      <Stack gap="0">
        {/* Header Section */}
        <Stack p={spacing}>
          <Box>
            {renderHeader()}
          </Box>
          {/* Actions Section */}
          {actions.length > 0 && (
            <Box>
              {renderActions()}
            </Box>
          )}
        </Stack>
        
        {/* Content Section - bleeds to edges like Card.Section 
             Each content type handles its own padding:
             - insights, description, nameValuePairs, drawer: wrapped with padding
             - descriptionBlock: bleeds to edges with its own internal padding */}
        <Box style={{ borderTop: '1px solid var(--mantine-color-gray-4)' }}>
          {renderContentSection()}
        </Box>
      </Stack>
    </Paper>
  );
} 