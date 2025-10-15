import React from 'react';

export default function Hero() {
  return (
    <section className="text-center text-white bg-dark py-5">
      <div className="container">
        <h1 className="fw-bold mb-3">
          Elevating <span className="text-primary">Businesses</span> Through Smarter <span className="text-info">IT Solutions</span>
        </h1>
        <p className="lead mb-4">From cloud hosting to IT transformation, we deliver reliable digital solutions for every business scale.</p>
        <div>
          <button className="btn btn-primary me-3">Discover</button>
          <button className="btn btn-outline-light">Get Started</button>
        </div>
      </div>
    </section>
  );
}
