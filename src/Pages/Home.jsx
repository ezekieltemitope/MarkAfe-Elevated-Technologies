import React from "react";

function Home() {
  const services = [
    {
      img: "/cloud.png",
      title: "Cloud Hosting Solutions",
      text: "Secure, reliable and flexible cloud hosting designed to power your business.",
    },
    {
      img: "/infras.png",
      title: "Infrastructure Deployment & Revenue",
      text: "We build and upgrade IT foundations that perform.",
    },
    {
      img: "/mail.png",
      title: "Collaboration & Email Management",
      text: "Enterprise email and collaboration platforms for smoother workflows.",
    },
    {
      img: "/IT.png",
      title: "IT Transformation & Cost Optimization",
      text: "Modernize infrastructure while reducing operational costs.",
    },
    {
      img: "/target.png",
      title: "Infrastructure Planning & Roadmaps",
      text: "Plan smarter and scale faster with sustainable IT growth.",
    },
  ];

  return (
    <div className="text-white bg-black min-h-screen scroll-smooth overflow-x-hidden">
      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 md:px-8 lg:px-16 overflow-hidden">
        <img
          src="/grid.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-30 z-0"
        />

        {/* Separate blur overlay */}
        <div className="absolute top-28 w-full h-32 bg-black blur-xl hidden md:block z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Elevating <span className="font-semibold text-primary">Businesses</span> Through <br />
            Smarter <span className="font-semibold text-primary">IT Solutions</span>
          </h1>

          <p className="text-white mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
            From cloud hosting to IT transformation, we help organizations
            scale with reliable infrastructure, modern collaboration, and
            cost-efficient strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition duration-300"
            >
              View Our Services
            </button>

            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full border border-white/20 hover:scale-105 transition duration-300 no-underline"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="text-center py-16 px-4 md:px-8 lg:px-16">
        <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 py-3 px-6 rounded-full font-semibold hover:scale-105 transition mb-6">
          Who We Are
        </button>
        <p className="mx-auto max-w-3xl text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl">
  At <span className="font-semibold text-primary">MarkAfe Elevated Technologies</span>, we
  specialize in helping businesses unlock their full potential through{" "}
  <span className="text-white">cutting-edge IT infrastructure and cloud solutions</span>.
  We design systems that are <span className="text-white">secure, scalable, and future-ready.</span>
</p>
      </section>

      {/* ===== Services Section ===== */}
      <section id="services" className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-2 hover:border-primary transition-all duration-300 w-full max-w-sm"
            >
              <img src={item.img} alt="" className="w-12 h-12 object-contain mb-4" />
              <h5 className="font-bold text-lg mb-2">{item.title}</h5>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl p-6 flex flex-col items-center justify-center w-full max-w-sm text-white">
            <h5 className="font-bold text-xl mb-4">Talk to Our Experts</h5>
            <a
              href="/contact"
              className="bg-black/70 text-white font-semibold py-2 px-6 rounded-full hover:scale-105 transition duration-300 no-underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;