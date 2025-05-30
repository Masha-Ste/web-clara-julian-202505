import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Production from './pages/Production'
import Direction from './pages/Direction'
import Script from './pages/Script'

function App() {
  return (
    <main className='relative scroll-smooth min-h-screen'>
      <div
        className='fixed inset-0 -z-10'
        style={{
          backgroundImage: `url('/assets/night.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className='fixed inset-0 -z-10 bg black/40'></div>

      <Landing />

      <AboutMe />

      <Production />

      <Direction />

      <Script />

      <Contact />
    </main>
  )
}

export default App
