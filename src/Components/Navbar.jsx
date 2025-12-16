import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/5 m-2 rounded-full p-3 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl sm:text-3xl sora ml-2 no-underline font-semibold text-blue-500"
        > 
        MET.
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Nav Links */}
      <div
        id="navbarNav"
        className={`${
        isOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row gap-4 sm:gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline transition duration-300 ${
              isActive
                ? "text-white font-semibold"
                : "text-white/50 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            `no-underline transition duration-300 ${
              isActive
                ? "text-white font-semibold"
                : "text-white/50 hover:text-white"
            }`
          }
        >
          Team
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `no-underline transition duration-300 ${
              isActive
                ? "text-white font-semibold"
                : "text-white/50 hover:text-white"
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Contact Us Button */}
      <Link
        to="/contact"
        className="hidden sm:flex bg-base items-center justify-center py-[10px] px-4 rounded-full text-sm text-black font-medium hover:scale-105 transition duration-300 no-underline relative overflow-hidden"
      >
        <span className="w-16 h-10 absolute -top-8 bg-white blur-xl rounded-full"></span>
        Contact Us
      </Link>
    </nav>
  );
}

export default Navbar;