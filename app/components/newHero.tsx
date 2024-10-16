import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link for navigation
import { LuInstagram, LuTwitter, LuLinkedin } from "react-icons/lu"; // Import your social media icons

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
            className="h-40 w-40 rounded-full md:h-44 md:w-44 translate-y-14"
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
            className="h-36 w-36 rounded-full md:h-40 md:w-40 translate-x-7"
            style={{
              background:
                "radial-gradient(circle at 10% 15%, #D9D9D9, #0062FF, #0062FF)",
            }}
          />
        </div>
        <div className="flex items-center justify-around w-full px-5">
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center px-5 py-4 relative z-10">
        <div className="flex flex-col w-full md:w-1/2 gap-5 text-center md:text-left">
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-bold text-center md:text-left">
          Building a network of developers since 2024
        </h1>


          <p className="text-white text-lg md:text-xl font-medium">
            We believe in the power of community to drive innovation and growth.
            By connecting developers from all walks of life, we offer a space to
            learn, collaborate, and create. Join us in shaping the future of
            technology through shared knowledge and groundbreaking projects.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/Linkedin.png"
            alt="LinkedIn Logo"
            height={100}
            width={500}
            className="max-w-xs md:max-w-none" // Set a maximum width for mobile
          />
          {/* Button and Icons Section */}
          <div className="flex flex-col items-center gap-5 mt-8"> {/* Added margin-top for spacing */}
            <Link href="/pages/recruitmentPage" passHref>
              <button className="bg-blue-500 rounded-full py-2 px-6">
                <span className="text-white text-xl font-semibold">Join Us</span>
              </button>
            </Link>

            <div className="flex items-center gap-6 mt-4">
              <LuInstagram size={25} className="text-white" />
              <LuLinkedin size={25} className="text-white" />
              <LuTwitter size={25} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHero;
