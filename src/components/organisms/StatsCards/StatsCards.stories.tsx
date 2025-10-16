import type { Meta, StoryObj } from '@storybook/react';
import { StatsCards } from './StatsCards';

const meta = {
  title: 'Organisms/StatsCards',
  component: StatsCards,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatsCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

