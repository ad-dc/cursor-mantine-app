import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Inline, Stack } from '@/components/DesignSystem';
import { Modal, ConfirmationModal } from './Modal';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { TextInput } from '../Inputs/TextInput';
import { TextArea } from '../Inputs/TextArea';
import { Switch } from '../Inputs/Switch';
import { Button } from '../Buttons/Button';

const meta: Meta<typeof Modal> = {
  title: 'Design System/Overlays/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Modal component for displaying overlay content with a Mantine-aligned shell API and composed children.',
      },
    },
  },
  tags: ['autodocs', 'code-connected'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Modal size',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Modal content padding',
    },
    withCloseButton: {
      control: 'boolean',
      description: 'Whether to show close button in the header',
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: 'Whether modal can be closed by clicking overlay',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether modal can be closed by pressing Escape',
    },
    centered: {
      control: 'boolean',
      description: 'Whether to center the modal vertically',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Open Modal</Button>

        <Modal opened={opened} onClose={() => setOpened(false)} title="Default Modal">
          <Text>This is a basic modal with default settings.</Text>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [openedSize, setOpenedSize] = useState<string | null>(null);
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    return (
      <>
        <Inline gap="sm">
          {sizes.map((size) => (
            <Button key={size} variant="outline" onClick={() => setOpenedSize(size)}>
              {size.toUpperCase()}
            </Button>
          ))}
        </Inline>

        {sizes.map((size) => (
          <Modal
            key={size}
            opened={openedSize === size}
            onClose={() => setOpenedSize(null)}
            title={`${size.toUpperCase()} Modal`}
            size={size}
          >
            <Text>This is a {size} sized modal. The content area adjusts to the modal size.</Text>
          </Modal>
        ))}
      </>
    );
  },
};

export const ComposedConfirmation: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Open Confirmation Modal</Button>

        <Modal opened={opened} onClose={() => setOpened(false)} title="Delete Item" size="sm">
          <Stack gap="md">
            <Text>This action cannot be undone. Are you sure you want to delete this item?</Text>
            <Inline justify="flex-end" gap="sm">
              <Button variant="outline" onClick={() => setOpened(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpened(false)}>
                Delete
              </Button>
            </Inline>
          </Stack>
        </Modal>
      </>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      description: '',
      active: false,
    });

    return (
      <>
        <Button onClick={() => setOpened(true)}>Open Form Modal</Button>

        <Modal opened={opened} onClose={() => setOpened(false)} title="Create New Item" size="md">
          <Stack gap="md">
            <TextInput
              label="Name"
              placeholder="Enter item name..."
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              required
            />
            <TextArea
              label="Description"
              placeholder="Enter description..."
              value={formData.description}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, description: event.target.value }))
              }
              rows={3}
            />
            <Switch
              label="Active"
              checked={formData.active}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, active: event.target.checked }))
              }
            />
            <Inline justify="space-between" gap="sm">
              <Button variant="default" onClick={() => setFormData({ name: '', description: '', active: false })}>
                Reset Form
              </Button>
              <Inline justify="flex-end" gap="sm">
                <Button variant="outline" onClick={() => setOpened(false)}>
                  Cancel
                </Button>
                <Button variant="primary" disabled={!formData.name.trim()} onClick={() => setOpened(false)}>
                  Create Item
                </Button>
              </Inline>
            </Inline>
          </Stack>
        </Modal>
      </>
    );
  },
};

export const ConfirmationHelper: Story = {
  render: () => {
    const [confirmOpened, setConfirmOpened] = useState(false);
    const [deleteOpened, setDeleteOpened] = useState(false);

    return (
      <>
        <Inline gap="sm">
          <Button variant="outline" onClick={() => setConfirmOpened(true)}>
            Basic Confirmation
          </Button>
          <Button variant="outline" onClick={() => setDeleteOpened(true)}>
            Delete Confirmation
          </Button>
        </Inline>

        <ConfirmationModal
          opened={confirmOpened}
          onClose={() => setConfirmOpened(false)}
          title="Confirm Action"
          onConfirm={() => setConfirmOpened(false)}
          onCancel={() => setConfirmOpened(false)}
        >
          <Text>Are you sure you want to perform this action?</Text>
        </ConfirmationModal>

        <ConfirmationModal
          opened={deleteOpened}
          onClose={() => setDeleteOpened(false)}
          title="Delete Item"
          confirmLabel="Delete"
          confirmVariant="danger"
          onConfirm={() => setDeleteOpened(false)}
          onCancel={() => setDeleteOpened(false)}
        >
          <Text>This action cannot be undone. Are you sure you want to delete this item?</Text>
        </ConfirmationModal>
      </>
    );
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Modal',
    size: 'md',
    withCloseButton: true,
    closeOnClickOutside: true,
    closeOnEscape: true,
    centered: true,
    padding: 'md',
    children: 'Use the controls below to interact with the Modal and see different combinations.',
  },
  render: (args) => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Open Interactive Modal</Button>

        <Modal {...args} opened={opened} onClose={() => setOpened(false)} />
      </>
    );
  },
};
