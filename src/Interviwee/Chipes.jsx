import { useState } from 'react';

const Chipes = () => {
  const [textC, setTextC] = useState('');
  const [Chips, setChips] = useState([]);

  const handleADD = () => {
    setChips((prev) => [...prev, textC]);
    setTextC('');
  };

  const removeChipAt = (index) => {
    setChips((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <section className="max-w-7xl flex  flex-col items-center justify-center mx-auto h-screen">
      <div className=" flex gap-7">
        <label htmlFor="text" className=" mt-[-2rem] ">
          Add Chips*
        </label>
        <input
          placeholder="Add Chips"
          type="text"
          className="w-[25rem] border-0 border-b-2 border-b-red-400  outline-none px-2 py-1 transition-all duration-300"
          value={textC}
          onChange={(e) => setTextC(e.target.value)}
        />
        <button
          onClick={handleADD}
          className="  w-[5rem] cursor-pointer bg-red-500 text-white rounded-lg
        shadow"
        >
          ADD
        </button>
      </div>
      <div className=" mt-10 flex flex-col gap-3 relative">
        {Chips.map((chip, index) => (
          <div
            key={index}
            className=" flex items-center justify-center bg-white rounded-md  text-black text-center w-[10rem]"
          >
            {chip}
            <span
              onClick={() => removeChipAt(index)}
              className=" absolute  left-[8rem]   rounded-full cursor-pointer "
            >
              X
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chipes;
