import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const Billing = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, scaleIn } = useMotion()
  const [billingCycle, setBillingCycle] = useState('monthly')

  const currentPlan = {
    name: 'Professional',
    price: billingCycle === 'monthly' ? 79 : 790,
    period: billingCycle === 'monthly' ? 'month' : 'year',
    features: [
      'Up to 25 team members',
      '100GB storage',
      'Advanced AI features',
      'Priority support',
      'All integrations',
      'Custom workflows',
      'Advanced analytics'
    ],
    nextBilling: '2024-02-15',
    status: 'active'
  }

  const availablePlans = [
    {
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic AI features',
        'Email support'
      ],
      current: false
    },
    {
      name: 'Professional',
      monthlyPrice: 79,
      yearlyPrice: 790,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced AI features',
        'Priority support',
        'All integrations'
      ],
      current: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'All AI features',
        '24/7 phone support',
        'Custom integrations'
      ],
      current: false
    }
  ]

  const paymentHistory = [
    {
      id: 1,
      date: '2024-01-15',
      description: 'Professional Plan - Monthly',
      amount: 79.00,
      status: 'paid',
      invoice: 'INV-2024-001'
    },
    {
      id: 2,
      date: '2023-12-15',
      description: 'Professional Plan - Monthly',
      amount: 79.00,
      status: 'paid',
      invoice: 'INV-2023-012'
    },
    {
      id: 3,
      date: '2023-11-15',
      description: 'Professional Plan - Monthly',
      amount: 79.00,
      status: 'paid',
      invoice: 'INV-2023-011'
    },
    {
      id: 4,
      date: '2023-10-15',
      description: 'Professional Plan - Monthly',
      amount: 79.00,
      status: 'paid',
      invoice: 'INV-2023-010'
    }
  ]

  const usageStats = [
    { label: 'Team Members', used: 12, limit: 25, unit: 'members' },
    { label: 'Storage', used: 45, limit: 100, unit: 'GB' },
    { label: 'AI Requests', used: 8500, limit: 10000, unit: 'requests' },
    { label: 'API Calls', used: 15000, limit: 50000, unit: 'calls' }
  ]

  const handlePlanChange = (planName) => {
    // In a real app, this would handle plan changes
    alert(`Plan change to ${planName} would be processed here`)
  }

  const downloadInvoice = (invoiceId) => {
    // In a real app, this would download the actual invoice
    alert(`Downloading invoice ${invoiceId}`)
  }

  const updatePaymentMethod = () => {
    // In a real app, this would open a payment method update modal
    alert('Payment method update would be handled here')
  }

  return (
    <m.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Billing & Subscription</h1>
          <p className="page-description">Manage your subscription, view invoices, and update payment methods.</p>
        </div>
        <div className="header-actions">
          <m.button 
            className="btn btn-outline"
            onClick={updatePaymentMethod}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-credit-card"></i>
            <span>Update Payment</span>
          </m.button>
          <m.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download"></i>
            <span>Download Invoices</span>
          </m.button>
        </div>
      </div>

      {/* Current Plan */}
      <m.div 
        className="current-plan-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="current-plan-card">
          <div className="plan-header">
            <div className="plan-info">
              <h2 className="plan-name">{currentPlan.name} Plan</h2>
              <p className="plan-description">Your current subscription</p>
            </div>
            <div className="plan-status">
              <span className={`status-badge ${currentPlan.status}`}>
                {currentPlan.status.charAt(0).toUpperCase() + currentPlan.status.slice(1)}
              </span>
            </div>
          </div>
          <div className="plan-details">
            <div className="plan-price">
              <span className="price-amount">${currentPlan.price}</span>
              <span className="price-period">/{currentPlan.period}</span>
            </div>
            <div className="plan-features">
              <h3>What's included:</h3>
              <ul>
                {currentPlan.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="plan-actions">
              <button className="btn btn-outline">Change Plan</button>
              <button className="btn btn-danger">Cancel Subscription</button>
            </div>
          </div>
        </div>
      </m.div>

      {/* Usage Statistics */}
      <m.div 
        className="usage-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="section-title">Usage This Month</h2>
        <div className="usage-grid">
          {usageStats.map((stat, index) => (
            <m.div 
              key={index}
              className="usage-card"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="usage-header">
                <h3 className="usage-label">{stat.label}</h3>
                <span className="usage-percentage">
                  {Math.round((stat.used / stat.limit) * 100)}%
                </span>
              </div>
              <div className="usage-bar">
                <div 
                  className="usage-progress"
                  style={{ width: `${(stat.used / stat.limit) * 100}%` }}
                ></div>
              </div>
              <div className="usage-stats">
                <span className="usage-used">{stat.used.toLocaleString()} {stat.unit}</span>
                <span className="usage-limit">of {stat.limit.toLocaleString()}</span>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>

      {/* Available Plans */}
      <m.div 
        className="plans-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="section-header">
          <h2 className="section-title">Available Plans</h2>
          <div className="billing-toggle">
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
          </div>
        </div>

        <div className="plans-grid">
          {availablePlans.map((plan, index) => (
            <m.div 
              key={index}
              className={`plan-card ${plan.current ? 'current' : ''}`}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {plan.current && <div className="current-badge">Current Plan</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="price-amount">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="price-period">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
              </div>

              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-actions">
                {plan.current ? (
                  <button className="btn btn-outline" disabled>
                    Current Plan
                  </button>
                ) : (
                  <button 
                    className="btn btn-primary"
                    onClick={() => handlePlanChange(plan.name)}
                  >
                    {billingCycle === 'yearly' ? 'Switch to Yearly' : 'Switch to Monthly'}
                  </button>
                )}
              </div>
            </m.div>
          ))}
        </div>
      </m.div>

      {/* Payment History */}
      <m.div 
        className="payment-history-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="section-title">Payment History</h2>
        <div className="payment-history-card">
          <div className="table-container">
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Invoice</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id}>
                    <td>{new Date(payment.date).toLocaleDateString()}</td>
                    <td>{payment.description}</td>
                    <td>${payment.amount.toFixed(2)}</td>
                    <td>
                      <span className={`status-badge ${payment.status}`}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                    <td>{payment.invoice}</td>
                    <td>
                      <button 
                        className="btn btn-outline btn-sm"
                        onClick={() => downloadInvoice(payment.invoice)}
                      >
                        <i className="fas fa-download"></i>
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </m.div>

      {/* Next Billing */}
      <m.div 
        className="next-billing-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="next-billing-card">
          <div className="billing-info">
            <h3>Next Billing Date</h3>
            <p className="billing-date">{new Date(currentPlan.nextBilling).toLocaleDateString()}</p>
            <p className="billing-amount">${currentPlan.price} will be charged to your payment method</p>
          </div>
          <div className="billing-actions">
            <button className="btn btn-outline">Update Payment Method</button>
            <button className="btn btn-outline">View Invoice</button>
          </div>
        </div>
      </m.div>
    </m.div>
  )
}

export default Billing























