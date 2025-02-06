import React, { useState } from 'react';
import './ExpectFromClasses.css';
import expectImage1 from '../../assets/classesimg1.png';
import expectImage2 from '../../assets/ExpectImage2.jpg';
import expectImage3 from '../../assets/ExpectImage3.jpg';

const ExpectFromClasses = () => {
  const [activeImage, setActiveImage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBarClick = (imageNumber) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveImage(imageNumber);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="expect-section">
      <div className="expect-wrapper">
        <h2 className="main-title">What to <span>expect</span> from our classes</h2>
        <div className="expect-content">
          <div className="left-content">
            <div className="class-container">
              <div className="image-wrapper">
                <div className={`image-slider ${isAnimating ? 'animating' : ''}`}>
                  <img 
                    className={`slider-image ${activeImage === 1 ? 'active' : ''}`}
                    src={expectImage1} 
                    alt="Students studying together" 
                  />
                  <img 
                    className={`slider-image ${activeImage === 2 ? 'active' : ''}`}
                    src={expectImage2} 
                    alt="Super Saturday class" 
                  />
                  <img 
                    className={`slider-image ${activeImage === 3 ? 'active' : ''}`}
                    src={expectImage3} 
                    alt="Custom class" 
                  />
                </div>
                <div className="image-label">
                  {activeImage === 1 && 'Monday English and Maths: Prelim | HSC'}
                  {activeImage === 2 && 'Super Saturday Prelim | HSC Classes'}
                  {activeImage === 3 && 'Custom Prelim & HSC 1-on-1 ($85/hr)'}
                </div>
              </div>
              <div className="course-buttons">
                <div 
                  className={`course-btn monday ${activeImage === 1 ? 'active' : ''}`}
                  onClick={() => handleBarClick(1)}
                >
                  <span>Monday English and Maths: Prelim | HSC</span>
                </div>
                <div 
                  className={`course-btn saturday ${activeImage === 2 ? 'active' : ''}`}
                  onClick={() => handleBarClick(2)}
                >
                  <span>Super Saturday Prelim | HSC Classes</span>
                </div>
                <div 
                  className={`course-btn custom ${activeImage === 3 ? 'active' : ''}`}
                  onClick={() => handleBarClick(3)}
                >
                  <span>Custom Prelim & HSC 1-on-1 ($85/hr)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right-content">
            <div className="about-section">
              <h3>About</h3>
              <p>The nuts and bolts of Leap Tuition Mondays serve to supercharge our Year 11 and 12 legends in English and Maths. You can select one or both subjects when enrolling. All classes are sorted by ability and capped at 15 students. We have designed our classrooms to ensure robust, efficient learning.</p>
            </div>

            <div className="expect-list">
              <h3>What to expect</h3>
              <ul>
                <li>To fill in content gaps</li>
                <li>Complete syllabus content coverage</li>
                <li>Course notes</li>
                <li>Strategic advantage over peers with world-class tuition</li>
                <li>Mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectFromClasses; 