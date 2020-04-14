import React from 'react';
import { MdStarBorder, MdStarHalf, MdStar } from 'react-icons/md';

interface StarProps {
  rate: number;
}

const Star: React.FC<StarProps> = ({ rate }) => {
  if (rate === 1) {
    return <MdStar color="#ffc93d" />;
  } else if (rate === 0.5) {
    return <MdStarHalf color="#ffc93d" />;
  } else {
    return <MdStarBorder color="#ffc93d" />;
  }
};

export default Star;
