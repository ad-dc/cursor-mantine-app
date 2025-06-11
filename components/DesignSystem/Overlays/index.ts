/**
 * Overlays Components
 * 
 * Components that appear on top of other content like modals, drawers, and popovers.
 */

export { Drawer } from './Drawer';
export { Menu } from './Menu';
export { Modal, ConfirmationModal } from './Modal';
export { Popover, ConfirmationPopover } from './Popover';
export type { DSDrawerProps } from './Drawer';
export type { DSMenuProps, MenuItem, MenuSection } from './Menu';
export type { DSModalProps, ModalAction, ConfirmationModalProps } from './Modal';
export type { DSPopoverProps, PopoverAction, ConfirmationPopoverProps } from './Popover';

// Future overlay component exports will go here:
// export { Modal } from './Modal';
// export { Popover } from './Popover';
// export { Tooltip } from './Tooltip';
// export { HoverCard } from './HoverCard'; 