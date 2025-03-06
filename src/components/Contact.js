import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_uipsm08',
      'template_t6boyit',
      form.current,
      'asFUxwbdWnfFxbK3M' // Your public key from the Account page
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setFormData({ from_name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>vikkasmanitejh@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>(314) 377-1707</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>St. Louis, MO </p>
            </div>
            <div className="social-links">
              <a href="https://github.com/Vikas9121/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vikasmanitejh/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="success-message">Message sent successfully!</p>}
            {status === 'error' && <p className="error-message">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 