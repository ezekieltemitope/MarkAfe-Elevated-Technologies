import React from "react";

function Team() {
  const team = [
    {
      name: "Mark Afe",
      role: "Cloud Infrastructure Engineer / Server Administrator",
      image: "/MarkAfe.jpg",
      description:
        "An experienced administrative professional with a strong background in operations management, process coordination, and organizational support. He oversees day-to-day administrative functions, ensuring efficiency, compliance, and seamless communication across departments. With a passion for excellence and attention to detail, Mark plays a key role in driving productivity, supporting leadership initiatives, and maintaining a well-structured workplace that aligns with the company's goals."
    },
    {
      name: "Aruwajoye Pleasant",
      role: "Company Admin",
      image: "/Pleasant.jpg",
      description:
        "A dedicated administrative professional committed to supporting the team and ensuring smooth operations across all departments. Experienced in coordinating processes, managing schedules, and maintaining compliance with organizational standards. Provides reliable support to leadership initiatives, ensuring efficiency and seamless communication across teams. Skilled in documentation, reporting, and resource management to keep workflows structured and productive. Collaborates effectively with colleagues to foster a positive and well‑organized workplace environment."
    },
    {
      name: "Alebiosu Temitope",
      role: "Frontend Developer",
      image: "/Temmy.jpg",
      description:
        "A skilled frontend developer passionate about creating intuitive and responsive user interfaces that deliver exceptional user experiences. Proficient in modern frameworks like React and Tailwind CSS, with a strong eye for design and usability. Experienced in translating complex requirements into clean, maintainable code that scales across devices and platforms. Collaborates effectively with cross-functional teams to bring ideas to life and ensure seamless integration with backend systems."
    },
    {
      name: "Oyedele Judah",
      role: "Product / Visual Designer",
      image: "/Judah.jpg",
      description:
        "A creative product and visual designer with an eye for detail, dedicated to crafting beautiful and functional design solutions. Skilled in blending aesthetics with usability to deliver designs that resonate with users and meet business objectives. Experienced in creating cohesive brand identities, intuitive interfaces, and engaging visual assets across digital platforms. Collaborates closely with developers, marketers, and product managers to ensure seamless execution of design concepts."
    },
    {
      name: "Ariyo Eyitayo",
      role: "Full Stack Developer",
      image: "/Eyitayo.jpg",
      description:
        "A versatile full stack developer with expertise in building scalable applications across frontend and backend technologies. Proficient in modern frameworks, databases, and cloud services, ensuring robust and efficient solutions. Experienced in designing APIs, integrating third‑party services, and optimizing performance across diverse platforms. Collaborates seamlessly with designers, product managers, and engineers to deliver end‑to‑end functionality."
    },
    {
      name: "Johnson John",
      role: "Frontend Developer",
      image: "/John.jpg",
      description:
        "A talented frontend developer focused on delivering high-quality, performant web applications with excellent user experiences. Proficient in modern technologies such as React, Tailwind CSS, and JavaScript to craft dynamic interfaces. Experienced in translating design concepts into responsive layouts that adapt seamlessly across devices and platforms."
    }
  ];

  const partners = [
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png",
    "/partner1.png"
  ];

  return (
    <div className="bg-black text-white py-10 min-h-screen">
      {/* === Team Section === */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center px-4">
        Our Team
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-black text-white rounded-xl shadow-lg p-6 
                         border-2 border-gray-700 
                         hover:border-blue-500 
                         hover:scale-105 hover:shadow-blue-500/50 
                         transition-colors duration-300 ease-in-out text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover mb-4 
                           transition duration-300 
                           group-hover:ring-4 group-hover:ring-blue-500 group-hover:shadow-lg"
              />
              <h5 className="font-bold text-base sm:text-lg text-white">
                {member.name}
              </h5>
              <p className="text-xs sm:text-sm text-blue-500 mt-1">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white mt-4 text-justify leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* === Partnerships Section ===
      <section className="mt-20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">Partnerships</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 justify-items-center">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-transparent"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="object-contain w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 
                           filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 
                           transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default Team;