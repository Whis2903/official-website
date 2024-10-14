import Image from "next/image";
import React from "react";

function NewHero() {
  return (
    <div className="bg-black pt-10 pb-20">
      <div className="flex flex-col justify-between w-full h-[75%] absolute">
        <div className="flex items-center justify-between">
          <div
            className="h-36 w-36 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
          <div
            className="h-40 w-40 rounded-full translate-y-20"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
        </div>
        <div className="flex gap-40 items-center justify-center">
          <div
            className="h-36 w-36 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
          <div
            className="h-36 w-36 rounded-full translate-x-20"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
        </div>
        <div className="flex items-center justify-around">
          <div
            className="h-36 w-36 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 90% 70%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
          <div
            className="h-32 w-32 rounded-full translate-x-40"
            style={{
              background:
                "radial-gradient(circle at 20% 5%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
        </div>
      </div>
      <div className="flex justify-between w-full items-center px-10 py-4 relative">
        <div className="flex flex-col w-[50%] gap-5">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-white to-blue-500 to-[40%] text-8xl font-bold">
            Building a network of developers since 2024
          </h1>
          <p className="text-white text-3xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
            iste.
          </p>
          <p className="text-white text-3xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis fugit provident perspiciatis doloremque nisi vitae.
          </p>
        </div>
        <div>
          <Image src="/Linkedin.png" alt="" height={150} width={500} />
        </div>
      </div>
    </div>
  );
}

export default NewHero;

const Circle = ({ className, gradientPosition = "10% 15%" }) => {
    return (
      <div
        className={`rounded-full ${className}`}
        style={{
          background: `radial-gradient(circle at ${gradientPosition}, #D9D9D9, #0062FF, #0062FF)`,
        }}
      />
    );
  };
