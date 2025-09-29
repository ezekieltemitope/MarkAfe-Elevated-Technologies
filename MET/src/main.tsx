import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-5 bg-transparent">
        <h1 className="text-2xl font-bold text-white">MET.</h1>
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
          <li className="hover:text-white cursor-pointer">Team</li>
        </ul>
        <button className="ml-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </nav>

      {/* MET Content */}
      <div className="text-center max-w-3xl mt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Elevating <span className="text-blue-500">Businesses</span> Through
          <br /> Smarter <span className="text-blue-500">IT Solutions</span>
        </h1>
        <p className="text-gray-400 mt-6">
          From cloud hosting to IT transformation, we help organizations scale
          with reliable infrastructure, modern collaboration, and cost-efficient
          strategies.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button className="bg-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
            Contact Us
          </button>
          <button className="bg-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Grid effect */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-center">
        <div className="w-full h-60 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>
    </section>
  );
};

export default Hero;
