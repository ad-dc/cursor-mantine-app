import { Badge as MantineBadge, BadgeProps as MantineBadgeProps } from "@mantine/core@7";

export interface DSBadgeProps extends MantineBadgeProps {
  makeId?: string;
}

export function Badge({ makeId, ...props }: DSBadgeProps) {
  return <MantineBadge data-make-id={makeId} {...props} />;
}





