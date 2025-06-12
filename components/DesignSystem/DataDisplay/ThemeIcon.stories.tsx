import type { Meta, StoryObj } from '@storybook/react';
import { ThemeIcon } from './ThemeIcon';
import { RiUserLine, RiServerLine, RiAddLine, RiEyeLine } from '@remixicon/react';

const meta: Meta<typeof ThemeIcon> = {
  title: 'Design System/Data Display/ThemeIcon',
  component: ThemeIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ThemeIcon component with t-shirt sizing including custom xxl (58x58px) and color variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Size of the ThemeIcon (xxl = 58x58px)',
    },
    color: {
      control: 'select',
      options: ['default', 'blue'],
      description: 'Color variant - both use default styling, blue affects icon color only',
    },
    children: {
      control: false,
      description: 'Icon content (React element)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <RiUserLine size={18} />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="xs"><RiUserLine size={11} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xs</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="sm"><RiUserLine size={14} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>sm</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="md"><RiUserLine size={18} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>md</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="lg"><RiUserLine size={22} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>lg</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="xl"><RiUserLine size={28} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xl</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="xxl"><RiUserLine size={39} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xxl (58x58px)</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon color="default"><RiEyeLine size={18} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon color="blue"><RiEyeLine size={18} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Blue</div>
      </div>
    </div>
  ),
};

export const XXLShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="xxl" color="default"><RiAddLine size={39} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '8px' }}>XXL Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ThemeIcon size="xxl" color="blue"><RiAddLine size={39} /></ThemeIcon>
        <div style={{ fontSize: '12px', marginTop: '8px' }}>XXL Blue</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The xxl size is exactly 58x58 pixels as specified in the design system.',
      },
    },
  },
};

export const DifferentIcons: Story = {
  args: {
    color: "default"
  },

  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <ThemeIcon color="default"><RiServerLine size={18} /></ThemeIcon>
      <ThemeIcon color="blue"><RiUserLine size={18} /></ThemeIcon>
      <ThemeIcon color="default"><RiAddLine size={18} /></ThemeIcon>
      <ThemeIcon color="blue"><RiEyeLine size={18} /></ThemeIcon>
    </div>
  )
}; 