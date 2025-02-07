import React, { useEffect, useState } from 'react';
import './LeapAheadStudy.css';
import questionMark from '../../assets/LeapAheadStudy/questionmark.png';
import cloud from '../../assets/LeapAheadStudy/cloud.png';
import froggyLogo from '../../assets/LeapAheadStudy/froggylogo.png';
import studyImage from '../../assets/study1.png';
import placeholderIcon from '../../assets/Hero-Circles.png';
import diamondIcon from '../../assets/diomand1.png';
import leapIcon1 from '../../assets/leapIcon1.png';
import leapIcon2 from '../../assets/leapIcon2.png';
import leapIcon3 from '../../assets/leapIcon3.png';
import leapIcon4 from '../../assets/leapIcon4.png';
import leapIcon5 from '../../assets/leapIcon5.png';
import leapIcon6 from '../../assets/leapIcon6.png';
import leapIcon7 from '../../assets/leapIcon7.png';
import leapIcon8 from '../../assets/leapIcon8.png';
// import { BiTime } from 'react-icons/bi';
// import { BsCalendar2Week, BsShieldCheck } from 'react-icons/bs';
// import { FiFileText } from 'react-icons/fi';
// import { AiOutlineFileText } from 'react-icons/ai';
// import { GiStopwatch } from 'react-icons/gi';
// import { VscFile } from 'react-icons/vsc';
// import { RiScissorsLine } from 'react-icons/ri';

const LeapAheadStudy = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible([true, false, false]), 500);
    const timer2 = setTimeout(() => setIsVisible([true, true, false]), 1000);
    const timer3 = setTimeout(() => setIsVisible([true, true, true]), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const steps = [
    {
      icon: cloud,
      description: "You have 3 exams on different subjects coming up in a week. How and how do you know where to start. You complete the assigned homework tasks and do some practice questions that helps for the test. By this time your practice and revision is spread across reading over your textbook, writing in your class book and on scrap pieces of paper and worksheets. Your desk looks like chaos..."
    },
    {
      icon: questionMark,
      description: "Exam time comes, you get butterflies in your stomach and the information you thought you memorised suddenly slips away... Sound familiar?"
    },
    {
      icon: froggyLogo,
      description: "Surely there must be a better way to study! That's where we come in. Our successful Leap Ahead Study System has helped countless students greatly improve their marks from averaging 65% to beyond 90%!"
    }
  ];

  const studySkills = [
    {
      text: "Critical time management skills",
      icon: leapIcon1
    },
    {
      text: "How to develop an effective study routine",
      icon: leapIcon2
    },
    {
      text: "How to block out distractions",
      icon: leapIcon3
    },
    {
      text: "Step by step guide how to make your own revision notes",
      icon: leapIcon4
    },
    {
      text: "How to retain information for exam day and beyond",
      icon: leapIcon5
    },
    {
      text: "What to do on exam day to ensure you don't freak out",
      icon: leapIcon6
    },
    {
      text: "How to make the most of past papers and resources",
      icon: leapIcon7
    },
    {
      text: "How to defeat procrastination once & for all!",
      icon: leapIcon8
    }
  ];

  return (
    <section className="leap-ahead">
      <div className="leap-ahead-wrapper">
        <div className="header">
          <h2>Our Leap <span>Ahead Study</span> System has</h2>
          <h2>you covered</h2>
          <p className="subtitle">We know what you're going through.</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className={`timeline-item ${isVisible[0] ? 'visible' : ''}`}>
            <div className="icon-wrapper">
              <div className="icon-container">
                <img src={questionMark} alt="Question Mark" className="icon" />
              </div>
            </div>
            <div className="content">
              <p className="highlight-heading1">You have 3 exams on different subjects coming up in a week's time and have no idea where to start.</p>
              <p>You complete the assigned homework tasks and do some practice questions then hope for the best.</p>
              <p>By this time your practice and revision is spread across reading over your textbook, writing in your class book and on scrap pieces of paper and worksheets. <span className="highlight">Your desk looks like chaos...</span></p>
            </div>
          </div>

          <div className={`timeline-item ${isVisible[1] ? 'visible' : ''}`}>
            <div className="icon-wrapper">
              <div className="icon-container">
                <img src={cloud} alt="Cloud" className="icon" />
              </div>
            </div>
            <div className="content">
              <p className="highlight-heading1">Exam time comes, you get butterflies in your stomach and the information you thought you memorised suddenly slips away...</p>
              <p className="highlight">Sound familiar?</p>
            </div>
          </div>

          <div className={`timeline-item ${isVisible[2] ? 'visible' : ''}`}>
            <div className="icon-wrapper">
              <div className="icon-container">
                <img src={froggyLogo} alt="Froggy Logo" className="icon" />
              </div>
            </div>
            <div className="content">
              <p className="highlight-heading">Surely there must be a better way to study!</p>
              <p>That's where we come in. Our successful Leap Ahead Study System has helped countless students greatly improve their marks from averaging 65% to beyond 90%!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="study-system">
        <div className="study-image-section">
          <img src={studyImage} alt="Students studying" className="main-image" />
          <div className="award-badge">
            <div className="badge-content">
              <img src={diamondIcon} alt="Diamond Award" className="diamond-icon" />
              <span className="number">#1</span>
              <span className="text">Best Award</span>
              <span className="year">2019</span>
            </div>
          </div>
        </div>

        <div className="study-content">
          <h2>Our Leap Ahead Study <span> System will teach you:</span></h2>
          {/* <h3>will teach you:</h3> */}
          
          <ul className="study-skills-list">
            {studySkills.map((skill, index) => (
              <li key={index}>
                <span className="skill-icon">
                  <img src={skill.icon} alt={skill.text} />
                </span>
                <span className="skill-text">{skill.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeapAheadStudy; 