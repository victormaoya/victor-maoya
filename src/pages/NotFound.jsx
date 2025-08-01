import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gray-950 text-white flex items-center justify-center px-8'>
      <motion.div
        className='text-center max-w-md mx-auto'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-8'
        >
          <h1 className='text-9xl font-bold text-purple-500 mb-4'>404</h1>
          <h2 className='text-3xl font-bold mb-4'>Page Not Found</h2>
          <p className='text-gray-400 mb-8'>
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </motion.div>

        <motion.div
          className='space-y-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to='/'
            className='flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105'
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to='/projects'
            className='flex items-center justify-center gap-2 border border-purple-600 hover:bg-purple-800 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105'
          >
            <FaSearch />
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound
