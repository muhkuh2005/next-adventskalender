export const generateStars = (numberOfStars: number) => {
  const stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    const top = Math.random() * 100; // Random top position between 0% and 100%
    const left = Math.random() * 100; // Random left position between 0% and 100%
    const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1

    stars.push({
      size,
      top,
      left,
      opacity,
    });
  }

  return stars;
};