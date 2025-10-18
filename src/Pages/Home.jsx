import React from "react";

function Home() {
  return (
    <div
      className="text-white bg-dark"
      // style={{
      //   backgroundColor: "#0d0d0d",
      //   minHeight: "100vh",
      //   overflow: "hidden",
      // }}
    >
      {/* ===== Hero Section ===== */}
      <section className="text-center py-5">
        <div className="container">
          <div className="h-screen relative w-screen flex items-center flex-col">
           <div className="flex z-20 mt-4 flex-col justify-center items-center">
             <h1 className="text-6xl text-center">
              Elevating{" "}
              <span className="text-base font-semibold">Businesses</span>{" "}
              Through <br />
              Smarter{" "}
              <span className="text-base font-semibold">IT Solutions</span>
            </h1>
            <p className="text-lg text-white/50 mt-4">
              From cloud hosting to IT transformation, we help organizations
              scale with reliable <br /> infrastructure, modern collaboration,
              and cost-efficient strategies.
            </p>
            <div>
              <div className="flex mt-7 gap-6">
                <a
                href="#services"
                className="bg-base flex items-center justify-center py-3 relative overflow-hidden px-6 rounded-full text-black font-semibold hover:scale-105 transition duration-300"
              >
                <span className="w-20 h-12 absolute -top-9 bg-white blur-xl rounded-full"></span>
                View Our Services
              </a>
              <a
                href="#services"
                className="bg-white/5 flex backdrop-blur-sm items-center justify-center py-3 relative overflow-hidden px-6 rounded-full text-white border-[#565656] border-2 font-semibold hover:scale-105 
  shadow-[inset_0_2px_20px_rgba(255,255,255,0.01),inset_0_-2px_20px_rgba(255,255,255,0.01)] 
  transition duration-300"
              >
                <span className="w-20 h-11 absolute -bottom-12 bg-white/50 blur-xl rounded-full"></span>
                Get Started
              </a>
              </div>
            </div>
           </div>
           <div className="absolute bg-dark top-28 z-10 w-full blur-xl h-40">

           </div>
           <img src="/grid.svg" className="w-[90%] opacity-50 bottom-68 h-auto absolute" alt="" />
          </div>
          <div className="mt-5">
            <img
              src="/gridlines.png"
              alt="grid"
              className="img-fluid opacity-25"
              style={{ maxHeight: "250px" }}
            />
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="text-center py-5  text-white">
        <div className="container">
          {/* Label */}
          <div className="d-flex justify-content-center mb-4">
            <button class="button" disabled>
              <div class="blob1"></div>
              <div class="blob2"></div>
              <div class="inner">Who We Are</div>
            </button>
          </div>

          {/* Main Text */}
          <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
            At{" "}
            <span className="fw-semibold text-primary">
              MarkAfe Elevated Technologies
            </span>
            , we specialize in helping businesses unlock their full potential
            through
            <span className="text-primary">
              {" "}
              cutting-edge IT infrastructure and cloud solutions
            </span>
            . Whether you’re a startup, SME, or enterprise, we design systems
            that are
            <span className="text-primary">
              {" "}
              secure, scalable, <br /> and future-ready.
            </span>
          </p>

          <p className=""></p>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section id="services" className="py-5">
        <div className="container">
          {/* Label */}
          <div className="d-flex justify-content-center mb-4">
            <button class="button" disabled>
              <div class="blob1"></div>
              <div class="blob2"></div>
              <div class="inner">Our Services</div>
            </button>
          </div>
          <h2 className="fw-bold text-center mb-5">What We Do</h2>
          <div class="row row-cols-1 row-cols-md-2 g-4 mx-auto justify-content-center">
            <div class="col" style={{ width: "400px" }}>
              <div class="card bg-transparent text-light h-100 custom-shadow border-none">
                <div class="card-body">
                  <h5 className="fw-bold">Cloud Hosting Solutions</h5>
                  <p className="text-secondary small pt-2">
                    Delivering secure, scalable, and high-performance hosting
                    for your business applications and websites.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mt-4" style={{ width: "430px", margin: "" }}>
              <div class="card bg-transparent text-light h-100 custom-shadow border-none">
                <div class="card-body">
                  <h5 className="fw-bold">
                    Infrastructure Deployment & Revenue
                  </h5>
                  <p className="text-secondary small">
                    Helping organizations design, deploy, and manage IT
                    infrastructures to drive revenue and performance.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" style={{ width: "400px" }}>
              <div class="card bg-transparent text-light h-100 custom-shadow border-none">
                <div class="card-body">
                  <h5 className="fw-bold">Collaboration & Email Management</h5>
                  <p className="text-secondary small">
                    Modern communication solutions that improve team
                    collaboration and streamline productivity.
                  </p>
                </div>
              </div>
            </div>
            <div class="col" style={{ width: "430px", margin: "" }}>
              <div class="card  bg-transparent text-light h-100 custom-shadow border-none">
                <div class="card-body">
                  <h5 className="fw-bold">
                    IT Transformation & Cost Optimization
                  </h5>
                  <p className="text-secondary small">
                    We modernize legacy systems and ensure optimal resource
                    allocation for maximum business efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mt-4" style={{ width: "400px" }}>
              <div class="card  bg-transparent text-light h-100 custom-shadow border-none">
                <div class="card-body">
                  <h5 className="fw-bold">
                    Infrastructure Planning & Roadmaps
                  </h5>
                  <p className="text-secondary small">
                    Building future-ready infrastructure blueprints that align
                    with your business growth strategy.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mt-4" style={{ width: "430px", margin: "" }}>
              <div
                className="card h-100 text-light border-0 shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #0d6efd 0%, #003366 100%)",
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-start text-start">
                  <h5 className="fw-bold mb-3 text-black fs-3">
                    Talk to Our Experts
                  </h5>
                  <a
                    href="/contact"
                    className="btn btn-dark fw-bold  rounded-pill px-4 py-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold">Cloud Hosting Solutions</h5>
                  <p className="text-secondary small">
                    Delivering secure, scalable, and high-performance hosting
                    for your business applications and websites.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold">Infrastructure Deployment & Revenue</h5>
                  <p className="text-secondary small">
                    Helping organizations design, deploy, and manage IT
                    infrastructures to drive revenue and performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold">Collaboration & Email Management</h5>
                  <p className="text-secondary small">
                    Modern communication solutions that improve team
                    collaboration and streamline productivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold">IT Transformation & Cost Optimization</h5>
                  <p className="text-secondary small">
                    We modernize legacy systems and ensure optimal resource
                    allocation for maximum business efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark text-light h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold">Infrastructure Planning & Roadmaps</h5>
                  <p className="text-secondary small">
                    Building future-ready infrastructure blueprints that align
                    with your business growth strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="card h-100 text-light border-0 shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #0d6efd 0%, #003366 100%)",
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                  <h5 className="fw-bold mb-3">Talk to Our Experts</h5>
                  <a
                    href="/contact"
                    className="btn btn-light rounded-pill px-4 py-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
