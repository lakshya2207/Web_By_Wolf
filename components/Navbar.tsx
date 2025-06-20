import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <nav className="navbar w-full z-50 flex justify-between items-center px-6 sm:px-8 py-4 top-0 left-0"  style={{ backdropFilter: "blur(0.1px)" }}>
      <div className="font-extrabold text-xl p-3 px-6 bg-slate-200 text-black">
        LOGO
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#1959AC] hover:scale-110 transition-transform"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Nav Links */}
      <ul
        className={`${
          isOpen ? "flex flex-col absolute top-full right-6 bg-white p-4 rounded shadow-md" : "hidden"
        } sm:flex gap-6 font-medium`}
      >
        {["Lorem, ipsum", "Lorem, ipsum", "Lorem, ipsum"].map((text, i) => (
          <li key={i}>
            <div
              className="flex font-semibold items-center gap-1 cursor-pointer text-[#1959AC] hover:opacity-80 transition duration-200"
            >
              {text} <span className="text-sm">˅</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Sign In */}
      <div className="hidden sm:block">
        <Link
          href="/signin"
          className="px-5 py-2 bg-white text-black rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
