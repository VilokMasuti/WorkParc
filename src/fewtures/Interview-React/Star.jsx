import { useState } from "react";

const Star = () => {
  const [rateing,setRateing] = useState(0)
  const [hover,setHover] = useState(0)
   const handleClil = (star) => {
    if(rateing=== star){
      setRateing(0)
    } else {
      setRateing(star)
    }
   }


  return (
    <section className="mx-auto h-screen flex flex-col items-center justify-center">
      <div className="flex space-x-1 text-3xl">
        {[1,2,3,4,5].map((star) => (
          <span
          onClick={() => handleClil(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(false)}
          key={star} className={`  transition-all duration-700 ${(hover || rateing) >= star ? " text-yellow-600" :"text-gray-200"}`}>

              ★
          </span>
        ))}
        </div>

    </section>
  );
};

export default Star;
