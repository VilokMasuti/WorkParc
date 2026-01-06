import { useState } from "react";
import { AccData } from "../../Data";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col min-h-screen items-center justify-center mx-auto p-4">
      <div className="text-black flex flex-col gap-4 w-full max-w-2xl">
        {AccData.map((data, index) => (
          <div key={index} className="w-full">
            <button
              className="w-full text-left px-4 py-2 bg-slate-100 rounded-md shadow-sm hover:bg-slate-200 transition"
              onClick={() => handleIndex(index)}
              aria-expanded={activeIndex === index}
            >
              {data.question}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 " : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 bg-slate-50 rounded-md shadow-inner">
                {data.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
