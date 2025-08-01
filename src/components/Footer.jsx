import { useTheme } from '../contexts/ThemeContext'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const { isDark } = useTheme()

  return (
    <footer
      className={`py-8 border-t ${
        isDark
          ? 'bg-gray-950 border-gray-800 text-gray-400'
          : 'bg-white border-gray-200 text-gray-600'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <p className='flex items-center justify-center gap-2 text-sm'>
          Made with{' '}
          <FaHeart
            className={`transition-colors duration-300 ${
              isDark ? 'text-purple-400' : 'text-red-500'
            }`}
          />{' '}
          by Victor Maoya • © 2025
        </p>
      </div>
    </footer>
  )
}

export default Footer
