import React, { forwardRef } from 'react';
import { Card as MantineCard, CardProps as MantineCardProps } from '@mantine/core';

// ========================== TYPES ==========================

export interface DSCardProps extends Omit<MantineCardProps, 'size' | 'variant' | 'padding' | 'shadow' | 'withBorder' | 'radius'> {
  /** Whether the card should be interactive (adds hover effects) */
  interactive?: boolean;
  /** Card content */
  children: React.ReactNode;
  /** Click handler (makes card clickable when provided) */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// ========================== COMPONENT ==========================

/**
 * Card Component
 * 
 * Built on top of Mantine's Card component with design system styling.
 * Provides a consistent container for content with fixed styling options:
 * - Shadow: xs (subtle shadow)
 * - Padding: md (16px)
 * - Border: always enabled
 * - Radius: sm (4px)
 * 
 * @example
 * // Basic card
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here.</p>
 * </Card>
 * 
 * @example
 * // Interactive card
 * <Card 
 *   interactive
 *   onClick={() => console.log('Card clicked')}
 * >
 *   <h3>Clickable Card</h3>
 *   <p>This card responds to clicks and hover.</p>
 * </Card>
 * 
 * @example
 * // Card with custom styling
 * <Card 
 *   style={{ backgroundColor: 'var(--mantine-color-blue-0)' }}
 * >
 *   <h3>Custom Styled Card</h3>
 *   <p>With custom background color.</p>
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, DSCardProps>(
  ({ 
    interactive = false,
    children,
    onClick,
    style,
    className,
    ...props 
  }, ref) => {

    // Runtime validation
    React.useEffect(() => {
      if (interactive && !onClick) {
        console.warn('Card: interactive is true but no onClick handler provided');
      }
    }, [interactive, onClick]);

    // Determine if card should be clickable
    const isClickable = Boolean(onClick);

    // Build card styling
    const cardStyle = {
      ...(isClickable && { cursor: 'pointer' }),
      ...(interactive && { transition: 'all 200ms ease' }),
      ...style,
    };

    // Build class names
    const cardClassName = [
      className,
      interactive && 'ds-card--interactive',
    ].filter(Boolean).join(' ');

    return (
      <MantineCard
        ref={ref}
        padding="md"
        radius="sm"
        shadow="xs"
        withBorder={true}
        style={cardStyle}
        className={cardClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </MantineCard>
    );
  }
);

Card.displayName = 'Card'; 