import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col items-center">
      <button className="bg-neutral-900 px-6 py-2 rounded-full mb-6">
        Who We Are
      </button>
      <p className="text-gray-300 max-w-3xl text-center text-lg leading-relaxed">
        At MarkAfe Elevated Technologies, we specialize in helping businesses
        unlock their full potential through{" "}
        <span className="text-blue-400">cutting-edge IT infrastructure</span>{" "}
        and <span className="text-blue-400">cloud solutions</span>. <br />
        Whether you’re a startup, SME, or enterprise, we design systems that are{" "}
        <span className="text-blue-400">
          secure, scalable, and future-ready.
        </span>
      </p>
    </section>
  );
};

export default About;
