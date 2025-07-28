import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Contact() {
  return (
    <section id='contact' className='bg-gray-950 text-white py-20 px-8'>
      <motion.div
        className='max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Let's Work Together
        </h2>
        <p className='text-gray-400 text-center mb-12'>
          Got a project in mind? I’d love to hear about it.
        </p>

        <form className='space-y-6'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-300'>
              Name
            </label>
            <input
              type='text'
              name='name'
              className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Your name'
              required
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-300'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='you@example.com'
              required
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-300'>
              Message
            </label>
            <textarea
              name='message'
              rows='5'
              className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Tell me about your project...'
              required
            ></textarea>
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-colors duration-300'
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
      <div className='mt-12 text-center'>
        <p className='text-gray-400 mb-4'>Or find me on:</p>
        <div className='flex justify-center space-x-6 text-2xl text-gray-400'>
          <a
            href='https://github.com/victormaoya'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-purple-400 transition'
          >
            <FaGithub />
          </a>
          <a
            href='https://x.com/victormaoya'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-purple-400 transition'
          >
            <FaXTwitter />
          </a>

          <a
            href='https://www.linkedin.com/in/victormaoya'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-purple-400 transition'
          >
            <FaLinkedin />
          </a>
          <a
            href='mailto:victormaoya@gmail.com'
            className='hover:text-purple-400 transition'
          >
            <FaEnvelope />
          </a>
          <a
            href='https://wa.me/254725522488'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-purple-400 transition'
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
