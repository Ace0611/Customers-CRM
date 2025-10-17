import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta = {
  title: 'Design System/Molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A pagination component with smart ellipsis handling and page navigation.',
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: 'number' },
    },
    totalPages: {
      control: { type: 'number' },
    },
    startEntry: {
      control: { type: 'number' },
    },
    endEntry: {
      control: { type: 'number' },
    },
    totalEntries: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log('Page:', page),
    startEntry: 1,
    endEntry: 8,
    totalEntries: 80,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log('Page:', page),
    startEntry: 33,
    endEntry: 40,
    totalEntries: 80,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page) => console.log('Page:', page),
    startEntry: 73,
    endEntry: 80,
    totalEntries: 80,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    onPageChange: (page) => console.log('Page:', page),
    startEntry: 9,
    endEntry: 16,
    totalEntries: 24,
  },
};

export const LargeDataset: Story = {
  args: {
    currentPage: 1,
    totalPages: 32000,
    onPageChange: (page) => console.log('Page:', page),
    startEntry: 1,
    endEntry: 8,
    totalEntries: 256000,
  },
};

