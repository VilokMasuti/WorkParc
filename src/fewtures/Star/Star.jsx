import { useState } from 'react';

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = star => {
    setRating(prev => (prev === star ? 0 : star));
  };

  return (
    <section className="mt-10 flex gap-7 items-center justify-center">
      <div className="text-3xl flex gap-3">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`cursor-pointer text-5xl transition-colors duration-300 ${
              (hover || rating) >= star ? 'text-yellow-500' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </section>
  );
};

export default Star;
