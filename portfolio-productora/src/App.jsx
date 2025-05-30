import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Production from './pages/Production'
import Direction from './pages/Direction'
import Script from './pages/Script'

function App() {
  return (
    <main className='scroll-smooth'>
      <div
        className='absolute inset-0 bg-black/40 min-w-full'
        style={{
          backgroundImage: `url('/assets/night.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Landing />

        <AboutMe />

        <Production />

        <Direction />

        <Script />

        <Contact />
      </div>
    </main>
  )
}

export default App
