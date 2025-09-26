import { Avatar as MantineAvatar, AvatarProps as MantineAvatarProps } from "@mantine/core@7";

export interface DSAvatarProps extends MantineAvatarProps {
  makeId?: string;
}

export function Avatar({ makeId, ...props }: DSAvatarProps) {
  return <MantineAvatar data-make-id={makeId} radius="xl" {...props} />;
}




