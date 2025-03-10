import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/Projects.css';

const Projects = () => {
  const [activeSnippet, setActiveSnippet] = useState(null);

  const toggleSnippet = (projectId, snippetIndex) => {
    if (activeSnippet && activeSnippet.projectId === projectId && activeSnippet.snippetIndex === snippetIndex) {
      setActiveSnippet(null);
    } else {
      setActiveSnippet({ projectId, snippetIndex });
    }
  };

  const projects = [
    {
      id: 1,
      title: "AI-Powered Inventory Management System",
      description: "An intelligent inventory management system built with AI capabilities for automated tracking and real-time updates. Designed to make inventory management more efficient and reduce manual effort by 80%.",
      image: "https://placehold.co/800x450/3498db/ffffff?text=IMS+Project",
      technologies: ["React", "Django", "TensorFlow", "OpenCV", "AWS", "PostgreSQL"],
      liveLink: "https://www.ims-dashboard.com",
      githubLink: "https://github.com/Vikas9121/IMS",
      featured: true,
      role: "Full Stack Developer",
      duration: "Jan 2024 - May 2024",
      codeSnippets: [
        {
          title: "AI-Powered Inventory Prediction",
          language: "python",
          code: `import tensorflow as tf
import numpy as np
from django.db.models import Sum, Avg
from datetime import timedelta
from .models import InventoryItem, StockMovement

class InventoryPredictor:
    def __init__(self, lookback_days=90):
        self.lookback_days = lookback_days
        self.model = self._build_model()
        
    def _build_model(self):
        model = tf.keras.Sequential([
            tf.keras.layers.LSTM(64, return_sequences=True, input_shape=(self.lookback_days, 1)),
            tf.keras.layers.LSTM(32),
            tf.keras.layers.Dense(16, activation='relu'),
            tf.keras.layers.Dense(1)
        ])
        model.compile(optimizer='adam', loss='mse')
        return model
    
    def train(self, item_id):
        # Get historical stock movement data
        end_date = timezone.now().date()
        start_date = end_date - timedelta(days=self.lookback_days)
        
        daily_movements = StockMovement.objects.filter(
            item_id=item_id,
            timestamp__date__gte=start_date,
            timestamp__date__lte=end_date
        ).values('timestamp__date').annotate(
            total_quantity=Sum('quantity')
        ).order_by('timestamp__date')
        
        if len(daily_movements) < self.lookback_days:
            return False  # Not enough data
            
        # Prepare training data
        quantities = [m['total_quantity'] for m in daily_movements]
        max_qty = max(quantities)
        normalized = [q / max_qty for q in quantities]
        
        X = []
        y = []
        for i in range(len(normalized) - self.lookback_days):
            X.append(normalized[i:i+self.lookback_days])
            y.append(normalized[i+self.lookback_days])
            
        X = np.array(X).reshape(-1, self.lookback_days, 1)
        y = np.array(y)
        
        # Train the model
        self.model.fit(X, y, epochs=50, batch_size=32, verbose=0)
        return True`,
          image: "https://placehold.co/600x300/3498db/ffffff?text=AI+Prediction+Model",
          caption: "TensorFlow-based LSTM model for inventory demand forecasting"
        },
        {
          title: "Interactive Dashboard Component",
          language: "javascript",
          code: `import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchInventoryMetrics, fetchAlerts } from '../api/inventory';

const InventoryDashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month');

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const [metricsData, alertsData] = await Promise.all([
          fetchInventoryMetrics(timeRange),
          fetchAlerts()
        ]);
        
        setMetrics(metricsData);
        setAlerts(alertsData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadDashboardData();
  }, [timeRange]);
  
  if (loading) {
    return <div className="loading-spinner">Loading dashboard data...</div>;
  }
    
  return (
    <div className="dashboard-container">
      <div className="metrics-overview">
        <div className="metric-card">
          <h3>Total Items</h3>
          <p className="metric-value">{metrics.totalItems}</p>
          <p className="metric-change" data-trend={metrics.itemsChange > 0 ? 'up' : 'down'}>
            {metrics.itemsChange > 0 ? '+' : ''}{metrics.itemsChange}% from last {timeRange}
          </p>
        </div>
      </div>
      
      {/* Alerts Section */}
      <div className="alerts-section">
        <h3>Inventory Alerts</h3>
        {alerts.length === 0 ? (
          <p className="no-alerts">No alerts at this time</p>
        ) : (
          <ul className="alerts-list">
            {alerts.map(alert => (
              <li key={alert.id} className={"alert-item " + alert.severity}>
                <div className="alert-icon">
                  {alert.severity === 'high' && <i className="fas fa-exclamation-circle"></i>}
                  {alert.severity === 'medium' && <i className="fas fa-exclamation-triangle"></i>}
                  {alert.severity === 'low' && <i className="fas fa-info-circle"></i>}
                </div>
                <div className="alert-content">
                  <h4>{alert.title}</h4>
                  <p>{alert.message}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InventoryDashboard;`,
          image: "https://placehold.co/600x300/3498db/ffffff?text=IMS+Dashboard+UI",
          caption: "Interactive dashboard showing real-time inventory metrics and charts"
        }
      ],
      screenshots: [
        {
          image: "https://placehold.co/800x450/3498db/ffffff?text=IMS+Dashboard+Screenshot",
          caption: "Main dashboard with inventory metrics and alerts"
        },
        {
          image: "https://placehold.co/800x450/3498db/ffffff?text=Inventory+List+View",
          caption: "Comprehensive inventory list with filtering and sorting options"
        },
        {
          image: "https://placehold.co/800x450/3498db/ffffff?text=Stock+Movement+Analytics",
          caption: "Advanced analytics showing stock movement patterns and predictions"
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
              
              {/* Screenshots Section */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="project-screenshots">
                  <h4>Project Screenshots</h4>
                  <div className="screenshots-carousel">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="screenshot-item">
                        <img src={screenshot.image} alt={screenshot.caption} />
                        <p className="screenshot-caption">{screenshot.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippets Section */}
              {project.codeSnippets && project.codeSnippets.length > 0 && (
                <div className="code-snippets-section">
                  <h4>Code Highlights</h4>
                  <div className="snippet-tabs">
                    {project.codeSnippets.map((snippet, index) => (
                      <button
                        key={index}
                        className={`snippet-tab ${activeSnippet && activeSnippet.projectId === project.id && activeSnippet.snippetIndex === index ? 'active' : ''}`}
                        onClick={() => toggleSnippet(project.id, index)}
                      >
                        {snippet.title}
                      </button>
                    ))}
                  </div>
                  
                  {activeSnippet && activeSnippet.projectId === project.id && (
                    <motion.div 
                      className="snippet-container"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Snippet Image */}
                      {project.codeSnippets[activeSnippet.snippetIndex].image && (
                        <div className="snippet-image">
                          <img 
                            src={project.codeSnippets[activeSnippet.snippetIndex].image} 
                            alt={project.codeSnippets[activeSnippet.snippetIndex].caption || project.codeSnippets[activeSnippet.snippetIndex].title} 
                          />
                          {project.codeSnippets[activeSnippet.snippetIndex].caption && (
                            <p className="snippet-caption">{project.codeSnippets[activeSnippet.snippetIndex].caption}</p>
                          )}
                        </div>
                      )}
                      
                      {/* Code Syntax Highlighter */}
                      <SyntaxHighlighter 
                        language={project.codeSnippets[activeSnippet.snippetIndex].language} 
                        style={vscDarkPlus}
                        showLineNumbers={true}
                        wrapLines={true}
                      >
                        {project.codeSnippets[activeSnippet.snippetIndex].code}
                      </SyntaxHighlighter>
                    </motion.div>
                  )}
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