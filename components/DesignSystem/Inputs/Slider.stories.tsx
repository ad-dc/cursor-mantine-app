import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Design System/Inputs/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'code-connected'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Slider thumbSize={16} defaultValue={40} />
    </div>
  ),
};
