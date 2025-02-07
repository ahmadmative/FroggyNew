import React, { useState } from 'react';
import './ImageSlider.css';
import englishStandard from '../../assets/English Standard.mp4';
import englishAdvanced from '../../assets/English Advanced.mp4';
import mathsStandard from '../../assets/Maths Standard.mp4';
import sorII from '../../assets/SOR II.mp4';
import biology from '../../assets/Biology.mp4';
import businessStudies from '../../assets/Business Studies.mp4';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      video: englishStandard,
      alt: 'English Standard'
    },
    {
      video: englishAdvanced,
      alt: 'English Advanced'
    },
    {
      video: mathsStandard,
      alt: 'Maths Standard'
    },
    {
      video: sorII,
      alt: 'SOR II'
    },
    {
      video: biology,
      alt: 'Biology'
    },
    {
      video: businessStudies,
      alt: 'Business Studies'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="slider-section">
      <div className="slider-container">
        <button className="nav-button1 prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="slider-content">
          <video 
            key={currentSlide}
            autoPlay
            loop
            muted
            playsInline
            className="slider-video"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <button className="nav-button1 next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ImageSlider; 