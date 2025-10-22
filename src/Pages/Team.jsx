import React from "react";

function Team() {
  const team = [
    { name: "Mark Afe", role: "Cloud Infrastructure engineer / Server Administrator" },
    { name: "Pleasant", role: "Company Admin" },
    { name: "Temitope", role: "Frontend Developer" },
    { name: "Judah", role: "Product/ Visual Designer" },
    { name: "Tayo", role: "Full Stack Developer" },
    { name: "Johnson John", role: "Frontend Developer" },
  ];

  const partners = [
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",

  ];

  return (
    <div className="bg-black text-white py-10 text-center min-h-screen">
      {/* === Team Section === */}
      <h1 className="text-4xl font-bold mb-10 fade-in">Our Team</h1>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-[#121212] rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300"
            >
              <h5 className="font-bold text-lg mb-1">{member.name}</h5>
              <p className="text-white/70 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === Partnerships Section === */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Partnerships</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center px-5">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-transparent"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="object-contain w-48 h-24 filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
