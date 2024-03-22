// Homepage.js
import React from 'react';
import profilePhoto from './profilePhoto.jpg'; // Import your photograph

import './Homepage.css'; // Import your CSS file for styling

const Homepage = () => {
  return (
    <section id="homepage">
      <div className="intro-container">
        <div className="intro-text">
          <h2>Hello, I'm Vishesh Sharma</h2>
          <h3>Welcome to My Portfolio! I'm a passionate budding developer trying to gain some industry experience.</h3>
          <h3>Explore my projects, learn about my skills, and let's connect!</h3>
        </div>
        <div className="image-container">
        <img src={profilePhoto} alt="Vishesh Sharma" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
