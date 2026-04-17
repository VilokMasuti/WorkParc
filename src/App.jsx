// // // import GitHub from "./fewtures/github/GitHub";
//  import Todo from "./fewtures/Todo/Todo";
// // // import Accordion from "./Interviwee/Accordion";
// import Search from "./Interviwee/Search";
// import Root from "./motion/Root";

import Accordion from "./parttens/Accordion";
import Modal from "./parttens/Modal";
import { Tasks } from "./parttens/Tasks";
import Toast from "./parttens/Toast";

//  import Tasks from "./Interviwee/Tasks";
const App = () => {

  return (
    <main className="min-h-screen w-full flex flex-col   ">
 
    <Tasks/>
<Accordion/>
<Toast/>

<Modal/>
 
     
    </main>
  );
};
export default App;






















