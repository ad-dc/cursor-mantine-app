import React, { forwardRef } from 'react';
import { Modal as MantineModal, ModalProps as MantineModalProps, Stack, Group } from '@mantine/core';
import { Button } from '../Buttons';
import { CloseButton } from '../Buttons';

/**
 * Modal Action Button interface
 */
export interface ModalAction {
  /** Unique identifier for the action */
  id: string;
  /** Button label */
  label: string;
  /** Button variant */
  variant?: 'primary' | 'outline' | 'default' | 'danger';
  /** Click handler */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is loading */
  loading?: boolean;
  /** Whether button should close modal on click */
  closeOnClick?: boolean;
}

/**
 * Enhanced Modal props extending Mantine's ModalProps
 */
export interface DSModalProps extends Omit<MantineModalProps, 'children' | 'title' | 'onClose'> {
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Primary/secondary action buttons (left-aligned) */
  actions?: ModalAction[];
  /** Tertiary action buttons (right-aligned) */
  tertiaryActions?: ModalAction[];
  /** Modal size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Whether to show close button in header */
  withCloseButton?: boolean;
  /** Whether modal can be closed by clicking overlay */
  closeOnClickOutside?: boolean;
  /** Whether modal can be closed by pressing Escape */
  closeOnEscape?: boolean;
  /** Called when modal is closed */
  onClose?: () => void;
  /** Whether modal is opened */
  opened: boolean;
  /** Modal content padding */
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to center the modal vertically */
  centered?: boolean;
}

/**
 * AppDirect Design System Modal Component
 * 
 * A modal dialog component built on top of Mantine's Modal with
 * consistent design system styling and flexible content support.
 * 
 * @example
 * ```tsx
 * // Basic confirmation modal (left-aligned primary actions)
 * <Modal
 *   opened={confirmOpened}
 *   onClose={() => setConfirmOpened(false)}
 *   title="Confirm Action"
 *   actions={[
 *     {
 *       id: "confirm",
 *       label: "Confirm",
 *       variant: "primary",
 *       onClick: handleConfirm,
 *       closeOnClick: true
 *     },
 *     {
 *       id: "cancel",
 *       label: "Cancel",
 *       variant: "outline",
 *       closeOnClick: true
 *     }
 *   ]}
 * >
 *   <Text>Are you sure you want to perform this action?</Text>
 * </Modal>
 * ```
 * 
 * @example
 * ```tsx
 * // Form modal with primary actions (left) and tertiary actions (right)
 * <Modal
 *   opened={formOpened}
 *   onClose={() => setFormOpened(false)}
 *   title="Create New Item"
 *   size="md"
 *   actions={[
 *     {
 *       id: "save",
 *       label: "Save",
 *       variant: "primary",
 *       onClick: handleSave,
 *       loading: saving
 *     },
 *     {
 *       id: "cancel",
 *       label: "Cancel",
 *       variant: "outline",
 *       closeOnClick: true
 *     }
 *   ]}
 *   tertiaryActions={[
 *     {
 *       id: "more-options",
 *       label: "More Options",
 *       variant: "default",
 *       onClick: showMoreOptions
 *     }
 *   ]}
 * >
 *   <Stack gap="md">
 *     <TextInput label="Name" placeholder="Enter name..." />
 *     <TextArea label="Description" placeholder="Enter description..." />
 *     <Switch label="Active" />
 *   </Stack>
 * </Modal>
 * ```
 * 
 * @example
 * ```tsx
 * // Simple content modal
 * <Modal
 *   opened={infoOpened}
 *   onClose={() => setInfoOpened(false)}
 *   title="Information"
 *   size="sm"
 * >
 *   <Text>This is some information content.</Text>
 * </Modal>
 * ```
 * 
 * @example
 * ```tsx
 * // Danger confirmation modal
 * <Modal
 *   opened={deleteOpened}
 *   onClose={() => setDeleteOpened(false)}
 *   title="Delete Item"
 *   actions={[
 *     {
 *       id: "delete",
 *       label: "Delete",
 *       variant: "danger",
 *       onClick: handleDelete,
 *       closeOnClick: true
 *     },
 *     {
 *       id: "cancel",
 *       label: "Cancel",
 *       variant: "outline",
 *       closeOnClick: true
 *     }
 *   ]}
 * >
 *   <Text>This action cannot be undone. Are you sure you want to delete this item?</Text>
 * </Modal>
 * ```
 */
