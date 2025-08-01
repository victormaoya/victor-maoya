import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-950'>
      <motion.div
        className='flex space-x-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className='w-4 h-4 bg-purple-500 rounded-full'
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default LoadingSpinner
