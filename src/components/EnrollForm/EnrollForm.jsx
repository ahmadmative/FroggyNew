import React, { useState } from "react";
import { Upload } from "lucide-react";
import "./EnrollForm.css";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phoneNumber: "",
    email: "",
    school: "",
    enquiry: "",
    grade: "",
    file: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      // 10MB limit
      setFormData({
        ...formData,
        file: file,
      });
    } else {
      alert("File size should not exceed 10MB");
    }
  };

  return (
    <div className="enroll-container">
      <h1 className="enroll-title">
        Enroll with <span>Froggy!</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name*"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
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

        <div className="form-grid">
          <div className="form-field">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
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

        <div className="form-field">
          <input
            type="text"
            name="school"
            placeholder="School they attend*"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <textarea
            name="enquiry"
            placeholder="Enquiry*"
            value={formData.enquiry}
            onChange={handleChange}
            required
          />
          <p className="help-text">
            If more than 1 child please write their names & grade here
          </p>
        </div>

        <div className="file-upload">
          <label htmlFor="file-upload">
            <Upload />
            Upload Additional file
            <input id="file-upload" type="file" onChange={handleFileChange} />
          </label>
          <p className="upload-text">
            Attach file. File size of your documents should not exceed 10MB
          </p>
        </div>

        <div className="grade-section">
          <p className="grade-title">
            Please select the option for the student you are registering:
          </p>
          <p className="grade-subtitle">Please select the current grade:</p>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="grade"
                value="year11"
                checked={formData.grade === "year11"}
                onChange={handleChange}
              />
              <span>Year 11</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="grade"
                value="year12"
                checked={formData.grade === "year12"}
                onChange={handleChange}
              />
              <span>Year 12</span>
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EnrollForm;
