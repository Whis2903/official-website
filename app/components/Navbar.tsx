"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="flex items-center justify-between bg-white border-2 border-blue-500 rounded-full mx-10 my-4 py-2 px-4 shadow-lg h-16 w-[97%]">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={250} height={10} />
      </Link>
      <div className="md:hidden">
        <RxHamburgerMenu size={30} color="#3b82f6" onClick={handleMenu} />
      </div>
      <div className="hidden md:block">
        <div className="flex space-x-6">
          <Link
            href="/pages/team"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Team
          </Link>
          <Link
            href="/pages/about"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/pages/projects"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Projects
          </Link>
          <Link
            href="/pages/events"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Events
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden w-[95%] flex flex-col items-center gap-4 mt-2 p-4 border-2 border-black rounded-2xl">
          <Link //Team Page
            href="/pages/team"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Team
          </Link>
          <Link //About Us Page
            href="/pages/about"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            About Us
          </Link>
          <Link // Projects Page
            href="/pages/projects"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Projects
          </Link>
          <Link // Events Page
            href="/pages/events"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Events
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
