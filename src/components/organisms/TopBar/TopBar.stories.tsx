import type { Meta, StoryObj } from '@storybook/react';
import { TopBar } from './TopBar';

const meta = {
  title: 'Design System/Organisms/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Top navigation bar with user greeting and global search functionality.',
      },
    },
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

