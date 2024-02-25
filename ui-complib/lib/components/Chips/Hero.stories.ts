import type { Meta, StoryObj } from '@storybook/react';

import { Chips } from '.';

const meta = {
  title: 'Components/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['default', 'image'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default'
  },
};