
import { useEffect, useState } from "react";

const Images = [
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://media.istockphoto.com/id/2181735944/photo/natural-mountains-landscapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=kXWPxrf8Gs_2e35F31rKlguPcI2JE2dtGQ58HS0-W7c=",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
];

const Img = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(()=>{
      setCurrentImageIndex((pre) => pre ===  Images.length -1 ? 0 : pre + 1)
    },5000)
    return () => clearInterval(interval)

  }, []);

  const prevSlide = () => {
    setCurrentImageIndex((pre) => pre === 0 ? Images.length -1 : pre - 1)

  };

  const nextSlide = () => {
setCurrentImageIndex((pre) => pre ===  Images.length -1 ? 0 : pre + 1)
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={Images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-64 object-cover transition-all duration-700 ease-in-out"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full "
        aria-label="Previous Slide"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Next Slide"
      >
        ▶
      </button>


    </div>
  );
};

export default Img;
