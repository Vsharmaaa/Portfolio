// Projects.js
import React from 'react';
import './Projectt.css'
const Projects = () => {
  return (
    <section id="projects">
     
     <h2>Projects</h2>
 
      {/* Ticket Kart Project */}
      <div className="project">
      
        <h3>Metropolitan-Museum-of-Art</h3>
        <p>Independently developed a robust Web API using Express and Node.js, facilitating efficient data management and enhancing the museum's online presence. Utilized Next.js for the front end and integrated a MongoDB database to create a modern, responsive website that improved user engagement and provided a dynamic online experience for museum visitors.</p>
        <a href="https://github.com/Vsharmaaa/MuseumWebsite">View on GitHub</a>
      </div>

      {/* Repeat the Ticket Kart project two more times */}
      <div className="project">
        <h3>Ticket Kart</h3>
        <p>The vision for TicketKart is to provide a reliable, efficient, and user-friendly platform for concert promoters and customers, enabling them to seamlessly manage events, sell and purchase tickets, and select preferred seats. Comprehensive solution includes the ability to add venue information, making TicketKart the go-to platform for all concert-related needs. My goal is to make TicketKart the most trusted and preferred ticket sales system in the market.</p>
        <a href="https://github.com/Vsharmaaa/TicketKart">View on GitHub</a>
      </div>

      <div className="project">
        <h3>The Maze Game</h3>
        <p>Leveraging Unreal Engine 5, "Maze Game" is a dynamic, visually engaging puzzle labyrinth with a responsive user interface, designed for a seamless experience across different devices. The game is built with modular components and individual assets, featuring key elements like strategic portal use, and a lock-and-key mechanism for unlocking new areas. It integrates on-screen health and armor display with progress bars, enhancing player immersion. Additionally, the game includes damage-over-time zones, adding a layer of challenge. Prioritizing performance, "Maze Game" uses Unreal Engine's scripting tools and advanced AI for a personalized, engaging player journey. The project upholds a clean, efficient codebase, meeting industry standards for readability and maintainability.</p>
        <a href="https://github.com/Vsharmaaa/mazeGame">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
