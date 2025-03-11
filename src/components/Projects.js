import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

// Import IMS project images
import dashboardImage from '../images/Dashboard.png';
import dashboard2Image from '../images/Dasboard 2.png';
import dashboard3Image from '../images/Dashboard 3.png';
import productsImage from '../images/Products.png';
import categoriesImage from '../images/Categories.png';
import aiPredictionsImage from '../images/AI Predictions.png';
import reorderSuggestionsImage from '../images/Reorder Suggestions.png';
import loginPageImage from '../images/Login page.png';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "AI-Powered Inventory Management System",
      description: "An intelligent inventory management system built with AI capabilities for automated tracking and real-time updates. Designed to make inventory management more efficient and reduce manual effort by 80%.",
      image: loginPageImage,
      technologies: ["React", "Django", "TensorFlow", "OpenCV", "AWS", "PostgreSQL"],
      liveLink: "https://www.ims-dashboard.com",
      githubLink: "https://github.com/Vikas9121/IMS",
      featured: true,
      role: "Full Stack Developer",
      duration: "Jan 2024 - May 2024",
      screenshots: [
        {
          image: loginPageImage,
          caption: "Secure Login Page with Authentication"
        },
        {
          image: dashboardImage,
          caption: "Main Dashboard with Key Metrics and Analytics"
        },
        {
          image: dashboard2Image,
          caption: "Inventory Overview Dashboard"
        },
        {
          image: dashboard3Image,
          caption: "Sales and Performance Analytics"
        },
        {
          image: productsImage,
          caption: "Products Management Interface"
        },
        {
          image: categoriesImage,
          caption: "Product Categories and Organization"
        },
        {
          image: aiPredictionsImage,
          caption: "AI-Powered Demand Predictions"
        },
        {
          image: reorderSuggestionsImage,
          caption: "Intelligent Reorder Suggestions"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Image slider animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 30 : -30,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotateY: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 30 : -30,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotateY: { duration: 0.5 }
      }
    })
  };
  
  // Thumbnail variants
  const thumbnailVariants = {
    inactive: { 
      opacity: 0.6, 
      scale: 0.9,
      filter: "grayscale(80%)",
      transition: { duration: 0.3 } 
    },
    active: { 
      opacity: 1, 
      scale: 1,
      filter: "grayscale(0%)",
      boxShadow: "0 0 15px rgba(52, 152, 219, 0.7)",
      transition: { duration: 0.3 } 
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 0 20px rgba(52, 152, 219, 0.9)",
      transition: { duration: 0.2 } 
    }
  };
  
  const [direction, setDirection] = useState(0);
  
  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === projects[0].screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? projects[0].screenshots.length - 1 : prevIndex - 1
    );
  };
  
  const setImage = (index) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map(project => (
          <motion.div
            key={project.id}
            className={`project-card ${project.featured ? 'featured' : ''}`}
            variants={projectVariants}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-meta">
                {project.role && <span className="project-role">{project.role}</span>}
                {project.duration && <span className="project-duration">{project.duration}</span>}
                {project.company && <span className="project-company">{project.company}</span>}
              </div>
              
              {/* Modern Screenshots Showcase */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="project-screenshots-showcase">
                  <h4>Project Showcase</h4>
                  
                  <div className="screenshots-slider">
                    <motion.div 
                      className="slider-navigation prev"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(52, 152, 219, 0.9)" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </motion.div>
                    
                    <div className="slider-container">
                      <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="slide-image-container"
                          style={{ 
                            perspective: "1200px",
                            transformStyle: "preserve-3d"
                          }}
                        >
                          <img 
                            src={project.screenshots[currentImageIndex].image} 
                            alt={project.screenshots[currentImageIndex].caption} 
                            className="slide-image"
                          />
                          <motion.div 
                            className="slide-caption"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            <p>{project.screenshots[currentImageIndex].caption}</p>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    <motion.div 
                      className="slider-navigation next"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(52, 152, 219, 0.9)" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </motion.div>
                  </div>
                  
                  <div className="screenshots-thumbnails">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        variants={thumbnailVariants}
                        initial="inactive"
                        animate={index === currentImageIndex ? "active" : "inactive"}
                        whileHover="hover"
                        onClick={() => setImage(index)}
                      >
                        <img src={screenshot.image} alt={`Thumbnail ${index + 1}`} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="project-links">
                {project.githubLink && (
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </motion.a>
                )}
                {project.liveLink && (
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="demo-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects; 