import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = ({ onNavigation }) => {
  const handleNavigationClick = (sectionId) => {
    onNavigation(sectionId);
  };

  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><a href="#homepage" onClick={() => handleNavigationClick('homepage')}>Home</a></li>
          <li><a href="#introduction" onClick={() => handleNavigationClick('introduction')}>Introduction</a></li>
          <li><a href="#projects" onClick={() => handleNavigationClick('projects')}>Projects</a></li>
          <li><a href="#skills" onClick={() => handleNavigationClick('skills')}>Skills</a></li>
          <li><a href="#contact" onClick={() => handleNavigationClick('contact')}>Contact</a></li>
          <li><a href="#download" onClick={() => handleNavigationClick('Download Resume')}>Download My Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
