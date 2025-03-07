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
          <p>I am a recent graduate with a Master's degree in Cybersecurity from Webster University and a Bachelor's degree in Computer Science from Osmania University. With a strong foundation in full-stack development, cloud computing, and AI-driven solutions, I am passionate about building innovative and scalable software systems.</p>
          
          <p>During my academic journey, I developed an AI-Powered Inventory Management System using Python, Django, and React.js, which automated inventory tracking and reduced manual effort by 80%. I also gained hands-on experience with AWS, RESTful APIs, and CI/CD pipelines, and I am eager to apply these skills in a professional setting.</p>
          
          <p>As a quick learner and problem solver, I thrive in collaborative environments and am excited to contribute to impactful projects. I am now seeking opportunities to grow as a Software Engineer and make a meaningful impact in the tech industry.</p>
          
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-date">Jan 2024 - May 2024</div>
              <h4 className="timeline-title">AI-Powered Inventory Management System</h4>
              <div className="timeline-company">Webster University, Webster Grooves, MO</div>
              <p className="timeline-description">Built an AI-powered system using TensorFlow, OpenCV, and Django REST Framework, automating inventory tracking and reducing manual effort by 80%.</p>
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