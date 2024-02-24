import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from '.';

const meta = {
  title: 'Components/Hero',
  component: Hero,
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
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenterAligned: Story = {
  args: {
    type: 'default'
  },
};

export const WithImage: Story = {
  args: {
    type: 'image'
  },
};