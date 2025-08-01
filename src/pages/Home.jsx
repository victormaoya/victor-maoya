import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowDown, FaCode, FaRocket, FaPalette } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Home = () => {
  const { isDark } = useTheme()

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section
        className={`flex items-center justify-center min-h-screen px-8 relative ${
          isDark ? 'bg-gray-950' : 'bg-gray-50'
        }`}
      >
        <motion.div
          className={`text-center max-w-4xl mx-auto ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className='text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Victor Maoya
          </motion.h1>
          <motion.p
            className={`text-xl md:text-2xl mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer & Digital Craftsman
          </motion.p>
          <motion.p
            className={`text-lg mb-12 max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build state-of-the-art websites with precision and aesthetic
            elegance. Turning ideas into beautiful, functional digital
            experiences.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to='/projects'
              className='bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-white'
            >
              <FaRocket /> See My Work
            </Link>
            <Link
              to='/contact'
              className='border border-purple-600 hover:bg-purple-800 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-purple-600 hover:text-white flex items-center gap-2'
            >
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <FaArrowDown className='text-purple-400 animate-bounce text-xl' />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className={`py-20 px-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <motion.div
          className='max-w-6xl mx-auto'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            What I Do
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <motion.div
              className={`text-center p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className='bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaCode className='text-2xl text-white' />
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Frontend Development
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Building responsive, interactive user interfaces with React,
                TypeScript, and modern CSS frameworks.
              </p>
            </motion.div>

            <motion.div
              className={`text-center p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className='bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaRocket className='text-2xl text-white' />
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Backend Development
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Creating robust APIs and server-side applications with Node.js,
                Express, and MongoDB.
              </p>
            </motion.div>

            <motion.div
              className={`text-center p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className='bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaPalette className='text-2xl text-white' />
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                UI/UX Design
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Designing beautiful, intuitive user experiences with attention
                to detail and modern aesthetics.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default Home
