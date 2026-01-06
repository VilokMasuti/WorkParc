/* eslint-disable no-unused-vars */
import { Sparkles, Layers, Zap, Globe } from "lucide-react";
import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
const features = [
  {
    icon: <Layers className="h-8 w-8 text-neutral-200" />,
    title: "Clean Structure",
    description: "Well-organized layouts with predictable behavior.",
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
          alt="Layered design"
          width={500}
          height={500}
          loading="lazy"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Zap className="h-8 w-8 text-neutral-200" />,
    title: "Fast Performance",
    description: "Optimized rendering with no unnecessary overhead.",
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Performance"
          width={500}
          height={500}
          loading="lazy"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Globe className="h-8 w-8 text-neutral-200" />,
    title: "Web Ready",
    description: "Designed to work seamlessly across modern browsers.",
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web platform"
          width={500}
          height={500}
          loading="lazy"
          className="rounded-lg"
        />
      </div>
    ),
  },
];

const MotionHook = () => {
  const backgrounds = [
    "#ea580c", // dark orange / amber
    "#713f12", // dark yellow
    "#14532d", // dark green
  ];

  const [background, setBackground] = useState(backgrounds[0]);
  const contenrtRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contenrtRef,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const findv = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[findv]);
  });

  return (
    <motion.div
      ref={contenrtRef}
      animate={{ backgroundColor: background }} // use backgroundColor instead of background
      transition={{ duration: 1, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center" // remove bg-neutral-900
    >
      <div className=" flex flex-col gap-10 max-w-4xl ">
        {features.map((fea, idx) => (
          <Cards
            icon={fea.icon}
            title={fea.title}
            description={fea.description}
            content={fea.content}
          />
        ))}
      </div>
    </motion.div>
  );
};
export default MotionHook;
export const Cards = ({ icon, title, description, content }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [300, -400]);

  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);

  return (
    <div ref={ref} className="grid grid-cols-2 items-center gap-20 py-40">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        className="flex flex-col gap-5"
      >
        {icon}
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-neutral-400">{description}</p>
      </motion.div>

      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {content}
      </motion.div>
    </div>
  );
};
