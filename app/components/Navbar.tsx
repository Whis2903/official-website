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
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-[97%] items-center border-4 rounded-r-full rounded-l-full border-blue-500 h-16 mt-5 p-3 shadow-lg">
        <a href="/patient-dash" className="text-2xl font-medium">
          <Image
            src="/logo.png"
            alt=""
            width={250}
            height={10}
            className="hidden lg:block"
          />
          <Image
            src="/logo.png"
            alt=""
            width={200}
            height={10}
            className="lg:hidden"
          />
        </a>
        <div className="lg:hidden" onClick={handleMenu}>
          <RxHamburgerMenu size={35} color="#3b82f6" />
        </div>
        <div className="hidden lg:flex items-center gap-3">
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
      {menuOpen && (
        <div className="lg:hidden w-[95%] flex flex-col items-end gap-4 mt-2 p-4 border-2 border-black rounded-2xl">
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
  );
}

export default Navbar;
