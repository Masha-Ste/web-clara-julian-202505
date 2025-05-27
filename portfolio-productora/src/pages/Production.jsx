import Projects from '../components/Projects'
import projects from '../data/projects.json'

function Production() {
  // Filtramos solo los de sección "produccion"
  const produccionProjects = projects.filter((project) => project.section === 'produccion')

  return (
    <section id='Producción' className='bg-black text-white px-6 py-16 min-w-full'>
      <div className='max-w-5xl mx-auto space-y-12'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-10'>Producción</h2>

        <Projects projects={produccionProjects} />
      </div>
    </section>
  )
}

export default Production
