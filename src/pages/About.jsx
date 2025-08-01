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
    <section id='about' className='bg-gray-900 py-20 px-8'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl font-bold mb-4'>About Me</h2>
          <p className='text-gray-400 leading-loose'>
            I'm a detail-obsessed web developer who combines aesthetics with
            functionality. I believe great websites don’t just work—they inspire.
            I specialize in building fast, modern, and responsive interfaces using
            cutting-edge tools and best practices.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-3 gap-6 text-center text-4xl text-purple-500'
          initial='hidden'
          whileInView='visible'
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
              whileHover={{ scale: 1.2, color: '#a855f7' }}
              className='transition-transform duration-300 cursor-pointer'
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
