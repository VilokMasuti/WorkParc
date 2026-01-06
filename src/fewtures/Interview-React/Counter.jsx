import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1); // always increment
  };

  const decrement = () => {
    if (count > 0) {              // only decrement if above 0
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      Counter - {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
