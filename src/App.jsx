import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { isDark } = useTheme()

  return (
    <ErrorBoundary>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <Navbar />
        <main className='flex-grow pt-20'>
          {' '}
          {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/thank-you' element={<ThankYou />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
