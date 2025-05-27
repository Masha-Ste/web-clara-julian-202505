import Header from '../components/Header'
import clara from '../assets/foto-clara.jpeg'

export default function Landing() {
  return (
    <section
      id='Landing'
      className='relative min-h-screen flex items-center justify-center text-white'
      style={{
        backgroundImage: `url(${clara})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <Header />
      <div className=' p-6 bg-black/60 text-center min-w-full z-10 mt-20 md:mt-0'>
        <h1 className='text-4xl md:text-4xl font-semibold leading-relaxed text-white font-cursive'>Jugando a producir, dirigir y escribir guiones</h1>
      </div>
      <div className='absolute inset-0 bg-[#0A004D]/40'></div>
    </section>
  )
}
