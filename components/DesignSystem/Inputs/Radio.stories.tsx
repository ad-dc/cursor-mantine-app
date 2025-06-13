import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Radio> = {
  title: 'Design System/Inputs/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Radio component with consistent design system styling and t-shirt sizing. Use RadioGroup for multiple options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Radio size',
    },
    label: {
      control: 'text',
      description: 'Radio label',
    },
    value: {
      control: 'text',
      description: 'Radio value',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Required field indicator',
    },
    description: {
      control: 'text',
      description: 'Help text below the radio',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select this option',
    value: 'option1',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Radio size="xs" label="Extra Small" value="xs" />
      <Radio size="sm" label="Small" value="sm" />
      <Radio size="md" label="Medium (Default)" value="md" />
      <Radio size="lg" label="Large" value="lg" />
      <Radio size="xl" label="Extra Large" value="xl" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Radio label="Unchecked" value="unchecked" />
      <Radio label="Checked" value="checked" checked />
      <Radio label="Disabled" value="disabled" disabled />
      <Radio label="Disabled Checked" value="disabled-checked" disabled checked />
    </Stack>
  ),
};

export const BasicRadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    
    return (
      <RadioGroup
        label="Choose an option"
        value={value}
        onChange={setValue}
      >
        <Stack gap="xs">
          <Radio value="option1" label="First option" />
          <Radio value="option2" label="Second option" />
          <Radio value="option3" label="Third option" />
        </Stack>
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic RadioGroup with multiple options.',
      },
    },
  },
};

export const RadioGroupSizes: Story = {
  render: () => {
    const [value, setValue] = useState('medium');
    
    return (
      <Stack gap="lg">
        <RadioGroup
          label="Extra Small"
          size="xs"
          value={value}
          onChange={setValue}
        >
          <Stack gap="xs">
            <Radio value="xs1" label="Option 1" />
            <Radio value="xs2" label="Option 2" />
          </Stack>
        </RadioGroup>
        
        <RadioGroup
          label="Small"
          size="sm"
          value={value}
          onChange={setValue}
        >
          <Stack gap="xs">
            <Radio value="sm1" label="Option 1" />
            <Radio value="sm2" label="Option 2" />
          </Stack>
        </RadioGroup>
        
        <RadioGroup
          label="Medium (Default)"
          size="md"
          value={value}
          onChange={setValue}
        >
          <Stack gap="xs">
            <Radio value="md1" label="Option 1" />
            <Radio value="md2" label="Option 2" />
          </Stack>
        </RadioGroup>
        
        <RadioGroup
          label="Large"
          size="lg"
          value={value}
          onChange={setValue}
        >
          <Stack gap="xs">
            <Radio value="lg1" label="Option 1" />
            <Radio value="lg2" label="Option 2" />
          </Stack>
        </RadioGroup>
      </Stack>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [plan, setPlan] = useState('basic');
    
    return (
      <RadioGroup
        label="Subscription Plan"
        description="Choose the plan that best fits your needs"
        value={plan}
        onChange={setPlan}
      >
        <Stack gap="xs">
          <Radio 
            value="basic" 
            label="Basic Plan" 
            description="Perfect for individuals - $9/month"
          />
          <Radio 
            value="pro" 
            label="Pro Plan" 
            description="Great for small teams - $29/month"
          />
          <Radio 
            value="enterprise" 
            label="Enterprise Plan" 
            description="For large organizations - $99/month"
          />
        </Stack>
      </RadioGroup>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [payment, setPayment] = useState('');
    
    return (
      <RadioGroup
        label="Payment Method"
        description="Please select your preferred payment method"
        value={payment}
        onChange={setPayment}
        required
      >
        <Stack gap="xs">
          <Radio value="card" label="Credit Card" />
          <Radio value="paypal" label="PayPal" />
          <Radio value="bank" label="Bank Transfer" />
          <Radio value="crypto" label="Cryptocurrency" />
        </Stack>
      </RadioGroup>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [accountType, setAccountType] = useState('personal');
    const [plan, setPlan] = useState('basic');
    const [billing, setBilling] = useState('monthly');
    
    return (
      <div style={{ 
        maxWidth: '500px', 
        padding: '24px', 
        border: '1px solid var(--mantine-color-gray-3)',
        borderRadius: '12px',
        backgroundColor: 'white'
      }}>
        <Title order={3} mb="lg">Account Setup</Title>
        
        <Stack gap="lg">
          <RadioGroup
            label="Account Type"
            value={accountType}
            onChange={setAccountType}
            required
          >
            <Stack gap="xs">
              <Radio 
                value="personal" 
                label="Personal Account" 
                description="For individual use"
              />
              <Radio 
                value="business" 
                label="Business Account" 
                description="For teams and organizations"
              />
            </Stack>
          </RadioGroup>
          
          <RadioGroup
            label="Plan Selection"
            value={plan}
            onChange={setPlan}
            required
          >
            <Stack gap="xs">
              <Radio value="basic" label="Basic - Free" />
              <Radio value="pro" label="Pro - $19/month" />
              <Radio value="enterprise" label="Enterprise - $49/month" />
            </Stack>
          </RadioGroup>
          
          <RadioGroup
            label="Billing Cycle"
            value={billing}
            onChange={setBilling}
          >
            <Stack gap="xs">
              <Radio 
                value="monthly" 
                label="Monthly" 
                description="Pay monthly, cancel anytime"
              />
              <Radio 
                value="yearly" 
                label="Yearly" 
                description="Save 20% with annual billing"
              />
            </Stack>
          </RadioGroup>
        </Stack>
        
        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px'
        }}>
          <Text size="sm" fw={500} mb="xs">Selected Configuration:</Text>
          <Text size="sm">Account: {accountType}</Text>
          <Text size="sm">Plan: {plan}</Text>
          <Text size="sm">Billing: {billing}</Text>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of Radio components used in a form layout.',
      },
    },
  },
};

