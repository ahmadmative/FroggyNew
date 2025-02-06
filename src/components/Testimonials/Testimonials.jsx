import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The platform has helped me improve my grades significantly!",
      course: "Mathematics"
    },
    {
      id: 2,
      name: "Mike Chen",
      text: "Great teachers and interactive learning experience.",
      course: "Physics"
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials">
      <h2>What our students are saying</h2>
      <div className="testimonial-slider">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.course}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 