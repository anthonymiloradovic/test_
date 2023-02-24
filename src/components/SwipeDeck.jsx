import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SwipeableCard from './SwipeableCard';

const SwipeDeck = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [deck, setDeck] = useState(cards);

  const sliderRef = useRef();

  useEffect(() => {
    // Réorganiser les cartes lorsque la première carte est supprimée
    if (deck.length > 0 && currentCard >= deck.length) {
      const newDeck = [...deck];
      const firstCard = newDeck.shift();
      newDeck.push(firstCard);
      setDeck(newDeck);
      setCurrentCard(currentCard - 1);
      sliderRef.current.slickGoTo(currentCard - 1);
    }
  }, [currentCard, deck]);

  const handleNextCard = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentCard(currentCard + 1);
    }
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-indicator",
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul>{dots}</ul>
        <button onClick={handleNextCard}>Suivant</button>
      </div>
    )
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {deck.map((card, index) => (
        <SwipeableCard
          key={card.id}
          card={card}
          onSwipeLeft={() => {}}
          onSwipeRight={() => {}}
        >
          <button
            onClick={handleNextCard}
            disabled={currentCard !== index}
          >
            Next
          </button>
        </SwipeableCard>
      ))}
    </Slider>
  );
};

export default SwipeDeck;
