import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  // Resume data based on your actual resume
  const workExperience = [
    {
      id: 1,
      title: "Associate Software Engineer",
      company: "VIB Technologies",
      location: "Pune, India",
      period: "Mar 2020 - Aug 2022",
      responsibilities: [
        "Designed, developed, and maintained Python-based back-end services using frameworks like Flask and FastAPI, ensuring robust and scalable APIs for front-end integration",
        "Built dynamic and responsive user interfaces using React.js and Vue.js, delivering seamless user experiences across web applications",
        "Developed RESTful APIs and microservices to facilitate communication between front-end and back-end systems, enabling efficient data exchange and functionality",
        "Collaborated with product managers, designers, and QA engineers to gather requirements, design solutions, and deliver features aligned with business goals",
        "Optimized application performance by identifying and resolving bottlenecks, improving system efficiency by 25%",
        "Automated repetitive tasks and workflows using Python scripting, reducing manual effort and improving operational efficiency",
        "Deployed applications on AWS cloud platform, utilizing services like EC2, S3, and Lambda for scalable and cost-effective solutions",
        "Conducted code reviews and mentored junior developers, fostering a culture of knowledge sharing and best practices in software development"
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
      description: "Notable Project: AI-Powered Inventory Management System\n• Built an AI-powered system using TensorFlow, OpenCV, and Django REST Framework, automating inventory tracking and reducing manual effort by 80%\n• Developed the frontend using React.js, enabling real-time inventory updates and an intuitive user interface\n• Integrated AWS S3 for image data storage and deployed the application on AWS EC2 for scalable cloud hosting\n• Designed a PostgreSQL database and exposed RESTful APIs for seamless communication between frontend and backend\n• Optimized backend performance using Gunicorn and Nginx, ensuring high availability and scalability"
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

  // Add certifications array here
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: " Pursuing",
      
    },
    
    // Add more certifications as needed
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