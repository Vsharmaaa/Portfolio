// ResumeDownloadPage.js
import React from 'react';
import './ResumeDownloadPage.css'; // Import your CSS file for styling

const Download = () => {
  const handleDownload = () => {
    // Replace 'path_to_resume_file' with the actual path to your resume file
    const resumeFilePath = 'path_to_resume_file';
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'resume.pdf'; // Set the desired file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <div className="resume-card">
        <h2>Download Resume</h2>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Download;
