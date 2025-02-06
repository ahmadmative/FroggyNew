import React, { useState, useEffect, useRef } from 'react';
import './Counter.css';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = [
    {
      percentage: 100,
      text: "of Leap Alumni achieved their dream ATAR"
    },
    {
      percentage: 85,
      text: "of Leap Alumni achieved a Band 6 in English"
    },
    {
      percentage: 87,
      text: "of Leap Alumni achieved an ATAR increase of 10 and UP"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (index, target) => {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(easeOutQuad(progress) * target);

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = currentCount;
          return newCounts;
        });

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);

      return counter;
    };

    const easeOutQuad = (x) => {
      return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    };

    const counters = stats.map((stat, index) => 
      animateCount(index, stat.percentage)
    );

    return () => counters.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section className="counter-section" ref={sectionRef}>
      <div className="counter-wrapper">
        <div className="counter-grid">
          {stats.map((stat, index) => (
            <div key={index} className="counter-item">
              <div className="circle-progress">
                <svg viewBox="0 0 100 100">
                  <circle 
                    className="circle-bg" 
                    cx="50" 
                    cy="50" 
                    r="45" 
                  />
                  <circle 
                    className={`circle-progress-bar ${isVisible ? 'animate' : ''}`}
                    cx="50" 
                    cy="50" 
                    r="45"
                    style={{
                      strokeDasharray: `${(counts[index] / 100) * 283}, 283`
                    }}
                  />
                  <text 
                    x="50" 
                    y="50" 
                    dy=".3em" 
                    className="percentage-text"
                  >
                    {counts[index]}%
                  </text>
                </svg>
              </div>
              <p className="counter-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter; 