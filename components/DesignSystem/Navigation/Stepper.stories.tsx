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
  tags: ['autodocs'],
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
    iconSize: {
      control: { type: 'number', min: 12, max: 32 },
      description: 'Icon size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicSteps = [
  { id: 'step1', label: 'Personal Info', description: 'Enter your details' },
  { id: 'step2', label: 'Payment', description: 'Add payment method' },
  { id: 'step3', label: 'Review', description: 'Confirm your order' },
  { id: 'step4', label: 'Complete', description: 'Order confirmation' },
];

export const Default: Story = {
  args: {
    steps: basicSteps,
    active: 1,
    orientation: 'horizontal',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="xl" w={600}>
      <div>
        <Text size="sm" fw={500} mb="sm">Extra Small (xs):</Text>
        <Stepper
          steps={basicSteps}
          active={1}
          size="xs"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Small (sm):</Text>
        <Stepper
          steps={basicSteps}
          active={1}
          size="sm"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Medium (md):</Text>
        <Stepper
          steps={basicSteps}
          active={1}
          size="md"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Large (lg):</Text>
        <Stepper
          steps={basicSteps}
          active={1}
          size="lg"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Extra Large (xl):</Text>
        <Stepper
          steps={basicSteps}
          active={1}
          size="xl"
        />
      </div>
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
  render: () => {
    const iconSteps = [
      { 
        id: 'user', 
        label: 'User Info', 
        description: 'Personal details',
        icon: <IconUser />,
        completedIcon: <IconCheck />
      },
      { 
        id: 'payment', 
        label: 'Payment', 
        description: 'Billing information',
        icon: <IconCreditCard />,
        completedIcon: <IconCheck />
      },
      { 
        id: 'shipping', 
        label: 'Shipping', 
        description: 'Delivery address',
        icon: <IconTruck />,
        completedIcon: <IconCheck />
      },
      { 
        id: 'review', 
        label: 'Review', 
        description: 'Order summary',
        icon: <IconShoppingCart />,
        completedIcon: <IconCheck />
      },
    ];

    return (
      <Stepper
        steps={iconSteps}
        active={2}
        size="lg"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Stepper with custom icons for each step and completion icons.',
      },
    },
  },
};

