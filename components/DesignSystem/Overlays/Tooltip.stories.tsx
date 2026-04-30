import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../Buttons/Button';
import { Stack } from '../../DesignSystem';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'code-connected'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'],
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Tooltip text',
    children: <Button>Hover me</Button>,
    position: 'top',
  },
};

export const Positions: Story = {
  render: () => (
    <Stack gap="xl" align="center">
      <div style={{ display: 'flex', gap: 16 }}>
        <Tooltip label="Top start" position="top-start"><Button variant="outline" size="sm">Top Start</Button></Tooltip>
        <Tooltip label="Top" position="top"><Button variant="outline" size="sm">Top</Button></Tooltip>
        <Tooltip label="Top end" position="top-end"><Button variant="outline" size="sm">Top End</Button></Tooltip>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Tooltip label="Left" position="left"><Button variant="outline" size="sm">Left</Button></Tooltip>
        <Tooltip label="Right" position="right"><Button variant="outline" size="sm">Right</Button></Tooltip>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Tooltip label="Bottom start" position="bottom-start"><Button variant="outline" size="sm">Bottom Start</Button></Tooltip>
        <Tooltip label="Bottom" position="bottom"><Button variant="outline" size="sm">Bottom</Button></Tooltip>
        <Tooltip label="Bottom end" position="bottom-end"><Button variant="outline" size="sm">Bottom End</Button></Tooltip>
      </div>
    </Stack>
  ),
};
