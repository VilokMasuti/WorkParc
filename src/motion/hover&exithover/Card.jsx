import {
  Calendar,
  Code,
  HomeIcon,
  MessageSquareCodeIcon,
  PlusIcon,
  X,
} from "lucide-react";
import { AnimatePresence, easeInOut, motion as Motion } from "motion/react";
import { useState } from "react";

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
            className="  bg-white w-[24rem] p-6 flex flex-col min-h-[35rem]  h-[28rem]  rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
          >
            <h2 className=" font-bold  tracking-widest text-[10px]">GOVINDA</h2>
            <p className=" text-neutral-600 mt-2 text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
            <div className="flex items-center justify-center ">
              <Motion.button
                whileTap={{
                  scale: 0.94,
                  y: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                  ease: easeInOut,
                }}
                onClick={() => setOpen(false)}
                className=" flex  tracking-widest items-center px-3  rounded-md  cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  gap-2 text-xl mt-4"
              >
                <img src="/k.png" className=" w-10 h-10" alt="logo" /> KRISHNA
                <X className=" text-neutral-500  h-4 w-4" />
              </Motion.button>
            </div>
            {/* when w e hover thsi disv shouls be seen */}

            <Motion.div className="  relative border-dashed border border-neutral-200  shadow-lg  bg-gray-100  flex-1 mt-4   rounded-lg">
              <Motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(40px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}
                className=" absolute inset-0 h-full w-full bg-white rounded-lg  divide-y divide-neutral-200"
              >
                <div className=" flex gap-2 p-4 items-start">
                  <div className=" h-7 w-7 flex-shrink-0  bg-white rounded-md flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <MessageSquareCodeIcon className=" h-4 w-4 text-neutral-600" />
                  </div>
                  <div className=" flex flex-col">
                    <p className=" text-sm font-medium text-neutral-600">
                      Message
                    </p>
                    <p className=" text-xs text-neutral-500 mt-1">
                      Send and receive messages from anywhere.
                    </p>
                  </div>
                </div>
                <div className=" flex gap-2 p-4">
                  <div className=" h-7 w-7 flex-shrink-0  bg-white rounded-md flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <Calendar className=" h-4 w-4 text-neutral-600" />
                  </div>
                  <div className=" flex flex-col">
                    <p className=" text-sm font-medium text-neutral-600">
                      Calendar
                    </p>
                    <p className=" text-xs text-neutral-500 mt-1">
                      Manage your events and schedule effectively.
                    </p>
                  </div>
                </div>
                <div className=" flex gap-2 p-4">
                  <div className=" h-7 w-7 flex-shrink-0  bg-white rounded-md flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <Code className=" h-4 w-4 text-neutral-600" />
                  </div>
                  <div className=" flex flex-col">
                    <p className=" text-sm font-medium text-neutral-600">
                      Code
                    </p>
                    <p className=" text-xs text-neutral-500 mt-1">
                      Write and share code snippets easily.
                    </p>
                  </div>
                </div>
                <div className=" flex gap-2 p-4">
                  <div className=" h-7 w-7 flex-shrink-0  bg-white rounded-md flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <HomeIcon className=" h-4 w-4 text-neutral-600" />
                  </div>
                  <div className=" flex flex-col">
                    <p className=" text-sm font-medium text-neutral-600">
                      HOME
                    </p>
                    <p className=" text-xs text-neutral-500 mt-1">
                      Overview of your activities and stats.
                    </p>
                  </div>
                </div>
                <div className=" flex gap-2 p-4 ml-[-3rem] items-center justify-center">
                  <div className=" h-7 w-7 flex-shrink-0  bg-white rounded-md flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                    <PlusIcon className=" h-4 w-4 text-neutral-600" />
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <p className=" text-xs text-neutral-500 mt-2">
                      Create New Task
                    </p>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Card;
