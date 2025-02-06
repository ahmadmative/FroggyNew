import React from 'react';
import './LeapAheadStudy.css';
import studyImage from '../../assets/classesimg1.png'; // Update to use existing image

const LeapAheadStudy = () => {
  const steps = [
    {
      description: "You have 3 exams on different subjects coming up in a week. How and how do you know where to start. You complete the assigned homework tasks and do some practice questions that helps for the test. By this time your practice and revision is spread across reading over your textbook, writing in your class book and on scrap pieces of paper and worksheets. Your desk looks like chaos..."
    },
    {
      description: "Exam time comes, you get butterflies in your stomach and the information you thought you memorised suddenly slips away... Sound familiar?"
    },
    {
      description: "Surely there must be a better way to study! That's where we come in. Our successful Leap Ahead Study System has helped countless students greatly improve their marks from averaging 65% to beyond 90%!"
    }
  ];

  const studySkills = [
    "Critical time management skills",
    "How to develop an effective study routine",
    "How to block out distractions",
    "Step by step guide how to make your own revision notes",
    "How to retain information for exam day and beyond",
    "What to do on exam day to ensure you don't have out",
    "How to make the most of past papers and resources",
    "How to defeat procrastination once & for all"
  ];

  return (
    <section className="leap-ahead-section">
      <div className="leap-ahead-wrapper">
        <div className="section-header">
          <h2>Our Leap <span>Ahead Study</span> System has you covered</h2>
          <p>We know what you're going through.</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-items">
            {steps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon"></div>
                <p className="timeline-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="study-system-container">
        <div className="study-image-container">
          <img src={studyImage} alt="Students studying" />
          <div className="rank-badge">#1</div>
        </div>
        
        <div className="study-content">
          <h2>Our Leap Ahead Study <span>System</span></h2>
          <h3>will teach you:</h3>
          
          <ul className="study-skills-list">
            {studySkills.map((skill, index) => (
              <li key={index}>
                <span className="skill-icon">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeapAheadStudy; 