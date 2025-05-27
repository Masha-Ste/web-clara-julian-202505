import clara from '../assets/foto-clara.jpeg'

function AboutMe() {
  return (
    <section id='AboutMe' className='min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center'>
      <div className='max-w-6xl w-full flex flex-col  gap-10 items-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 mb-6 font-lime'>Sobre mí</h2>
        <div className='flex-shrink-0 w-full md:w-1/2'>
          <img src={clara} alt='Clara' className='w-full h-auto rounded-2xl shadow-lg object-cover' />
        </div>

        {/* Texto */}
        <div className='w-full md:w-1/2 text-gray-200 text-left'>
          <p className='text-lg leading-8 font-light whitespace-pre-line'>
            ¡Hola! Soy Clara, productora junior, guionista e intento de directora. Nací en Terrassa (Barcelona) y me apasiona contar historias y desarrollar proyectos cinematográficos que conecten con el público desde lo emocional y lo visual.
            {'\n\n'}
            Me gradué en Comunicación e Industrias Culturales por la Universidad de Barcelona y más adelante me especialicé en Producción Ejecutiva a través del posgrado en Film Business de la ESCAC. Actualmente sigo formándome en guion de series en la Escuela Showrunners de Barcelona.
            {'\n\n'}A lo largo del camino, también me he interesado por otras miradas narrativas: me formé en guion con perspectiva feminista con Carmen Ávalos del Pino (La Bonne) y en escritura de largometrajes con Laia Soler Aragonès (ESCAC).
            {'\n\n'}
            En 2021 desarrollé el largometraje *La Gàbia de Flors* como proyecto final de grado. El guion fue premiado en el Producers Meet Producers del Festival de Sitges y seleccionado para el Pitching Universidad-Industria del Clúster Audiovisual de Catalunya. Más adelante, fue adquirido por LaCima Producciones para su desarrollo.
            {'\n\n'}
            En 2024 me incorporé en LaCima como productora junior. He trabajado en *Tardes de Soledad*, dirigida por Albert Serra (Concha de Oro en el Festival de San Sebastián 2024), y *On eres quan hi eres*, de Jana Montllor, estrenada en el Festival de Málaga y premiada con el premio Impulsa x Antaviana en el Festival D’A.
            {'\n\n'}
            En 2025 he rodado *La Prèvia*, mi primer cortometraje como codirectora y guionista y *Masha*, mi segundo corto como directora y guionista, producido por Arlong Productions y distribuido por Feel Sales, gracias a la beca Terrassa CREA 2024.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
