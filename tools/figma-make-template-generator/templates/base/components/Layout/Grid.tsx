import { Grid as MantineGrid, GridCol as MantineCol, GridProps as MantineGridProps, GridColProps as MantineColProps } from "@mantine/core@7";

export interface DSGridProps extends MantineGridProps {
  makeId?: string;
}

export function Grid({ makeId, ...props }: DSGridProps) {
  return <MantineGrid data-make-id={makeId} {...props} />;
}

export interface DSColProps extends MantineColProps {
  makeId?: string;
}

export function Col({ makeId, ...props }: DSColProps) {
  return <MantineCol data-make-id={makeId} {...props} />;
}





