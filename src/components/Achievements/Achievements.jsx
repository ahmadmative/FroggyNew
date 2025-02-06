import React, { useState } from 'react';
import './Achievements.css';
import congratsImage from '../../assets/congratulations.png';
import flipImage from '../../assets/flip.png';

const Achievements = () => {
  const achievementCards = [
    { front: congratsImage, back: flipImage },
    { front: congratsImage, back: flipImage },
    { front: congratsImage, back: flipImage },
    { front: congratsImage, back: flipImage },
    { front: congratsImage, back: flipImage },
    { front: congratsImage, back: flipImage }
  ];

  const [flippedCards, setFlippedCards] = useState(new Array(achievementCards.length).fill(false));

  const handleCardFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <section className="achievements-section">
      <div className="achievements-wrapper">
        <h2 className="achievements-title">OUR ACHIEVEMENT BOARD</h2>
        <div className="achievements-container">
          <div className="achievement-grid">
            {achievementCards.map((card, index) => (
              <div 
                key={index} 
                className="achievement-card-container"
              >
                <div 
                  className={`achievement-card ${flippedCards[index] ? 'flipped' : ''}`}
                  onClick={() => handleCardFlip(index)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-wrapper">
                        <img src={card.front} alt={`Achievement ${index + 1}`} />
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="card-wrapper">
                        <img src={card.back} alt={`Achievement Details ${index + 1}`} />
                      </div>
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
