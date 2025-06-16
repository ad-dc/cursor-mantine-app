import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Alert } from './Alert';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { RiStarLine, RiShieldCheckLine, RiLightbulbLine, RiHeartLine } from '@remixicon/react';

const meta: Meta<typeof Alert> = {
  title: 'Design System/Data Display/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Alert component for displaying important messages with semantic types and consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'danger', 'pending', 'default'],
      description: 'Alert semantic type',
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    children: {
      control: 'text',
      description: 'Alert content',
    },
    withCloseButton: {
      control: 'boolean',
      description: 'Whether alert can be closed',
    },
    icon: {
      control: false,
      description: 'Custom icon (overrides default semantic icon)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'info',
    title: 'Information',
    children: 'This is an informational alert message.',
  },
};

export const Types: Story = {
  render: () => (
    <Stack gap="md" w={500}>
      <Alert type="info" title="Information">
        This is an informational alert with helpful details.
      </Alert>
      <Alert type="success" title="Success">
        Operation completed successfully! Your changes have been saved.
      </Alert>
      <Alert type="danger" title="Error">
        Something went wrong. Please check your input and try again.
      </Alert>
      <Alert type="pending" title="Processing">
        Your request is being processed. This may take a few moments.
      </Alert>
      <Alert type="default" title="Notice">
        This is a general notice with neutral styling.
      </Alert>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different semantic types of alerts with appropriate colors and icons.',
      },
    },
  },
};

export const WithoutTitles: Story = {
  render: () => (
    <Stack gap="md" w={500}>
      <Alert type="info">
        Quick info message without a title.
      </Alert>
      <Alert type="success">
        Success message without a title.
      </Alert>
      <Alert type="danger">
        Error message without a title.
      </Alert>
      <Alert type="pending">
        Processing message without a title.
      </Alert>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts without titles for simpler, more compact messages.',
      },
    },
  },
};

export const WithCloseButton: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      { id: 1, type: 'info' as const, title: 'Info Alert', message: 'This alert can be dismissed.' },
      { id: 2, type: 'success' as const, title: 'Success Alert', message: 'This success alert can also be closed.' },
      { id: 3, type: 'danger' as const, title: 'Error Alert', message: 'This error alert is dismissible.' },
    ]);

    const handleClose = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };

    return (
      <Stack gap="md" w={500}>
        {alerts.map(alert => (
          <Alert
            key={alert.id}
            type={alert.type}
            title={alert.title}
            withCloseButton
            onClose={() => handleClose(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}
        {alerts.length === 0 && (
          <Text size="sm" c="dimmed" ta="center">
            All alerts have been dismissed. Refresh to see them again.
          </Text>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Alerts with close buttons that can be dismissed by users.',
      },
    },
  },
};

export const CustomIcons: Story = {
  render: () => (
    <Stack gap="md" w={500}>
      <Alert type="info" title="Featured Content" icon={<RiStarLine size={20} />}>
        This content has been featured and uses a custom star icon.
      </Alert>
      <Alert type="success" title="Secure Connection" icon={<RiShieldCheckLine size={20} />}>
        Your connection is secure and protected.
      </Alert>
      <Alert type="pending" title="Pro Tip" icon={<RiLightbulbLine size={20} />}>
        Here's a helpful tip to improve your workflow.
      </Alert>
      <Alert type="danger" title="Favorites" icon={<RiHeartLine size={20} />}>
        This item has been added to your favorites.
      </Alert>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with custom icons that override the default semantic icons.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <Stack gap="md">
        <Alert type="info" title="System Maintenance">
          Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable.
        </Alert>
        
        <Alert type="success" title="Profile Updated" withCloseButton>
          Your profile information has been successfully updated and saved.
        </Alert>
        
        <Alert type="danger" title="Payment Failed">
          Your payment could not be processed. Please check your payment method and try again.
        </Alert>
        
        <Alert type="pending" title="File Upload in Progress">
          Uploading your files... Please don't close this window until the upload is complete.
        </Alert>
        
        <Alert type="info" title="New Features Available" withCloseButton>
          We've added new features to improve your experience. Check out the latest updates in your dashboard.
        </Alert>
        
        <Alert type="danger" title="Account Security Alert">
          We detected unusual activity on your account. Please review your recent activity and update your password if necessary.
        </Alert>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Alert usage in different application contexts.',
      },
    },
  },
};

export const FormValidation: Story = {
  render: () => (
    <Stack gap="md" w={500}>
      <Title order={4} size="sm" fw={500} mb="xs">Form Validation Examples</Title>
      
      <Alert type="danger" title="Form Validation Error">
        Please correct the following errors before submitting:
        <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
          <li>Email address is required</li>
          <li>Password must be at least 8 characters</li>
          <li>Phone number format is invalid</li>
        </ul>
      </Alert>
      
      <Alert type="success" title="Form Submitted Successfully">
        Thank you! Your form has been submitted and we'll get back to you within 24 hours.
      </Alert>
      
      <Alert type="pending" title="Validating Information">
        We're checking your information against our records. This may take a moment.
      </Alert>
      
      <Alert type="info" title="Required Fields">
        Fields marked with an asterisk (*) are required to complete your registration.
      </Alert>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of alerts used for form validation and user feedback.',
      },
    },
  },
};

export const LongContent: Story = {
  render: () => (
    <Stack gap="md" w={600}>
      <Alert type="info" title="Terms of Service Update">
        We've updated our Terms of Service to better protect your privacy and clarify our data usage policies. 
        The changes include new sections on data retention, third-party integrations, and user rights. 
        Please review the updated terms at your earliest convenience. By continuing to use our service, 
        you agree to the updated terms. If you have any questions or concerns, please contact our support team.
      </Alert>
      
      <Alert type="danger" title="Critical Security Update Required">
        A critical security vulnerability has been discovered that affects your account. 
        To protect your data and maintain the security of our platform, you must update your password 
        and enable two-factor authentication immediately. Failure to complete these security measures 
        within 48 hours may result in temporary account suspension for your protection.
      </Alert>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of alerts with longer content that wrap appropriately.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    type: 'info',
    title: 'Interactive Alert',
    children: 'Use the controls below to customize this alert.',
    withCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Alert and see different combinations.',
      },
    },
  },
}; 