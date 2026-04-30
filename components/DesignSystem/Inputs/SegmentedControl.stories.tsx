import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SegmentedControl } from './SegmentedControl';
import { Stack } from '../../DesignSystem';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Design System/Inputs/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'code-connected'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    data: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: ['Segment 1', 'Segment 2', 'Segment 3'],
    defaultValue: 'Segment 1',
    size: 'md',
  },
};

export const TwoSegments: Story = {
  args: {
    data: ['Segment 1', 'Segment 2'],
    defaultValue: 'Segment 1',
  },
};

export const FiveSegments: Story = {
  args: {
    data: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4', 'Segment 5'],
    defaultValue: 'Segment 1',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <SegmentedControl
          key={size}
          size={size}
          data={['Segment 1', 'Segment 2', 'Segment 3']}
          defaultValue="Segment 1"
        />
      ))}
    </Stack>
  ),
};
