import { Anchor as MantineAnchor, AnchorProps as MantineAnchorProps } from "@mantine/core@7";

export interface DSAnchorProps extends MantineAnchorProps {
  makeId?: string;
}

export function Anchor({ makeId, ...props }: DSAnchorProps) {
  return <MantineAnchor data-make-id={makeId} {...props} />;
}




