import React from 'react';
import heroImage from '../../assets/Hero.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-card">
          <img src={heroImage} alt="Students studying" className="hero-image" />
         
        </div>
      </div>
      <div className="background-shapes">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </section>
  );
};

export default Hero; 