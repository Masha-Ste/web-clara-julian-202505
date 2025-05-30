export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className='fixed top-0 w-full bg-black/90  text-white z-50 shadow-md'>
      <nav className='flex justify-center gap-6 py-4 text-sm md:text-2xl font-lime'>
        {['Sobre mí', 'Producción', 'Dirección', 'Guion', 'Contacto'].map((section) => (
          <button key={section} onClick={() => scrollTo(section)} className='hover:text-yellow-400 transition'>
            {section}
          </button>
        ))}
      </nav>
    </header>
  )
}
