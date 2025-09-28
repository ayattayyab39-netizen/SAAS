import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const Contact = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } = useMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
    
    // Show success message (in a real app, you'd use a toast notification)
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Office Address',
      details: ['123 AI Street', 'San Francisco, CA 94105', 'United States']
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: ['hello@aisaas.com', 'support@aisaas.com']
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ]

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'You can start using our platform immediately after signing up. Our onboarding process takes just 5 minutes.'
    },
    {
      question: 'Do you offer custom integrations?',
      answer: 'Yes, we provide custom integration services for enterprise customers. Contact our sales team for more information.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 email support for all customers, and phone support for Professional and Enterprise plans.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security with end-to-end encryption and are SOC 2 Type II certified.'
    }
  ]

  return (
    <m.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="hero contact-hero">
        <div className="container">
          <m.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-description">
              Have questions about our AI platform? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </m.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <m.div 
              className="contact-form-container"
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales Question</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <m.button 
                  type="submit" 
                  className={`btn btn-primary btn-large ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </m.button>
              </form>
            </m.div>

            <m.div 
              className="contact-info-container"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Contact Information</h2>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <m.div 
                    key={index}
                    className="contact-info-item"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="contact-info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="contact-info-content">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <m.div 
            className="map-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.3969464846814!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c6c8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </m.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Quick answers to common questions about our platform
            </p>
          </m.div>

          <m.div 
            className="faq-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <m.div 
                key={index}
                className="faq-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Chatbot Widget */}
      <div className="chatbot-widget">
        <button className="chatbot-toggle">
          <i className="fas fa-comments"></i>
        </button>
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <button className="chatbot-close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chatbot-messages">
            <div className="chatbot-message bot">
              <p>Hi! I'm your AI assistant. How can I help you today?</p>
            </div>
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your message..." />
            <button><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Contact























