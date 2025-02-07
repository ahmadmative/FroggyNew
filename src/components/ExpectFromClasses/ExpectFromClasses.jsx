import React, { useState } from 'react';
import './ExpectFromClasses.css';
import expect1 from '../../assets/expect1.png';
import expect2 from '../../assets/expect2.jpg';
import expect3 from '../../assets/expect3.jpg';

const ExpectFromClasses = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: "Monday English and Maths: Prelim | HSC",
      image: expect1,
      color: "#00523C", // Dark green from image
      content: {
        about: "The nuts and bolts of Leap Tuition, Mondays serve to supercharge our Year 11 and 12 Legends in English and Maths. You can select one or both subjects when enrolling. All classes are sorted by grade and subject, with Standard and Advanced streams running simultaneously in separate classrooms to ensure robust, efficient learning.",
        expectations: [
          "To fill in content gaps",
          "Complete syllabus content coverage",
          "Course notes",
          "Strategic advantage over peers with world-class tuition",
          "Mentoring"
        ]
      }
    },
    {
      title: "Super Saturday Prelim | HSC Classes",
      image: expect2,
      color: "#45B454", // Light green from image
      content: {
        about: "Content for Super Saturday...",
        expectations: []
      }
    },
    {
      title: "Custom Prelim & HSC 1-on-1 ($85/hr)",
      image: expect3,
      color: "#697A76", // Gray from image
      content: {
        about: "Content for Custom classes...",
        expectations: []
      }
    }
  ];

  return (
    <section className="expect-section">
      <div className="expect-wrapper">
        <h2 className="section-title">What to <span>expect</span> from our classes</h2>
        
        <div className="content-container">
          {/* Left Side - Tabs */}
          <div className="tabs-container">
            {tabsData.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? 'active' : 'vertical'}`}
                onClick={() => setActiveTab(index)}
                style={activeTab !== index ? { backgroundColor: tab.color } : {}}
              >
                {activeTab === index ? (
                  // Active tab with image and title
                  <div className="active-tab-content">
                    <img src={tab.image} alt={tab.title} />
                    <div 
                      className="tab-title"
                      style={{ backgroundColor: tab.color }}
                    >
                      <span>{tab.title}</span>
                    </div>
                  </div>
                ) : (
                  // Vertical tab with just title
                  <div className="vertical-tab-content">
                    {tab.title}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="content-section">
            {tabsData[activeTab].content.about}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectFromClasses; 