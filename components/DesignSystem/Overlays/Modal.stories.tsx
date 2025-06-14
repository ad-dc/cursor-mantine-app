import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Button as MantineButton } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Modal, ConfirmationModal } from './Modal';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { TextInput } from '../Inputs/TextInput';
import { TextArea } from '../Inputs/TextArea';
import { Switch } from '../Inputs/Switch';

const meta: Meta<typeof Modal> = {
  title: 'Design System/Overlays/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Modal component for displaying overlay content with flexible action buttons and consistent design system styling.',
      },
    },
  },
  tags: ['autodocs'],
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
      description: 'Whether to show close button in header',
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
    opened: {
      control: 'boolean',
      description: 'Whether modal is opened',
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
        <MantineButton onClick={() => setOpened(true)}>
          Open Modal
        </MantineButton>
        
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Default Modal"
        >
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
          {sizes.map(size => (
            <MantineButton 
              key={size} 
              onClick={() => setOpenedSize(size)}
              variant="outline"
            >
              {size.toUpperCase()}
            </MantineButton>
          ))}
        </Inline>
        
        {sizes.map(size => (
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
  parameters: {
    docs: {
      description: {
        story: 'Modal component in different sizes.',
      },
    },
  },
};

export const WithActions: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleSave = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpened(false);
      }, 2000);
    };
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Modal with Actions
        </MantineButton>
        
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Modal with Actions"
          actions={[
            {
              id: 'save',
              label: 'Save Changes',
              variant: 'primary',
              onClick: handleSave,
              loading: loading,
            },
            {
              id: 'cancel',
              label: 'Cancel',
              variant: 'outline',
              closeOnClick: true,
            },
          ]}
        >
          <Text>This modal has action buttons. The Save button shows loading state.</Text>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with action buttons including loading states.',
      },
    },
  },
};

export const WithTertiaryActions: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Modal with Tertiary Actions
        </MantineButton>
        
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Modal with Primary & Tertiary Actions"
          actions={[
            {
              id: 'save',
              label: 'Save',
              variant: 'primary',
              closeOnClick: true,
            },
            {
              id: 'cancel',
              label: 'Cancel',
              variant: 'outline',
              closeOnClick: true,
            },
          ]}
          tertiaryActions={[
            {
              id: 'more',
              label: 'More Options',
              variant: 'default',
              onClick: () => alert('More options clicked'),
            },
            {
              id: 'help',
              label: 'Help',
              variant: 'outline',
              onClick: () => alert('Help clicked'),
            },
          ]}
        >
          <Text>
            This modal demonstrates the action layout: primary actions on the left, 
            tertiary actions on the right.
          </Text>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with both primary actions (left) and tertiary actions (right).',
      },
    },
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
    
    const handleSave = () => {
      console.log('Saving form data:', formData);
      setOpened(false);
    };
    
    const resetForm = () => {
      setFormData({ name: '', description: '', active: false });
    };
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Form Modal
        </MantineButton>
        
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Create New Item"
          size="md"
          actions={[
            {
              id: 'save',
              label: 'Create Item',
              variant: 'primary',
              onClick: handleSave,
              disabled: !formData.name.trim(),
            },
            {
              id: 'cancel',
              label: 'Cancel',
              variant: 'outline',
              closeOnClick: true,
            },
          ]}
          tertiaryActions={[
            {
              id: 'reset',
              label: 'Reset Form',
              variant: 'default',
              onClick: resetForm,
            },
          ]}
        >
          <Stack gap="md">
            <TextInput
              label="Name"
              placeholder="Enter item name..."
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
            <TextArea
              label="Description"
              placeholder="Enter description..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
            <Switch
              label="Active"
              checked={formData.active}
              onChange={(e) => setFormData(prev => ({ ...prev, active: e.target.checked }))}
            />
          </Stack>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal containing a form with validation and state management.',
      },
    },
  },
};

