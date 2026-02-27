import React, { forwardRef } from 'react';
import { Breadcrumbs as MantineBreadcrumbs, Anchor, Text, Group, BreadcrumbsProps as MantineBreadcrumbsProps } from '@mantine/core';
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
  /** Accessible label for screen readers (overrides visible label when set) */
  'aria-label'?: string;
}

// ========================== COMPONENTS ==========================

/**
 * Standard Breadcrumb Component
 *
 * Built on top of Mantine's Breadcrumbs component with design system styling.
 * Displays a navigation breadcrumb with clickable links and separators.
 * The last item is rendered as plain text with `aria-current="page"` to
 * represent the current page both visually and semantically.
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

    const breadcrumbItems = items.map((item, index) => {
      const isLast = index === items.length - 1;

      if (isLast) {
        return (
          <Text key={item.label} component="span" aria-current="page">
            {item.label}
          </Text>
        );
      }

      if (item.href) {
        return (
          <Anchor key={item.label} href={item.href}>
            {item.label}
          </Anchor>
        );
      }

      return (
        <Anchor key={item.label} component="button" onClick={item.onClick}>
          {item.label}
        </Anchor>
      );
    });

    return (
      <MantineBreadcrumbs
        ref={ref}
        separator={separator}
        aria-label="breadcrumb"
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
 * Displays a simple back navigation with a chevron icon and label.
 *
 * @example
 * <BackBreadcrumb
 *   label="Back to Products"
 *   onClick={() => router.back()}
 * />
 */
export const BackBreadcrumb = forwardRef<HTMLAnchorElement & HTMLButtonElement, DSBackBreadcrumbProps>(
  ({ label = 'Back', onClick, href, className, 'aria-label': ariaLabel }, ref) => {
    const content = (
      <Group gap={4} wrap="nowrap">
        <IconChevronLeft size={16} />
        <span>{label}</span>
      </Group>
    );

    if (href) {
      return (
        <Anchor ref={ref} href={href} className={className} aria-label={ariaLabel}>
          {content}
        </Anchor>
      );
    }

    return (
      <Anchor ref={ref} component="button" className={className} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Anchor>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
BackBreadcrumb.displayName = 'BackBreadcrumb';

export default Breadcrumb; 