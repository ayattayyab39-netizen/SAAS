import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMotion } from '../context/MotionContext'

const AIChat = () => {
  const { motion: m, pageVariants, pageTransition, fadeInUp, scaleIn } = useMotion()
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      timestamp: new Date().toISOString()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: generateAIResponse(inputValue),
        timestamp: new Date().toISOString()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput) => {
    const responses = [
      "That's an interesting question! Let me help you with that.",
      "I understand what you're looking for. Here's what I can suggest...",
      "Great question! Based on your input, I recommend...",
      "I can definitely help you with that. Let me provide some insights...",
      "That's a common concern. Here's how we can address it...",
      "Excellent point! Here's my analysis and recommendations..."
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const quickActions = [
    { text: 'Help me analyze data', icon: 'fas fa-chart-bar' },
    { text: 'Create a workflow', icon: 'fas fa-cogs' },
    { text: 'Generate a report', icon: 'fas fa-file-alt' },
    { text: 'Explain AI concepts', icon: 'fas fa-brain' }
  ]

  const handleQuickAction = (action) => {
    setInputValue(action.text)
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
          <h1 className="page-title">AI Chat Assistant</h1>
          <p className="page-description">Chat with our AI assistant to get help with your projects and questions.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <i className="fas fa-history"></i>
            <span>Chat History</span>
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-download"></i>
            <span>Export Chat</span>
          </button>
        </div>
      </div>

      <div className="chat-container">
        {/* Chat Messages */}
        <div className="chat-messages">
          {messages.map((message) => (
            <m.div 
              key={message.id}
              className={`message ${message.type}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="message-avatar">
                {message.type === 'bot' ? (
                  <div className="bot-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                ) : (
                  <div className="user-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                )}
              </div>
              <div className="message-content">
                <div className="message-bubble">
                  <p>{message.content}</p>
                </div>
                <div className="message-time">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </m.div>
          ))}
            
          {isTyping && (
            <m.div 
              className="message bot typing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="message-avatar">
                <div className="bot-avatar">
                  <i className="fas fa-robot"></i>
                </div>
              </div>
              <div className="message-content">
                <div className="message-bubble typing-bubble">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </m.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-chat">
          <h4>Quick Actions</h4>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <m.button 
                key={index}
                className="quick-action-btn"
                onClick={() => handleQuickAction(action)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={action.icon}></i>
                <span>{action.text}</span>
              </m.button>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="chat-input-container">
          <form onSubmit={handleSendMessage} className="chat-input-form">
            <div className="chat-input-wrapper">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
                className="chat-input"
                disabled={isTyping}
              />
              <button 
                type="submit" 
                className="chat-send-btn"
                disabled={!inputValue.trim() || isTyping}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Chat Sidebar */}
      <div className="chat-sidebar">
        <div className="sidebar-section">
          <h3>AI Capabilities</h3>
          <div className="capability-list">
            <div className="capability-item">
              <i className="fas fa-chart-line"></i>
              <span>Data Analysis</span>
            </div>
            <div className="capability-item">
              <i className="fas fa-cogs"></i>
              <span>Workflow Automation</span>
            </div>
            <div className="capability-item">
              <i className="fas fa-file-alt"></i>
              <span>Report Generation</span>
            </div>
            <div className="capability-item">
              <i className="fas fa-brain"></i>
              <span>Predictive Analytics</span>
            </div>
            <div className="capability-item">
              <i className="fas fa-code"></i>
              <span>Code Assistance</span>
            </div>
            <div className="capability-item">
              <i className="fas fa-question-circle"></i>
              <span>General Q&A</span>
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Recent Conversations</h3>
          <div className="conversation-list">
            <div className="conversation-item">
              <div className="conversation-preview">
                <h4>Data Analysis Help</h4>
                <p>How to optimize my analytics...</p>
              </div>
              <span className="conversation-time">2 hours ago</span>
            </div>
            <div className="conversation-item">
              <div className="conversation-preview">
                <h4>Workflow Setup</h4>
                <p>Creating automated processes...</p>
              </div>
              <span className="conversation-time">1 day ago</span>
            </div>
            <div className="conversation-item">
              <div className="conversation-preview">
                <h4>API Integration</h4>
                <p>Connecting external services...</p>
              </div>
              <span className="conversation-time">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default AIChat























