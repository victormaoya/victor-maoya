import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import victorPic from '../assets/victor.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-3 hover:opacity-80 transition-opacity'
        >
          <img
            src={victorPic}
            alt='Victor Maoya'
            className='w-10 h-10 rounded-full object-cover border-2 border-purple-400'
          />
          <span className='font-bold text-xl'>Victor Maoya</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8'>
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative px-3 py-2 transition-colors duration-300 ${
                location.pathname === path
                  ? 'text-purple-400'
                  : 'text-gray-300 hover:text-purple-400'
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors'
          aria-label='Toggle menu'
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-gray-900 border-t border-gray-800'
          >
            <nav className='px-6 py-4 space-y-4'>
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors duration-300 ${
                    location.pathname === path
                      ? 'text-purple-400 bg-purple-400/10'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-gray-800'
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
