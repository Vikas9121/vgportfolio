import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Home.css';
// Use the public folder path - this starts from the root URL
const headshot = "/images/Vikas_Gundu.png";  // Path to your image in public/images

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <motion.div 
          className="headshot-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="headshot-wrapper">
            <img 
              src={headshot}
              alt="Vikas Gundu" 
              className="headshot" 
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="home-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight">Vikas Gundu</span>
            </motion.span>
            <br />
            <motion.span
              className="title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Software Engineer
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Specializing in full-stack development, cloud computing, and AI-driven solutions.
          </motion.p>
          
          <motion.div 
            className="home-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#projects" className="primary-button">View Projects</a>
            <a href="#contact" className="secondary-button">Contact Me</a>
          </motion.div>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="https://github.com/Vikas9121" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vikasmanitejh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:vikkasmanitejh@gmail.com">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 