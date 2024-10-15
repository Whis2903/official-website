"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function FaqCard() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className="flex flex-col place-content-center place-items-center lg:w-[30rem] bg-gradient-to-r from-[#0062FF] to-[#F3F3F3] bg-[length:140%_100%] bg-[position:37%_0] rounded-2xl px-3 lg:px-5 py-3">
        <div className="flex justify-between items-center w-full mx-10">
          <h1 className="lg:text-xl">Lorem ipsum dolor sit amet.</h1>
          <FaPlus size={20} onClick={handleMenu} className="hidden lg:block"/>
          <FaPlus size={15} onClick={handleMenu} className="lg:hidden"/>
        </div>
        <div
          className={`flex flex-col min-w-auto lg:w-[30rem] mt-2 border-2 border-black rounded-2xl p-5 overflow-hidden transition-[max-height] duration-500 ease-in-out ${menuOpen ? "block max-h-auto" : "hidden max-h-0"}`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            blanditiis modi natus architecto, dolore consequatur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaqCard;
