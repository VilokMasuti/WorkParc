import { useState } from "react";

const Circle = () => {
  const [circleData, setCircleData] = useState(6);
  const circles = Array.from({ length: Math.max(0, circleData || 0) });

  return (
    <section className="h-screen flex flex-col items-center justify-center text-white font-serif bg-gray-900">
      <h1 className="text-4xl font-bold mb-8">Circle Feature</h1>

      <div className="flex flex-col items-center gap-3.5">
        <input
          type="number"
          placeholder="Enter number"
          className="w-[20rem] border border-amber-50 ring-1 rounded-md py-2 px-3 text-white bg-gray-800"
          onChange={(e) => setCircleData(Number(e.target.value))}
        />
      </div>

      <div className="relative flex items-center justify-center w-[400px] mt-10 h-[400px] bg-gray-800 rounded-full">
        {circles.map((_, index) => {
          const size = 400 - index * (400 / circleData);
          return (
            <div
              key={index}
              className="absolute border border-blue-500 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Circle;
