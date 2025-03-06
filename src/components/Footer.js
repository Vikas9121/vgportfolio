import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Vikas Gundu</h3>
            <p>Full Stack Software Engineer</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-icons">
                <motion.a 
                  href="https://github.com/Vikas9121" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/vikasmanitejh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <i className="fab fa-linkedin"></i>
                </motion.a>
                <motion.a 
                  href="mailto:vikkasmanitejh@gmail.com" 
                  whileHover={{ y: -5 }}
                >
                  <i className="fas fa-envelope"></i>
                </motion.a>
                <motion.a 
                  href="tel:+13143771707" 
                  whileHover={{ y: -5 }}
                >
                  <i className="fas fa-phone"></i>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vikas Gundu. All rights reserved.</p>
          <p>St Louis, MO | AWS Solution Architect</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 