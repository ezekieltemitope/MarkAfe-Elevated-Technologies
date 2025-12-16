import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-[#0D0D0D] text-white pt-8 pb-4 relative">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Mission Statement */}
        <div className="md:w-1/2">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
            Empowering businesses with reliable cloud, infrastructure, and IT transformation solutions. 
            Building smarter foundations for the future
          </p>
        </div>

        {/* Social Links */}
        <div className="md:w-1/2 flex flex-col items-start md:items-end text-start md:text-end">
          <h5 className="mb-3 text-lg font-semibold">Reach us here:</h5>
          <div className="flex gap-6 justify-start md:justify-end">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition">
              <i className="bi bi-facebook text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom text-center md:text-end px-4 mt-8">
        <p className="text-xs sm:text-sm mb-0">© 2025 MarkAfe Elevated Technologies. All rights reserved.</p>
      </div>

      {/* Watermark */}
      <div className="footer-watermark absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/10 text-4xl sm:text-6xl font-bold">
        MET
      </div>
    </footer>
  );
};

export default Footer;