import type { Meta, StoryObj } from '@storybook/react';
import { TableControls } from './TableControls';

const meta = {
  title: 'Design System/Molecules/TableControls',
  component: TableControls,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Table controls combining search functionality with sort options for data tables.',
      },
    },
  },
  argTypes: {
    searchValue: {
      control: { type: 'text' },
    },
    sortValue: {
      control: { type: 'text' },
    },
    searchPlaceholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof TableControls>;

export default meta;
type Story = StoryObj<typeof meta>;

const sortOptions = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Name', label: 'Name' },
  { value: 'Status', label: 'Status' },
];

export const Default: Story = {
  args: {
    searchValue: '',
    onSearchChange: (value) => console.log('Search:', value),
    sortValue: 'Newest',
    sortOptions: sortOptions,
    onSortChange: (value) => console.log('Sort:', value),
  },
};

export const WithSearchText: Story = {
  args: {
    searchValue: 'John Doe',
    onSearchChange: (value) => console.log('Search:', value),
    sortValue: 'Name',
    sortOptions: sortOptions,
    onSortChange: (value) => console.log('Sort:', value),
  },
};

