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
      <div className="flex flex-col place-content-center place-items-center w-[30rem] bg-slate-300 rounded-2xl px-5 py-3">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl">Lorem ipsum dolor sit amet.</h1>
          <FaPlus size={20} onClick={handleMenu} />
        </div>
        <div
          className={`flex flex-col w-[95%] mt-2 border-2 border-black rounded-2xl p-5 overflow-hidden transition-[max-height] duration-500 ease-in-out ${menuOpen ? "block max-h-40" : "hidden max-h-0"}`}
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
