// ResumeDownloadPage.js
import React from 'react';
import './ResumeDownloadPage.css'; // Import your CSS file for styling

const Download = () => {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <h2>Download Resume</h2>
        <a href={`${process.env.PUBLIC_URL}/resumeVishesh.pdf`} download="Vishesh_Sharma_Resume.pdf">
          <button>Download</button>
        </a>
      </div>
    </div>
  );
};

export default Download;
