import { useEffect } from "react";

const TrafiicLight = () => {

  useEffect(() => {

  },[])

  return (
  <section className=" mt-5 w-full  h-screen bg-slate-50 shadow-2xl  mx-auto flex items-center justify-center flex-col">

    <div className=" w-20 h-58 bg-gray-800 rounded-md flex flex-col items-center justify-around p-3">

      <div className=" w-10 h-10 bg-red-600 rounded-full"></div>
      <div className=" w-10 h-10 bg-yellow-600 rounded-full"></div>
      <div className=" w-10 h-10 bg-green-600 rounded-full"></div>

    </div>

  </section>
  )
}
export default TrafiicLight
