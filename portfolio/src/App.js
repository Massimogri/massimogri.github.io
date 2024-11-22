import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to My Portfolio</h1>
        <p>Your tagline here, e.g., Web Developer | Data Scientist</p>
      </header>

      {/* About Me Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name]. A passionate [Your Profession] with expertise in
          [Key Skills]. I love building impactful solutions and exploring new
          technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Python, JavaScript, C++</li>
          <li>Web Development: HTML, CSS, React, Node.js</li>
          <li>Tools: Git, Docker, AWS</li>
          <li>Other: Data Analysis, UI/UX Design</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: [Project Name]</h3>
          <p>[Brief Description]</p>
          <a href="[GitHub Link]" target="_blank" rel="noreferrer">
            View Code
          </a>{" "}
          |{" "}
          <a href="[Live Demo Link]" target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
        <div className="project">
          <h3>Project 2: [Project Name]</h3>
          <p>[Brief Description]</p>
          <a href="[GitHub Link]" target="_blank" rel="noreferrer">
            View Code
          </a>{" "}
          |{" "}
          <a href="[Live Demo Link]" target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Job Title - Company</h3>
            <p>Dates</p>
            <p>Description of role and achievements.</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Reach out to me at:</p>
        <ul>
          <li>Email: [Your Email]</li>
          <li>LinkedIn: [LinkedIn Link]</li>
          <li>GitHub: [GitHub Link]</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
