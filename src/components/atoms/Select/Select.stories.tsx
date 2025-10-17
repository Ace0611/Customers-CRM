import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Design System/Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A select dropdown component with customizable options and sizes.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'name', label: 'Name' },
  { value: 'status', label: 'Status' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
  },
};

export const Small: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    disabled: true,
  },
};

