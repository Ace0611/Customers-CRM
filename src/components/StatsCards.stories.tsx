import type { Meta, StoryObj } from '@storybook/react';
import { StatsCards } from './StatsCards';

const meta = {
  title: 'Components/StatsCards',
  component: StatsCards,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StatsCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

