// ColumnCard.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ColumnCardProps {
  cards: CardProps[];
}

function ColumnCard({ cards }: ColumnCardProps): React.ReactNode {
  return (
    <div className="flex">
      {cards.map((card, index) => (
        <a key={index} href={card.link} className="flex-1 p-4 text-center hover:bg-gray-100 transition duration-300 ease-in-out">
          <img src={card.imageUrl} alt={card.title} className="mb-2" />
          <h2 className="text-xl font-semibold mb-2 text-black-500">
            {card.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">{card.description}</p>
          <p className="text-blue-500">{card.link}</p>
        </a>
      ))}
    </div>
  );
}

export default ColumnCard;
