// Carousel.jsx
import React, { useState } from "react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpg";

const images = [image1, image2, image3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-10">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="object-cover rounded-lg shadow-md transition-all duration-500"
      />

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-black px-3 py-1 rounded-r hover:bg-white"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-black px-3 py-1 rounded-l hover:bg-white"
      >
        ❯
      </button>
    </div>
  );
}
