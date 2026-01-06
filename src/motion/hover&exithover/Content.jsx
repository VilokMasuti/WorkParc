import Card from "./Card";
import { cn } from "../../lib/utils";
const Content = () => {
  return (
    <div
      className={cn(
        " min-h-screen w-full flex items-center justify-center bg-gray-50 text-gray-400"
      )}
    >
      <Card />
    </div>
  );
};
export default Content;
