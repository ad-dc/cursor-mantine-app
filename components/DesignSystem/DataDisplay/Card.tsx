import React, { forwardRef } from 'react';
import { Card as MantineCard, CardProps as MantineCardProps } from '@mantine/core';

// ========================== TYPES ==========================

export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CardVariant = 'default' | 'outline' | 'filled' | 'light';
export type CardPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface DSCardProps extends Omit<MantineCardProps, 'size' | 'variant' | 'padding'> {
  /** Card size following Mantine t-shirt sizing */
  size?: CardSize;
  /** Card style variant */
  variant?: CardVariant;
  /** Card internal padding */
  padding?: CardPadding;
  /** Whether the card should be interactive (adds hover effects) */
  interactive?: boolean;
  /** Whether the card should have a shadow */
  withShadow?: boolean;
  /** Shadow size when withShadow is true */
  shadowSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether the card should have a border */
  withBorder?: boolean;
  /** Card content */
  children: React.ReactNode;
  /** Click handler (makes card clickable when provided) */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// ========================== CONSTANTS ==========================

// Card size to padding mapping (in rem)
const CARD_PADDING_MAP = {
  xs: 'xs',
  sm: 'sm', 
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;

// ========================== COMPONENT ==========================

/**
 * Card Component
 * 
 * Built on top of Mantine's Card component with design system styling.
 * Provides a flexible container for content with various styling options.
 * All cards default to 'md' padding (16px) for consistent spacing.
 * 
 * @example
 * // Basic card (automatically gets md/16px padding)
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here.</p>
 * </Card>
 * 
 * @example
 * // Interactive card with shadow
 * <Card 
 *   interactive
 *   withShadow
 *   shadowSize="md"
 *   onClick={() => console.log('Card clicked')}
 * >
 *   <h3>Clickable Card</h3>
 *   <p>This card responds to clicks and hover.</p>
 * </Card>
 * 
 * @example
 * // Different variants and sizes
 * <Card variant="outline" size="lg" padding="xl">
 *   <h2>Large Outlined Card</h2>
 *   <p>With extra large padding.</p>
 * </Card>
 * 
 * @example
 * // Card with custom styling
 * <Card 
 *   variant="filled"
 *   withBorder
 *   style={{ backgroundColor: 'var(--mantine-color-blue-0)' }}
 * >
 *   <h3>Custom Styled Card</h3>
 *   <p>With custom background color.</p>
 * </Card>
 * 
 * @example
 * // Card with image on top (remove padding, add manual padding to content)
 * <Card padding="none" withShadow>
 *   <div style={{ 
 *     backgroundImage: 'url(...)', 
 *     height: 200, 
 *     borderTopLeftRadius: '4px',
 *     borderTopRightRadius: '4px' 
 *   }} />
 *   <div style={{ padding: '16px' }}>
 *     <h3>Image Card</h3>
 *     <p>Content with manual padding.</p>
 *   </div>
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, DSCardProps>(
  ({ 
    size = 'md',
    variant = 'default',
    padding = 'md',
    interactive = false,
    withShadow = false,
    shadowSize = 'xs',
    withBorder = true,
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
      if (withShadow && !['xs', 'sm', 'md', 'lg', 'xl'].includes(shadowSize)) {
        console.warn('Card: invalid shadowSize provided, should be xs | sm | md | lg | xl');
      }
    }, [interactive, onClick, withShadow, shadowSize]);

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

    // Map size to appropriate padding
    const cardPadding = padding === 'none' ? 0 : padding;

    return (
      <MantineCard
        ref={ref}
        padding={cardPadding}
        radius="sm"
        shadow={withShadow ? shadowSize : undefined}
        withBorder={withBorder}
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