import React, { useState } from 'react';
import './ImageSlider.css';
import imageDrafted from '../../assets/imagedrafted.png';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      image: imageDrafted,
      alt: 'Drafted'
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
        nextSlide();
    }
    if (isRightSwipe) {
        prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="slider-section">
      <div className="slider-container">
        <button className="nav-button prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="slider-content" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].alt}
            className="slider-image"
          />
        </div>

        <button className="nav-button next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ImageSlider; 