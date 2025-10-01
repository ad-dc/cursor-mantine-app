import { Loader as MantineLoader, LoaderProps as MantineLoaderProps, LoadingOverlay as MantineLoadingOverlay, LoadingOverlayProps as MantineLoadingOverlayProps, Tooltip as MantineTooltip, TooltipProps as MantineTooltipProps } from "@mantine/core@7";

export interface DSLoaderProps extends MantineLoaderProps { makeId?: string }
export function Loader({ makeId, ...props }: DSLoaderProps) {
  return <MantineLoader data-make-id={makeId} {...props} />;
}

export interface DSLoadingOverlayProps extends MantineLoadingOverlayProps { makeId?: string }
export function LoadingOverlay({ makeId, ...props }: DSLoadingOverlayProps) {
  return <MantineLoadingOverlay data-make-id={makeId} {...props} />;
}

export interface DSTooltipProps extends MantineTooltipProps { makeId?: string }
export function Tooltip({ makeId, children, ...props }: DSTooltipProps) {
  return (
    <MantineTooltip {...props}>
      <span data-make-id={makeId}>
        {children}
      </span>
    </MantineTooltip>
  );
}





