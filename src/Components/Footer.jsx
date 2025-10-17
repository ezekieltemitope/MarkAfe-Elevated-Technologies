import React from "react";

function Footer() {
  return (
    <footer
      className="py-4 border-top border-primary-subtle text-center text-light"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="container">
        <p className="text-light mb-1">
          Empowering businesses with reliable cloud, infrastructure, and IT
          transformation solutions.
        </p>
        <div className="my-3">
          <a href="#" className="text-light mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <small className="text-secondary">
          © 2025 MarkAfe Elevated Technologies. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
