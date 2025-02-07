import React, { useState, useEffect, useCallback } from "react";
import "./StudentTestimonials.css";

const StudentTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      name: "Samaa",
      text: "Alhamdullilah I benefited a lot from the tuition provided at Froggy. I would highly recommend to anyone during their year 12 as they target specific HSC tactics and exam technique. I literally couldn't have done it without the lessons and support [Mr Emad] provided",
    },
    {
      name: "Mohamed Malas",
      text: "The only tutoring centre you need. I've been to 4 centres in the past, and this is by far the most supportive, comprehensive and beneficial for my hsc journey, specifically Biology, Maths and English. Mr Emad and Mr Murad have inspired me to work my hardest.",
    },
    {
      name: "Nia Lutfi",
      text: "I study Maths/English/Biology/Business Studies at Leap, and it really is a one stop shop. The Yr 12 HSC intensive programs, crash courses and workshops are insanely beneficial. Such a dedicated team who work tirelessly day in day out.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      setTouchStart(null);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <section className="testimonials-section" aria-label="Student Testimonials">
      <h2 className="testimonials-title">Student Success Stories</h2>

      <div
        className="testimonials-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button
          className="nav-button prev"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="testimonial-slider"
          role="region"
          aria-label="Testimonial Slider"
        >
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${
                  index === currentSlide ? "active" : ""
                }`}
                aria-hidden={index !== currentSlide}
              >
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <h3>{testimonial.name}</h3>
                    <blockquote>
                      <p>{testimonial.text}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="nav-button next"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="slider-controls">
        <div className="slider-dots" role="tablist">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={currentSlide === index}
              role="tab"
            />
          ))}
        </div>
        <button
          className="autoplay-toggle"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </section>
  );
};

export default StudentTestimonials;
