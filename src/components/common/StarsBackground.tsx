import React from 'react';

interface Star {
  id: string;
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
      {stars.map((star) => (
        <div
          key={star.id} // Use the unique id as the key
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