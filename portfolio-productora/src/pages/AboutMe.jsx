function AboutMe() {
  return (
    <section id='Sobre mi' className='min-h-screen bg-black/60 text-white  py-10 flex items-center justify-center'>
      <div className='max-w-6xl w-full'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 mb-6 font-lime text-center'>Sobre mí</h2>
        <div className='flex flex-col md:flex-rowgap-8 items-start float-left mr-7 mb-7'>
          <div className='flex-shrink-0 w-full md:w-1/3 '>
            <img src='assets/foto-clara.jpeg' alt='Clara' className='w-auto max-w-90 h-auto shadow-lg object-cover' />
          </div>
        </div>

        <div className='w-full text-base md:text-lg leading-8 whitespace-pre-line '>
          <p>
            ¡Hola! Soy Clara, productora junior, guionista e intento de directora. Nací en Terrassa (Barcelona) y me apasiona contar historias y desarrollar proyectos cinematográficos que conecten con el público desde lo emocional y lo visual.
            {'\n\n'}
            Me gradué en Comunicación e Industrias Culturales por la Universidad de Barcelona y más adelante me especialicé en Producción Ejecutiva a través del posgrado en Film Business de la ESCAC. Actualmente sigo formándome en guion de series en la Escuela Showrunners de Barcelona.
            {'\n\n'}A lo largo del camino, también me he interesado por otras miradas narrativas: me formé en guion con perspectiva feminista con Carmen Ávalos del Pino (La Bonne) y en escritura de largometrajes con Laia Soler Aragonès (ESCAC).
            {'\n\n'}
            En 2021 desarrollé el largometraje <b>La Gàbia de Flors</b> como proyecto final de grado. El guion fue premiado en el Producers Meet Producers del Festival de Sitges y seleccionado para el Pitching Universidad-Industria del Clúster Audiovisual de Catalunya. Más adelante, fue adquirido por LaCima Producciones para su desarrollo.
            {'\n\n'}
            En 2024 me incorporé en LaCima como productora junior. He trabajado en <b>Tardes de Soledad</b>, dirigida por Albert Serra (Concha de Oro en el Festival de San Sebastián 2024), y <b>On eres quan hi eres</b>, de Jana Montllor, estrenada en el Festival de Málaga y premiada con el premio Impulsa x Antaviana en el Festival D’A.
            {'\n\n'}
            En 2025 he rodado <b>La Prèvia</b>, mi primer cortometraje como codirectora y guionista y <b>Masha</b>, mi segundo corto como directora y guionista, producido por Arlong Productions y distribuido por Feel Sales, gracias a la beca Terrassa CREA 2024.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
