function Contact() {
  return (
    <section id='Contacto' className='min-h-[30vh] bg-black/60 text-white px-6 py-10 flex items-center justify-center w-full '>
      <div className='max-w-3xl w-full text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 mb-8 font-lime'>Contacto</h2>

        <p className='text-lg text-gray-200 mb-6'>¿Quieres contactar conmigo? ¡Estoy a un clic de distancia!</p>

        <div className='space-y-4 text-lg text-gray-300 flex justify-around '>
          <a href='mailto:clarajulianzamora@gmail.com' className='text-yellow-400 underline hover:text-yellow-300'>
            <img src='/assets/gmail.png' alt='gmail' className='max-w-10' />
          </a>

          <a href='https://www.imdb.com/name/nm10628134/' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
            <img src='/assets/imdb.png' alt='imbd' className='max-w-10' />
          </a>

          <a href='https://es.linkedin.com/in/clara-julian-zamora-06ab86173' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
            <img src='/assets/linkedin.png' alt='imbd' className='max-w-10' />
          </a>

          <a href='https://instagram.com/imclaraju' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
            <img src='/assets/instagram.png' alt='imbd' className='max-w-10' />
          </a>

          <a href='https://twitter.com/imclaraju' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
            <img src='/assets/logotipos.png' alt='imbd' className='max-w-10' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
