import type { Meta, StoryObj } from '@storybook/react';
import { CustomersTable } from './CustomersTable';
import { mockCustomers } from '../data/mockCustomers';

const meta = {
  title: 'Components/CustomersTable',
  component: CustomersTable,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CustomersTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customers: mockCustomers,
  },
};

export const Empty: Story = {
  args: {
    customers: [],
  },
};

