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
      return (
        <div className='min-h-screen bg-gray-950 text-white flex items-center justify-center px-8'>
          <div className='text-center max-w-md mx-auto'>
            <FaExclamationTriangle className='text-6xl text-red-500 mx-auto mb-6' />
            <h1 className='text-3xl font-bold mb-4'>
              Oops! Something went wrong
            </h1>
            <p className='text-gray-400 mb-8'>
              We encountered an unexpected error. Please try refreshing the page
              or go back to the homepage.
            </p>
            <div className='space-y-4'>
              <button
                onClick={() => window.location.reload()}
                className='bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 mr-4'
              >
                Refresh Page
              </button>
              <Link
                to='/'
                className='inline-flex items-center gap-2 border border-purple-600 hover:bg-purple-800 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105'
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
