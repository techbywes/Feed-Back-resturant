import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(fasStar, farStar);

const StarRating = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    if (onChange) {
      onChange(selectedRating);
    }
  };

  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    let starIcon;
    if (i <= (hoverRating || rating)) {
      starIcon = <FontAwesomeIcon icon={fasStar} key={i} />;
    } else {
      starIcon = <FontAwesomeIcon icon={farStar} key={i} />;
    }

    starIcons.push(
      <span
        key={i}
        onMouseEnter={() => setHoverRating(i)}
        onMouseLeave={() => setHoverRating(0)}
        onClick={() => handleStarClick(i)}
        style={{ cursor: 'pointer', color: 'white' }}
      >
        {starIcon}
      </span>
    );
  }

  return <div>{starIcons}</div>;
};

export default StarRating;
