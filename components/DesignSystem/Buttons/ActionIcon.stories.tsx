import type { Meta, StoryObj } from '@storybook/react';
import { ActionIcon } from './ActionIcon';
import { Stack } from '../../DesignSystem';
import { IconEdit, IconPlus, IconTrash, IconEye, IconDownload, IconSettings } from '@tabler/icons-react';

const meta: Meta<typeof ActionIcon> = {
  title: 'Design System/Buttons/ActionIcon',
  component: ActionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'code-connected'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <IconEdit size={16} />,
    variant: 'default',
    size: 'md',
  },
};

export const Link: Story = {
  args: {
    children: <IconEdit size={16} />,
    variant: 'link',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg">
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <ActionIcon key={size} size={size} variant="default">
            <IconEdit />
          </ActionIcon>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <ActionIcon key={size} size={size} variant="link">
            <IconEdit />
          </ActionIcon>
        ))}
      </div>
    </Stack>
  ),
};

export const CommonActions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <ActionIcon><IconPlus size={16} /></ActionIcon>
      <ActionIcon><IconEdit size={16} /></ActionIcon>
      <ActionIcon><IconTrash size={16} /></ActionIcon>
      <ActionIcon><IconEye size={16} /></ActionIcon>
      <ActionIcon><IconDownload size={16} /></ActionIcon>
      <ActionIcon><IconSettings size={16} /></ActionIcon>
    </div>
  ),
};
