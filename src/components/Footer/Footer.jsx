import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import froggyLogo from '../../assets/froggylogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={froggyLogo} alt="Froggy Tuition Centre" />
            <h2>froggy<br />TUITION CENTRE</h2>
          </div>
          <p className="address">
            Level 1/ 372 Chapel Rd, Bankstown NSW 2200 (Entrance is from rear car Park road)
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/enroll">Enroll with Froggy</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Programs</h3>
            <ul>
              <li><Link to="/pre-study">Pre Study</Link></li>
              <li><Link to="/hsc-prelim">HSC Prelim</Link></li>
              <li><Link to="/hsc-trial">HSC/Trial</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:info@froggytuition.com.au">Email: info@froggytuition.com.au</a></li>
              <li><a href="tel:+61293989989">Phone: (02) 9398 9989</a></li>
              <li className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 