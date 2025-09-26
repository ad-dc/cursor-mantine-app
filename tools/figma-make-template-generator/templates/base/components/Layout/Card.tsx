import { Card as MantineCard, CardProps as MantineCardProps } from "@mantine/core@7";

export interface DSCardProps extends MantineCardProps {
  makeId?: string;
}

export function Card({ makeId, ...props }: DSCardProps) {
  return <MantineCard data-make-id={makeId} radius="sm" withBorder {...props} />;
}




