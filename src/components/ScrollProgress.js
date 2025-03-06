import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import '../styles/ScrollProgress.css';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <motion.div 
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {visible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      )}
    </>
  );
};

export default ScrollProgress; 