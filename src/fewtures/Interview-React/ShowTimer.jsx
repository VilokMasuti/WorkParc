import { useEffect, useState } from "react";
import Counter from "./Counter";
import Stopwatch from "./Stopwatch";

const ShowTimer = () => {
  const [show,setShow] = useState(false)
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (count < 15 && count >= 0) {
      timer = setInterval(() => {
        setCount((prev) => {
          if (prev < 15) return prev + 1;
          return prev;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [count]);

  const reset = () => setCount(0);



  const handlechange = () => {
    setShow(!show)
  }
  return (
  <section className=" w-full h-screen flex
   flex-col  it">

    <div className="
    ">



<button onClick={ handlechange}>
{show  === true? "seen" : "notseen"}

</button>

{show === true
 && (
  <h1>dsfsdfsdf</h1>
 )}


    </div>


    <div className=" flex
     flex-col">

{count}

<button onClick={reset}>REST</button>

  <Stopwatch/>


  <Counter/>
    </div>

  </section>
  )
}
export default ShowTimer
