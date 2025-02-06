import React from 'react';
import './HolisticApproach.css';
import defaultImage from '../../assets/classesimg1.png'; // Temporary image

const HolisticApproach = () => {
  const approaches = [
    "Small classes so you receive the attention you deserve",
    "Holistic mentoring and goal setting",
    "Focus on mental & physical wellbeing",
    "Smart study routine & habits",
    "Boosting self-confidence",
    "Clear & concise Maths explanations",
    "Guided essay writing & responses",
    "Quality resources & past papers",
    "All our tutors are highly qualified with perfect all round HSC scores providing Core English and Maths skills as well as expert mentoring"
  ];

  return (
    <section className="holistic-section">
      <div className="holistic-wrapper">
        <div className="content-side">
          <h2>Our holistic approach to</h2>
          <h3>smashing <span>that ATAR</span></h3>
          
          <ul className="approach-list">
            {approaches.map((item, index) => (
              <li key={index}>
                <span className="bullet-point"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="image-grid">
          <div className="grid-item top">
            <img src={defaultImage} alt="Student studying" />
          </div>
          <div className="bottom-container">
            <div className="grid-item bottom-left">
              <img src={defaultImage} alt="Library study" />
            </div>
            <div className="grid-item bottom-right">
              <img src={defaultImage} alt="Student research" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticApproach; 