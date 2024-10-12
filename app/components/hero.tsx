"use client";
import React from "react";
import { LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

const Hero = () => {
  const handleJoinUsClick = () => {
    window.location.href = "/pages/recruitmentPage"; 
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-5 lg:px-10 mt-6">
      <div className="flex flex-col place-content-center place-items-center gap-8 lg:w-[35rem] text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold text-blue-500">
          Building a network of developers since 2024
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-lg lg:text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum dolore velit sit ipsa iusto excepturi.
          </p>
          <p className="text-lg lg:text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            eligendi?
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 mt-6 lg:mt-0">
        <img src="hero.png" alt="Hero" className="w-full max-w-xs lg:max-w-sm" /> {/* Responsive image */}
        <div className="flex flex-col items-center gap-5">
          <button
            className="bg-blue-500 rounded-full py-2 px-6"
            onClick={handleJoinUsClick}
          >
            <span className="text-white text-lg font-semibold">Join Us</span>
          </button>
          <div className="flex items-center gap-3">
            <LuInstagram size={25} />
            <LuTwitter size={25} />
            <LuLinkedin size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
