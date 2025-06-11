import React, { forwardRef } from 'react';
import { Breadcrumbs as MantineBreadcrumbs, Anchor, Text, BreadcrumbsProps as MantineBreadcrumbsProps } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';

// ========================== TYPES ==========================

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface DSBreadcrumbProps extends Omit<MantineBreadcrumbsProps, 'children'> {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator (default: '/') */
  separator?: React.ReactNode;
}

export interface DSBackBreadcrumbProps {
  /** Back button label (default: 'Back') */
  label?: string;
  /** Click handler for back button */
  onClick?: () => void;
  /** href for back navigation (alternative to onClick) */
  href?: string;
  /** Additional class names */
  className?: string;
}

// ========================== STYLES ==========================

const breadcrumbStyles = {
  backButton: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

// ========================== COMPONENTS ==========================

/**
 * Standard Breadcrumb Component
 * 
 * Built on top of Mantine's Breadcrumbs component with design system styling.
 * Displays a navigation breadcrumb with clickable links and separators.
 * The last item is rendered as plain text representing the current page.
 * 
 * @example
 * <Breadcrumb 
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Details' }
 *   ]}
 * />
 */
export const Breadcrumb = forwardRef<HTMLDivElement, DSBreadcrumbProps>(
  ({ items, separator = '/', ...props }, ref) => {
    if (!items || items.length === 0) {
      return null;
    }

    // Create breadcrumb items, making last item non-clickable (current page)
    const breadcrumbItems = items.map((item, index) => {
      const isLast = index === items.length - 1;
      
      if (isLast) {
        // Current page - render as plain text (Mantine will style this)
        return (
          <Text key={index} component="span">
            {item.label}
          </Text>
        );
      }
      
      // Navigation items - render as links or buttons (Mantine will style these)
      if (item.href) {
        return (
          <Anchor key={index} href={item.href}>
            {item.label}
          </Anchor>
        );
      }
      
      return (
        <Anchor key={index} component="button" onClick={item.onClick}>
          {item.label}
        </Anchor>
      );
    });

    return (
      <MantineBreadcrumbs
        ref={ref}
        separator={separator}
        {...props}
      >
        {breadcrumbItems}
      </MantineBreadcrumbs>
    );
  }
);

/**
 * Back Breadcrumb Component
 * 
 * Displays a simple back navigation with an arrow icon and label.
 * 
 * @example
 * <BackBreadcrumb 
 *   label="Back to Products" 
 *   onClick={() => router.back()} 
 * />
 */
export function BackBreadcrumb({ 
  label = 'Back', 
  onClick, 
  href, 
  className 
}: DSBackBreadcrumbProps) {
  const content = (
    <>
      <IconChevronLeft size={16} />
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <Anchor
        href={href}
        className={className}
        style={breadcrumbStyles.backButton}
      >
        {content}
      </Anchor>
    );
  }

  return (
    <Anchor
      component="button"
      className={className}
      style={breadcrumbStyles.backButton}
      onClick={onClick}
    >
      {content}
    </Anchor>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

// Default export for convenience
export default Breadcrumb; 