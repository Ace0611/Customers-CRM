import type { Meta, StoryObj } from '@storybook/react';
import { DashboardLayout } from './DashboardLayout';

const mockNavItems = [
  { icon: 'dashboard', label: 'Dashboard' },
  { icon: 'product', label: 'Product' },
  { icon: 'customers', label: 'Customers', active: true },
  { icon: 'income', label: 'Income' },
  { icon: 'promote', label: 'Promote' },
  { icon: 'help', label: 'Help' },
];

const mockUser = {
  avatar: 'https://i.pravatar.cc/40?img=1',
  name: 'Evano',
  role: 'Project Manager',
};

const mockStats = [
  {
    title: 'Total Customers',
    value: '5,423',
    trend: '16% this month',
    trendUp: true,
    icon: 'customers',
  },
  {
    title: 'Members',
    value: '1,893',
    trend: '1% this month',
    trendUp: false,
    icon: 'user',
  },
  {
    title: 'Active Now',
    value: '189',
    icon: 'computer',
    avatars: [
      'https://i.pravatar.cc/24?img=2',
      'https://i.pravatar.cc/24?img=3',
      'https://i.pravatar.cc/24?img=4',
      'https://i.pravatar.cc/24?img=5',
    ],
  },
];

const meta = {
  title: 'Design System/Templates/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A complete dashboard layout template with navigation, header, stats, and content area.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    onSearch: {
      action: 'search',
    },
  },
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: mockNavItems,
    user: mockUser,
    stats: mockStats,
  },
};

export const WithoutStats: Story = {
  args: {
    navItems: mockNavItems,
    user: mockUser,
    stats: [],
  },
};

export const WithoutUser: Story = {
  args: {
    navItems: mockNavItems,
    stats: mockStats,
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Welcome to My Dashboard 🎉',
    navItems: mockNavItems,
    user: mockUser,
    stats: mockStats,
  },
};

export const WithContent: Story = {
  args: {
    navItems: mockNavItems,
    user: mockUser,
    stats: mockStats,
  },
  render: (args) => (
    <DashboardLayout {...args}>
      <div style={{ 
        background: '#fff', 
        padding: '24px', 
        borderRadius: '16px',
        textAlign: 'center',
        color: '#9197B3'
      }}>
        <h3>Dashboard Content Area</h3>
        <p>This is where your main dashboard content would go.</p>
      </div>
    </DashboardLayout>
  ),
};

