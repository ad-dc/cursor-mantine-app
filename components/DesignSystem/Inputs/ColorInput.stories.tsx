import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { ColorInput } from './ColorInput';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof ColorInput> = {
  title: 'Design System/Inputs/ColorInput',
  component: ColorInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ColorInput component for color selection with consistent design system styling and multiple format support.',
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
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'rgba', 'hsl', 'hsla'],
      description: 'Color format',
    },
    withPicker: {
      control: 'boolean',
      description: 'Show color picker dropdown',
    },
    withEyeDropper: {
      control: 'boolean',
      description: 'Show eye dropper tool',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Color',
    placeholder: 'Pick a color',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <ColorInput size="xs" label="Extra Small" placeholder="Pick color" />
      <ColorInput size="sm" label="Small" placeholder="Pick color" />
      <ColorInput size="md" label="Medium" placeholder="Pick color" />
      <ColorInput size="lg" label="Large" placeholder="Pick color" />
      <ColorInput size="xl" label="Extra Large" placeholder="Pick color" />
    </Stack>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <ColorInput label="Required Color" placeholder="Pick a color" required />
      <ColorInput label="Optional Color" placeholder="Pick a color" showOptional />
      <ColorInput placeholder="No label" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md" w={300}>
      <ColorInput label="Default" placeholder="Pick a color" />
      <ColorInput label="Disabled" placeholder="Disabled input" disabled />
      <ColorInput label="With Error" placeholder="Pick a color" error="Invalid color format" />
      <ColorInput label="With Value" defaultValue="#3b82f6" />
    </Stack>
  ),
};

export const Formats: Story = {
  render: () => (
    <Stack gap="md" w={350}>
      <ColorInput 
        label="HEX Format" 
        placeholder="#000000"
        format="hex"
        description="Hexadecimal color format"
        defaultValue="#3b82f6"
      />
      <ColorInput 
        label="RGB Format" 
        placeholder="rgb(0, 0, 0)"
        format="rgb"
        description="RGB color format"
        defaultValue="rgb(59, 130, 246)"
      />
      <ColorInput 
        label="RGBA Format" 
        placeholder="rgba(0, 0, 0, 1)"
        format="rgba"
        description="RGBA color format with alpha"
        defaultValue="rgba(59, 130, 246, 0.8)"
      />
      <ColorInput 
        label="HSL Format" 
        placeholder="hsl(0, 0%, 0%)"
        format="hsl"
        description="HSL color format"
        defaultValue="hsl(217, 91%, 60%)"
      />
      <ColorInput 
        label="HSLA Format" 
        placeholder="hsla(0, 0%, 0%, 1)"
        format="hsla"
        description="HSLA color format with alpha"
        defaultValue="hsla(217, 91%, 60%, 0.9)"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ColorInput with different color formats (HEX, RGB, RGBA, HSL, HSLA).',
      },
    },
  },
};

export const WithSwatches: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <ColorInput
        label="Brand Colors"
        placeholder="Select brand color"
        swatches={[
          '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
          '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
        ]}
        description="Choose from predefined brand colors"
      />
      <ColorInput
        label="Material Colors"
        placeholder="Select material color"
        swatches={[
          '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
          '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50',
          '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800'
        ]}
        description="Material Design color palette"
      />
      <ColorInput
        label="Grayscale"
        placeholder="Select gray shade"
        swatches={[
          '#000000', '#212121', '#424242', '#616161', '#757575',
          '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#f5f5f5'
        ]}
        description="Grayscale color options"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ColorInput with predefined color swatches for quick selection.',
      },
    },
  },
};

