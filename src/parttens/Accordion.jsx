import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    q: "What is your return policy?",
    a: "You can return any product within 30 days of purchase for a full refund."
  },
  {
    id: 2,
    q: "Do you offer international shipping?",
    a: "Yes, we ship worldwide. Shipping costs vary depending on the destination."
  },
  {
    id: 3,
    q: "How can I track my order?",
    a: "Once your order is shipped, you’ll receive a tracking link via email."
  },
  {
    id: 4,
    q: "What payment methods do you accept?",
    a: "We accept credit cards, debit cards, PayPal, and UPI for Indian customers."
  },
  {
    id: 5,
    q: "Is there a warranty on products?",
    a: "Yes, all electronic products come with a one-year manufacturer’s warranty."
  }
]
const Accordion = () => {
  const [activeId, setActiveId] = useState(null)
  const toggle = (id) => { 
    setActiveId((pre) => pre === id ? null : id)
   } 
 return (
  <div className="flex h-screen items-center justify-center bg-zinc-900">
    <div className="w-full max-w-xl space-y-2 rounded-2xl bg-zinc-800 p-3">
      {faqs.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <div key={item.id}>
            <motion.button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between rounded-lg p-4 text-left text-zinc-200 transition hover:bg-zinc-700"
              aria-expanded={isOpen}
            >
              <span className="font-medium">{item.q}</span>

              <motion.span
                key="icon"
                animate={{ rotate: isOpen ? 49 : 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                +
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="answer-panel"
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-sm text-zinc-400">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default Accordion