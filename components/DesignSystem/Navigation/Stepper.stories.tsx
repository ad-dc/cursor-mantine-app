import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Stepper } from './Stepper';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';
import { Paper } from '../Misc/Paper';
import { 
  IconUser, 
  IconCreditCard, 
  IconCheck, 
  IconShoppingCart,
  IconTruck,
  IconPackage,
  IconHome,
  IconSettings,
  IconDatabase,
  IconCloudUpload,
  IconMail,
  IconPhone,
  IconLock,
  IconFileText,
  IconCalendar,
  IconMapPin
} from '@tabler/icons-react';

const meta: Meta<typeof Stepper> = {
  title: 'Design System/Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stepper component for multi-step processes with progress indication and navigation.',
      },
    },
  },
  tags: ['autodocs', 'code-connected'],
  argTypes: {
    active: {
      control: { type: 'number', min: 0, max: 4 },
      description: 'Currently active step index (0-based)',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Stepper orientation',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Stepper size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: 1,
    orientation: 'horizontal',
    size: 'md',
  },
  render: (args) => (
    <Stepper {...args}>
      <Stepper.Step label="Personal Info" description="Enter your details" />
      <Stepper.Step label="Payment" description="Add payment method" />
      <Stepper.Step label="Review" description="Confirm your order" />
      <Stepper.Step label="Complete" description="Order confirmation" />
    </Stepper>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="xl" w={600}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <Text size="sm" fw={500} mb="sm">{size.toUpperCase()}:</Text>
          <Stepper active={1} size={size}>
            <Stepper.Step label="Personal Info" description="Enter your details" />
            <Stepper.Step label="Payment" description="Add payment method" />
            <Stepper.Step label="Review" description="Confirm your order" />
            <Stepper.Step label="Complete" description="Order confirmation" />
          </Stepper>
        </div>
      ))}
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stepper component in different sizes.',
      },
    },
  },
};

export const WithCustomIcons: Story = {
  render: () => (
    <Stepper active={2} size="lg">
      <Stepper.Step label="User Info" description="Personal details" icon={<IconUser />} completedIcon={<IconCheck />} />
      <Stepper.Step label="Payment" description="Billing information" icon={<IconCreditCard />} completedIcon={<IconCheck />} />
      <Stepper.Step label="Shipping" description="Delivery address" icon={<IconTruck />} completedIcon={<IconCheck />} />
      <Stepper.Step label="Review" description="Order summary" icon={<IconShoppingCart />} completedIcon={<IconCheck />} />
    </Stepper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stepper with custom icons for each step and completion icons.',
      },
    },
  },
};

export const VerticalOrientation: Story = {
  render: () => (
    <Paper variant="border">
      <Stepper active={1} orientation="vertical" size="md">
        <Stepper.Step label="Initial Setup" description="Configure your account settings" icon={<IconSettings />} />
        <Stepper.Step label="Import Data" description="Upload your existing data" icon={<IconDatabase />} />
        <Stepper.Step label="Upload Files" description="Add your documents and media" icon={<IconCloudUpload />} />
        <Stepper.Step label="Complete" description="Finish setup process" icon={<IconCheck />} />
      </Stepper>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stepper in vertical orientation, useful for sidebar navigation or detailed processes.',
      },
    },
  },
};

export const InteractiveStepper: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const totalSteps = 4;

    return (
      <Stack gap="lg" w={600}>
        <Stepper active={activeStep} onStepClick={setActiveStep} size="md">
          <Stepper.Step label="Contact Info" description="Email and phone" icon={<IconMail />} allowStepSelect />
          <Stepper.Step label="Address" description="Shipping details" icon={<IconMapPin />} allowStepSelect />
          <Stepper.Step label="Security" description="Password setup" icon={<IconLock />} allowStepSelect />
          <Stepper.Step label="Verification" description="Confirm account" icon={<IconCheck />} allowStepSelect={false} />
        </Stepper>
        
        <Inline justify="center" gap="md">
          <Button 
            variant="outline" 
            onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
          <Button 
            onClick={() => setActiveStep((s) => Math.min(totalSteps - 1, s + 1))}
            disabled={activeStep === totalSteps - 1}
          >
            Next
          </Button>
        </Inline>
        
        <Text size="sm" ta="center" c="dimmed">
          Current step: {activeStep + 1} of {totalSteps}
        </Text>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive stepper with navigation controls and clickable steps.',
      },
    },
  },
};

export const EcommerceCheckout: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const stepLabels = ['Shopping Cart', 'Shipping Info', 'Payment', 'Order Complete'];

    return (
      <Stack gap="lg" w={700}>
        <Title order={3} size="md" fw={500}>E-commerce Checkout Process</Title>
        
        <Stepper active={currentStep} onStepClick={setCurrentStep} size="lg">
          <Stepper.Step label="Shopping Cart" description="Review items" icon={<IconShoppingCart />} />
          <Stepper.Step label="Shipping Info" description="Delivery address" icon={<IconTruck />} />
          <Stepper.Step label="Payment" description="Billing details" icon={<IconCreditCard />} />
          <Stepper.Step label="Order Complete" description="Confirmation" icon={<IconPackage />} />
        </Stepper>
        
        <Paper variant="border">
          <Text fw={500} mb="sm">
            Step {currentStep + 1}: {stepLabels[currentStep]}
          </Text>
          <Text size="sm" c="dimmed">
            Content for this step goes here.
          </Text>
        </Paper>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'E-commerce checkout process stepper with order flow visualization.',
      },
    },
  },
};

