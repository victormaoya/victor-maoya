import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub
} from 'react-icons/fa'
import {
  SiTailwindcss, SiJavascript, SiMongodb, SiVite, SiExpress
} from 'react-icons/si'

const techIcons = [
  { icon: <FaReact title='React' />, key: 'react' },
  { icon: <SiVite title='Vite' />, key: 'vite' },
  { icon: <SiTailwindcss title='TailwindCSS' />, key: 'tailwind' },
  { icon: <SiJavascript title='JavaScript' />, key: 'js' },
  { icon: <FaNodeJs title='Node.js' />, key: 'node' },
  { icon: <SiExpress title='Express.js' />, key: 'express' },
  { icon: <SiMongodb title='MongoDB' />, key: 'mongo' },
  { icon: <FaGitAlt title='Git' />, key: 'git' },
  { icon: <FaGithub title='GitHub' />, key: 'github' },
  { icon: <FaHtml5 title='HTML5' />, key: 'html5' },
  { icon: <FaCss3Alt title='CSS3' />, key: 'css3' },
]

function About() {
  return (
    <div className='min-h-screen bg-gray-950 text-white py-20 px-8'>
      <motion.div 
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className='text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='order-2 lg:order-1'
          >
            <h2 className='text-2xl md:text-3xl font-bold mb-6'>Crafting Digital Experiences</h2>
            <div className='space-y-4 text-gray-300 leading-relaxed'>
              <p>
                I'm a passionate full-stack developer who believes great websites don't just work—they inspire. 
                With a keen eye for detail and a love for clean, efficient code, I specialize in creating 
                digital experiences that are both beautiful and functional.
              </p>
              <p>
                My journey in web development started with curiosity and evolved into a passion for 
                solving complex problems through elegant solutions. I enjoy working with modern 
                technologies and staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            className='order-1 lg:order-2'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl transform rotate-3'></div>
              <div className='bg-gray-800 p-8 rounded-2xl border border-gray-700 relative'>
                <h3 className='text-xl font-bold mb-4 text-purple-400'>What I Bring</h3>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                    3+ years of development experience
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                    Strong problem-solving skills
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                    Passion for clean, maintainable code
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                    Eye for design and user experience
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                    Continuous learning mindset
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className='text-3xl font-bold mb-10 text-center'>Technologies I Work With</h2>
          <motion.div
            className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center text-4xl text-purple-500'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {techIcons.map(({ icon, key }) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.2, 
                  color: '#a855f7',
                  transition: { duration: 0.2 }
                }}
                className='p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group'
              >
                <div className='group-hover:animate-pulse'>
                  {icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
