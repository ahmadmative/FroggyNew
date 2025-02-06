import React, { useState } from 'react';
import './EnrollForm.css';

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phoneNumber: '',
    email: '',
    school: '',
    enquiry: '',
    grade: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="enroll-section">
      <div className="enroll-container">
        <h2 className="enroll-title">
          Enroll with <span className="highlight">Froggy!</span>
        </h2>

        <form className="enroll-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="parentName"
                placeholder="Parent Name*"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="studentName"
                placeholder="Student Name*"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="school"
              placeholder="School they attend*"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="enquiry"
              placeholder="Enquiry*"
              value={formData.enquiry}
              onChange={handleChange}
              required
            ></textarea>
            <small className="help-text">If more than 1 child please write their names & grade here</small>
          </div>

          <div className="grade-selection">
            <p>Please select the option for the student you are registering:</p>
            <p className="grade-label">Please select the current grade:</p>
            <div className="grade-options">
              <label>
                <input
                  type="radio"
                  name="grade"
                  value="year11"
                  checked={formData.grade === 'year11'}
                  onChange={handleChange}
                />
                <span>Year 11</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="grade"
                  value="year12"
                  checked={formData.grade === 'year12'}
                  onChange={handleChange}
                />
                <span>Year 12</span>
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default EnrollForm; 