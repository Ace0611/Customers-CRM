import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta = {
  title: 'Design System/Atoms/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A loading spinner component with different sizes for indicating loading states.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const InContainer: Story = {
  args: {
    size: 'medium',
    className: 'bg-gray-100 p-8 rounded-lg',
  },
  render: (args) => (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <LoadingSpinner {...args} />
    </div>
  ),
};
