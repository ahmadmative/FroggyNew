import React, { useEffect } from 'react';
import './Subjects.css';

const Subjects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.subject-card');
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.2; // 20% from top of viewport
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distanceFromTrigger = rect.top - triggerPoint;
        
        if (distanceFromTrigger < 0) {
          // Card has passed the trigger point
          card.classList.add('sticky');
          
          // Calculate how far past the trigger point (as a percentage)
          const scrollProgress = Math.min(Math.abs(distanceFromTrigger) / (viewportHeight * 0.3), 1);
          
          // Apply transform to current card
          card.style.transform = `translateY(${-scrollProgress * 50}px) scale(0.95)`;
          
          // Only affect the next card's margin if it exists
          const nextCard = card.nextElementSibling;
          if (nextCard && nextCard.classList.contains('subject-card')) {
            const overlap = scrollProgress * 90; // Max 90% overlap
            nextCard.style.marginTop = `-${overlap}%`;
          }
        } else {
          // Reset card if it's above trigger point
          card.classList.remove('sticky');
          card.style.transform = 'none';
          
          const nextCard = card.nextElementSibling;
          if (nextCard && nextCard.classList.contains('subject-card')) {
            nextCard.style.marginTop = '40px';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subjects = [
    {
      id: 'prelim-english',
      title: 'Prelim English',
      quote: '"The only way to learn mathematics is to do mathematics."',
      author: '- Paul Halmos',
      modules: [
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 1, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 2, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 3, 2024' }
      ],
      color: '#F2AB49'
    },
    {
      id: 'hsc-mathematics',
      title: 'HSC Mathematics',
      quote: '"The only way to learn mathematics is to do mathematics."',
      author: '- Paul Halmos',
      modules: [
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 1, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 2, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 3, 2024' }
      ],
      color: '#F2AB49'
    },
    {
      id: 'biology',
      title: 'Biology',
      quote: '"The only way to learn mathematics is to do mathematics."',
      author: '- Paul Halmos',
      modules: [
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 1, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 2, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 3, 2024' }
      ],
      color: '#E57373'  // Pink/Red color for Biology
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      quote: '"The only way to learn mathematics is to do mathematics."',
      author: '- Paul Halmos',
      modules: [
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 1, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 2, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 3, 2024' }
      ],
      color: '#64B5F6'  // Blue color for Chemistry
    },
    {
      id: 'physics',
      title: 'Physics',
      quote: '"The only way to learn mathematics is to do mathematics."',
      author: '- Paul Halmos',
      modules: [
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 1, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 2, 2024' },
        { text: 'Lorem ipsum dolor sit amet. Ut nisi ullamco nulla', date: 'Term 3, 2024' }
      ],
      color: '#81C784'  // Green color for Physics
    }
  ];

  return (
    <section className="subjects-section">
      <div className="subjects-container">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="subject-card"
            style={{ backgroundColor: subject.color }}
          >
            <div className="subject-header">
              <h3>{subject.title}</h3>
              <p className="quote">{subject.quote}</p>
              <p className="author">{subject.author}</p>
              <button className="view-more">View more</button>
            </div>
            
            <div className="subject-timeline">
              {subject.modules.map((module, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p>{module.text}</p>
                    <span className="timeline-date">{module.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subjects; 