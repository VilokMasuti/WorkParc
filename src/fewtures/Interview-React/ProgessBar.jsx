import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Progress Bar</h1>

      {/* Outer bar */}
      <div className="relative w-[50rem] h-10 border border-black rounded-md bg-gray-200 overflow-hidden">


        <div
          className="h-full bg-green-500 transition-all  origin-left  duration-700"
style={{ transform: `scaleX(${bar / 100})` }}
        />


        <div className="absolute inset-0 flex items-center justify-center font-bold">
          {bar}%
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
