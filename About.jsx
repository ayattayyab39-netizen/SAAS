import React from 'react'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const About = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, fadeInLeft, fadeInRight } = useMotion()

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Former AI researcher at Google with 10+ years of experience in machine learning.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Ex-Microsoft engineer specializing in scalable cloud architectures.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Product strategist with a passion for user-centered design and AI innovation.'
    },
    {
      name: 'David Kim',
      role: 'Lead Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in React, Node.js, and AI integration.'
    }
  ]

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI technology.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong relationships.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security',
      description: 'Protecting our users\' data and privacy is our top priority.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Growth',
      description: 'We help our customers grow and scale their businesses with AI.'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Company founded with a vision to democratize AI' },
    { year: '2021', event: 'Launched our first AI-powered analytics platform' },
    { year: '2022', event: 'Reached 1,000+ customers and $1M ARR' },
    { year: '2023', event: 'Expanded to 50+ countries with 10,000+ users' },
    { year: '2024', event: 'Launched advanced AI features and mobile apps' }
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
      <section className="hero about-hero">
        <div className="container">
          <m.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">About AI SaaS</h1>
            <p className="hero-description">
              We're on a mission to make artificial intelligence accessible and powerful 
              for businesses of all sizes. Founded in 2020, we've helped thousands of 
              companies transform their operations with cutting-edge AI technology.
            </p>
          </m.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <m.div 
              className="mission-text"
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>
                To democratize artificial intelligence by making it accessible, affordable, 
                and easy to use for businesses worldwide. We believe that every company, 
                regardless of size, should have access to the power of AI to drive growth 
                and innovation.
              </p>
              <p>
                Our platform combines the latest advances in machine learning with an 
                intuitive interface, enabling teams to harness the full potential of AI 
                without requiring extensive technical expertise.
              </p>
            </m.div>
            <m.div 
              className="mission-visual"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="mission-image">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
                  alt="AI Technology" 
                />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </m.div>

          <m.div 
            className="values-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <m.div 
                key={index}
                className="value-card"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-description">
              The passionate people behind our AI platform
            </p>
          </m.div>

          <m.div 
            className="team-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <m.div 
                key={index}
                className="team-card"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-description">
              Key milestones in our company's growth
            </p>
          </m.div>

          <m.div 
            className="timeline"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <m.div 
                key={index}
                className="timeline-item"
                variants={fadeInUp}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <p>{milestone.event}</p>
                </div>
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
            <h2 className="cta-title">Join Our Mission</h2>
            <p className="cta-description">
              Be part of the AI revolution. Start your journey with us today.
            </p>
            <div className="cta-actions">
              <m.a 
                href="/dashboard" 
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </m.a>
              <m.a 
                href="/contact" 
                className="btn btn-outline btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </m.a>
            </div>
          </m.div>
        </div>
      </section>
    </m.div>
  )
}

export default About























