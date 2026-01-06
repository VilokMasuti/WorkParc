import { useState } from "react";



const Model = () => {
  const [open, setOpen] = useState(false);
  const stopClosing = (e) => e.stopPropagation();
  return (
   <section className=" mt-10 flex flex-col items-center mx-auto justify-center">

    <button className=" bg-black w-[8rem] text-center h-[3rem] rounded-md text-white p-2 cursor-pointer " onClick={() => setOpen(true)}>
Open Me..!
    </button>
    {open && (
 <div
  className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center"

  onClick={() => setOpen(false)}
>


<div
            className="bg-white p-8 rounded-lg shadow-lg w-96"
            onClick={stopClosing} // This prevents the modal from closing when you click inside it
          >
            <p className="mb-4">This is your modal content.</p>

            {/* The ONLY close button */}
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
              onClick={() => setOpen(false)} // This also closes the modal
            >
              Close
            </button>
          </div>


    </div>
    )}









   </section>
  )
}
export default Model
