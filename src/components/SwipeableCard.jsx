import React from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeableCard = ({ card, onSwipeLeft, onSwipeRight }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipeLeft(card.id),
    onSwipedRight: () => onSwipeRight(card.id),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="card">
      <img src={card.image} alt={card.title} />
      <span>{card.price}</span>
    </div>
  );
};

export default SwipeableCard;
