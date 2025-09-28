import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const [colorScheme, setColorScheme] = useState(() => {
    return localStorage.getItem('colorScheme') || 'purple'
  })

  useEffect(() => {
    document.body.className = `theme-${theme} color-${colorScheme}`
    localStorage.setItem('theme', theme)
    localStorage.setItem('colorScheme', colorScheme)
  }, [theme, colorScheme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const changeColorScheme = () => {
    const schemes = ['purple', 'neon', 'minimal']
    const currentIndex = schemes.indexOf(colorScheme)
    const nextIndex = (currentIndex + 1) % schemes.length
    setColorScheme(schemes[nextIndex])
  }

  const value = {
    theme,
    colorScheme,
    toggleTheme,
    changeColorScheme,
    isDark: theme === 'dark'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

