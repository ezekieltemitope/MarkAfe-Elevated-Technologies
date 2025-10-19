import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-black text-white py-5 position-relative">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
        {/* Mission Statement */}
        <div className="footer-left mb-4 mb-md-0">
          <p className="footer-text">
            Empowering businesses with reliable cloud, infrastructure, and IT transformation solutions.
            Building smarter foundations for the future
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-right">
          <h5 className="mb-3">Reach us here:</h5>
          <div className="d-flex gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-linkedin fs-3"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-facebook fs-3"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom text-end pe-3 pt-4">
        <p className="small mb-0">© 2025 MarkAfe Elevated Technologies. All rights reserved.</p>
      </div>

      {/* Watermark */}
      <div className="footer-watermark">MET</div>
    </footer>
  );
};

export default Footer;
