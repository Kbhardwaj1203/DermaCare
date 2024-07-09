import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">&copy; 2024 DermaCare. All rights reserved.
          Made with &#x2764; by Kritika
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;