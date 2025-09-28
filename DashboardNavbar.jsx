import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const DashboardNavbar = () => {
  const { theme, toggleTheme, changeColorScheme } = useTheme()

  return (
    <m.nav 
      className="dashboard-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-logo">
            <span className="logo-text">AI<span className="gradient-text">SaaS</span></span>
          </Link>
        </div>
        
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">Features</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
        
        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            <i className={`fas fa-moon ${theme === 'dark' ? 'hidden' : ''}`}></i>
            <i className={`fas fa-sun ${theme === 'light' ? 'hidden' : ''}`}></i>
          </button>
          <button 
            className="color-scheme-toggle" 
            onClick={changeColorScheme}
            title="Change Color Scheme"
          >
            <i className="fas fa-palette"></i>
          </button>
          <div className="user-menu">
            <div className="user-avatar">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23a855f7'/%3E%3Ctext x='16' y='21' text-anchor='middle' fill='white' font-family='Arial' font-size='14' font-weight='bold'%3EU%3C/text%3E%3C/svg%3E" 
                alt="User" 
              />
            </div>
            <span className="user-name">User</span>
          </div>
        </div>
      </div>
    </m.nav>
  )
}

export default DashboardNavbar























