import { useEffect, useRef, useState } from "react"

const Stopwatch = () => {

  const [isRunning,setisRunning]= useState(false)
  const [count,setCount]= useState(0)
  const timer = useRef(null)


  const start = () => {
    if(!isRunning){
      setisRunning(true)

      timer.current = setInterval(() => {
        setCount((t) => Math.max(0,t+1))
      },1000)
    }
  }

  const puse = () => {
    clearInterval(timer.current)
    timer.current = null
setisRunning(false)
  }


  const reset = () => {

   setCount(0)
  };



  useEffect(() => {
    return () => clearInterval(timer.current)
  },[]) 




  return (
    <div>

      <h1>{count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={puse}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Stopwatch
