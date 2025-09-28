import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { motion: m, hoverScale } = useMotion()
  const location = useLocation()

  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: 'fas fa-home' },
    { name: 'AI Chat', path: '/dashboard/chat', icon: 'fas fa-comments' },
    { name: 'Analytics', path: '/dashboard/analytics', icon: 'fas fa-chart-bar' },
    { name: 'Billing', path: '/dashboard/billing', icon: 'fas fa-credit-card' },
    { name: 'Team', path: '/dashboard/team', icon: 'fas fa-users' },
    { name: 'Settings', path: '/dashboard/settings', icon: 'fas fa-cog' }
  ]

  return (
    <m.aside 
      className={`dashboard-sidebar ${isCollapsed ? 'collapsed' : ''}`}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h3>Dashboard</h3>
          <button 
            className="collapse-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item, index) => (
              <m.li 
                key={index} 
                className="menu-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    `menu-link ${isActive ? 'active' : ''}`
                  }
                  {...hoverScale}
                >
                  <i className={item.icon}></i>
                  {!isCollapsed && <span>{item.name}</span>}
                </NavLink>
              </m.li>
            ))}
          </ul>
        </nav>
      </div>
    </m.aside>
  )
}

export default DashboardSidebar























