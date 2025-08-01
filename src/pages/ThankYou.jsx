import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaHome, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const ThankYou = () => {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen pt-20 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className='container mx-auto px-4 py-16 text-center'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className={`inline-block text-6xl md:text-8xl mb-8 ${
            isDark ? 'text-green-400' : 'text-green-500'
          }`}
        >
          <FaCheckCircle />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='text-4xl md:text-6xl font-bold mb-6'
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Your message has been sent successfully! I appreciate you taking the
          time to reach out. I'll get back to you as soon as possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <Link
            to='/'
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isDark
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            } hover:scale-105 shadow-lg hover:shadow-xl`}
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to='/contact'
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isDark
                ? 'border border-gray-600 text-gray-300 hover:bg-gray-700'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            } hover:scale-105 shadow-lg hover:shadow-xl`}
          >
            <FaEnvelope />
            Send Another Message
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className={`mt-16 pt-8 border-t ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <p
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
          >
            Expected response time: 24-48 hours
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ThankYou
