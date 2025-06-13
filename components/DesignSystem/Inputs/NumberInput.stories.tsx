import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { NumberInput } from './NumberInput';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof NumberInput> = {
  title: 'Design System/Inputs/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NumberInput component for numeric values with consistent design system styling and validation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    required: {
      control: 'boolean',
      description: 'Required field (shows asterisk)',
    },
    showOptional: {
      control: 'boolean',
      description: 'Show "(Optional)" text after label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    description: {
      control: 'text',
      description: 'Help text below input',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    prefix: {
      control: 'text',
      description: 'Prefix symbol (e.g., $)',
    },
    suffix: {
      control: 'text',
      description: 'Suffix symbol (e.g., %)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Quantity',
    placeholder: 'Enter a number',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <NumberInput size="xs" label="Extra Small" placeholder="xs size" />
      <NumberInput size="sm" label="Small" placeholder="sm size" />
      <NumberInput size="md" label="Medium" placeholder="md size (default)" />
      <NumberInput size="lg" label="Large" placeholder="lg size" />
      <NumberInput size="xl" label="Extra Large" placeholder="xl size" />
    </Stack>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <NumberInput label="Required Field" placeholder="This field is required" required />
      <NumberInput label="Optional Field" placeholder="This field is optional" showOptional />
      <NumberInput placeholder="No label" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <NumberInput label="Default" placeholder="Enter number" />
      <NumberInput label="Disabled" placeholder="Disabled input" disabled />
      <NumberInput label="With Error" placeholder="Enter number" error="Please enter a valid number" />
      <NumberInput label="With Value" defaultValue={42} />
    </Stack>
  ),
};

export const WithConstraints: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <NumberInput 
        label="Rating (1-10)" 
        placeholder="Rate from 1 to 10"
        min={1}
        max={10}
        defaultValue={5}
        description="Use the controls or type a number"
      />
      <NumberInput 
        label="Price" 
        placeholder="0.00"
        min={0}
        step={0.01}
        decimalScale={2}
        fixedDecimalScale
        prefix="$"
        description="Enter price in dollars"
      />
      <NumberInput 
        label="Percentage" 
        placeholder="0"
        min={0}
        max={100}
        suffix="%"
        description="Enter percentage (0-100)"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'NumberInput with various constraints like min/max values, step increments, and formatting.',
      },
    },
  },
};

export const FormattingExamples: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <NumberInput 
        label="Currency" 
        placeholder="0.00"
        prefix="$"
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator=","
        defaultValue={1234.56}
      />
      <NumberInput 
        label="Percentage" 
        placeholder="0"
        suffix="%"
        min={0}
        max={100}
        defaultValue={75}
      />
      <NumberInput 
        label="Weight" 
        placeholder="0"
        suffix=" kg"
        step={0.1}
        decimalScale={1}
        defaultValue={68.5}
      />
      <NumberInput 
        label="Temperature" 
        placeholder="0"
        suffix="°C"
        step={0.5}
        defaultValue={22.5}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of NumberInput with different formatting options like prefixes, suffixes, and decimal places.',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [quantity, setQuantity] = useState<number | string>(1);
    const [price, setPrice] = useState<number | string>(9.99);
    const [discount, setDiscount] = useState<number | string>(10);
    
    const total = typeof quantity === 'number' && typeof price === 'number' && typeof discount === 'number'
      ? (quantity * price * (1 - discount / 100)).toFixed(2)
      : '0.00';
    
    return (
      <Stack gap="md" w={300}>
        <NumberInput
          label="Quantity"
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={99}
        />
        <NumberInput
          label="Unit Price"
          value={price}
          onChange={setPrice}
          prefix="$"
          min={0}
          step={0.01}
          decimalScale={2}
          fixedDecimalScale
        />
        <NumberInput
          label="Discount"
          value={discount}
          onChange={setDiscount}
          suffix="%"
          min={0}
          max={50}
        />
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)'
        }}>
          <Text size="sm" fw={500} mb="xs">Order Summary:</Text>
          <Text size="sm">Quantity: {quantity}</Text>
          <Text size="sm">Unit Price: ${typeof price === 'number' ? price.toFixed(2) : '0.00'}</Text>
          <Text size="sm">Discount: {discount}%</Text>
          <Text size="sm" fw={600} mt="xs">Total: ${total}</Text>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled NumberInput components with state management and calculations.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <Title order={3} size="md" fw={500} mb="xs">Product Information</Title>
      
      <NumberInput
        label="Product ID"
        placeholder="Enter product ID"
        required
        min={1}
        description="Unique identifier for the product"
      />
      <NumberInput
        label="Price"
        placeholder="0.00"
        prefix="$"
        required
        min={0}
        step={0.01}
        decimalScale={2}
        fixedDecimalScale
        description="Product price in USD"
      />
      <NumberInput
        label="Stock Quantity"
        placeholder="0"
        required
        min={0}
        description="Available inventory count"
      />
      <NumberInput
        label="Weight"
        placeholder="0.0"
        suffix=" kg"
        min={0}
        step={0.1}
        decimalScale={1}
        showOptional
        description="Product weight for shipping"
      />
      <NumberInput
        label="Discount"
        placeholder="0"
        suffix="%"
        min={0}
        max={100}
        showOptional
        description="Discount percentage (if applicable)"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of NumberInput components used in a product form layout.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive NumberInput',
    placeholder: 'Enter a number...',
    size: 'md',
    min: 0,
    max: 100,
    step: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the NumberInput and see different combinations.',
      },
    },
  },
}; 