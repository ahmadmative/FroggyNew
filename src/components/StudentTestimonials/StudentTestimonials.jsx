import React, { useState } from 'react';
import './StudentTestimonials.css';
import defaultImage from '../../assets/expect1.png';

const StudentTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Hannah Schmitt",
      image: defaultImage,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
    },
    {
      name: "John Smith",
      image: defaultImage,
      text: "Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
    },
    {
      name: "Sarah Johnson",
      image: defaultImage,
      text: "Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
    },
    {
      name: "Mike Wilson",
      image: defaultImage,
      text: "Maecenas vitae mattis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Emma Davis",
      image: defaultImage,
      text: "Consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What our students are saying</h2>
      
      <div className="testimonials-container">
        <button className="nav-button prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="student-image">
              <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
            </div>
            <div className="testimonial-text">
              <h3>{testimonials[currentSlide].name}</h3>
              <p>{testimonials[currentSlide].text}</p>
            </div>
          </div>
        </div>

        <button className="nav-button next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonials; 