import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
  className="w-full z-50 flex justify-between items-center px-8 py-4 bg-transparent backdrop-blur"
  style={{ backdropFilter: "blur(0.1px)" }}
>
  <div className="font-extrabold text-xl p-3 px-6 bg-slate-200 text-black">
        LOGO
      </div>

      {/* Center: Navigation links */}

      <ul className="flex gap-8 font-medium">
        <li>
          <div
            className="flex font-semibold items-center gap-1 cursor-pointer hover:opacity-80 transition-colors duration-200"
            style={{ color: "#1959AC" }}
          >
            Lorem, ipsum <span className="text-sm">˅</span>
          </div>
        </li>
        <li>
          <div
            className="flex font-semibold items-center gap-1 cursor-pointer hover:opacity-80 transition-colors duration-200"
            style={{ color: "#1959AC" }}
          >
            Lorem, ipsum <span className="text-sm">˅</span>
          </div>
        </li>
        <li>
          <div
            className="flex font-semibold items-center gap-1 cursor-pointer hover:opacity-80 transition-colors duration-200"
            style={{ color: "#1959AC" }}
          >
            Lorem, ipsum <span className="text-sm">˅</span>
          </div>
        </li>
      </ul>

      {/* Right: Sign In Button */}
      <div>
        <Link
          href="/signin"
          className="px-5 py-2  bg-white text-black rounded-md hover:bg-gray-800 transition-colors duration-200"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
