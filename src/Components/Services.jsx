import React from 'react';

export default function Services() {
  const services = [
    {
      icon: "bi bi-cloud-fill text-primary",
      title: "Cloud Hosting Solutions",
      desc: "Secure, reliable, and flexible public & private cloud hosting designed to power your business."
    },
    {
      icon: "bi bi-hdd-network-fill text-danger",
      title: "Infrastructure Deployment & Revamp",
      desc: "From ground-up deployments to restructuring old systems, we build and upgrade IT foundations that perform."
    },
    {
      icon: "bi bi-envelope-paper-fill text-warning",
      title: "Collaboration & Email Management",
      desc: "Streamlined deployment and management of enterprise email and collaboration platforms for smoother workflows."
    },
    {
      icon: "bi bi-cpu-fill text-success",
      title: "IT Transformation & Cost Optimization",
      desc: "Modernize your IT infrastructure while reducing operational costs with strategies that deliver real impact."
    },
    {
      icon: "bi bi-geo-fill text-info",
      title: "Infrastructure Planning & Roadmaps",
      desc: "Plan smarter, scale faster. We lay down the foundation for sustainable IT growth and expansion."
    },
  ];

  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">What We Do</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card bg-secondary border-0 h-100 p-3 text-center">
                <i className={`${service.icon} fs-1 mb-3`}></i>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-light">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
