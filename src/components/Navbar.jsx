import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import victorPic from '../assets/victor.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isDark } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDark
          ? 'bg-gray-950/90 border-gray-800'
          : 'bg-white/90 border-gray-200'
      } backdrop-blur-sm border-b`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-3 group transition-all duration-300 hover:scale-105'
        >
          <img
            src={victorPic}
            alt='Victor Maoya'
            className={`w-10 h-10 rounded-full object-cover border-2 transition-all duration-300 ${
              isDark
                ? 'border-purple-400 group-hover:border-purple-300 group-hover:shadow-lg group-hover:shadow-purple-400/30'
                : 'border-blue-500 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/30'
            }`}
          />
          <span
            className={`font-bold text-xl transition-colors duration-300 ${
              isDark
                ? 'text-white group-hover:text-purple-300'
                : 'text-gray-900 group-hover:text-blue-600'
            }`}
          >
            Victor Maoya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative px-3 py-2 transition-colors duration-300 ${
                location.pathname === path
                  ? 'text-purple-400'
                  : isDark
                  ? 'text-gray-300 hover:text-purple-400'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              {label}
              {location.pathname === path && (
                <motion.div
                  className='absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400'
                  layoutId='activeTab'
                  initial={false}
                />
              )}
            </Link>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className='md:hidden flex items-center gap-3'>
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className={`p-2 transition-colors ${
              isDark
                ? 'text-gray-300 hover:text-purple-400'
                : 'text-gray-600 hover:text-purple-600'
            }`}
            aria-label='Toggle menu'
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              isDark
                ? 'bg-gray-900 border-gray-800'
                : 'bg-gray-50 border-gray-200'
            } border-t`}
          >
            <nav className='px-6 py-4 space-y-4'>
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors duration-300 ${
                    location.pathname === path
                      ? isDark
                        ? 'text-purple-400 bg-purple-400/10'
                        : 'text-purple-600 bg-purple-600/10'
                      : isDark
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-gray-800'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
