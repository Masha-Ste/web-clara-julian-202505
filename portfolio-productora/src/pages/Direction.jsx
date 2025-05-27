import Projects from '../components/Projects'
import projects from '../data/projects.json'

function Direction() {
  // Filtramos solo los de sección "produccion"
  const directionProjects = projects.filter((project) => project.section === 'direccion')

  return (
    <section id='Dirección' className='bg-black text-white px-6 py-16 min-w-full'>
      <div className='max-w-5xl mx-auto space-y-12'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-10'>Dirección</h2>

        <Projects projects={directionProjects} />
      </div>
    </section>
  )
}

export default Direction
