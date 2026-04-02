import { Star } from "lucide-react";
import { useMemo, useState } from "react";

const Rating = ({ maxStar = 5, currentFilledStar = 2, onChange }) => {
  const safeMax = Math.max(1, Number(maxStar) || 5);
  const initial = Math.min(safeMax, Math.max(0, Number(currentFilledStar) || 0));

  const [selected, setSelected] = useState(initial);
  const [hovered, setHovered] = useState(null);

  const filledUpTo = hovered ?? selected;
  const stars = useMemo(() => Array.from({ length: safeMax }, (_, i) => i + 1), [safeMax]);

  const setValue = (value) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="inline-flex items-center gap-1" role="radiogroup" aria-label="Rating">
      {stars.map((value) => {
        const isFilled = value <= filledUpTo;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected === value}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(value)}
            onBlur={() => setHovered(null)}
            onClick={() => setValue(value)}
            className="rounded-md p-1 hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-zinc-200"
            title={`${value} star${value === 1 ? "" : "s"}`}
          >
            <Star
              size={20}
              className={isFilled ? "fill-amber-400 text-amber-500" : "text-zinc-400"}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
