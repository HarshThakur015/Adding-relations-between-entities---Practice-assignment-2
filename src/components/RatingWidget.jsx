import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RatingWidget.css';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoveredRating(value);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= (hoveredRating || rating) ? 'filled' : ''}`}
            onClick={() => handleStarClick(value)}
            onMouseEnter={() => handleStarHover(value)}
            onMouseLeave={() => handleStarHover(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button 
        className="submit-button"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget; 