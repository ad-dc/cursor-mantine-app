import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Slider } from './Slider';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Slider> = {
  title: 'Design System/Inputs/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Slider component for selecting numeric values within a range with consistent design system styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Slider size',
    },
    label: {
      control: 'text',
      description: 'Slider label',
    },
    showOptional: {
      control: 'boolean',
      description: 'Show "(Optional)" text after label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
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
    defaultValue: {
      control: 'number',
      description: 'Default value',
    },
    showLabelOnHover: {
      control: 'boolean',
      description: 'Show value label on hover',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Volume',
    defaultValue: 50,
    min: 0,
    max: 100,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Slider size="xs" label="Extra Small" defaultValue={25} />
      <Slider size="sm" label="Small" defaultValue={35} />
      <Slider size="md" label="Medium (Default)" defaultValue={50} />
      <Slider size="lg" label="Large" defaultValue={65} />
      <Slider size="xl" label="Extra Large" defaultValue={75} />
    </Stack>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Slider label="Required Setting" defaultValue={50} />
      <Slider label="Optional Setting" showOptional defaultValue={30} />
      <Slider defaultValue={70} />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Slider label="Default" defaultValue={40} />
      <Slider label="Disabled" defaultValue={60} disabled />
      <Slider label="With Hover Labels" defaultValue={80} showLabelOnHover />
    </Stack>
  ),
};

export const WithMarks: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Slider
        label="Rating (1-10)"
        min={1}
        max={10}
        step={1}
        defaultValue={7}
        marks={[
          { value: 1, label: '1' },
          { value: 3, label: '3' },
          { value: 5, label: '5' },
          { value: 7, label: '7' },
          { value: 10, label: '10' },
        ]}
      />
      <Slider
        label="Temperature (°C)"
        min={-10}
        max={40}
        step={5}
        defaultValue={20}
        marks={[
          { value: -10, label: 'Cold' },
          { value: 0, label: 'Freezing' },
          { value: 20, label: 'Room' },
          { value: 40, label: 'Hot' },
        ]}
      />
      <Slider
        label="Progress"
        min={0}
        max={100}
        step={25}
        defaultValue={50}
        marks={[
          { value: 0, label: '0%' },
          { value: 25, label: '25%' },
          { value: 50, label: '50%' },
          { value: 75, label: '75%' },
          { value: 100, label: '100%' },
        ]}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sliders with marks to indicate specific values or ranges.',
      },
    },
  },
};

export const RangeSliders: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
              <Slider
          label="Price Range"
          min={0}
          max={1000}
          step={50}
          defaultValue={[200, 800] as any}
          marks={[
            { value: 0, label: '$0' },
            { value: 250, label: '$250' },
            { value: 500, label: '$500' },
            { value: 750, label: '$750' },
            { value: 1000, label: '$1000' },
          ]}
        />
        <Slider
          label="Age Range"
          min={18}
          max={65}
          step={1}
          defaultValue={[25, 45] as any}
          marks={[
            { value: 18, label: '18' },
            { value: 30, label: '30' },
            { value: 45, label: '45' },
            { value: 65, label: '65' },
          ]}
        />
        <Slider
          label="Time Range (Hours)"
          min={0}
          max={24}
          step={2}
          defaultValue={[9, 17] as any}
          marks={[
            { value: 0, label: '12 AM' },
            { value: 6, label: '6 AM' },
            { value: 12, label: '12 PM' },
            { value: 18, label: '6 PM' },
            { value: 24, label: '12 AM' },
          ]}
        />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Range sliders for selecting a range of values between two points.',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [volume, setVolume] = useState(50);
    const [brightness, setBrightness] = useState(75);
    const [priceRange, setPriceRange] = useState<[number, number]>([100, 500]);
    
    return (
      <Stack gap="lg" w={400}>
        <Slider
          label="Volume"
          value={volume}
          onChange={setVolume}
          min={0}
          max={100}
          showLabelOnHover
        />
        
        <Slider
          label="Brightness"
          value={brightness}
          onChange={setBrightness}
          min={0}
          max={100}
          step={5}
          marks={[
            { value: 0, label: 'Off' },
            { value: 25, label: 'Low' },
            { value: 50, label: 'Med' },
            { value: 75, label: 'High' },
            { value: 100, label: 'Max' },
          ]}
        />
        
        <Slider
          label="Price Filter"
          value={priceRange as any}
          onChange={setPriceRange as any}
          min={0}
          max={1000}
          step={25}
        />
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)'
        }}>
          <Text size="sm" fw={500} mb="xs">Current Settings:</Text>
          <Text size="sm">Volume: {volume}%</Text>
          <Text size="sm">Brightness: {brightness}%</Text>
          <Text size="sm">Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled Slider components with state management and real-time updates.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <Stack gap="md">
        <Slider
          label="Audio Volume"
          min={0}
          max={100}
          defaultValue={65}
          marks={[
            { value: 0, label: '🔇' },
            { value: 33, label: '🔉' },
            { value: 66, label: '🔊' },
            { value: 100, label: '📢' },
          ]}
        />
        
        <Slider
          label="Image Quality"
          min={1}
          max={10}
          step={1}
          defaultValue={8}
          marks={[
            { value: 1, label: 'Low' },
            { value: 5, label: 'Medium' },
            { value: 10, label: 'High' },
          ]}
        />
        
        <Slider
          label="Zoom Level"
          min={25}
          max={200}
          step={25}
          defaultValue={100}
          marks={[
            { value: 25, label: '25%' },
            { value: 50, label: '50%' },
            { value: 100, label: '100%' },
            { value: 150, label: '150%' },
            { value: 200, label: '200%' },
          ]}
        />
        
                 <Slider
           label="Budget Range"
           min={0}
           max={10000}
           step={500}
           defaultValue={[2000, 7000] as any}
           marks={[
             { value: 0, label: '$0' },
             { value: 2500, label: '$2.5K' },
             { value: 5000, label: '$5K' },
             { value: 7500, label: '$7.5K' },
             { value: 10000, label: '$10K' },
           ]}
         />
        
        <Slider
          label="Difficulty Level"
          min={1}
          max={5}
          step={1}
          defaultValue={3}
          marks={[
            { value: 1, label: 'Easy' },
            { value: 2, label: 'Beginner' },
            { value: 3, label: 'Medium' },
            { value: 4, label: 'Hard' },
            { value: 5, label: 'Expert' },
          ]}
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Slider usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive Slider',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    showLabelOnHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Slider and see different combinations.',
      },
    },
  },
}; 