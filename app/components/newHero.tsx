import Image from "next/image";
import React from "react";

function NewHero() {
  return (
    <div className="bg-black pt-10 pb-20 flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 flex flex-col justify-between w-full h-full">
        {/* Background Circles */}
        <div className="flex items-center justify-between w-full px-5">
          <div
            className="h-36 w-36 rounded-full md:h-40 md:w-40"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
          <div
            className="h-40 w-40 rounded-full md:h-44 md:w-44 translate-y-10"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
        </div>
        <div className="flex gap-8 items-center justify-center w-full px-5">
          <div
            className="h-36 w-36 rounded-full md:h-40 md:w-40"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
          <div
            className="h-36 w-36 rounded-full md:h-40 md:w-40 translate-x-5"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
        </div>
        <div className="flex items-center justify-around w-full px-5">
          <div
            className="h-36 w-36 rounded-full md:h-40 md:w-40"
            style={{
              background:
                "radial-gradient(circle at 90% 70%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
          <div
            className="h-32 w-32 rounded-full md:h-36 md:w-36 translate-x-5"
            style={{
              background:
                "radial-gradient(circle at 20% 5%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center px-5 py-4 relative z-10">
        <div className="flex flex-col w-full md:w-1/2 gap-5 text-center md:text-left">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-white to-blue-500 to-[40%] text-5xl md:text-6xl lg:text-8xl font-bold">
            Building a network of developers since 2024
          </h1>

          <p className="text-white text-lg md:text-xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
            iste.
          </p>
          <p className="text-white text-lg md:text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis fugit provident perspiciatis doloremque nisi vitae.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center sm:mx-auto">
          <Image 
            src="/Linkedin.png" 
            alt="LinkedIn Logo" 
            height={100} 
            width={500} 
            className="max-w-xs md:max-w-none" // Set a maximum width for mobile
          />
        </div>
      </div>
    </div>
  );
}

export default NewHero;
