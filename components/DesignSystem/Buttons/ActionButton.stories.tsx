import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';
import { RiAddLine, RiEditLine, RiDeleteBinLine, RiEyeLine, RiDownloadLine, RiSettingsLine, RiMore2Fill } from '@remixicon/react';

const meta: Meta<typeof ActionButton> = {
  title: 'Design System/Buttons/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ActionButton component for icon-based actions with consistent sizing and subtle styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the action button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: false,
      description: 'Icon content (React element)',
    },
    customSize: {
      control: 'number',
      description: 'Override default size with custom dimensions',
    },
    customFill: {
      control: 'color',
      description: 'Custom background color',
    },
    customBorder: {
      control: 'text',
      description: 'Custom border style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <RiEditLine size={16} />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <ActionButton size="xs"><RiEditLine size={12} /></ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xs</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ActionButton size="sm"><RiEditLine size={14} /></ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>sm</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ActionButton size="md"><RiEditLine size={16} /></ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>md</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ActionButton size="lg"><RiEditLine size={18} /></ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>lg</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ActionButton size="xl"><RiEditLine size={20} /></ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xl</div>
      </div>
    </div>
  ),
};

export const CommonActions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <ActionButton><RiAddLine size={16} /></ActionButton>
      <ActionButton><RiEditLine size={16} /></ActionButton>
      <ActionButton><RiDeleteBinLine size={16} /></ActionButton>
      <ActionButton><RiEyeLine size={16} /></ActionButton>
      <ActionButton><RiDownloadLine size={16} /></ActionButton>
      <ActionButton><RiSettingsLine size={16} /></ActionButton>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <ActionButton><RiEditLine size={16} /></ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Normal</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ActionButton disabled><RiEditLine size={16} /></ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Disabled</div>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <ActionButton>
          <RiAddLine size={16} style={{ color: 'var(--mantine-color-blue-6)' }} />
        </ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Blue Theme</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ActionButton>
          <RiDeleteBinLine size={16} style={{ color: 'var(--mantine-color-red-6)' }} />
        </ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Red Theme</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ActionButton customSize={48}>
          <RiMore2Fill size={24} />
        </ActionButton>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Custom Size</div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: <RiEditLine size={16} />,
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the ActionButton and see different combinations.',
      },
    },
  },
}; 