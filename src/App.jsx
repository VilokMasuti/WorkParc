import GitHub from "./fewtures/github/GitHub";
import Accordion from "./Interviwee/Accordion";
import Search from "./Interviwee/Search";
import Root from "./motion/Root";

const App = () => {
  return (
    <main className="min-h-screen w-full mt-4 bg-zinc-100 shadow-md text-zinc-950">
      <GitHub/>
      <Root/>
      <Accordion/>
      <Search/>
    </main>
  );
};
export default App;
