import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from '.';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoLinks: Story = {
  args: {
    title: 'We invest in the world’s potential',
    description: 'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.',
    links: [{
      type: 'primary',
      text: 'Learn more',
      postfixIcon: 'right-arrow'
    },
    {
      type: 'secondary',
      text: 'Watch video',
      prefixIcon: 'video'
    }]
  },
};

export const TextOnly: Story = {
  args: {
    title: 'We invest in the world’s potential',
    description: 'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.'
  },
};

export const AdditionalHeaderText: Story = {
  args: {
    title: 'We invest in the world’s potential',
    description: 'Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.',
    additionalHeader: 'career'
  },
};