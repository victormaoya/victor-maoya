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
    // Check if dark class is already set (from index.html script)
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    // Sync with what's already been set by the index.html script
    const savedTheme = localStorage.getItem('theme')
    const currentIsDark = document.documentElement.classList.contains('dark')

    if (savedTheme) {
      const shouldBeDark = savedTheme === 'dark'
      setIsDark(shouldBeDark)

      // Ensure document class matches saved preference
      if (shouldBeDark && !currentIsDark) {
        document.documentElement.classList.add('dark')
      } else if (!shouldBeDark && currentIsDark) {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // Default to dark mode if no preference saved
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
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
