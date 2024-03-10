// Card.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import { ColumnCard } from '.';

const meta = {
  title: 'Components/ColumnCard',
  component: ColumnCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [
      {
        imageUrl: 'https://wac-cdn.atlassian.com/misc-assets/webp-images/Blog_360x265%402x.webp',
        title: 'Work Life',
        description: 'Real-life advice, inspiration, and stories from the working world today.',
        link: 'Read our blog',
      },
      {
        imageUrl: 'https://wac-cdn.atlassian.com/misc-assets/webp-images/team_anywear_illo.webp',
        title: 'Distributed Work',
        description: 'Advance how your distributed teams collaborate.',
        link: 'Our evidence-based approach',
      },
      {
        imageUrl: 'https://wac-cdn.atlassian.com/misc-assets/webp-images/Team%2520Playbook_360x265%402x.webp',
        title: 'Atlassian Team Playbook',
        description: 'Solve common team challenges with these group exercises.',
        link: 'Check team health',
      },
    ],
  },
};
