import React, { useState } from 'react';
import './ExpectFromClasses.css';
import expect1 from '../../assets/expect1.png';
import expect2 from '../../assets/expect2.jpg';
import expect3 from '../../assets/expect3.jpg';
import expectIcon1 from '../../assets/ExpectIcons/ExpectIcon1.png';
import expectIcon2 from '../../assets/ExpectIcons/ExpectIcon2.png';
import expectIcon3 from '../../assets/ExpectIcons/ExpectIcon3.png';
import expectIcon4 from '../../assets/ExpectIcons/ExpectIcon4.png';
import subjectIcon1 from '../../assets/ExpectIconsSubject/ExpectIconSubject1.png';
import subjectIcon2 from '../../assets/ExpectIconsSubject/ExpectIconSubject2.png';
import subjectIcon3 from '../../assets/ExpectIconsSubject/ExpectIconSubject3.png';
import subjectIcon4 from '../../assets/ExpectIconsSubject/ExpectIconSubject5.png';
import subjectIcon5 from '../../assets/ExpectIconsSubject/ExpectIconSubject4.png';
import subjectIcon6 from '../../assets/ExpectIconsSubject/ExpectIconSubject6.png';

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
          {
            icon: expectIcon1,
            text: "To fill in content gaps"
          },
          {
            icon: expectIcon2,
            text: "Complete syllabus content coverage"
          },
          {
            icon: expectIcon3,
            text: "Course notes"
          },
          {
            icon: expectIcon4,
            text: "Strategic advantage over peers with world-class tuition"
          }
        ]
      }
    },
    {
      title: "Super Saturday Prelim | HSC Classes",
      image: expect2,
      color: "#45B454",
      content: {
        about: `Specialised subject-specific classes where we cover content with a heavy emphasis on the syllabus and HSC questions to truly prepare students and ensure that there are no content gaps or weaknesses in exam technique.

Just like our Monday classes, Prelim and HSC run simultaneously in separate classrooms.

Our Biology has 2 streams for HSC students: a classic stream and a Legendary stream, where we travel through content faster and complete much more challenging HSC-style questions.`,
        expectations: null // Set to null to indicate no expectations section
      }
    },
    {
      title: "Custom Prelim & HSC 1-on-1",
      image: expect3,
      color: "#666666",
      content: {
        about: `For a customised learning experience tailored to your specific needs, our qualified Leap Lifechangers offer 1-on-1 classes. Timings are flexible depending on teacher availability.

However, due to high demand, positions are strictly limited.

The subjects offered include:`,
        subjects: [
          { icon: subjectIcon1, text: "English Std/Adv" },
          { icon: subjectIcon2, text: "Business Studies" },
          { icon: subjectIcon3, text: "Maths Std/Adv" },
          { icon: subjectIcon4, text: "Biology | Physics" },
          { icon: subjectIcon5, text: "Maths Ext 1/Ext 2" },
          { icon: subjectIcon6, text: "Chemistry | SOR II" }
        ]
      }
    }
  ];

  const renderContent = (tab) => (
    <div className="content-section">
      <div className="about-section">
        <h3>About</h3>
        <p>{tab.content.about}</p>
        {tab.content.subjects && (
          <div className="subjects-grid">
            {tab.content.subjects.map((subject, index) => (
              <div key={index} className="subject-item">
                <div className="subject-icon">
                  <img src={subject.icon} alt={subject.text} />
                </div>
                <p>{subject.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {tab.content.expectations && (
        <div className="expectations-section">
          <h3>What to expect</h3>
          <div className="expectations-list">
            {tab.content.expectations.map((item, index) => (
              <div key={index} className="expectation-item">
                <img src={item.icon} alt="expectation icon" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

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
          {renderContent(tabsData[activeTab])}
        </div>
      </div>
    </section>
  );
};

export default ExpectFromClasses; 