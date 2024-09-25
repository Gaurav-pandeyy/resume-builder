import React, { useState } from "react";
import './build.css';
import Header from "./Header/Header";
import html2pdf from "html2pdf.js"; 

function Build() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [education, setEducation] = useState('');

  // Function to generate the resume preview
  const generateResume = () => {
    return (
      <div id="resume-content">
        <h2 id="preview-name">{name || 'Your Name'}</h2>
        <h3 id="preview-title">{title || 'Job Title'}</h3>
        <p id="preview-email">{email || 'Email Address'}</p>
        <p id="preview-education">{education || 'Education'}</p>
      </div>
    );
  };

  // Function to download the resume as a PDF
  const downloadPDF = () => {
    const element = document.getElementById('resume-preview'); 
    html2pdf()
      .from(element) // Capture the resume preview content
      .save('resume.pdf'); // Save as PDF with filename 'resume.pdf'
  };

  return (
    <>
      <Header />
      <h1>Resume Builder</h1>

      {/* Input fields */}
      <input
        type="text"
        id="name-input"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}  // Update name state
      />
      <input
        type="email"
        id="email-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}  // Update email state
      />
      <input
        type="text"
        id="title-input"
        placeholder="Enter your job title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}  // Update title state
      />
      <input
        type="text"
        id="education-input"
        placeholder="Enter your education"
        value={education}
        onChange={(e) => setEducation(e.target.value)}  // Update education state
      />

      <button id="generate-resume" onClick={downloadPDF}>Download Resume as PDF</button>

      {/* Resume preview section */}
      <div id="resume-preview">
        {generateResume()}
      </div>
    </>
  );
}

export default Build;
