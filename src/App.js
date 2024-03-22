import React, { useState } from 'react';
import Header from './components/header'; // lowercase 'header'
import Homepage from './components/Homepage'; // lowercase 'homepage'
import Introduction from './components/aboutMe'; // lowercase 'introduction'
import Projects from './components/projects'; // lowercase 'projects'
import Skills from './components/skills'; // lowercase 'skills'
import Contact from './components/contact'; // lowercase 'contact'
import Download from './components/ResumeDownload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [activeSection, setActiveSection] = useState('homepage');

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="App">
      <Header onNavigation={handleNavigation} />
      {activeSection === 'homepage' && <Homepage />}
      {activeSection === 'introduction' && <Introduction />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'Download Resume' && <Download/>}

    </div>
  );
}

export default App;
