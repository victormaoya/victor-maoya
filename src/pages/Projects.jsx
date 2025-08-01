import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

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
  // You can add more projects here later
]

function Projects() {
  return (
    <div className='min-h-screen bg-gray-950 text-white py-20 px-8'>
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
          className='text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto'
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
              className='bg-gray-800/50 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 group'
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
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </div>

              <div className='p-8'>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='text-gray-400 mb-6 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-8'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm px-3 py-1 rounded-full backdrop-blur-sm'
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
                    className='flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-105'
                  >
                    <FaGithub className='text-xl' />
                    <span className='font-medium'>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105'
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
          <div className='bg-gray-800/30 border border-gray-700 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold mb-4 text-purple-400'>
              More Projects Coming Soon!
            </h3>
            <p className='text-gray-400 mb-6'>
              I'm constantly working on new and exciting projects. Stay tuned
              for updates!
            </p>
            <div className='flex justify-center'>
              <div className='flex space-x-2'>
                <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce'></div>
                <div
                  className='w-3 h-3 bg-purple-500 rounded-full animate-bounce'
                  style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                  className='w-3 h-3 bg-purple-500 rounded-full animate-bounce'
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
