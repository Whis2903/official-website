"use client";
import Link from "next/link";
import React from "react";
import { LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="bg-black text-white py-6"> {/* Added padding to ensure black background */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-10">
        <div className="flex flex-col place-content-center place-items-center gap-8 lg:w-[35rem]">
          <h1 className="text-5xl lg:text-8xl font-bold text-blue-500">
            Building a network of developers since 2024
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-xl lg:text-2xl font-medium">
              Join a community where learning never stops, and ambition turns
              into real-world impact. Ready to take your skills to the next
              level? Dive in and start building the future today!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <img src="hero.png" alt="Hero" />
          <div className="flex flex-col items-center gap-5">
            <Link href={"/recruitmentPage"}>
              <button className="bg-blue-500 rounded-r-full rounded-l-full py-2 px-4">
                <span className="text-white text-xl font-semibold">
                  Join Us
                </span>
              </button>
            </Link>

            <div className="flex items-center gap-3">
              <LuInstagram size={25} />
              <LuTwitter size={25} />
              <LuLinkedin size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
