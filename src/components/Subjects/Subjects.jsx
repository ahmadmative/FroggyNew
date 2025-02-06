import React, { useEffect, useState } from "react";
import './Subjects.css'
// Individual Timeline Item Component
const TimelineItem = ({ text, date }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <p>{text}</p>
      <span className="timeline-date">{date}</span>
    </div>
  </div>
);

// Subject Card Component
const SubjectCard = ({ subject, index, totalCards }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = (element) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.2;
      const distanceFromTrigger = rect.top - triggerPoint;

      if (distanceFromTrigger < 0) {
        return Math.min(
          Math.abs(distanceFromTrigger) / (viewportHeight * 0.4),
          1
        );
      }
      return 0;
    };

    const handleScroll = () => {
      const element = document.getElementById(`subject-${subject.id}`);
      if (element) {
        setScrollProgress(calculateProgress(element));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [subject.id]);

  const cardStyle = {
    backgroundColor: subject.color,
    transform:
      scrollProgress > 0
        ? `translateY(${scrollProgress * 40}px) scale(${
            1 - scrollProgress * 0.05
          })`
        : "none",
    opacity: 1 - scrollProgress * 0.2,
    marginTop:
      index === 0
        ? "0"
        : scrollProgress > 0
        ? `-${scrollProgress * 15}%`
        : "40px",
    zIndex: index + 1,
  };

  return (
    <div
      id={`subject-${subject.id}`}
      className={`subject-card ${scrollProgress > 0 ? "sticky" : ""}`}
      style={cardStyle}
    >
      <div className="subject-header">
        <h3 className="text-3xl font-semibold mb-5">{subject.title}</h3>
        <p className="quote text-base mb-2">{subject.quote}</p>
        <p className="author text-sm mb-6">{subject.author}</p>
        <button className="view-more">View more</button>
      </div>

      <div className="subject-timeline">
        {subject.modules.map((module, idx) => (
          <TimelineItem key={idx} {...module} />
        ))}
      </div>
    </div>
  );
};

// Main Subjects Component
const Subjects = () => {
  const subjects = [
    {
      id: "prelim-english",
      title: "Prelim English",
      quote:
        '"All that is gold does not glitter, Not all those who wander are lost."',
      author: "- J.R.R Tolkien",
      modules: [
        {
          text: "English Standard Common Module: Reading to Write",
          date: "Term 1, 2024",
        },
        {
          text: "English Standard Module A: Contemporary Possibilities",
          date: "Term 2, 2024",
        },
        {
          text: "English Standard Module B: A Close Study of Literature",
          date: "Term 3, 2024",
        },
      ],
      color: "#1B4D3E", // Darker green for English
    },
    {
      id: "biology",
      title: "Biology",
      quote:
        '"Those who contemplate the beauty of the earth find reserves of strength."',
      author: "- Rachel Carson",
      modules: [
        { text: "Module 1: Cells as the basis of life", date: "Term 1, 2024" },
        {
          text: "Module 2: Organisation of living things",
          date: "Term 2, 2024",
        },
        { text: "Module 3: Biological diversity", date: "Term 3, 2024" },
      ],
      color: "#E57373",
    },
    {
      id: "hsc-mathematics",
      title: "HSC Mathematics",
      quote: '"The only way to learn mathematics is to do mathematics."',
      author: "- Paul Halmos",
      modules: [
        {
          text: "Module 1: Functions and their applications",
          date: "Term 1, 2024",
        },
        { text: "Module 2: Trigonometric functions", date: "Term 2, 2024" },
        {
          text: "Module 3: Calculus and its applications",
          date: "Term 3, 2024",
        },
      ],
      color: "#F2AB49",
    },
  ];

  return (
    <section className="subjects-section">
      <div className="subjects-container">
        {subjects.map((subject, index) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            index={index}
            totalCards={subjects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Subjects;
