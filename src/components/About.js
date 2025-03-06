import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaAws, FaDocker } from 'react-icons/fa';
import { SiDjango, SiTensorflow, SiFlask, SiPostgresql, SiMysql } from 'react-icons/si';
import '../styles/About.css';

const About = () => {
  // Animation for skill bars
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
      </div>

      <div className="about-content">
        <motion.div 
          className="bio-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>I'm a results-driven Software Engineer with 3+ years of experience delivering scalable, high-performance systems and solving complex technical challenges. I specialize in full-stack development, cloud computing, and AI-driven solutions.</p>
          
          <p>With a Master's in Cybersecurity from Webster University and experience at companies like EsparkBliz and Reliance Industries, I've developed expertise in creating impactful products using Python, Django, React.js, and AWS.</p>
          
          <p>I'm passionate about innovation and continuous improvement, always looking for ways to optimize performance and enhance user experience.</p>
          
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-date">Jan 2024 - May 2024</div>
              <h4 className="timeline-title">AI-Powered Inventory Management System</h4>
              <div className="timeline-company">Webster University, Webster Grooves, MO</div>
              <p className="timeline-description">Built an AI-powered system using TensorFlow, OpenCV, and Django REST Framework, automating inventory tracking and reducing manual effort by 80%.</p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">May 2020 - August 2022</div>
              <h4 className="timeline-title">Software Engineer Associate</h4>
              <div className="timeline-company">EsparkBliz, India</div>
              <p className="timeline-description">Engineered backend systems using Python, Django, and REST APIs, increasing system scalability and robustness.</p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Dec 2019 - Apr 2020</div>
              <h4 className="timeline-title">Software Engineer Internship</h4>
              <div className="timeline-company">Reliance Industries Limited, India</div>
              <p className="timeline-description">Developed and optimized Python-based applications, contributing to the design and implementation of software solutions.</p>
            </div>
          </div>
        </motion.div>

        <div className="skills-section">
          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Languages</h3>
            <div className="skills-with-levels">
              <div className="skill-with-level">
                <div className="skill-header">
                  <span className="skill-name">Python</span>
                  <span className="skill-level">Advanced</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-width="90%"></div>
                </div>
              </div>
              
              <div className="skill-with-level">
                <div className="skill-header">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-level">Proficient</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-width="80%"></div>
                </div>
              </div>
              
              <div className="skill-with-level">
                <div className="skill-header">
                  <span className="skill-name">HTML/CSS</span>
                  <span className="skill-level">Proficient</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-width="85%"></div>
                </div>
              </div>
              
              <div className="skill-with-level">
                <div className="skill-header">
                  <span className="skill-name">SQL</span>
                  <span className="skill-level">Proficient</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" data-width="75%"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Frameworks & Libraries</h3>
            <div className="skills-list">
              <div className="skill-item"><SiDjango /> Django</div>
              <div className="skill-item"><FaReact /> React.js</div>
              <div className="skill-item"><SiFlask /> Flask API</div>
              <div className="skill-item"><SiTensorflow /> TensorFlow</div>
              <div className="skill-item">OpenCV</div>
            </div>
          </motion.div>

          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3>Cloud & DevOps</h3>
            <div className="skills-list">
              <div className="skill-item"><FaAws /> AWS</div>
              <div className="skill-item">Azure</div>
              <div className="skill-item"><FaDocker /> Docker</div>
              <div className="skill-item">Jenkins</div>
              <div className="skill-item">GitLab CI</div>
            </div>
          </motion.div>

          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3>Databases</h3>
            <div className="skills-list">
              <div className="skill-item"><SiPostgresql /> PostgreSQL</div>
              <div className="skill-item"><SiMysql /> MySQL</div>
              <div className="skill-item">NoSQL</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 