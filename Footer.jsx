import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'API Docs', path: '/api-docs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Help Center', path: '/help-center' },
        { name: 'Status', path: '/status' },
        { name: 'Community', path: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'GDPR', path: '/gdpr' }
      ]
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-discord', href: '#' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <m.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="/" className="brand-logo">
                <span className="logo-text">AI<span className="gradient-text">SaaS</span></span>
              </Link>
              <p className="footer-description">
                The future of business intelligence and automation is here. 
                Transform your operations with our AI-powered platform.
              </p>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4 className="footer-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </m.div>
        
        <m.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="footer-copyright">
            <p>&copy; 2024 AI SaaS Template Kit. All rights reserved.</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <m.a 
                key={index}
                href={social.href} 
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={social.icon}></i>
              </m.a>
            ))}
          </div>
        </m.div>
      </div>
    </footer>
  )
}

export default Footer























