import React from 'react';

interface Star {
  size: number;
  top: number;
  left: number;
  opacity: number;
}

interface RandomStarsBackgroundProps {
  stars?: Star[];
}

const StarsBackground: React.FC<RandomStarsBackgroundProps> = ({ stars = [] }) => {
  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;