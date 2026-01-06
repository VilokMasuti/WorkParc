import { easeInOut, motion as Motion } from "motion/react";

const Demo1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "10px 20px 30px rgba(6, 182, 212, 0.2)",
        }}
        whileTap={{
          y: 100,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.6,
          ease: easeInOut,
        }}
        className="relative group cursor-pointer px-12 py-4 bg-black rounded-lg
        tracking-widest uppercase text-2xl text-neutral-500
        shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
      >
        GOVINDA
        {/* sharp line */}
        <span
          className="pointer-events-none absolute  inset-x-0 bottom-0 mx-auto
          h-px w-3/4
          bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
        <span
          className="pointer-events-none absolute transition-opacity duration-300 inset-x-0 bottom-px
          h-[4px] w-full mx-auto
          bg-gradient-to-r from-transparent via-cyan-500 to-transparent
          blur-sm opacity-0 group-hover:opacity-100"
        />
      </Motion.button>
    </div>
  );
};

export default Demo1;
