import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useForm, ValidationError } from '@formspree/react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Contact() {
  const [state, handleSubmit] = useForm('manbbzlb')
  const navigate = useNavigate()

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        navigate('/thank-you')
      }, 1000)
    }
  }, [state.succeeded, navigate])

  return (
    <div className='min-h-screen bg-gray-950 text-white py-20 px-8'>
      <motion.div
        className='max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
          Let's Work Together
        </h1>
        <p className='text-gray-400 text-center mb-12 text-lg'>
          Got a project in mind? I'd love to hear about it and bring your vision
          to life.
        </p>

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='text-center p-8 bg-green-600/10 border border-green-600/20 rounded-xl'
          >
            <h2 className='text-2xl font-bold text-green-400 mb-4'>
              Message Sent! 🎉
            </h2>
            <p className='text-gray-300'>
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </motion.div>
        ) : (
          <motion.form
            className='space-y-6'
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-300'
              >
                Name *
              </label>
              <input
                id='name'
                type='text'
                name='name'
                className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                placeholder='Your name'
                required
              />
              <ValidationError
                prefix='Name'
                field='name'
                errors={state.errors}
                className='text-red-400 text-sm mt-1'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-300'
              >
                Email *
              </label>
              <input
                id='email'
                type='email'
                name='email'
                className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                placeholder='you@example.com'
                required
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
                className='text-red-400 text-sm mt-1'
              />
            </div>

            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-gray-300'
              >
                Subject
              </label>
              <input
                id='subject'
                type='text'
                name='subject'
                className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                placeholder='Project inquiry, collaboration, etc.'
              />
              <ValidationError
                prefix='Subject'
                field='subject'
                errors={state.errors}
                className='text-red-400 text-sm mt-1'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-300'
              >
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                rows='6'
                className='w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-vertical'
                placeholder='Tell me about your project, timeline, budget, or any questions you have...'
                required
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
                className='text-red-400 text-sm mt-1'
              />
            </div>

            <div className='text-center'>
              <button
                type='submit'
                disabled={state.submitting}
                className='bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-950'
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        )}

        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className='text-gray-400 mb-6'>Or connect with me on:</p>
          <div className='flex justify-center space-x-6 text-2xl text-gray-400'>
            <a
              href='https://github.com/victormaoya'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-purple-400 transition-all duration-300 transform hover:scale-110'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
            <a
              href='https://x.com/victormaoya'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-purple-400 transition-all duration-300 transform hover:scale-110'
              aria-label='Twitter/X'
            >
              <FaXTwitter />
            </a>
            <a
              href='https://www.linkedin.com/in/victormaoya'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-purple-400 transition-all duration-300 transform hover:scale-110'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a
              href='mailto:victormaoya@gmail.com'
              className='hover:text-purple-400 transition-all duration-300 transform hover:scale-110'
              aria-label='Email'
            >
              <FaEnvelope />
            </a>
            <a
              href='https://wa.me/254725522488'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-purple-400 transition-all duration-300 transform hover:scale-110'
              aria-label='WhatsApp'
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
