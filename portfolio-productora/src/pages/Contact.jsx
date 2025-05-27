function Contact() {
  return (
    <section id='Contact' className='min-h-[60vh] bg-black text-white px-6 py-16 flex items-center justify-center w-full '>
      <div className='max-w-3xl w-full text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 mb-8 font-lime'>Contacto</h2>

        <p className='text-lg text-gray-200 mb-6'>¿Quieres contactar conmigo? ¡Estoy a un clic de distancia!</p>

        <div className='space-y-4 text-lg text-gray-300'>
          <p>
            <span className='font-semibold text-white'>Email:</span>{' '}
            <a href='mailto:clarajulianzamora@gmail.com' className='text-yellow-400 underline hover:text-yellow-300'>
              clarajulianzamora@gmail.com
            </a>
          </p>

          <p>
            <span className='font-semibold text-white'>IMDb:</span>{' '}
            <a href='https://www.imdb.com/name/nm10628134/' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
              Clara Julián Zamora
            </a>
          </p>

          <p>
            <span className='font-semibold text-white'>LinkedIn:</span>{' '}
            <a href='https://es.linkedin.com/in/clara-julian-zamora-06ab86173' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
              Clara Julián en LinkedIn
            </a>
          </p>

          <p>
            <span className='font-semibold text-white'>Instagram:</span>{' '}
            <a href='https://instagram.com/imclaraju' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
              @imclaraju
            </a>
          </p>

          <p>
            <span className='font-semibold text-white'>Twitter:</span>{' '}
            <a href='https://twitter.com/imclaraju' target='_blank' rel='noopener noreferrer' className='text-yellow-400 underline hover:text-yellow-300'>
              @imclaraju
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
