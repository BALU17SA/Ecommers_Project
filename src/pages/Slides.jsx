import React, { useEffect, useState } from "react";
import a from '../images/a.webp';
import b from '../images/b.jpg';
import d from "../images/d.jpg";
import e from '../images/e.jpg';
import f from '../images/f.avif';


const Slides = () => {
  const images = [ e, f, d, a, b];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-96 aspect-w-1 aspect-h-1 overflow-hidden"> {/* Adjust height as needed */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover', // Adjusted to 'cover' for equal width
            backgroundPosition: 'center',
            height: '100%',
            width: '100%', // Ensures the width is 100% of the parent
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      ))}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-opacity duration-300 ${index === currentIndex ? 'bg-white opacity-100' : 'bg-gray-400 opacity-50'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slides;