export const SurveyExample: Story = {
  render: () => {
    const [satisfaction, setSatisfaction] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [frequency, setFrequency] = useState('');
    
    return (
      <div style={{ 
        maxWidth: '600px', 
        padding: '24px', 
        border: '1px solid var(--mantine-color-gray-3)',
        borderRadius: '12px',
        backgroundColor: 'white'
      }}>
        <Title order={3} mb="lg">Customer Feedback Survey</Title>
        
        <Stack gap="lg">
          <RadioGroup
            label="How satisfied are you with our service?"
            value={satisfaction}
            onChange={setSatisfaction}
            required
          >
            <Stack gap="xs">
              <Radio value="very-satisfied" label="Very Satisfied" />
              <Radio value="satisfied" label="Satisfied" />
              <Radio value="neutral" label="Neutral" />
              <Radio value="dissatisfied" label="Dissatisfied" />
              <Radio value="very-dissatisfied" label="Very Dissatisfied" />
            </Stack>
          </RadioGroup>
          
          <RadioGroup
            label="Would you recommend us to others?"
            value={recommendation}
            onChange={setRecommendation}
            required
          >
            <Stack gap="xs">
              <Radio value="definitely" label="Definitely" />
              <Radio value="probably" label="Probably" />
              <Radio value="maybe" label="Maybe" />
              <Radio value="probably-not" label="Probably Not" />
              <Radio value="definitely-not" label="Definitely Not" />
            </Stack>
          </RadioGroup>
          
          <RadioGroup
            label="How often do you use our service?"
            value={frequency}
            onChange={setFrequency}
          >
            <Stack gap="xs">
              <Radio value="daily" label="Daily" />
              <Radio value="weekly" label="Weekly" />
              <Radio value="monthly" label="Monthly" />
              <Radio value="rarely" label="Rarely" />
              <Radio value="first-time" label="This is my first time" />
            </Stack>
          </RadioGroup>
        </Stack>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of Radio components used in a survey or questionnaire.',
      },
    },
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <RadioGroup
        label="Required Selection"
        description="You must select one option to continue"
        value={value}
        onChange={setValue}
        error={!value ? "Please select an option" : null}
        required
      >
        <Stack gap="xs">
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
        </Stack>
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with error state when no option is selected.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Radio',
    value: 'interactive',
    size: 'md',
    checked: false,
    disabled: false,
    required: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Radio and see different combinations.',
      },
    },
  },
}; 