import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const projects = [
  {
    title: 'NotesApp',
    description:
      'A modern note-taking app with full CRUD functionality, dark mode, and tag filtering. Built with the MERN stack.',
    tech: ['React', 'TailwindCSS', 'MongoDB', 'Express'],
    github: 'https://github.com/victormaoya/notes-app',
    live: 'https://shisha-frontend.vercel.app/',
    image: '/images/notes-app-a.png',
  }, 
  {
    title: 'eCommerce App',
    description:
      'An elegant, fully responsive eCommerce platform built with Next.js, TailwindCSS, and PostgreSQL. Designed for speed, scalability, and seamless user journeys — from product discovery to secure checkout.',
    tech: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/victormaoya/eroica',
    live: 'https://eroica.vercel.app/',
    image: '/images/Eroica.png',
  },
  {
    title: 'Valkyrie | Analytics Dashboard',
    description: 'Command your data with precision, speed, and power.',
    tech: ['Nextjs', 'TailwindCSS'],
    github: 'https://github.com/victormaoya/valkyrie',
    live: 'https://valkyries.vercel.app/',
    image: '/images/Valkyrie.png',
  }
  // You can add more projects here later
]

function Projects() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen py-20 px-8 ${
        isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <motion.div
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className='text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured Projects
        </motion.h1>
        <motion.p
          className={`text-center mb-16 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Here are some of my recent projects that showcase my skills in modern
          web development.
        </motion.p>

        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-2xl border transition-all duration-500 group ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className='w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark
                      ? 'from-gray-900/50 to-transparent'
                      : 'from-black/30 to-transparent'
                  }`}
                ></div>
              </div>

              <div className='p-8'>
                <h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    isDark
                      ? 'group-hover:text-purple-400'
                      : 'group-hover:text-blue-600'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-6 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-8'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full backdrop-blur-sm border ${
                        isDark
                          ? 'bg-purple-600/20 border-purple-500/30 text-purple-300'
                          : 'bg-blue-50 border-blue-200 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex justify-between items-center'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
                      isDark
                        ? 'text-gray-300 hover:text-purple-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <FaGithub className='text-xl' />
                    <span className='font-medium'>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      isDark
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <FaExternalLinkAlt />
                    <span className='font-medium'>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div
            className={`border rounded-2xl p-8 ${
              isDark
                ? 'bg-gray-800/30 border-gray-700'
                : 'bg-white border-gray-200 shadow-lg'
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-purple-400' : 'text-blue-600'
              }`}
            >
              More Projects Coming Soon!
            </h3>
            <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm constantly working on new and exciting projects. Stay tuned
              for updates!
            </p>
            <div className='flex justify-center'>
              <div className='flex space-x-2'>
                <div
                  className={`w-3 h-3 rounded-full animate-bounce ${
                    isDark ? 'bg-purple-500' : 'bg-blue-500'
                  }`}
                ></div>
                <div
                  className={`w-3 h-3 rounded-full animate-bounce ${
                    isDark ? 'bg-purple-500' : 'bg-blue-500'
                  }`}
                  style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                  className={`w-3 h-3 rounded-full animate-bounce ${
                    isDark ? 'bg-purple-500' : 'bg-blue-500'
                  }`}
                  style={{ animationDelay: '0.2s' }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects
