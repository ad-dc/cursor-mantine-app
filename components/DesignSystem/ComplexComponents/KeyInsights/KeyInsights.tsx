import React from 'react';
import { Box } from '@/components/DesignSystem';
import { Text } from '../../Typography/Text';
import { Title } from '../../Typography/Title';

export interface KeyInsightProps {
  /** Value to display (can be number or string) */
  value: string | number;
  /** Title/label for the insight */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
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
 * // With subtitle
 * <KeyInsight
 *   value="95%"
 *   title="Success Rate"
 *   subtitle="Last 30 days"
 * />
 * 
 * @example
 * // In a grid layout with borders
 * <Grid cols={3} spacing="sm">
 *   <KeyInsight
 *     value={1250}
 *     title="Total Users"
 *     showBorder={true}
 *   />
 *   <KeyInsight
 *     value={987}
 *     title="Active Users"
 *     showBorder={true}
 *   />
 *   <KeyInsight
 *     value={263}
 *     title="New Users"
 *     subtitle="This month"
 *     showBorder={false}
 *   />
 * </Grid>
 * 
 * @example
 * // Dynamic usage with data
 * const insights = [
 *   { value: userData.length, title: "Total Users" },
 *   { value: activeUsers.length, title: "Active Users" },
 *   { value: newUsers.length, title: "New Users" },
 * ];
 * 
 * <Inline>
 *   {insights.map((insight, index) => (
 *     <KeyInsight
 *       key={index}
 *       value={insight.value}
 *       title={insight.title}
 *       showBorder={index < insights.length - 1}
 *     />
 *   ))}
 * </Inline>
 */
export function KeyInsight({
  value,
  title,
  subtitle,
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
      <Title order={3} c="dark">
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