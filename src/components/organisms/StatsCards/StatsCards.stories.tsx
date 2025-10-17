import type { Meta, StoryObj } from '@storybook/react';
import { StatsCards } from './StatsCards';

const meta = {
  title: 'Design System/Organisms/StatsCards',
  component: StatsCards,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Statistics cards display showing key metrics and trends for the dashboard.',
      },
    },
  },
} satisfies Meta<typeof StatsCards>;

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

