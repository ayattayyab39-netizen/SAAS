import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import { MotionProvider } from './context/MotionContext'

// Layouts
import MainLayout from './layouts/MainLayout'

// Pages
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

// Dashboard Pages
import Dashboard from './pages/dashboard/Dashboard'
import AIChat from './pages/dashboard/AIChat'
import Analytics from './pages/dashboard/Analytics'
import Billing from './pages/dashboard/Billing'

// Styles
import './styles/globals.css'

function App() {
  return (
    <ThemeProvider>
      <MotionProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="features" element={<Features />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="contact" element={<Contact />} />
              </Route>

              {/* Dashboard Pages */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/chat" element={<AIChat />} />
              <Route path="/dashboard/analytics" element={<Analytics />} />
              <Route path="/dashboard/billing" element={<Billing />} />
            </Routes>
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                },
              }}
            />
          </div>
        </Router>
      </MotionProvider>
    </ThemeProvider>
  )
}

export default App

