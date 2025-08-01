import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <Navbar />
      <div className='pt-20'> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/thank-you' element={<ThankYou />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
