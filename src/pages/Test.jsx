import React from 'react';
import SwipeDeck from '../components/SwipeDeck';


const cards = [
  { id: 1, image: "../public/images/image1.jpg", prix: '33€' },
  { id: 2, image: "../public/images/image2.jpg", prix: '23€' },
  { id: 3, image: "../public/images/image3.jpg", prix: '73€' },
];

const Test = () => {
  return (
    <div className="container">
      <SwipeDeck cards={cards} />
    </div>
  );
};

export default Test;
