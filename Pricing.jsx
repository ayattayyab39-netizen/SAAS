import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const Pricing = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, scaleIn } = useMotion()
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = {
    monthly: [
      {
        name: 'Starter',
        price: 29,
        period: 'month',
        description: 'Perfect for small teams getting started',
        features: [
          'Up to 5 team members',
          '10GB storage',
          'Basic AI features',
          'Email support',
          'Standard integrations'
        ],
        limitations: [
          'Limited API calls',
          'Basic analytics'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: 79,
        period: 'month',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 25 team members',
          '100GB storage',
          'Advanced AI features',
          'Priority support',
          'All integrations',
          'Custom workflows',
          'Advanced analytics'
        ],
        limitations: [],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 199,
        period: 'month',
        description: 'For large organizations',
        features: [
          'Unlimited team members',
          'Unlimited storage',
          'All AI features',
          '24/7 phone support',
          'Custom integrations',
          'White-label options',
          'Advanced security',
          'Dedicated account manager'
        ],
        limitations: [],
        popular: false
      }
    ],
    yearly: [
      {
        name: 'Starter',
        price: 290,
        period: 'year',
        description: 'Perfect for small teams getting started',
        features: [
          'Up to 5 team members',
          '10GB storage',
          'Basic AI features',
          'Email support',
          'Standard integrations'
        ],
        limitations: [
          'Limited API calls',
          'Basic analytics'
        ],
        popular: false,
        savings: 'Save 17%'
      },
      {
        name: 'Professional',
        price: 790,
        period: 'year',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 25 team members',
          '100GB storage',
          'Advanced AI features',
          'Priority support',
          'All integrations',
          'Custom workflows',
          'Advanced analytics'
        ],
        limitations: [],
        popular: true,
        savings: 'Save 17%'
      },
      {
        name: 'Enterprise',
        price: 1990,
        period: 'year',
        description: 'For large organizations',
        features: [
          'Unlimited team members',
          'Unlimited storage',
          'All AI features',
          '24/7 phone support',
          'Custom integrations',
          'White-label options',
          'Advanced security',
          'Dedicated account manager'
        ],
        limitations: [],
        popular: false,
        savings: 'Save 17%'
      }
    ]
  }

  const currentPlans = plans[billingCycle]

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise customers with specific requirements. Contact our sales team for more information.'
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
      <section className="hero pricing-hero">
        <div className="container">
          <m.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">Simple, Transparent Pricing</h1>
            <p className="hero-description">
              Choose the perfect plan for your business. All plans include our core AI features 
              with no hidden fees or surprises.
            </p>
            
            {/* Billing Toggle */}
            <m.div 
              className="billing-toggle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
              <button 
                className={`toggle-switch ${billingCycle === 'yearly' ? 'yearly' : ''}`}
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              >
                <span className="toggle-slider"></span>
              </button>
              <span className={billingCycle === 'yearly' ? 'active' : ''}>
                Yearly 
                <span className="savings-badge">Save 17%</span>
              </span>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-section">
        <div className="container">
          <m.div 
            className="pricing-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {currentPlans.map((plan, index) => (
              <m.div 
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="savings-text">{plan.savings}</div>
                  )}
                </div>

                <div className="plan-features">
                  <h4>What's included:</h4>
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="plan-limitations">
                      <h4>Limitations:</h4>
                      <ul>
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex}>
                            <i className="fas fa-times"></i>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <m.button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-large plan-cta`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </m.button>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Compare Plans</h2>
            <p className="section-description">
              See a detailed comparison of all our features across different plans
            </p>
          </m.div>

          <m.div 
            className="comparison-table-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Team Members</td>
                  <td>Up to 5</td>
                  <td>Up to 25</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>10GB</td>
                  <td>100GB</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>AI Features</td>
                  <td>Basic</td>
                  <td>Advanced</td>
                  <td>All Features</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>Email</td>
                  <td>Priority</td>
                  <td>24/7 Phone</td>
                </tr>
                <tr>
                  <td>Integrations</td>
                  <td>Standard</td>
                  <td>All</td>
                  <td>Custom</td>
                </tr>
                <tr>
                  <td>API Calls</td>
                  <td>Limited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
              </tbody>
            </table>
          </m.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <m.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
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
              >
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
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
              Join thousands of companies already using our AI platform to drive growth and innovation.
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

export default Pricing























