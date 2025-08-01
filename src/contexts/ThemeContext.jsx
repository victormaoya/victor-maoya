import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Initialize with dark mode and set document class immediately
    document.documentElement.classList.add('dark')
    return true
  })

  useEffect(() => {
    // Check for saved theme preference, if none exists, default to dark mode
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      const isThemeDark = savedTheme === 'dark'
      setIsDark(isThemeDark)

      // Update document class based on saved preference
      if (isThemeDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // If no saved preference, keep dark mode as default and save it
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    // Update localStorage when theme changes (only after initial load)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    // Update document class for Tailwind dark mode
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' : 'light',
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
