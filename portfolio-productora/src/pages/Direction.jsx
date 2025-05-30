import Projects from '../components/Projects'
import projects from '../data/projects.json'

function Direction() {
  const directionProjects = projects.filter((project) => project.section === 'direccion')

  return (
    <section id='Dirección' className='bg-black/60 text-white p-5 min-w-full '>
      <div className='max-w-full mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-5 font-lime'>Dirección</h2>

        <Projects projects={directionProjects} />
      </div>
    </section>
  )
}

export default Direction
