import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(fasStar, farStar);

const StarRating = ({ rating }) => {
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starIcons.push(<FontAwesomeIcon icon={fasStar} key={i} />);
    } else {
      starIcons.push(<FontAwesomeIcon icon={farStar} key={i} />);
    }
  }

  return <div>{starIcons}</div>;
};

export default StarRating;
