import { Component } from 'react'
import { FaExclamationTriangle, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Check if dark mode is active from document class
      const isDark = document.documentElement.classList.contains('dark')

      return (
        <div
          className={`min-h-screen flex items-center justify-center px-8 ${
            isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
          }`}
        >
          <div className='text-center max-w-md mx-auto'>
            <FaExclamationTriangle
              className={`text-6xl mx-auto mb-6 ${
                isDark ? 'text-red-500' : 'text-red-600'
              }`}
            />
            <h1 className='text-3xl font-bold mb-4'>
              Oops! Something went wrong
            </h1>
            <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We encountered an unexpected error. Please try refreshing the page
              or go back to the homepage.
            </p>
            <div className='space-y-4'>
              <button
                onClick={() => window.location.reload()}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 mr-4 ${
                  isDark
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Refresh Page
              </button>
              <Link
                to='/'
                className={`inline-flex items-center gap-2 border px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'border-purple-600 text-purple-300 hover:bg-purple-800'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <FaHome />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
