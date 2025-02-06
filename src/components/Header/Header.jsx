import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import froggyLogo from '../../assets/froggylogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'visible';
  };

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img src={froggyLogo} alt="Froggy Logo" />
        </Link>

        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="/enroll" className="enrol-btn" onClick={() => setIsMenuOpen(false)}>Enrol Now</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 