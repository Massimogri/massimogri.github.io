import React from "react";
import "./App.css";
import { FaLinkedin, FaEnvelope, FaPhone, FaAward } from "react-icons/fa";

function App() {
  const personalInfo = {
    name: "Massimo Grillo",
    role: "iOS Mobile Engineer",
    email: "massimo.grillo97@gmail.com",
    phone: "+39 3273079566",
    linkedin: "https://www.linkedin.com/in/massimo-grillo-99a37a177/"
  };

  const skills = [
    "Python", "C/C++", "Linux", "Windows", "Git/Github", "AWS",
    "PyTorch/Tensorflow", "ITK/VTK", "Qt Designer", "Arduino Micro",
    "SolidWorks 3D",
  ];

  const workExperience = [
    {
      role: "iOS Mobile Engineer",
      company: "Empatica Srl",
      duration: "September 2022 - Current",
      description: "Development of iOS Mobile apps using the MVVM architecture.",
    },
    {
      role: "R&D - AI and Computer Vision Engineer",
      company: "Witapp Srl",
      duration: "September 2021 - September 2022",
      description:
        "Semantic segmentation from 3D images with CNN and Computer Vision.",
    },
    {
      role: "PhD Student",
      company: "Politecnico di Milano",
      duration: "November 2020 - September 2021",
      description:
        "Design of a bio-inspired motor control system controlling a virtual robot.",
    },
    {
      role: "Hardware Engineer",
      company: "Politecnico di Milano",
      duration: "April 2019 - May 2020",
      description:
        "Hardware components design for an electric trike for paraplegic people.",
    },
  ];

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>{personalInfo.name}</h1>
        <p className="subtitle">{personalInfo.role}</p>
        <div className="contact">
          <div className="contact-item">
            <FaEnvelope />
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className="contact-item">
            <FaPhone />
            {personalInfo.phone}
          </div>
          <div className="contact-item">
            <FaLinkedin />
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience">
        <h2>Work Experience</h2>
        {workExperience.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.role}</h3>
            <p className="company">{job.company}</p>
            <p className="duration">{job.duration}</p>
            <p className="description">{job.description}</p>
          </div>
        ))}
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <h2>Awards</h2>
        <ul>
          <li>
            <FaAward /> Best Freshman, Politecnico di Milano (2016)
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
