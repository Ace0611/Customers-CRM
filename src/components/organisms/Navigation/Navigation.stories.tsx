import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

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

const meta = {
  title: 'Design System/Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A complete navigation sidebar with logo, menu items, and user profile.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    logo: {
      control: { type: 'text' },
    },
    logoText: {
      control: { type: 'text' },
    },
    version: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: mockNavItems,
    user: mockUser,
  },
};

export const WithoutUser: Story = {
  args: {
    items: mockNavItems,
  },
};

export const OpenOnMobile: Story = {
  args: {
    items: mockNavItems,
    user: mockUser,
    isOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const CustomBranding: Story = {
  args: {
    items: mockNavItems,
    user: mockUser,
    logo: '🚀',
    logoText: 'MyApp',
    version: 'v.2.0',
  },
};

