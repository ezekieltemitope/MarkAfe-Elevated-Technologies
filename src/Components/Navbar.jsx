import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 px-5 bg-dark">
      <Link className="navbar-brand fw-bold text-primary" to="/">
        MET.
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link text-light">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-light">
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="btn btn-primary rounded-pill px-4">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
