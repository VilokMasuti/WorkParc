import { useState } from 'react';

const Rating = ({ maxStar = 5, currentFilledStar = 2 }) => {
  const [selected, setSelected] = useState(currentFilledStar);
  const [hovered, setHovered] = useState(null);
  return (
    <div className="flex items-center">
      {Array.from({ length: maxStar }, (_, index) => {
        const isFilled = hovered !== null ? index < hovered : index < selected;
      })}
    </div>
  );
};
export default Rating;
