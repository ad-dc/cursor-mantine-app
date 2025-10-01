import { Breadcrumbs as MantineBreadcrumbs, BreadcrumbsProps as MantineBreadcrumbsProps } from "@mantine/core@7";

export interface DSBreadcrumbsProps extends MantineBreadcrumbsProps {
  makeId?: string;
}

export function Breadcrumbs({ makeId, ...props }: DSBreadcrumbsProps) {
  return <MantineBreadcrumbs data-make-id={makeId} {...props} />;
}





