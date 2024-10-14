'use client'
import React, { useState, useEffect } from 'react';

function Carousel() {
  // Image data array
  const Data = [
    { banner: 'https://placehold.co/600x400' },
    { banner: 'https://placehold.co/600x400/orange/white' },
    { banner: 'https://placehold.co/600x400/red/white' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [Data.length]);

  return (
    <section className="mt-0 bg-black w-full min-h-screen"> {/* Full-width black background with screen height */}
      <div className="grid grid-cols-3 place-content-center place-items-center w-full py-10">
        <div className="h-[2px] w-[97%] bg-blue-500" />
        <h1 className="text-4xl font-semibold text-center md:text-left text-white"> {/* Text is now white */}
          Our Events
        </h1>
        <div className="h-[2px] w-[97%] bg-blue-500" />
      </div>
      <div className="flex place-content-center place-items-center my-10">
        <div className="flex place-content-center place-items-center h-[25rem] w-[95%] bg-blue-500 rounded-2xl">
          <div className="h-[92%] w-[98%] bg-white rounded-2xl overflow-hidden">
            <img
              src={Data[currentIndex].banner}
              alt={`Slide ${currentIndex + 1}`}
              className="object-cover w-full h-full rounded-2xl transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