export const Modal = forwardRef<HTMLDivElement, DSModalProps>(
  (
    {
      title,
      children,
      actions = [],
      tertiaryActions = [],
      size = 'md',
      withCloseButton = true,
      closeOnClickOutside = true,
      closeOnEscape = true,
      onClose,
      opened,
      padding = 'md',
      centered = true,
      ...props
    },
    ref
  ) => {
    const handleActionClick = (action: ModalAction) => {
      if (action.onClick) {
        action.onClick();
      }
      if (action.closeOnClick && onClose) {
        onClose();
      }
    };

    return (
      <MantineModal
        ref={ref}
        opened={opened}
        onClose={onClose || (() => {})}
        title={title}
        size={size}
        withCloseButton={withCloseButton}
        closeOnClickOutside={closeOnClickOutside}
        closeOnEscape={closeOnEscape}
        padding={padding}
        centered={centered}
        radius="sm"
        {...props}
      >
        <Stack gap="md">
          {/* Modal Content */}
          <div>
            {children}
          </div>
          
          {/* Modal Actions Footer */}
          {(actions.length > 0 || tertiaryActions.length > 0) && (
            <Group justify="space-between" gap="sm" pt="sm">
              {/* Left-aligned primary/secondary actions */}
              <Group gap="sm">
                {actions.map((action) => (
                  <Button
                    key={action.id}
                    variant={action.variant || 'outline'}
                    onClick={() => handleActionClick(action)}
                    disabled={action.disabled}
                    loading={action.loading}
                    size="sm"
                  >
                    {action.label}
                  </Button>
                ))}
              </Group>
              
              {/* Right-aligned tertiary actions */}
              <Group gap="sm">
                {tertiaryActions.map((action) => (
                  <Button
                    key={action.id}
                    variant={action.variant || 'outline'}
                    onClick={() => handleActionClick(action)}
                    disabled={action.disabled}
                    loading={action.loading}
                    size="sm"
                  >
                    {action.label}
                  </Button>
                ))}
              </Group>
            </Group>
          )}
        </Stack>
      </MantineModal>
    );
  }
);

Modal.displayName = 'Modal';

/**
 * Pre-configured Modal variants for common use cases
 */

/**
 * Confirmation Modal - Pre-configured for yes/no confirmations
 */
export interface ConfirmationModalProps extends Omit<DSModalProps, 'actions' | 'tertiaryActions'> {
  /** Confirmation button label */
  confirmLabel?: string;
  /** Cancel button label */
  cancelLabel?: string;
  /** Confirmation button variant */
  confirmVariant?: 'primary' | 'danger';
  /** Confirm action handler */
  onConfirm?: () => void;
  /** Cancel action handler */
  onCancel?: () => void;
  /** Whether confirm button is loading */
  confirmLoading?: boolean;
  /** Optional tertiary actions (right-aligned) */
  tertiaryActions?: ModalAction[];
}

export const ConfirmationModal = forwardRef<HTMLDivElement, ConfirmationModalProps>(
  (
    {
      confirmLabel = 'Confirm',
      cancelLabel = 'Cancel',
      confirmVariant = 'primary',
      onConfirm,
      onCancel,
      confirmLoading = false,
      tertiaryActions = [],
      onClose,
      ...props
    },
    ref
  ) => {
    const actions: ModalAction[] = [
      {
        id: 'cancel',
        label: cancelLabel,
        variant: 'outline',
        onClick: onCancel,
        closeOnClick: true,
      },
      {
        id: 'confirm',
        label: confirmLabel,
        variant: confirmVariant,
        onClick: onConfirm,
        loading: confirmLoading,
        closeOnClick: !confirmLoading,
      },
    ];

    return (
      <Modal
        ref={ref}
        actions={actions}
        tertiaryActions={tertiaryActions}
        onClose={onClose}
        {...props}
      />
    );
  }
);

ConfirmationModal.displayName = 'ConfirmationModal'; 