import Projects from '../components/Projects'
import projects from '../data/projects.json'

function Production() {
  const produccionProjects = projects.filter((project) => project.section === 'produccion')

  return (
    <section id='Producción' className='bg-black/60 text-white py-10 min-w-full '>
      <div className='max-w-full px-5'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-5 font-lime'>Producción</h2>

        <Projects projects={produccionProjects} />
      </div>
    </section>
  )
}

export default Production
