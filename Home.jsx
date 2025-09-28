import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useMotion } from '../context/MotionContext'
import robotAnimation from '../assets/animations/robot.json'

const Home = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn } = useMotion()

  const features = [
    {
      icon: 'fas fa-brain',
      title: 'AI-Powered Analytics',
      description: 'Get intelligent insights from your data with our advanced machine learning algorithms.'
    },
    {
      icon: 'fas fa-robot',
      title: 'Automated Workflows',
      description: 'Streamline your processes with intelligent automation that adapts to your needs.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Real-time Monitoring',
      description: 'Monitor your applications in real-time with comprehensive dashboards and alerts.'
    },
    {
      icon: 'fas fa-code',
      title: 'Developer API',
      description: 'Integrate seamlessly with our RESTful API and comprehensive documentation.'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Collaboration',
      description: 'Collaborate effectively with your team using our built-in collaboration tools.'
    }
  ]

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' }
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
      <section className="hero hero-ai">
        <div className="hero-background">
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <m.div 
              className="hero-text"
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <h1 className="hero-title">
                <span className="title-line">Revolutionary</span>
                <span className="title-line gradient-text">AI-Powered</span>
                <span className="title-line">SaaS Platform</span>
              </h1>
              <p className="hero-description">
                Transform your business with our cutting-edge AI technology. 
                Automate processes, gain insights, and scale effortlessly with 
                our comprehensive suite of intelligent tools.
              </p>
              <div className="hero-actions">
                <m.a 
                  href="/dashboard" 
                  className="btn btn-primary btn-large"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Free Trial</span>
                  <i className="fas fa-arrow-right"></i>
                </m.a>
                <m.a 
                  href="/features" 
                  className="btn btn-secondary btn-large"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-play"></i>
                  <span>Watch Demo</span>
                </m.a>
              </div>
              <m.div 
                className="hero-stats"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {stats.map((stat, index) => (
                  <m.div 
                    key={index}
                    className="stat-item"
                    variants={fadeInUp}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </m.div>
                ))}
              </m.div>
            </m.div>
            
            <m.div 
              className="hero-visual"
              variants={fadeInRight}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <div className="ai-robot-container">
                <Lottie
                  animationData={robotAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                  onError={(error) => {
                    console.log('Lottie animation error:', error);
                    // Hide the container if there's an error to prevent yellow error signs
                    const container = document.querySelector('.ai-robot-container');
                    if (container) {
                      container.style.display = 'none';
                    }
                  }}
                />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-description">
              Everything you need to build, deploy, and scale your AI-powered applications
            </p>
          </m.div>
          
          <m.div 
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <m.div 
                key={index}
                className="feature-card"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <m.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Join thousands of companies already using our AI platform to drive growth and innovation.
            </p>
            <div className="cta-actions">
              <m.a 
                href="/dashboard" 
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </m.a>
              <m.a 
                href="/contact" 
                className="btn btn-outline btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </m.a>
            </div>
          </m.div>
        </div>
      </section>
    </m.div>
  )
}

export default Home























