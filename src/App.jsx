import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import victorPic from './assets/victor.jpg'

function App() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <header className='p-6 flex justify-between items-center border-b border-gray-800'>
        <div className='flex items-center gap-3'>
          <img
            src={victorPic}
            alt='Victor Maoya'
            className='w-8 h-8 rounded-full object-cover border border-gray-400'
          />
          <span className='font-bold text-lg'>Victor Maoya</span>
        </div>

        <nav className='space-x-6'>
          <a href='#home' className='hover:text-purple-400'>
            Home
          </a>
          <a href='#projects' className='hover:text-purple-400'>
            Projects
          </a>
          <a href='#about' className='hover:text-purple-400'>
            About
          </a>
          <a href='#contact' className='hover:text-purple-400'>
            Contact
          </a>
        </nav>
      </header>

      <main className='p-8'>
        <section id='home' className='py-32 text-center'>
          <h2 className='text-4xl font-extrabold mb-4'>We Are the Elites</h2>
          <p className='text-lg text-gray-400 mb-8'>
            I build state-of-the-art websites with precision and aesthetic
            elegance.
          </p>
          <div className='space-x-4'>
            <a
              href='#projects'
              className='bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700'
            >
              See My Work
            </a>
            <a
              href='#contact'
              className='border border-purple-600 px-6 py-3 rounded-full hover:bg-purple-800'
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
