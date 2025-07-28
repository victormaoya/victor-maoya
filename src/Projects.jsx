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
    image: '/images/notes-app-a.png'
  },
  // You can add more projects here later
]

function Projects() {
  return (
    <section id='projects' className='bg-gray-900 text-white py-20 px-8'>
      <motion.div
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-3xl font-bold mb-10 text-center'>Featured Projects</h2>
        <div className='grid md:grid-cols-2 gap-10'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col'
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className='w-full h-64 object-cover'
              />
              <div className='p-6 flex flex-col justify-between flex-1'>
                <div>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-400 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className='bg-purple-700 text-sm px-3 py-1 rounded-full text-white'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex justify-between items-center mt-auto'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400'
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400'
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
