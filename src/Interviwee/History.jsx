import { useState } from 'react';

import './appp.css';
const History = () => {
  const [count, setCount] = useState();
  const [history, setHitory] = useState([]);

  const handleHistory = (action, value) => {
    setHitory((pre) => [{ action, value }, ...pre].slice(0, 5));
  };

  const handleAdd = () => {
    setCount((pre) => {
      const newvalue = pre + 1;
      handleHistory('add', newvalue);
      return newvalue;
    });
  };

  const handleSub = () => {
    setCount((pre) => {
      const newSub = pre - 1;
      handleHistory('sub', newSub);
      return newSub;
    });
  };
  const reset = () => {
    setCount(() => {
      handleHistory(0, 'reset');
      return 0;
    });
  };
  return (
    <div className="app">
      <h1 className="count">Count: {count}</h1>
      <div className="actions">
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSub}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
      <h2 className="title">History (last 5)</h2>
      <ul className="history">
        {history.map((item, idx) => (
          <li key={`${item.action}-${item.value}-${idx}`}>
            <span className="action">{item.action}</span>
            <span className="value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;
