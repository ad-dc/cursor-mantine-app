import type { Meta, StoryObj } from '@storybook/react';

// Simple test component
const TestComponent = ({ text }: { text: string }) => <div>{text}</div>;

const meta: Meta<typeof TestComponent> = {
  title: 'Test/Simple',
  component: TestComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello Storybook!',
  },
}; 