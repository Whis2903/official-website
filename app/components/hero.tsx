'use client';
import React, { useState } from "react";
import { LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import Register from "./register";

const Hero = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleJoinUsClick = () => {
    setIsRegisterOpen(true); // Open the Register pop-up
  };

  const handleCloseModal = () => {
    setIsRegisterOpen(false); // Close the Register pop-up
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center px-10 mt-6">
        <div className="flex flex-col place-content-center place-items-center gap-8 lg:w-[35rem]">
          <h1 className="text-5xl lg:text-8xl font-bold text-blue-500">
            Building a network of developers since 2024
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-xl lg:text-2xl font-medium">
              Empowering the next generation of innovators, creators, and leaders in technology. At the LinkedIn Developer&apos;s Society, we connect passionate minds, foster collaboration, and unlock the potential to shape the future of AI, web development, and beyond.
            </p>
            <p className="text-xl lg:text-2xl font-medium">
              Join a community where learning never stops, and ambition turns into real-world impact. Ready to take your skills to the next level? Dive in and start building the future today!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <img src="hero.png" alt="Hero" />
          <div className="flex flex-col items-center gap-5">
            <button
              className="bg-blue-500 rounded-r-full rounded-l-full py-2 px-4"
              onClick={handleJoinUsClick}
            >
              <span className="text-white text-xl font-semibold">Join Us</span>
            </button>
            <div className="flex items-center gap-3">
              <LuInstagram size={25} />
              <LuTwitter size={25} />
              <LuLinkedin size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Register Component */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg relative">
            <button
              className="text-2xl absolute top-2 right-2 text-gray-600"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
