import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { id: 2, question: "What is a closure?", answer: "A closure is a function that remembers variables from where it was born." },
  { id: 3, question: "What is useState?", answer: "useState is a hook that lets you add state to functional components." },
  { id: 4, question: "What is useEffect?", answer: "useEffect lets you perform side effects in function components." },
];

const Accordion = () => {
  const [active, setActive] = useState(null);

  const toggleAcc = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-zinc-950 flex flex-col items-center py-24 px-6 selection:bg-zinc-800">
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl text-zinc-50 font-semibold tracking-tight text-center mb-8">
          FAQ
        </h1>
        
        {faqs.map((fq) => (
          <div 
            key={fq.id} 
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden transition-colors hover:border-zinc-700"
          >
            <button
              onClick={() => toggleAcc(fq.id)}
              className="w-full flex justify-between items-center p-5 text-left cursor-pointer outline-none"
            >
              <h2 className="text-lg font-medium text-zinc-200">{fq.question}</h2>
              <motion.div
                animate={{ rotate: active === fq.id ? 45 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-zinc-500 text-2xl font-light"
              >
                +
              </motion.div>
            </button>

            <AnimatePresence>
              {active === fq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 200 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 1, type: "spring", ease: [0.16, 1, 0.3, 1] }} // Custom spring-like easing
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-zinc-400 leading-relaxed">
                    {fq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;