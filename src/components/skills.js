// Skills.js
import React from 'react';
import './Skills.css'; // Import your styles

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
          <div className="category-T">
            <h3>Technical Skills</h3>
            <ul>
              <li>Programming Languages: Python, C, C++, JavaScript</li>
              <li>Web Technologies: HTML, CSS, ReactJS, NodeJS, NextJS</li>
              <li>Backend Technologies: Express.js,A little bit of Django</li>
              <li>Databases: SQL, MySQL,PostgreSQL, MongoDB</li>
              <li>Development Tools: GitHub, Jira</li>
              <li>Testing: Jest,Unit & E2E Testing</li>
            </ul>
          </div>
          <div className="category-S">
            <h3>Soft Skills</h3>
            <ul>
              <li>Critical Thinking: Strong ability to think critically for effective problem-solving.</li>
              <li>Communication: Excellent verbal and written communication skills for team collaboration and client interactions.</li>
              <li>Adaptability: Quick adaptability to new technologies and project requirements.</li>
              <li>Teamwork: Proven ability to work collaboratively in diverse teams.</li>
              <li>Time Management: Effective time management skills for meeting project deadlines.</li>
              <li>Leadership: Leadership qualities demonstrated through project coordination and mentorship.</li>
              <li>Conflict Resolution: Proficient in conflict resolution and maintaining a positive team atmosphere.</li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default Skills;