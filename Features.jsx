import React from 'react'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const Features = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, scaleIn } = useMotion()

  const features = [
    {
      icon: 'fas fa-brain',
      title: 'AI-Powered Analytics',
      description: 'Get intelligent insights from your data with our advanced machine learning algorithms.',
      details: [
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Custom ML model training',
        'Automated report generation'
      ]
    },
    {
      icon: 'fas fa-robot',
      title: 'Automated Workflows',
      description: 'Streamline your processes with intelligent automation that adapts to your needs.',
      details: [
        'Visual workflow builder',
        'Smart task automation',
        'Integration with 100+ tools',
        'Custom trigger conditions'
      ]
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.',
      details: [
        'SOC 2 Type II certified',
        'End-to-end encryption',
        'Multi-factor authentication',
        'Regular security audits'
      ]
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Real-time Monitoring',
      description: 'Monitor your applications in real-time with comprehensive dashboards and alerts.',
      details: [
        'Live performance metrics',
        'Custom alert rules',
        'Historical data analysis',
        'Mobile app notifications'
      ]
    },
    {
      icon: 'fas fa-code',
      title: 'Developer API',
      description: 'Integrate seamlessly with our RESTful API and comprehensive documentation.',
      details: [
        'RESTful API endpoints',
        'GraphQL support',
        'SDK for popular languages',
        'Interactive API explorer'
      ]
    },
    {
      icon: 'fas fa-users',
      title: 'Team Collaboration',
      description: 'Collaborate effectively with your team using our built-in collaboration tools.',
      details: [
        'Real-time collaboration',
        'Role-based permissions',
        'Comment and review system',
        'Activity tracking'
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Access your data and manage workflows on the go with our mobile applications.',
      details: [
        'iOS and Android apps',
        'Offline data sync',
        'Push notifications',
        'Biometric authentication'
      ]
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure that grows with your business needs.',
      details: [
        'Auto-scaling resources',
        'Global CDN network',
        '99.9% uptime SLA',
        'Disaster recovery'
      ]
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Integrations' },
    { number: '24/7', label: 'Support' },
    { number: '100+', label: 'Countries' }
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
      <section className="hero features-hero">
        <div className="container">
          <m.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">Powerful Features</h1>
            <p className="hero-description">
              Discover the comprehensive suite of tools and capabilities that make our AI platform 
              the perfect solution for your business needs.
            </p>
          </m.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <m.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <m.div 
                key={index}
                className="stat-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-detailed-section">
        <div className="container">
          <m.div 
            className="features-grid-detailed"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <m.div 
                key={index}
                className="feature-card-detailed"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
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
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Experience the power of our AI platform with a free trial. No credit card required.
            </p>
            <div className="cta-actions">
              <m.a 
                href="/dashboard" 
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
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

export default Features























