import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaTiktok, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-tagline">Omweear – Move with Confidence</p>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Shop Now</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <p>Email: <a href="mailto:support@omweear.com">support@omweear.com</a></p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 123 Activewear Street, New York, NY, USA</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaTiktok />
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
          </div>
        </div>
        <div className="footer-section">
          <h4>Accepted Payment Methods</h4>
          <p>Visa | MasterCard | BAC | PayPal</p>
          <p>Banco Agrícola | Google Pay</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Omweear. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;

