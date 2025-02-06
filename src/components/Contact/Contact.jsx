import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="contact">
      <h2>Study with Froggy</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Get Started</button>
      </form>
    </section>
  );
};

export default Contact; 