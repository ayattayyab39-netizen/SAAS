import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'
import { useMotion } from '../context/MotionContext'

const Analytics = () => {
  const { motion: m, pageVariants, pageTransition, staggerContainer, fadeInUp, scaleIn } = useMotion()
  const [timeRange, setTimeRange] = useState('7d')
  const [exportFormat, setExportFormat] = useState('csv')

  // Sample data for charts
  const userGrowthData = [
    { name: 'Jan', users: 400, revenue: 2400 },
    { name: 'Feb', users: 300, revenue: 1398 },
    { name: 'Mar', users: 200, revenue: 9800 },
    { name: 'Apr', users: 278, revenue: 3908 },
    { name: 'May', users: 189, revenue: 4800 },
    { name: 'Jun', users: 239, revenue: 3800 },
    { name: 'Jul', users: 349, revenue: 4300 }
  ]

  const aiUsageData = [
    { name: 'Mon', requests: 1200, accuracy: 94.2 },
    { name: 'Tue', requests: 1900, accuracy: 95.1 },
    { name: 'Wed', requests: 3000, accuracy: 93.8 },
    { name: 'Thu', requests: 2800, accuracy: 96.2 },
    { name: 'Fri', requests: 1890, accuracy: 94.5 },
    { name: 'Sat', requests: 2390, accuracy: 95.8 },
    { name: 'Sun', requests: 3490, accuracy: 97.1 }
  ]

  const featureUsageData = [
    { name: 'AI Chat', value: 35, color: '#8884d8' },
    { name: 'Analytics', value: 25, color: '#82ca9d' },
    { name: 'Automation', value: 20, color: '#ffc658' },
    { name: 'Reports', value: 15, color: '#ff7300' },
    { name: 'Other', value: 5, color: '#00ff00' }
  ]

  const performanceMetrics = [
    { name: 'Response Time', value: '1.2s', change: '+0.1s', trend: 'up' },
    { name: 'Uptime', value: '99.9%', change: '+0.1%', trend: 'up' },
    { name: 'Accuracy', value: '94.2%', change: '+2.1%', trend: 'up' },
    { name: 'Error Rate', value: '0.8%', change: '-0.2%', trend: 'down' }
  ]

  const exportData = () => {
    // In a real app, this would generate and download the actual data
    const dataStr = JSON.stringify(userGrowthData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `analytics-data-${timeRange}.${exportFormat}`
    link.click()
    URL.revokeObjectURL(url)
  }

  const exportToPDF = () => {
    // In a real app, this would generate a PDF report
    alert('PDF export functionality would be implemented here')
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
          <h1 className="page-title">Analytics Dashboard</h1>
          <p className="page-description">Comprehensive insights into your AI platform performance and usage.</p>
        </div>
        <div className="header-actions">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="time-range-select"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <select 
            value={exportFormat} 
            onChange={(e) => setExportFormat(e.target.value)}
            className="export-format-select"
          >
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
            <option value="xlsx">Excel</option>
          </select>
          <m.button 
            className="btn btn-secondary"
            onClick={exportData}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download"></i>
            <span>Export Data</span>
          </m.button>
          <m.button 
            className="btn btn-primary"
            onClick={exportToPDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-file-pdf"></i>
            <span>Export PDF</span>
          </m.button>
        </div>
      </div>

      {/* Performance Metrics */}
      <m.div 
        className="metrics-grid"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {performanceMetrics.map((metric, index) => (
          <m.div 
            key={index}
            className="metric-card"
            variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="metric-header">
              <h3 className="metric-name">{metric.name}</h3>
              <div className={`metric-trend ${metric.trend}`}>
                <i className={`fas fa-arrow-${metric.trend === 'up' ? 'up' : 'down'}`}></i>
              </div>
            </div>
            <div className="metric-value">{metric.value}</div>
            <div className={`metric-change ${metric.trend}`}>
              {metric.change} from last period
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Charts Section */}
      <div className="charts-section">
        <m.div 
          className="chart-card large"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="chart-header">
            <h3 className="chart-title">User Growth & Revenue</h3>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#8884d8' }}></div>
                <span>Users</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#82ca9d' }}></div>
                <span>Revenue</span>
              </div>
            </div>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stackId="1" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stackId="2" 
                  stroke="#82ca9d" 
                  fill="#82ca9d" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </m.div>

        <m.div 
          className="chart-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="chart-header">
            <h3 className="chart-title">AI Usage Trends</h3>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={aiUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="requests" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </m.div>

        <m.div 
          className="chart-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="chart-header">
            <h3 className="chart-title">Feature Usage</h3>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={featureUsageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {featureUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </m.div>
      </div>

      {/* Data Table */}
      <m.div 
        className="data-table-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="table-card">
          <div className="table-header">
            <h3 className="table-title">Detailed Analytics</h3>
            <div className="table-actions">
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-filter"></i>
                Filter
              </button>
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-sort"></i>
                Sort
              </button>
            </div>
          </div>
          <div className="table-container">
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Users</th>
                  <th>AI Requests</th>
                  <th>Revenue</th>
                  <th>Accuracy</th>
                  <th>Uptime</th>
                </tr>
              </thead>
              <tbody>
                {userGrowthData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.users.toLocaleString()}</td>
                    <td>{aiUsageData[index]?.requests.toLocaleString() || 'N/A'}</td>
                    <td>${row.revenue.toLocaleString()}</td>
                    <td>{aiUsageData[index]?.accuracy.toFixed(1)}%</td>
                    <td>99.9%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </m.div>
    </m.div>
  )
}

export default Analytics























