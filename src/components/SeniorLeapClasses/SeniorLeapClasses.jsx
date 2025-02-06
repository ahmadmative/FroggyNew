import React from 'react';
import './SeniorLeapClasses.css';

const SeniorLeapClasses = () => {
  const classesData = [
    {
      title: "HSC English",
      subtitle: "Award winning English Program",
      price: "49",
      timing: "Monday 5:15 - 6:45pm",
      features: [
        "Syllabus aligned Standard & Advanced",
        "Access to group chats with specialized tutors",
        "Free study space all day Saturday"
      ]
    },
    {
      title: "HSC Maths",
      subtitle: "Award winning Maths Program",
      price: "49",
      timing: "Monday 7-8:30pm",
      features: [
        "Syllabus aligned Standard & Advanced",
        "Access to group chats with specialized tutors",
        "Free study space all day Saturday"
      ]
    },
    {
      title: "Prelim English",
      subtitle: "Award winning English Program",
      price: "49",
      timing: "Monday 7-8:30pm",
      features: [
        "Syllabus aligned Standard & Advanced",
        "Access to group chats with specialized tutors",
        "Free study space all day Saturday"
      ]
    },
    {
      title: "Prelim Maths",
      subtitle: "Award winning Maths Program",
      price: "49",
      timing: "Monday 5:15-6:45pm",
      features: [
        "Syllabus aligned Standard & Advanced",
        "Access to group chats with specialized tutors",
        "Free study space all day Saturday"
      ]
    }
  ];

  const additionalClasses = [
    {
      title: "Biology",
      subtitle: "HSC | Prelim",
      price: "49"
    },
    {
      title: "Business Studies",
      subtitle: "HSC | Prelim",
      price: "49"
    },
    {
      title: "SOR II",
      subtitle: "HSC | Prelim",
      price: "49"
    },
    {
      title: "Chemistry",
      subtitle: "HSC | Prelim",
      price: "49"
    },
    {
      title: "Physics",
      subtitle: "HSC | Prelim",
      price: "49"
    }
  ];

  return (
    <section className="senior-leap">
      <div className="senior-leap-wrapper">
        <div className="senior-leap-header">
          <h2>Senior Leap Classes</h2>
          <p>Monday HSC | Prelim</p>
        </div>
        
        <div className="classes-grid">
          {classesData.map((classItem, index) => (
            <div key={index} className="class-card">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
              <div className="card-header">
                <h3>{classItem.title}</h3>
                <p>{classItem.subtitle}</p>
              </div>
              
              <div className="price-section">
                <span className="dollar">$</span>
                <span className="amount">{classItem.price}</span>
                <span className="period">/ week</span>
              </div>

              <div className="timing">
                <span className="clock-icon">🕒</span>
                {classItem.timing}
              </div>

              <ul className="features-list">
                {classItem.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="enroll-button">Enrol now!</button>
            </div>
          ))}
        </div>

        {/* Additional Classes Section */}
        <div className="additional-classes">
          <div className="classes-grid-simple">
            {additionalClasses.map((classItem, index) => (
              <div key={index} className="simple-card">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <h3>{classItem.title}</h3>
                <p>{classItem.subtitle}</p>
                <div className="price-simple">
                  <span className="dollar">$</span>
                  <span className="amount">{classItem.price}</span>
                  <span className="period">/ week</span>
                </div>
                <button className="enroll-button">Enrol now!</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorLeapClasses; 