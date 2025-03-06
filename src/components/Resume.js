import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  // Resume data based on your actual resume
  const workExperience = [
    {
      id: 1,
      title: "AI-Powered Inventory Management System",
      company: "Webster University",
      location: "Webster Grooves, MO",
      period: "Jan 2024 – May 2024",
      responsibilities: [
        "Built an AI-powered system using TensorFlow, OpenCV, and Django REST Framework, automating inventory tracking and reducing manual effort by 80%",
        "Developed the frontend using React.js, enabling real-time inventory updates and an intuitive user interface",
        "Integrated AWS S3 for image data storage and deployed the application on AWS EC2 for scalable cloud hosting",
        "Designed a PostgreSQL database and exposed RESTful APIs for seamless communication between frontend and backend",
        "Optimized backend performance using Gunicorn and Nginx, ensuring high availability and scalability"
      ]
    },
    {
      id: 2,
      title: "Software Engineer Associate",
      company: "EsparkBliz",
      location: "India",
      period: "May 2020 – August 2022",
      responsibilities: [
        "Engineered backend systems using Python, Django, and REST APIs, increasing system scalability and robustness",
        "Modernized user interfaces with React.js and Vue.js, enhancing engagement and usability",
        "Reduced database query times by 30% through PostgreSQL and MySQL optimization",
        "Integrated third-party APIs to extend functionality and support real-time features",
        "Established CI/CD pipelines (Jenkins, GitLab CI), enabling faster and more reliable software releases",
        "Deployed and maintained applications using Docker, ensuring consistent environments across development cycles",
        "Mentored junior developers to improve team capabilities and adherence to coding best practices",
        "Gained hands-on experience with Agile methodologies, participating in daily stand-ups, sprint planning, and code reviews",
        "Assisted in database design and optimization, working with SQL and NoSQL technologies to improve query performance"
      ]
    },
    {
      id: 3,
      title: "Software Engineer Internship",
      company: "Reliance Industries Limited",
      location: "India",
      period: "Dec 2019 – Apr 2020",
      responsibilities: [
        "Developed and optimized Python-based applications, contributing to the design and implementation of software solutions that improved system performance and scalability",
        "Collaborated with cross-functional teams to deliver key features for enterprise-level projects, ensuring timely delivery and adherence to high-quality standards",
        "Created and maintained RESTful APIs to streamline communication between backend systems and front-end applications",
        "Utilized libraries and frameworks like Flask/Django to develop efficient web applications and services",
        "Implemented unit tests and debugging processes to ensure robust and reliable code, reducing production defects by 35%"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master's of Science in Cybersecurity",
      institution: "Webster University",
      location: "Webster Grooves, Missouri",
      period: "Oct. 2022 – May 2024",
      description: ""
    },
    {
      id: 2,
      degree: "Bachelor's of Computer Science",
      institution: "Osmania University",
      location: "India",
      period: "Jun. 2017 – Nov 2020",
      description: ""
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Solution Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: ""
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>
        <motion.a
          href="/resume.pdf"
          download="Vikas_Gundu_Resume.pdf"
          className="download-resume-btn"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </div>

      <div className="resume-content">
        {/* Work Experience */}
        <motion.div 
          className="resume-section-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="resume-section-header">
            <FaBriefcase className="resume-icon" />
            <h3>Work Experience</h3>
          </div>

          <div className="timeline">
            {workExperience.map(job => (
              <motion.div 
                key={job.id} 
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-info">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-location">{job.location}</span>
                  </div>
                  <h4 className="timeline-title">{job.title}</h4>
                  <h5 className="timeline-company">{job.company}</h5>
                  <ul className="timeline-responsibilities">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          className="resume-section-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="resume-section-header">
            <FaGraduationCap className="resume-icon" />
            <h3>Education</h3>
          </div>

          <div className="timeline">
            {education.map(edu => (
              <motion.div 
                key={edu.id} 
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-info">
                    <span className="timeline-period">{edu.period}</span>
                    <span className="timeline-location">{edu.location}</span>
                  </div>
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <h5 className="timeline-company">{edu.institution}</h5>
                  {edu.description && <p className="timeline-description">{edu.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="resume-section-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="resume-section-header">
            <FaCertificate className="resume-icon" />
            <h3>Certifications</h3>
          </div>

          <div className="cards-container">
            {certifications.map(cert => (
              <motion.div 
                key={cert.id} 
                className="card-item"
                variants={itemVariants}
              >
                <h4>{cert.name}</h4>
                <div className="card-meta">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="card-credential">
                    Credential ID: {cert.credentialId}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 