export const Features: Story = {
  render: () => (
    <Stack gap="md" w={350}>
      <ColorInput
        label="With Color Picker"
        placeholder="Pick a color"
        withPicker={true}
        description="Includes color picker dropdown"
      />
      <ColorInput
        label="With Eye Dropper"
        placeholder="Pick a color"
        withEyeDropper={true}
        description="Includes eye dropper tool"
      />
      <ColorInput
        label="Full Featured"
        placeholder="Pick a color"
        withPicker={true}
        withEyeDropper={true}
        swatches={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']}
        description="All features enabled"
      />
      <ColorInput
        label="Input Only"
        placeholder="Enter color manually"
        withPicker={false}
        description="Manual input only, no picker"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ColorInput with different feature combinations (picker, eye dropper, swatches).',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [primaryColor, setPrimaryColor] = useState('#3b82f6');
    const [secondaryColor, setSecondaryColor] = useState('#10b981');
    const [accentColor, setAccentColor] = useState('#f59e0b');
    const [backgroundColor, setBackgroundColor] = useState('#f8fafc');
    
    return (
      <Stack gap="lg" w={400}>
        <ColorInput
          label="Primary Color"
          value={primaryColor}
          onChange={setPrimaryColor}
          format="hex"
          withPicker
          swatches={['#3b82f6', '#1d4ed8', '#2563eb', '#1e40af']}
          description="Main brand color"
        />
        
        <ColorInput
          label="Secondary Color"
          value={secondaryColor}
          onChange={setSecondaryColor}
          format="hex"
          withPicker
          swatches={['#10b981', '#059669', '#047857', '#065f46']}
          description="Secondary brand color"
        />
        
        <ColorInput
          label="Accent Color"
          value={accentColor}
          onChange={setAccentColor}
          format="hex"
          withPicker
          swatches={['#f59e0b', '#d97706', '#b45309', '#92400e']}
          description="Accent color for highlights"
        />
        
        <ColorInput
          label="Background Color"
          value={backgroundColor}
          onChange={setBackgroundColor}
          format="hex"
          withPicker
          swatches={['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1']}
          showOptional
          description="Optional background color"
        />
        
        <div style={{ 
          padding: '16px', 
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)',
          background: backgroundColor
        }}>
          <Text size="sm" fw={500} mb="xs">Color Preview:</Text>
          <Inline gap="xs" mb="xs">
            <div style={{ 
              width: 24, 
              height: 24, 
              backgroundColor: primaryColor, 
              borderRadius: '4px',
              border: '1px solid var(--mantine-color-gray-3)'
            }} />
            <Text size="sm">Primary: {primaryColor}</Text>
          </Inline>
          <Inline gap="xs" mb="xs">
            <div style={{ 
              width: 24, 
              height: 24, 
              backgroundColor: secondaryColor, 
              borderRadius: '4px',
              border: '1px solid var(--mantine-color-gray-3)'
            }} />
            <Text size="sm">Secondary: {secondaryColor}</Text>
          </Inline>
          <Inline gap="xs" mb="xs">
            <div style={{ 
              width: 24, 
              height: 24, 
              backgroundColor: accentColor, 
              borderRadius: '4px',
              border: '1px solid var(--mantine-color-gray-3)'
            }} />
            <Text size="sm">Accent: {accentColor}</Text>
          </Inline>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled ColorInput components with live color preview.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <Stack gap="md">
        <ColorInput
          label="Theme Primary Color"
          placeholder="Select primary color"
          format="hex"
          withPicker
          swatches={[
            '#1976d2', '#388e3c', '#f57c00', '#d32f2f', '#7b1fa2',
            '#0288d1', '#00796b', '#fbc02d', '#c2185b', '#5d4037'
          ]}
          description="Primary color for your application theme"
        />
        
        <ColorInput
          label="Text Color"
          placeholder="Select text color"
          format="hex"
          withPicker
          swatches={[
            '#000000', '#212121', '#424242', '#616161', '#757575'
          ]}
          description="Color for text elements"
        />
        
        <ColorInput
          label="Background Color"
          placeholder="Select background"
          format="rgba"
          withPicker
          withEyeDropper
          swatches={[
            'rgba(255, 255, 255, 1)', 'rgba(248, 250, 252, 1)', 
            'rgba(241, 245, 249, 1)', 'rgba(226, 232, 240, 1)'
          ]}
          description="Background color with transparency support"
        />
        
        <ColorInput
          label="Border Color"
          placeholder="Select border color"
          format="hex"
          withPicker
          swatches={[
            '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569'
          ]}
          showOptional
          description="Optional border color for components"
        />
        
        <ColorInput
          label="Highlight Color"
          placeholder="Select highlight color"
          format="hex"
          withPicker
          swatches={[
            '#fef3c7', '#fde68a', '#fcd34d', '#f59e0b', '#d97706'
          ]}
          description="Color for highlighting important elements"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of ColorInput usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive ColorInput',
    placeholder: 'Pick a color...',
    size: 'md',
    format: 'hex',
    withPicker: true,
    withEyeDropper: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the ColorInput and see different combinations.',
      },
    },
  },
}; 