export const OnboardingFlow: Story = {
  render: () => (
    <Stack gap="lg" w={800}>
      <Title order={3} size="md" fw={500}>User Onboarding Flow</Title>
      
      <Stepper active={2} size="md">
        <Stepper.Step label="Welcome" description="Get started" icon={<IconHome />} />
        <Stepper.Step label="Create Profile" description="Basic information" icon={<IconUser />} />
        <Stepper.Step label="Preferences" description="Customize settings" icon={<IconSettings />} />
        <Stepper.Step label="Verify Email" description="Confirm account" icon={<IconMail />} />
        <Stepper.Step label="All Set!" description="Ready to go" icon={<IconCheck />} />
      </Stepper>
      
      <Text size="sm" c="dimmed" ta="center">
        Complete your profile setup to get the most out of our platform
      </Text>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'User onboarding flow with multiple steps and progress indication.',
      },
    },
  },
};

export const FormWizard: Story = {
  render: () => {
    const [wizardStep, setWizardStep] = useState(0);
    const totalSteps = 4;

    return (
      <Paper variant="border">
        <Stack gap="lg">
          <Title order={3} size="md" fw={500} ta="center">
            Application Form Wizard
          </Title>
          
          <Stepper active={wizardStep} onStepClick={setWizardStep} size="md">
            <Stepper.Step label="Basic Info" description="Name and contact" icon={<IconUser />} />
            <Stepper.Step label="Documents" description="Upload files" icon={<IconFileText />} />
            <Stepper.Step label="Schedule" description="Pick a date" icon={<IconCalendar />} />
            <Stepper.Step label="Review" description="Confirm details" icon={<IconCheck />} />
          </Stepper>
          
          <Inline justify="space-between" mt="lg">
            <Button 
              variant="outline"
              onClick={() => setWizardStep(s => Math.max(0, s - 1))}
              disabled={wizardStep === 0}
            >
              Back
            </Button>
            
            <Text size="sm" c="dimmed">
              Step {wizardStep + 1} of {totalSteps}
            </Text>
            
            <Button 
              onClick={() => setWizardStep(s => Math.min(totalSteps - 1, s + 1))}
              disabled={wizardStep === totalSteps - 1}
            >
              {wizardStep === totalSteps - 1 ? 'Submit' : 'Continue'}
            </Button>
          </Inline>
        </Stack>
      </Paper>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Form wizard with step navigation and progress tracking.',
      },
    },
  },
};

export const ProjectSetup: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Inline gap="lg">
        <div style={{ flex: 1 }}>
          <Title order={3} size="md" fw={500} mb="sm">
            Horizontal Layout
          </Title>
          <Stepper active={1} size="sm">
            <Stepper.Step label="Project Details" description="Name and description" icon={<IconFileText />} />
            <Stepper.Step label="Team Members" description="Invite collaborators" icon={<IconUser />} />
            <Stepper.Step label="Configuration" description="Project settings" icon={<IconSettings />} />
            <Stepper.Step label="Deploy" description="Go live" icon={<IconCloudUpload />} />
          </Stepper>
        </div>
      </Inline>
      
      <Inline gap="lg" align="flex-start">
        <div>
          <Title order={3} size="md" fw={500} mb="sm">
            Vertical Layout
          </Title>
          <Paper variant="border">
            <Stepper active={1} orientation="vertical" size="sm">
              <Stepper.Step label="Project Details" description="Name and description" icon={<IconFileText />} />
              <Stepper.Step label="Team Members" description="Invite collaborators" icon={<IconUser />} />
              <Stepper.Step label="Configuration" description="Project settings" icon={<IconSettings />} />
              <Stepper.Step label="Deploy" description="Go live" icon={<IconCloudUpload />} />
            </Stepper>
          </Paper>
        </div>
      </Inline>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Project setup process showing both horizontal and vertical orientations.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={800}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Account Registration:</Text>
        <Stepper active={1} size="sm">
          <Stepper.Step label="Email" description="Enter email address" icon={<IconMail />} />
          <Stepper.Step label="Password" description="Create password" icon={<IconLock />} />
          <Stepper.Step label="Verify" description="Confirm email" icon={<IconCheck />} />
        </Stepper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Order Fulfillment:</Text>
        <Stepper active={2} size="sm">
          <Stepper.Step label="Order Placed" icon={<IconShoppingCart />} />
          <Stepper.Step label="Processing" icon={<IconSettings />} />
          <Stepper.Step label="Shipped" icon={<IconTruck />} />
          <Stepper.Step label="Delivered" icon={<IconPackage />} />
        </Stepper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Data Migration:</Text>
        <Stepper active={0} size="sm">
          <Stepper.Step label="Backup" description="Create backup" icon={<IconDatabase />} />
          <Stepper.Step label="Transfer" description="Move data" icon={<IconCloudUpload />} />
          <Stepper.Step label="Verify" description="Check integrity" icon={<IconCheck />} />
        </Stepper>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Multi-step Form:</Text>
        <Stepper active={2} size="sm">
          <Stepper.Step label="Personal" icon={<IconUser />} />
          <Stepper.Step label="Contact" icon={<IconPhone />} />
          <Stepper.Step label="Address" icon={<IconMapPin />} />
          <Stepper.Step label="Review" icon={<IconFileText />} />
        </Stepper>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Stepper usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    active: 1,
    orientation: 'horizontal',
    size: 'md',
  },
  render: (args) => (
    <Stepper {...args}>
      <Stepper.Step label="Personal Info" description="Enter your details" />
      <Stepper.Step label="Payment" description="Add payment method" />
      <Stepper.Step label="Review" description="Confirm your order" />
      <Stepper.Step label="Complete" description="Order confirmation" />
    </Stepper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Stepper and see different combinations.',
      },
    },
  },
};
