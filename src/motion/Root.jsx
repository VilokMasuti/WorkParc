import Demo1 from "./Demo1";
import MotionHook from "./hooksmotion/MotionHook";
import Content from "./hover&exithover/Content";

const Root = () => {
  return (
    <main className=" flex flex-col gap-10  ">
      <Demo1 />
      <Content />
      <MotionHook />
    </main>
  );
};
export default Root;
