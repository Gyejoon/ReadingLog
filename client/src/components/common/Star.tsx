import React from 'react';
import Icon from './Icon';

interface StarProps {
  rate: number;
}

const Star: React.FC<StarProps> = ({ rate }) => {
  let type;

  if (rate === 1) {
    type = 'star';
  } else if (rate === 0.5) {
    type = 'star_half';
  } else {
    type = 'star_border';
  }

  return <Icon name={type} color="#ffc93d" />;
};

export default Star;
