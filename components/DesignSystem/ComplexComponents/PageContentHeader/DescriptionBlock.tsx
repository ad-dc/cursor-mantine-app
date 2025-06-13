import React from 'react';
import { Group } from '@mantine/core';
import { Title } from '../../Typography/Title';
import { Text } from '../../Typography/Text';

export interface DescriptionBlockProps {
  /** Optional title for the description block */
  title?: string;
  /** Description text content */
  description: string;
  /** Whether description supports HTML/links */
  allowHtml?: boolean;
}

/**
 * DescriptionBlock Component
 * 
 * A component for displaying structured description content with an optional title.
 * Uses Group layout with Title (h4) and Text (md) styling.
 * 
 * @example
 * // Basic usage with title
 * <DescriptionBlock
 *   title="This is an optional title"
 *   description="This is some descriptive text. Try not to make this too long and don't be too specific to prevent stale documentation."
 * />
 * 
 * @example
 * // With HTML content
 * <DescriptionBlock
 *   title="Getting Started"
 *   description="This is some descriptive text. It's <a href='/docs'>great to link into doc</a> pages!"
 *   allowHtml={true}
 * />
 * 
 * @example
 * // Description only (no title)
 * <DescriptionBlock
 *   description="This standalone description provides context without a title."
 * />
 */
export function DescriptionBlock({
  title,
  description,
  allowHtml = false,
}: DescriptionBlockProps) {
  return (
    <Group gap="xs" align="flex-start" p="sm">
      {title && (
        <Title order={4}>
          {title}
        </Title>
      )}
      {allowHtml ? (
        <Text size="md" style={{ lineHeight: 1.6 }}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Text>
      ) : (
        <Text size="md" style={{ lineHeight: 1.6 }}>
          {description}
        </Text>
      )}
    </Group>
  );
} 