// Footer.jsx
import React from "react";
import "./Footer.css";
import { Linkedin, Facebook, Instagram, Store } from "lucide-react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={Logo} alt="Froggy Tuition Centre" className="footer-logo" />

          <p className="address">
            Level 1/ 372 Chapel Rd , Bankstown NSW 2200 (Entrance is from rear
            on Kitchener Pde
          </p>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/programs">Programs</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/enroll">Enroll with Froggy</a>
            </li>
          </ul>
        </div>

        {/* Programs Section */}
        <div className="footer-section">
          <h3>Programs</h3>
          <ul>
            <li>
              <a href="/pre-kindy">Pre-Kindy</a>
            </li>
            <li>
              <a href="/hsc-prelim">HSC Prelim</a>
            </li>
            <li>
              <a href="/naplan">NAPLAN</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:info@froggytuition.com.au">
                Email: info@froggytuition.com.au
              </a>
            </li>
            <li>
              <a href="tel:(02)97939989">Phone: (02) 9793 9989</a>
            </li>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Store size={20} />
              </a>
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
