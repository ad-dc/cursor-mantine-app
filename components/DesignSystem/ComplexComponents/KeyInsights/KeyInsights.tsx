import React from 'react';
import { Box } from '@mantine/core';
import { Text } from '../../Typography/Text';
import { Title } from '../../Typography/Title';

export interface KeyInsightProps {
  /** Value to display (can be number or string) */
  value: string | number;
  /** Title/label for the insight */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional color for the value */
  color?: string;
  /** Whether to show border on the right */
  showBorder?: boolean;
}

/**
 * KeyInsight Component
 * 
 * A reusable component for displaying key metrics or insights with a title, value, and optional subtitle.
 * Commonly used in dashboards, analytics pages, or summary sections.
 * 
 * @example
 * // Basic usage
 * <KeyInsight
 *   value={1250}
 *   title="Total Users"
 * />
 * 
 * @example
 * // With color and subtitle
 * <KeyInsight
 *   value="95%"
 *   title="Success Rate"
 *   subtitle="Last 30 days"
 *   color="green"
 * />
 * 
 * @example
 * // In a grid layout with borders
 * <SimpleGrid cols={3} spacing="sm">
 *   <KeyInsight
 *     value={1250}
 *     title="Total Users"
 *     color="blue"
 *     showBorder={true}
 *   />
 *   <KeyInsight
 *     value={987}
 *     title="Active Users"
 *     color="green"
 *     showBorder={true}
 *   />
 *   <KeyInsight
 *     value={263}
 *     title="New Users"
 *     subtitle="This month"
 *     color="purple"
 *     showBorder={false}
 *   />
 * </SimpleGrid>
 * 
 * @example
 * // Dynamic usage with data
 * const insights = [
 *   { value: userData.length, title: "Total Users", color: "blue" },
 *   { value: activeUsers.length, title: "Active Users", color: "green" },
 *   { value: newUsers.length, title: "New Users", color: "purple" },
 * ];
 * 
 * <Group>
 *   {insights.map((insight, index) => (
 *     <KeyInsight
 *       key={index}
 *       value={insight.value}
 *       title={insight.title}
 *       color={insight.color}
 *       showBorder={index < insights.length - 1}
 *     />
 *   ))}
 * </Group>
 */
export function KeyInsight({
  value,
  title,
  subtitle,
  color,
  showBorder = false,
}: KeyInsightProps) {
  return (
    <Box 
      ta="center" 
      p="sm" 
      style={{ 
        borderRight: showBorder ? '1px solid var(--mantine-color-gray-4)' : undefined 
      }}
    >
      <Title order={3} c={color}>
        {value}
      </Title>
      <Text size="sm" mt={0}>
        {title}
      </Text>
      {subtitle && (
        <Text size="xs" c="dimmed">
          {subtitle}
        </Text>
      )}
    </Box>
  );
} 