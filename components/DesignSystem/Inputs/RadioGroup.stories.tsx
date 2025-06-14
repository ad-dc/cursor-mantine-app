import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';

const meta: Meta<typeof RadioGroup> = {
  title: 'Design System/Inputs/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RadioGroup component for selecting a single option from multiple choices with consistent styling and validation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'RadioGroup size',
    },
    label: {
      control: 'text',
      description: 'Group label',
    },
    description: {
      control: 'text',
      description: 'Group description',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    required: {
      control: 'boolean',
      description: 'Whether the group is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <RadioGroup label="Choose an option" value={value} onChange={setValue}>
        <Radio value="option1" label="First option" />
        <Radio value="option2" label="Second option" />
        <Radio value="option3" label="Third option" />
      </RadioGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [values, setValues] = useState({
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    });
    
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    
    return (
      <Stack gap="lg">
        {sizes.map(size => (
          <div key={size}>
            <Text size="sm" fw={500} mb="xs">{size.toUpperCase()}:</Text>
            <RadioGroup
              size={size}
              label={`${size.toUpperCase()} Radio Group`}
              value={values[size]}
              onChange={(val) => setValues(prev => ({ ...prev, [size]: val }))}
            >
              <Radio value="option1" label="First option" />
              <Radio value="option2" label="Second option" />
              <Radio value="option3" label="Third option" />
            </RadioGroup>
          </div>
        ))}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different sizes for the RadioGroup component.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <RadioGroup
        label="Subscription Plan"
        description="Choose the plan that best fits your needs"
        value={value}
        onChange={setValue}
      >
        <Radio value="basic" label="Basic - $9/month" />
        <Radio value="pro" label="Pro - $29/month" />
        <Radio value="enterprise" label="Enterprise - $99/month" />
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with descriptive text.',
      },
    },
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <RadioGroup
        label="Payment Method"
        description="Please select your preferred payment method"
        required
        value={value}
        onChange={setValue}
      >
        <Radio value="card" label="Credit Card" />
        <Radio value="paypal" label="PayPal" />
        <Radio value="bank" label="Bank Transfer" />
        <Radio value="crypto" label="Cryptocurrency" />
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Required RadioGroup with asterisk indicator.',
      },
    },
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <RadioGroup
        label="Delivery Option"
        description="Choose how you'd like to receive your order"
        error={!value ? "Please select a delivery option" : ""}
        required
        value={value}
        onChange={setValue}
      >
        <Radio value="standard" label="Standard Delivery (5-7 days)" />
        <Radio value="express" label="Express Delivery (2-3 days)" />
        <Radio value="overnight" label="Overnight Delivery" />
        <Radio value="pickup" label="Store Pickup" />
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with error validation.',
      },
    },
  },
};

export const DisabledStates: Story = {
  render: () => {
    const [value, setValue] = useState<string>('option2');
    
    return (
      <Stack gap="lg">
        <div>
          <Text size="sm" fw={500} mb="sm">Individual Options Disabled:</Text>
          <RadioGroup
            label="Mixed States"
            description="Some options are disabled"
            value={value}
            onChange={setValue}
          >
            <Radio value="option1" label="Available option" />
            <Radio value="option2" label="Selected option" />
            <Radio value="option3" label="Disabled option" disabled />
            <Radio value="option4" label="Another disabled option" disabled />
          </RadioGroup>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup with disabled individual options.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      priority: '',
      category: '',
      visibility: '',
    });
    
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formData.priority) newErrors.priority = 'Priority is required';
      if (!formData.category) newErrors.category = 'Category is required';
      if (!formData.visibility) newErrors.visibility = 'Visibility is required';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
      }
    };
    
    return (
      <Stack gap="lg" w={400}>
        <Title order={4} size="sm" fw={500}>Create New Task</Title>
        
        <RadioGroup
          label="Priority Level"
          description="Set the priority for this task"
          required
          error={errors.priority}
          value={formData.priority}
          onChange={(val) => setFormData(prev => ({ ...prev, priority: val }))}
        >
          <Radio value="low" label="🟢 Low Priority" />
          <Radio value="medium" label="🟡 Medium Priority" />
          <Radio value="high" label="🟠 High Priority" />
          <Radio value="urgent" label="🔴 Urgent" />
        </RadioGroup>
        
        <RadioGroup
          label="Category"
          description="Choose the task category"
          required
          error={errors.category}
          value={formData.category}
          onChange={(val) => setFormData(prev => ({ ...prev, category: val }))}
        >
          <Radio value="development" label="Development" />
          <Radio value="design" label="Design" />
          <Radio value="testing" label="Testing" />
          <Radio value="documentation" label="Documentation" />
        </RadioGroup>
        
        <RadioGroup
          label="Visibility"
          description="Who can see this task"
          required
          error={errors.visibility}
          value={formData.visibility}
          onChange={(val) => setFormData(prev => ({ ...prev, visibility: val }))}
        >
          <Radio value="private" label="Private (Only me)" />
          <Radio value="team" label="Team members" />
          <Radio value="public" label="Everyone" />
        </RadioGroup>
        
        <Button variant="primary" onClick={handleSubmit}>
          Create Task
        </Button>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup integrated in a form with validation.',
      },
    },
  },
};