export const VerticalOrientation: Story = {
  render: () => {
    const verticalSteps = [
      { 
        id: 'setup', 
        label: 'Initial Setup', 
        description: 'Configure your account settings',
        icon: <IconSettings />
      },
      { 
        id: 'data', 
        label: 'Import Data', 
        description: 'Upload your existing data',
        icon: <IconDatabase />
      },
      { 
        id: 'upload', 
        label: 'Upload Files', 
        description: 'Add your documents and media',
        icon: <IconCloudUpload />
      },
      { 
        id: 'complete', 
        label: 'Complete', 
        description: 'Finish setup process',
        icon: <IconCheck />
      },
    ];

    return (
      <Paper variant="border">
        <Stepper
          steps={verticalSteps}
          active={1}
          orientation="vertical"
          size="md"
        />
      </Paper>
    );
  },
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
    
    const interactiveSteps = [
      { 
        id: 'contact', 
        label: 'Contact Info', 
        description: 'Email and phone',
        icon: <IconMail />,
        allowStepSelect: true
      },
      { 
        id: 'address', 
        label: 'Address', 
        description: 'Shipping details',
        icon: <IconMapPin />,
        allowStepSelect: true
      },
      { 
        id: 'security', 
        label: 'Security', 
        description: 'Password setup',
        icon: <IconLock />,
        allowStepSelect: true
      },
      { 
        id: 'verification', 
        label: 'Verification', 
        description: 'Confirm account',
        icon: <IconCheck />,
        allowStepSelect: false
      },
    ];

    const nextStep = () => setActiveStep((current) => 
      current < interactiveSteps.length - 1 ? current + 1 : current
    );
    
    const prevStep = () => setActiveStep((current) => 
      current > 0 ? current - 1 : current
    );

    return (
      <Stack gap="lg" w={600}>
        <Stepper
          steps={interactiveSteps}
          active={activeStep}
          onStepClick={setActiveStep}
          size="md"
        />
        
        <Inline justify="center" gap="md">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
          <Button 
            onClick={nextStep}
            disabled={activeStep === interactiveSteps.length - 1}
          >
            Next
          </Button>
        </Inline>
        
        <Text size="sm" ta="center" c="dimmed">
          Current step: {activeStep + 1} of {interactiveSteps.length}
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
    
    const checkoutSteps = [
      { 
        id: 'cart', 
        label: 'Shopping Cart', 
        description: 'Review items',
        icon: <IconShoppingCart />
      },
      { 
        id: 'shipping', 
        label: 'Shipping Info', 
        description: 'Delivery address',
        icon: <IconTruck />
      },
      { 
        id: 'payment', 
        label: 'Payment', 
        description: 'Billing details',
        icon: <IconCreditCard />
      },
      { 
        id: 'confirmation', 
        label: 'Order Complete', 
        description: 'Confirmation',
        icon: <IconPackage />
      },
    ];

    return (
      <Stack gap="lg" w={700}>
        <Title order={3} size="md" fw={500}>E-commerce Checkout Process</Title>
        
        <Stepper
          steps={checkoutSteps}
          active={currentStep}
          onStepClick={setCurrentStep}
          size="lg"
        />
        
        <Paper variant="border">
          <Text fw={500} mb="sm">
            Step {currentStep + 1}: {checkoutSteps[currentStep]?.label}
          </Text>
          <Text size="sm" c="dimmed">
            {checkoutSteps[currentStep]?.description}
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
  render: () => {
    const onboardingSteps = [
      { 
        id: 'welcome', 
        label: 'Welcome', 
        description: 'Get started',
        icon: <IconHome />
      },
      { 
        id: 'profile', 
        label: 'Create Profile', 
        description: 'Basic information',
        icon: <IconUser />
      },
      { 
        id: 'preferences', 
        label: 'Preferences', 
        description: 'Customize settings',
        icon: <IconSettings />
      },
      { 
        id: 'verification', 
        label: 'Verify Email', 
        description: 'Confirm account',
        icon: <IconMail />
      },
      { 
        id: 'complete', 
        label: 'All Set!', 
        description: 'Ready to go',
        icon: <IconCheck />
      },
    ];

    return (
      <Stack gap="lg" w={800}>
        <Title order={3} size="md" fw={500}>User Onboarding Flow</Title>
        
        <Stepper
          steps={onboardingSteps}
          active={2}
          size="md"
        />
        
        <Text size="sm" c="dimmed" ta="center">
          Complete your profile setup to get the most out of our platform
        </Text>
      </Stack>
    );
  },
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
    
    const wizardSteps = [
      { 
        id: 'basic', 
        label: 'Basic Info', 
        description: 'Name and contact',
        icon: <IconUser />
      },
      { 
        id: 'documents', 
        label: 'Documents', 
        description: 'Upload files',
        icon: <IconFileText />
      },
      { 
        id: 'schedule', 
        label: 'Schedule', 
        description: 'Pick a date',
        icon: <IconCalendar />
      },
      { 
        id: 'review', 
        label: 'Review', 
        description: 'Confirm details',
        icon: <IconCheck />
      },
    ];

    return (
      <Paper variant="border">
        <Stack gap="lg">
          <Title order={3} size="md" fw={500} ta="center">
            Application Form Wizard
          </Title>
          
          <Stepper
            steps={wizardSteps}
            active={wizardStep}
            onStepClick={setWizardStep}
            size="md"
          />
          
          <Inline justify="space-between" mt="lg">
            <Button 
              variant="outline"
              onClick={() => setWizardStep(s => Math.max(0, s - 1))}
              disabled={wizardStep === 0}
            >
              Back
            </Button>
            
            <Text size="sm" c="dimmed">
              Step {wizardStep + 1} of {wizardSteps.length}
            </Text>
            
            <Button 
              onClick={() => setWizardStep(s => Math.min(wizardSteps.length - 1, s + 1))}
              disabled={wizardStep === wizardSteps.length - 1}
            >
              {wizardStep === wizardSteps.length - 1 ? 'Submit' : 'Continue'}
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
  render: () => {
    const setupSteps = [
      { 
        id: 'project', 
        label: 'Project Details', 
        description: 'Name and description',
        icon: <IconFileText />
      },
      { 
        id: 'team', 
        label: 'Team Members', 
        description: 'Invite collaborators',
        icon: <IconUser />
      },
      { 
        id: 'settings', 
        label: 'Configuration', 
        description: 'Project settings',
        icon: <IconSettings />
      },
      { 
        id: 'deploy', 
        label: 'Deploy', 
        description: 'Go live',
        icon: <IconCloudUpload />
      },
    ];

    return (
      <Stack gap="lg" w={600}>
        <Inline gap="lg">
          <div style={{ flex: 1 }}>
            <Title order={3} size="md" fw={500} mb="sm">
              Horizontal Layout
            </Title>
            <Stepper
              steps={setupSteps}
              active={1}
              size="sm"
            />
          </div>
        </Inline>
        
        <Inline gap="lg" align="flex-start">
          <div>
            <Title order={3} size="md" fw={500} mb="sm">
              Vertical Layout
            </Title>
            <Paper variant="border">
              <Stepper
                steps={setupSteps}
                active={1}
                orientation="vertical"
                size="sm"
              />
            </Paper>
          </div>
        </Inline>
      </Stack>
    );
  },
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
        <Stepper
          steps={[
            { id: 'email', label: 'Email', description: 'Enter email address', icon: <IconMail /> },
            { id: 'password', label: 'Password', description: 'Create password', icon: <IconLock /> },
            { id: 'verify', label: 'Verify', description: 'Confirm email', icon: <IconCheck /> },
          ]}
          active={1}
          size="sm"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Order Fulfillment:</Text>
        <Stepper
          steps={[
            { id: 'order', label: 'Order Placed', icon: <IconShoppingCart /> },
            { id: 'processing', label: 'Processing', icon: <IconSettings /> },
            { id: 'shipped', label: 'Shipped', icon: <IconTruck /> },
            { id: 'delivered', label: 'Delivered', icon: <IconPackage /> },
          ]}
          active={2}
          size="sm"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Data Migration:</Text>
        <Stepper
          steps={[
            { id: 'backup', label: 'Backup', description: 'Create backup', icon: <IconDatabase /> },
            { id: 'transfer', label: 'Transfer', description: 'Move data', icon: <IconCloudUpload /> },
            { id: 'verify', label: 'Verify', description: 'Check integrity', icon: <IconCheck /> },
          ]}
          active={0}
          size="sm"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Multi-step Form:</Text>
        <Stepper
          steps={[
            { id: 'personal', label: 'Personal', icon: <IconUser /> },
            { id: 'contact', label: 'Contact', icon: <IconPhone /> },
            { id: 'address', label: 'Address', icon: <IconMapPin /> },
            { id: 'review', label: 'Review', icon: <IconFileText /> },
          ]}
          active={2}
          size="sm"
        />
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
    steps: basicSteps,
    active: 1,
    orientation: 'horizontal',
    size: 'md',
    iconSize: 18,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Stepper and see different combinations.',
      },
    },
  },
}; 