export const ConfirmationModals: Story = {
  render: () => {
    const [confirmOpened, setConfirmOpened] = useState(false);
    const [deleteOpened, setDeleteOpened] = useState(false);
    const [customOpened, setCustomOpened] = useState(false);
    
    return (
      <>
        <Inline gap="sm">
          <MantineButton onClick={() => setConfirmOpened(true)} variant="outline">
            Basic Confirmation
          </MantineButton>
          <MantineButton onClick={() => setDeleteOpened(true)} color="red" variant="outline">
            Delete Confirmation
          </MantineButton>
          <MantineButton onClick={() => setCustomOpened(true)} variant="outline">
            Custom Confirmation
          </MantineButton>
        </Inline>
        
        <ConfirmationModal
          opened={confirmOpened}
          onClose={() => setConfirmOpened(false)}
          title="Confirm Action"
          onConfirm={() => {
            console.log('Confirmed!');
            setConfirmOpened(false);
          }}
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
          onConfirm={() => {
            console.log('Item deleted!');
            setDeleteOpened(false);
          }}
          onCancel={() => setDeleteOpened(false)}
        >
          <Text>This action cannot be undone. Are you sure you want to delete this item?</Text>
        </ConfirmationModal>
        
        <ConfirmationModal
          opened={customOpened}
          onClose={() => setCustomOpened(false)}
          title="Custom Confirmation"
          confirmLabel="Yes, Continue"
          cancelLabel="No, Go Back"
          confirmVariant="primary"
          onConfirm={() => {
            console.log('Custom action confirmed!');
            setCustomOpened(false);
          }}
          onCancel={() => setCustomOpened(false)}
          tertiaryActions={[
            {
              id: 'more-info',
              label: 'More Info',
              variant: 'default',
              onClick: () => alert('More information about this action...'),
            },
          ]}
        >
          <Text>
            This is a custom confirmation modal with different button labels and tertiary actions.
          </Text>
        </ConfirmationModal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Pre-configured ConfirmationModal variants for common confirmation patterns.',
      },
    },
  },
};

export const ModalStates: Story = {
  render: () => {
    const [basicOpened, setBasicOpened] = useState(false);
    const [noCloseOpened, setNoCloseOpened] = useState(false);
    const [noPaddingOpened, setNoPaddingOpened] = useState(false);
    const [notCenteredOpened, setNotCenteredOpened] = useState(false);
    
    return (
      <>
        <Inline gap="sm">
          <MantineButton onClick={() => setBasicOpened(true)} variant="outline">
            Basic Modal
          </MantineButton>
          <MantineButton onClick={() => setNoCloseOpened(true)} variant="outline">
            No Close Button
          </MantineButton>
          <MantineButton onClick={() => setNoPaddingOpened(true)} variant="outline">
            No Padding
          </MantineButton>
          <MantineButton onClick={() => setNotCenteredOpened(true)} variant="outline">
            Not Centered
          </MantineButton>
        </Inline>
        
        <Modal
          opened={basicOpened}
          onClose={() => setBasicOpened(false)}
          title="Basic Modal"
        >
          <Text>Standard modal with default settings.</Text>
        </Modal>
        
        <Modal
          opened={noCloseOpened}
          onClose={() => setNoCloseOpened(false)}
          title="No Close Button"
          withCloseButton={false}
          closeOnClickOutside={false}
          closeOnEscape={false}
          actions={[
            {
              id: 'close',
              label: 'Close',
              variant: 'primary',
              closeOnClick: true,
            },
          ]}
        >
          <Text>This modal can only be closed using the action button.</Text>
        </Modal>
        
        <Modal
          opened={noPaddingOpened}
          onClose={() => setNoPaddingOpened(false)}
          title="No Padding"
          padding="xs"
        >
          <div style={{ 
            backgroundColor: 'var(--mantine-color-blue-0)', 
            padding: '16px',
            margin: '-8px',
            borderRadius: '4px'
          }}>
            <Text>This modal has minimal padding and custom content styling.</Text>
          </div>
        </Modal>
        
        <Modal
          opened={notCenteredOpened}
          onClose={() => setNotCenteredOpened(false)}
          title="Not Centered"
          centered={false}
        >
          <Text>This modal is positioned at the top of the viewport instead of centered.</Text>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different modal configurations and states.',
      },
    },
  },
};

