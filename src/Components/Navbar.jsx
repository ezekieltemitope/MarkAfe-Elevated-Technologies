import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/2 m-6 rounded-full p-3 items-center flex justify-between border border-[#222222]">
      <Link className="text-base ml-3 text-3xl font-bold" to="/">
        <h1>MET.</h1>
      </Link>

      {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="flex gap-8" id="navbarNav">
            <Link to="/" className="text-white/50">
              Home
            </Link>
            <Link to="/team" className="text-white/50">
              Team
            </Link>
            <Link to="/contact" className="text-white/50">
              Contact
            </Link>
      </div>
        <Link to="/contact" className="bg-base flex items-center justify-center py-3 relative overflow-hidden px-6 rounded-full text-black font-semibold hover:scale-105 transition duration-300">
        <span className="w-20 h-12 absolute -top-9 bg-white blur-xl rounded-full"></span>
          Contact Us
        </Link>
    </nav>
  );
}

export default Navbar;
