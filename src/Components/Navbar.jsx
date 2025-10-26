import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/5 m-2 rounded-full p-3 flex items-center justify-between">
      <Link className="text-base text-3xl sora ml-2 no-underline font-semibold" href="/">
        MET.
      </Link>

      <div className="flex gap-4" id="navbarNav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline transition duration-300 ${
              isActive ? "text-white font-semibold" : "text-white/50 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            `no-underline transition duration-300 ${
              isActive ? "text-white font-semibold" : "text-white/50 hover:text-white"
            }`
          }
        >
          Team
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `no-underline transition duration-300 ${
              isActive ? "text-white font-semibold" : "text-white/50 hover:text-white"
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      <Link
        to="/contact"
        className="bg-base flex items-center justify-center py-[12px] px-4 rounded-full text-sm text-black font-medium hover:scale-105 transition duration-300 no-underline relative overflow-hidden"
      >
        <span className="w-16 h-10 absolute -top-8 bg-white blur-xl rounded-full"></span>
        Contact Us
      </Link>
    </nav>
  );
}

export default Navbar;
