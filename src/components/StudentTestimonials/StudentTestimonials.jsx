import React, { useState, useEffect } from "react";
import "./StudentTestimonials.css";
import defaultImage from "../../assets/expect1.png";
import arrow from "../../assets/arrow.png";
import arrow2 from "../../assets/arrows.png";

const StudentTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Samaa",
      image: defaultImage,
      text: " Alhamdullilah I benefited a lot from the tuition provided at Froggy. I would highly recommend to to anyone during their year 12 as they target specific HSC tactics and exam technique. I literally couldn't have done it without the lessons and support [Mr Emad] provided",
    },
    {
      name: "Mohamed Malas",
      image: defaultImage,
      text: " The only tutoring centre you need. I’ve been to 4 centres in the past, and this is by far the most supportive, comprehensive and beneficial for my hsc journey, specifically Biology, Maths and English. Mr Emad and Mr Murad  have inspired me to work my hardest. I couldn’t recommend it more for any HSC students.",
    },
    {
      name: "Nia Lutfi",
      image: defaultImage,
      text: " I study Maths/English/Biology/Business Studies at Leap, and it really is a one stop shop...The Yr 12 HSC intensive programs, crash courses and workshops are insanely beneficial... Such a dedicated team who work tirelessly day in day out for the betterment of our future leaders of the Ummah.",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with your CSS transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What our students are saying</h2>

      <div className="testimonials-container">
        <button
          className="nav-button prev"
          onClick={prevSlide}
          disabled={isAnimating}
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

        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                 
                  <div className="testimonial-text">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="nav-button next"
          onClick={nextSlide}
          disabled={isAnimating}
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

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      
      </div>
    </section>
  );
};

export default StudentTestimonials;
