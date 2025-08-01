import { useTheme } from '../contexts/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full transition-all duration-300 ${
        isDark
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaSun className='w-5 h-5' />
        ) : (
          <FaMoon className='w-5 h-5' />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
