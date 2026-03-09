import React, { forwardRef } from 'react';
import { Modal as MantineModal, ModalProps as MantineModalProps, Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Button } from '../Buttons';

/**
 * Thin Design System wrapper over Mantine Modal.
 *
 * Keeps the core Mantine shell props (`title`, `size`, `withCloseButton`,
 * `children`, etc.) while applying DS defaults like `radius="sm"`.
 */
export interface DSModalProps extends Omit<MantineModalProps, 'title'> {
  /** Modal title */
  title?: React.ReactNode;
}

/**
 * AppDirect Design System Modal Component
 * 
 * A modal dialog component built on top of Mantine's Modal with
 * consistent design system styling.
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
 * // Confirmation buttons composed inside children
 * <Modal
 *   opened={confirmOpened}
 *   onClose={() => setConfirmOpened(false)}
 *   title="Confirm Action"
 * >
 *   <Stack gap="md">
 *     <Text>Are you sure you want to perform this action?</Text>
 *     <Inline justify="flex-end" gap="sm">
 *       <Button variant="outline">Cancel</Button>
 *       <Button variant="primary">Confirm</Button>
 *     </Inline>
 *   </Stack>
 * </Modal>
 * ```
 */
export const Modal = forwardRef<HTMLDivElement, DSModalProps>(
  (
    {
      title,
      size = 'md',
      withCloseButton = true,
      closeOnClickOutside = true,
      closeOnEscape = true,
      padding = 'md',
      centered = true,
      ...props
    },
    ref
  ) => {
    return (
      <MantineModal
        ref={ref}
        title={title}
        size={size}
        withCloseButton={withCloseButton}
        closeOnClickOutside={closeOnClickOutside}
        closeOnEscape={closeOnEscape}
        padding={padding}
        centered={centered}
        radius="sm"
        {...props}
      />
    );
  }
);

Modal.displayName = 'Modal';

/**
 * Pre-configured confirmation helper built on top of Modal.
 */
export interface ConfirmationModalProps extends Omit<DSModalProps, 'children'> {
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
  /** Optional content shown above the confirmation actions */
  children?: React.ReactNode;
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
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    const handleCancel = () => {
      onCancel?.();
      onClose();
    };

    const handleConfirm = () => {
      onConfirm?.();

      if (!confirmLoading) {
        onClose();
      }
    };

    return (
      <Modal
        ref={ref}
        onClose={onClose}
        {...props}
      >
        <Stack gap="md">
          {children}
          <Inline justify="flex-end" gap="sm">
            <Button variant="outline" onClick={handleCancel}>
              {cancelLabel}
            </Button>
            <Button variant={confirmVariant} onClick={handleConfirm} loading={confirmLoading}>
              {confirmLabel}
            </Button>
          </Inline>
        </Stack>
      </Modal>
    );
  }
);

ConfirmationModal.displayName = 'ConfirmationModal'; 