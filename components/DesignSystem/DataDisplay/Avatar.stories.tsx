import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Avatar } from './Avatar';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { RiUserLine, RiAdminLine, RiVipCrownLine, RiRobotLine } from '@remixicon/react';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar component with three variants: icon, image, and initials. Supports all t-shirt sizes and fallback handling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['icon', 'image', 'initials'],
      description: 'Avatar variant type',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    src: {
      control: 'text',
      description: 'Image source URL (for image variant)',
    },
    alt: {
      control: 'text',
      description: 'Alt text for image',
    },
    initials: {
      control: 'text',
      description: 'Two character initials (for initials variant)',
    },
    fallback: {
      control: 'select',
      options: ['icon', 'initials'],
      description: 'Fallback variant when image fails',
    },
    fallbackInitials: {
      control: 'text',
      description: 'Fallback initials when image fails',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'icon',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <Inline gap="lg" align="center">
      <Avatar variant="image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
      <Avatar variant="initials" initials="JD" />
      <Avatar variant="icon" />
      <Avatar variant="icon" icon={<span>🎨</span>} />
    </Inline>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg">
      <Inline gap="md" align="center">
        <Avatar variant="image" size="xs" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
        <Avatar variant="image" size="sm" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
        <Avatar variant="image" size="md" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
        <Avatar variant="image" size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
        <Avatar variant="image" size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
      </Inline>
      <Inline gap="md" align="center">
        <Avatar variant="initials" size="xs" initials="XS" />
        <Avatar variant="initials" size="sm" initials="SM" />
        <Avatar variant="initials" size="md" initials="MD" />
        <Avatar variant="initials" size="lg" initials="LG" />
        <Avatar variant="initials" size="xl" initials="XL" />
      </Inline>
      <Inline gap="md" align="center">
        <Avatar variant="icon" size="xs" />
        <Avatar variant="icon" size="sm" />
        <Avatar variant="icon" size="md" />
        <Avatar variant="icon" size="lg" />
        <Avatar variant="icon" size="xl" />
      </Inline>
    </Stack>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <Inline gap="lg" align="center">
      <Avatar variant="icon" />
      <Avatar variant="icon" icon={<span>🎨</span>} />
      <Avatar variant="icon" icon={<span>💼</span>} />
      <Avatar variant="icon" icon={<span>🚀</span>} />
    </Inline>
  ),
};

export const ImageFallbacks: Story = {
  render: () => (
    <Stack gap="lg">
      <Inline gap="md" align="center">
        <Avatar variant="image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
        <Avatar variant="image" src="invalid-url.jpg" alt="User" fallback="initials" fallbackInitials="JD" />
        <Avatar variant="initials" initials="AB" />
        <Avatar variant="initials" initials="CD" />
      </Inline>
    </Stack>
  ),
};

export const UserProfiles: Story = {
  render: () => (
    <Stack gap="lg" maw={400}>
      <Title order={3} size="md" fw={500} mb="xs">Team Members</Title>
      <Stack gap="md">
        <Inline gap="sm" align="center">
          <Avatar variant="image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" size="md" alt="John Doe" />
          <div>
            <Text fw={500}>John Doe</Text>
            <Text size="sm" c="dimmed">Product Manager</Text>
          </div>
        </Inline>
        <Inline gap="sm" align="center">
          <Avatar variant="initials" initials="JS" size="md" />
          <div>
            <Text fw={500}>Jane Smith</Text>
            <Text size="sm" c="dimmed">UX Designer</Text>
          </div>
        </Inline>
        <Inline gap="sm" align="center">
          <Avatar variant="initials" initials="MJ" size="md" />
          <div>
            <Text fw={500}>Mike Johnson</Text>
            <Text size="sm" c="dimmed">Developer</Text>
          </div>
        </Inline>
      </Stack>
    </Stack>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <Stack gap="lg">
      <div>
        <Text size="sm" fw={500} c="dimmed" mb="xs">Overlapping Avatars</Text>
        <Inline gap="-xs">
          <Avatar variant="image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
          <Avatar variant="initials" initials="JS" />
          <Avatar variant="initials" initials="MJ" />
          <Avatar variant="initials" initials="+3" />
        </Inline>
      </div>
      
      <div>
        <Text size="sm" fw={500} c="dimmed" mb="xs">Team Collaboration</Text>
        <Inline gap="-sm" align="center">
          <Avatar variant="image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" size="lg" alt="User" />
          <Avatar variant="initials" initials="AB" size="lg" />
          <Avatar variant="initials" initials="CD" size="lg" />
          <Avatar variant="initials" initials="EF" size="lg" />
          <Avatar variant="initials" initials="+5" size="lg" />
        </Inline>
      </div>
    </Stack>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <Stack gap="lg">
      <Title order={3} size="md" fw={500} mb="xs">Online Status</Title>
      <Inline gap="lg" align="center">
        <div style={{ position: 'relative' }}>
          <Avatar variant="image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face" alt="User" />
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            right: 0, 
            width: '12px', 
            height: '12px', 
            backgroundColor: 'green', 
            borderRadius: '50%',
            border: '2px solid white'
          }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Avatar variant="initials" initials="JS" />
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            right: 0, 
            width: '12px', 
            height: '12px', 
            backgroundColor: 'orange', 
            borderRadius: '50%',
            border: '2px solid white'
          }} />
        </div>
        <div style={{ position: 'relative' }}>
          <Avatar variant="initials" initials="MJ" />
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            right: 0, 
            width: '12px', 
            height: '12px', 
            backgroundColor: 'gray', 
            borderRadius: '50%',
            border: '2px solid white'
          }} />
        </div>
      </Inline>
    </Stack>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'icon',
    size: 'md',
    src: '',
    alt: '',
    initials: '',
    fallback: 'icon',
    fallbackInitials: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Avatar and see different combinations.',
      },
    },
  },
}; 