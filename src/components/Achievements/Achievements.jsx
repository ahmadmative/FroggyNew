import React from 'react';
import './Achievements.css';
import congratsImage1 from '../../assets/1.png';
import congratsImage2 from '../../assets/2.png';
import congratsImage3 from '../../assets/3.png';
import congratsImage4 from '../../assets/4.png';
import congratsImage5 from '../../assets/5.png';
import congratsImage6 from '../../assets/6.png';

const Achievements = () => {
  const achievementCards = [
    { 
      front: congratsImage1, 
      text: "Masha Allah this brother absolutely wiped the floor with his ATAR, the rest of the state got nothing on him"
    },
    { 
      front: congratsImage2, 
      text: "Masha Allah this sister absolutely wiped the floor with his ATAR, the rest of the state got nothing on him"
    },
    { 
      front: congratsImage3, 
      text: "Masha Allah this brother absolutely wiped the floor with his ATAR, the rest of the state got nothing on him"
    },
    { 
      front: congratsImage4, 
      text: "Masha Allah this brother absolutely wiped the floor with his ATAR, the rest of the state got nothing on him"
    },
    { 
      front: congratsImage5, 
      text: "Masha Allah this sister absolutely wiped the floor with his ATAR, the rest of the state got nothing on him"
    },
    { 
      front: congratsImage6, 
      text: "Masha Allah this brother absolutely wiped the floor with his ATAR, the rest of the state got nothing on him"
    }
  ];

  return (
    <section className="achievements-section">
      <div className="achievements-wrapper">
        <h2 className="achievements-title">Our Achievement Board</h2>
        <div className="achievements-container">
          <div className="achievement-grid">
            {achievementCards.map((card, index) => (
              <div 
                key={index} 
                className={`achievement-card-container ${index % 3 === 1 ? 'middle-column' : ''}`}
              >
                <div className="achievement-card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-wrapper">
                        <img src={card.front} alt={`Achievement ${index + 1}`} />
                      </div>
                    </div>
                    <div className="card-back">
                      <h3>Congratulation!</h3>
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
