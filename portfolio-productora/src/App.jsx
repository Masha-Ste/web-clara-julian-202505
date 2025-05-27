import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Production from './pages/Production'
import Direction from './pages/Direction'
import Script from './pages/Script'

function App() {
  return (
    <main className='font-sans scroll-smooth'>
      <Landing />

      <section id='Sobre Mi' className='pb-2 bg-gray-100 text-black flex items-center justify-center'>
        <AboutMe />
      </section>

      <section id='Producción' className='pb-2 bg-white text-black flex flex-col items-center justify-center'>
        <Production />
      </section>

      <section id='Dirección' className='pb-2 bg-gray-100 text-black flex items-center justify-center'>
        <Direction />
      </section>

      <section id='Guion' className='pb-2 bg-white text-black flex items-center justify-center'>
        <Script />
      </section>

      <section id='Contacto' className=' bg-white text-black flex items-center justify-center'>
        <Contact />
      </section>
    </main>
  )
}

export default App
