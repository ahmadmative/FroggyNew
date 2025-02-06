import React from 'react';
import heroImage from '../../assets/Hero.png';
import heroCircles from '../../assets/Hero-Circles.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="circles-overlay">
          <img src={heroCircles} alt="" className="hero-circles" />
        </div>
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero; 