export const ComplexContent: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);
    
    return (
      <>
        <MantineButton onClick={() => setOpened(true)}>
          Open Complex Modal
        </MantineButton>
        
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="User Profile Settings"
          size="lg"
          actions={[
            {
              id: 'save',
              label: 'Save Changes',
              variant: 'primary',
              closeOnClick: true,
            },
            {
              id: 'cancel',
              label: 'Cancel',
              variant: 'outline',
              closeOnClick: true,
            },
          ]}
          tertiaryActions={[
            {
              id: 'reset',
              label: 'Reset to Defaults',
              variant: 'default',
              onClick: () => alert('Reset to defaults'),
            },
          ]}
        >
          <Stack gap="lg">
            <div>
              <Title order={4} size="sm" fw={500} mb="sm">Personal Information</Title>
              <Stack gap="md">
                <Inline gap="md" grow>
                  <TextInput label="First Name" placeholder="John" />
                  <TextInput label="Last Name" placeholder="Doe" />
                </Inline>
                <TextInput label="Email" placeholder="john.doe@example.com" />
                <TextInput label="Phone" placeholder="+1 (555) 123-4567" />
              </Stack>
            </div>
            
            <div>
              <Title order={4} size="sm" fw={500} mb="sm">Preferences</Title>
              <Stack gap="md">
                <Switch label="Email notifications" defaultChecked />
                <Switch label="SMS notifications" />
                <Switch label="Marketing communications" />
                <Switch label="Two-factor authentication" defaultChecked />
              </Stack>
            </div>
            
            <div>
              <Title order={4} size="sm" fw={500} mb="sm">About</Title>
              <TextArea
                label="Bio"
                placeholder="Tell us about yourself..."
                rows={4}
              />
            </div>
          </Stack>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with complex content including multiple sections and form elements.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => {
    const [infoOpened, setInfoOpened] = useState(false);
    const [warningOpened, setWarningOpened] = useState(false);
    const [successOpened, setSuccessOpened] = useState(false);
    const [errorOpened, setErrorOpened] = useState(false);
    
    return (
      <>
        <Stack gap="lg" w={500}>
          <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
          
          <div>
            <Text size="sm" fw={500} mb="sm">1. Information Display:</Text>
            <MantineButton onClick={() => setInfoOpened(true)} variant="outline" size="sm">
              Show Information
            </MantineButton>
          </div>
          
          <div>
            <Text size="sm" fw={500} mb="sm">2. Warning Confirmation:</Text>
            <MantineButton onClick={() => setWarningOpened(true)} color="yellow" variant="outline" size="sm">
              Show Warning
            </MantineButton>
          </div>
          
          <div>
            <Text size="sm" fw={500} mb="sm">3. Success Message:</Text>
            <MantineButton onClick={() => setSuccessOpened(true)} color="green" variant="outline" size="sm">
              Show Success
            </MantineButton>
          </div>
          
          <div>
            <Text size="sm" fw={500} mb="sm">4. Error Handling:</Text>
            <MantineButton onClick={() => setErrorOpened(true)} color="red" variant="outline" size="sm">
              Show Error
            </MantineButton>
          </div>
        </Stack>
        
        <Modal
          opened={infoOpened}
          onClose={() => setInfoOpened(false)}
          title="Information"
          size="sm"
        >
          <Text>
            This is an informational modal used to display important details to the user.
            It provides context without requiring any specific action.
          </Text>
        </Modal>
        
        <ConfirmationModal
          opened={warningOpened}
          onClose={() => setWarningOpened(false)}
          title="Warning"
          confirmLabel="Proceed Anyway"
          confirmVariant="primary"
          onConfirm={() => {
            console.log('User proceeded despite warning');
            setWarningOpened(false);
          }}
          onCancel={() => setWarningOpened(false)}
        >
          <Text>
            This action may have unintended consequences. Are you sure you want to continue?
          </Text>
        </ConfirmationModal>
        
        <Modal
          opened={successOpened}
          onClose={() => setSuccessOpened(false)}
          title="Success!"
          size="sm"
          actions={[
            {
              id: 'continue',
              label: 'Continue',
              variant: 'primary',
              closeOnClick: true,
            },
          ]}
        >
          <Text>
            Your action was completed successfully! You can now continue with your workflow.
          </Text>
        </Modal>
        
        <Modal
          opened={errorOpened}
          onClose={() => setErrorOpened(false)}
          title="Error Occurred"
          size="md"
          actions={[
            {
              id: 'retry',
              label: 'Try Again',
              variant: 'primary',
              onClick: () => {
                console.log('Retrying action...');
                setErrorOpened(false);
              },
            },
            {
              id: 'cancel',
              label: 'Cancel',
              variant: 'outline',
              closeOnClick: true,
            },
          ]}
          tertiaryActions={[
            {
              id: 'support',
              label: 'Contact Support',
              variant: 'default',
              onClick: () => alert('Opening support contact...'),
            },
          ]}
        >
          <Stack gap="sm">
            <Text>
              An error occurred while processing your request. Please try again or contact support if the problem persists.
            </Text>
            <Text size="sm" c="dimmed">
              Error Code: ERR_NETWORK_TIMEOUT
            </Text>
          </Stack>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Modal usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    opened: false,
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
        <MantineButton onClick={() => setOpened(true)}>
          Open Interactive Modal
        </MantineButton>
        
        <Modal
          {...args}
          opened={opened}
          onClose={() => setOpened(false)}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Modal and see different combinations.',
      },
    },
  },
}; 