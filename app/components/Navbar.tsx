"use client";

import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="bg-black">
      <div className="flex flex-col items-center w-full">
        <div
          className="flex justify-between w-[97%] items-center h-16 mt-5 p-3 shadow-lg relative"
          style={{
            background: 'linear-gradient(90deg, #006AFF 0%, #006AFF 50%, #FFFFFF 100%)',
            padding: '2px', // Add padding to show the inner black background
            borderRadius: '9999px', // This ensures the rounded corners
          }}
        >
          {/* Inner container with black background and rounded corners */}
          <div className="flex justify-between items-center w-full h-full bg-black rounded-full px-5">
            <a href="/" className="text-2xl font-medium">
              <Image
                src="/logo.png"
                alt="Logo"
                width={245}
                height={10}
                className="hidden lg:block p-2 mx-auto"
              />
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={10}
                className="lg:hidden p-2 mx-auto"
              />
            </a>
            <div className="lg:hidden" onClick={handleMenu}>
              <RxHamburgerMenu size={35} color="#3b82f6" />
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/"
                className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
              >
                Home
              </a>
              <a
                href="/pages/team"
                className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
              >
                Team
              </a>
              <a
                href="/pages/about"
                className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
              >
                About Us
              </a>
              <a
                href="/pages/projects"
                className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
              >
                Projects
              </a>
              <a
                href="/pages/events"
                className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
              >
                Events
              </a>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden w-[95%] flex flex-col items-end gap-4 mt-2 p-4 border-2 border-black rounded-2xl bg-white">
            <a
              href="/"
              className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
            >
              Home
            </a>
            <a
              href="/pages/team"
              className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
            >
              Team
            </a>
            <a
              href="/pages/about"
              className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
            >
              About Us
            </a>
            <a
              href="/pages/projects"
              className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
            >
              Projects
            </a>
            <a
              href="/pages/events"
              className="text-blue-500 text-xl font-semibold hover:underline underline-offset-4 underline-blue-500"
            >
              Events
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
