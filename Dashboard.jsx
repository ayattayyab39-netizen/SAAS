import React from 'react'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const Dashboard = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, scaleIn } = useMotion()

  const stats = [
    {
      icon: 'fas fa-users',
      number: '2,847',
      label: 'Active Users',
      change: '+12%',
      changeType: 'positive'
    },
    {
      icon: 'fas fa-chart-line',
      number: '$45,231',
      label: 'Revenue',
      change: '+8%',
      changeType: 'positive'
    },
    {
      icon: 'fas fa-robot',
      number: '1,234',
      label: 'AI Requests',
      change: '+23%',
      changeType: 'positive'
    },
    {
      icon: 'fas fa-clock',
      number: '99.9%',
      label: 'Uptime',
      change: '+0.1%',
      changeType: 'positive'
    }
  ]

  const recentActivity = [
    {
      icon: 'fas fa-user-plus',
      text: 'New user registered',
      time: '2 minutes ago',
      type: 'user'
    },
    {
      icon: 'fas fa-robot',
      text: 'AI model updated',
      time: '1 hour ago',
      type: 'ai'
    },
    {
      icon: 'fas fa-chart-line',
      text: 'Monthly report generated',
      time: '3 hours ago',
      type: 'analytics'
    },
    {
      icon: 'fas fa-cog',
      text: 'System maintenance completed',
      time: '1 day ago',
      type: 'system'
    }
  ]

  const quickActions = [
    {
      title: 'Create New Project',
      description: 'Start a new AI project',
      icon: 'fas fa-plus',
      color: 'primary'
    },
    {
      title: 'View Analytics',
      description: 'Check performance metrics',
      icon: 'fas fa-chart-bar',
      color: 'secondary'
    },
    {
      title: 'Manage Team',
      description: 'Add or remove team members',
      icon: 'fas fa-users',
      color: 'accent'
    },
    {
      title: 'Settings',
      description: 'Configure your account',
      icon: 'fas fa-cog',
      color: 'neutral'
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
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Dashboard Overview</h1>
          <p className="page-description">Welcome back! Here's what's happening with your AI platform.</p>
        </div>
        <div className="header-actions">
          <m.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download"></i>
            <span>Export Data</span>
          </m.button>
          <m.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-plus"></i>
            <span>New Project</span>
          </m.button>
        </div>
      </div>

      {/* Stats Grid */}
      <m.div 
        className="stats-grid"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {stats.map((stat, index) => (
          <m.div 
            key={index}
            className="stat-card"
            variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <div className="stat-content">
              <div className="stat-number counter">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-change ${stat.changeType}`}>
                {stat.change} from last month
              </div>
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Charts Section */}
      <div className="charts-section">
        <m.div 
          className="chart-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="chart-header">
            <h3 className="chart-title">Usage Analytics</h3>
            <div className="chart-controls">
              <button className="chart-btn active">7D</button>
              <button className="chart-btn">30D</button>
              <button className="chart-btn">90D</button>
            </div>
          </div>
          <div className="chart-content">
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar" style={{ height: '80%' }}></div>
                <div className="bar" style={{ height: '45%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '70%' }}></div>
                <div className="bar" style={{ height: '85%' }}></div>
                <div className="bar" style={{ height: '95%' }}></div>
              </div>
            </div>
          </div>
        </m.div>
        
        <m.div 
          className="chart-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="chart-header">
            <h3 className="chart-title">AI Performance</h3>
            <div className="chart-controls">
              <button className="chart-btn active">Real-time</button>
              <button className="chart-btn">Hourly</button>
            </div>
          </div>
          <div className="chart-content">
            <div className="chart-placeholder">
              <div className="performance-metrics">
                <div className="metric-item">
                  <span className="metric-label">Accuracy</span>
                  <span className="metric-value">94.2%</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Response Time</span>
                  <span className="metric-value">1.2s</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Success Rate</span>
                  <span className="metric-value">99.1%</span>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="dashboard-bottom-section">
        <m.div 
          className="activity-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="activity-card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
              <a href="#" className="card-link">View All</a>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity, index) => (
                <m.div 
                  key={index}
                  className="activity-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="activity-icon">
                    <i className={activity.icon}></i>
                  </div>
                  <div className="activity-content">
                    <div className="activity-text">{activity.text}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>

        <m.div 
          className="quick-actions-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="quick-actions-card">
            <div className="card-header">
              <h3 className="card-title">Quick Actions</h3>
            </div>
            <div className="quick-actions-grid">
              {quickActions.map((action, index) => (
                <m.button 
                  key={index}
                  className={`quick-action-btn ${action.color}`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="quick-action-icon">
                    <i className={action.icon}></i>
                  </div>
                  <div className="quick-action-content">
                    <h4>{action.title}</h4>
                    <p>{action.description}</p>
                  </div>
                </m.button>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </m.div>
  )
}

export default Dashboard