export const SettingsConfiguration: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      theme: 'light',
      notifications: 'all',
      privacy: 'friends',
      language: 'en',
    });
    
    return (
      <Stack gap="xl" w={500}>
        <Title order={3} size="md" fw={500}>Settings</Title>
        
        <RadioGroup
          label="Theme Preference"
          description="Choose your preferred theme"
          value={settings.theme}
          onChange={(val) => setSettings(prev => ({ ...prev, theme: val }))}
        >
          <Radio value="light" label="☀️ Light Theme" />
          <Radio value="dark" label="🌙 Dark Theme" />
          <Radio value="auto" label="🔄 Auto (System)" />
        </RadioGroup>
        
        <RadioGroup
          label="Email Notifications"
          description="Control what notifications you receive"
          value={settings.notifications}
          onChange={(val) => setSettings(prev => ({ ...prev, notifications: val }))}
        >
          <Radio value="all" label="All notifications" />
          <Radio value="important" label="Important only" />
          <Radio value="mentions" label="Mentions and replies" />
          <Radio value="none" label="No notifications" />
        </RadioGroup>
        
        <RadioGroup
          label="Profile Visibility"
          description="Who can see your profile"
          value={settings.privacy}
          onChange={(val) => setSettings(prev => ({ ...prev, privacy: val }))}
        >
          <Radio value="public" label="🌍 Public" />
          <Radio value="friends" label="👥 Friends only" />
          <Radio value="private" label="🔒 Private" />
        </RadioGroup>
        
        <RadioGroup
          label="Language"
          description="Choose your preferred language"
          value={settings.language}
          onChange={(val) => setSettings(prev => ({ ...prev, language: val }))}
        >
          <Radio value="en" label="🇺🇸 English" />
          <Radio value="es" label="🇪🇸 Spanish" />
          <Radio value="fr" label="🇫🇷 French" />
          <Radio value="de" label="🇩🇪 German" />
        </RadioGroup>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup used for settings and configuration options.',
      },
    },
  },
};

export const SurveyQuestions: Story = {
  render: () => {
    const [answers, setAnswers] = useState({
      satisfaction: '',
      recommendation: '',
      frequency: '',
      improvement: '',
    });
    
    return (
      <Stack gap="xl" w={600}>
        <Title order={3} size="md" fw={500}>Customer Satisfaction Survey</Title>
        
        <RadioGroup
          label="How satisfied are you with our service?"
          required
          value={answers.satisfaction}
          onChange={(val) => setAnswers(prev => ({ ...prev, satisfaction: val }))}
        >
          <Radio value="very-satisfied" label="😊 Very Satisfied" />
          <Radio value="satisfied" label="🙂 Satisfied" />
          <Radio value="neutral" label="😐 Neutral" />
          <Radio value="dissatisfied" label="🙁 Dissatisfied" />
          <Radio value="very-dissatisfied" label="😞 Very Dissatisfied" />
        </RadioGroup>
        
        <RadioGroup
          label="How likely are you to recommend us to a friend?"
          description="Scale from 0 (not likely) to 10 (very likely)"
          required
          value={answers.recommendation}
          onChange={(val) => setAnswers(prev => ({ ...prev, recommendation: val }))}
        >
          <Inline gap="sm">
            {Array.from({ length: 11 }, (_, i) => (
              <Radio key={i} value={i.toString()} label={i.toString()} />
            ))}
          </Inline>
        </RadioGroup>
        
        <RadioGroup
          label="How often do you use our service?"
          required
          value={answers.frequency}
          onChange={(val) => setAnswers(prev => ({ ...prev, frequency: val }))}
        >
          <Radio value="daily" label="Daily" />
          <Radio value="weekly" label="Weekly" />
          <Radio value="monthly" label="Monthly" />
          <Radio value="rarely" label="Rarely" />
          <Radio value="first-time" label="This is my first time" />
        </RadioGroup>
        
        <RadioGroup
          label="What area needs the most improvement?"
          value={answers.improvement}
          onChange={(val) => setAnswers(prev => ({ ...prev, improvement: val }))}
        >
          <Radio value="speed" label="Speed and performance" />
          <Radio value="features" label="Features and functionality" />
          <Radio value="design" label="User interface design" />
          <Radio value="support" label="Customer support" />
          <Radio value="pricing" label="Pricing" />
          <Radio value="other" label="Other" />
        </RadioGroup>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup used in survey and questionnaire forms.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={700}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Payment Methods:</Text>
        <RadioGroup label="Payment Method" defaultValue="card">
          <Radio value="card" label="💳 Credit/Debit Card" />
          <Radio value="paypal" label="🅿️ PayPal" />
          <Radio value="apple" label="🍎 Apple Pay" />
          <Radio value="google" label="🔵 Google Pay" />
        </RadioGroup>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Shipping Options:</Text>
        <RadioGroup label="Delivery Speed" defaultValue="standard">
          <Radio value="standard" label="📦 Standard (5-7 days) - Free" />
          <Radio value="express" label="⚡ Express (2-3 days) - $9.99" />
          <Radio value="overnight" label="🚀 Overnight - $24.99" />
        </RadioGroup>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Account Types:</Text>
        <RadioGroup label="Account Type" defaultValue="personal">
          <Radio value="personal" label="👤 Personal Account" />
          <Radio value="business" label="🏢 Business Account" />
          <Radio value="enterprise" label="🏭 Enterprise Account" />
        </RadioGroup>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Contact Preferences:</Text>
        <RadioGroup label="Preferred Contact Method" defaultValue="email">
          <Radio value="email" label="📧 Email" />
          <Radio value="phone" label="📞 Phone" />
          <Radio value="sms" label="💬 SMS" />
          <Radio value="none" label="🚫 Do not contact" />
        </RadioGroup>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of RadioGroup usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive RadioGroup',
    description: 'Use the controls to modify this RadioGroup',
    required: false,
    size: 'md',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    
    return (
      <RadioGroup {...args} value={value} onChange={setValue}>
        <Radio value="option1" label="First option" />
        <Radio value="option2" label="Second option" />
        <Radio value="option3" label="Third option" />
      </RadioGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the RadioGroup and see different combinations.',
      },
    },
  },
}; 