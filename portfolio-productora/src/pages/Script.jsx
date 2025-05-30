import Projects from '../components/Projects'
import projects from '../data/projects.json'

function Script() {
  const scriptProjects = projects.filter((project) => project.section === 'guion')

  return (
    <section id='Guion' className='bg-black/60 text-white p-5 min-w-full '>
      <div className='max-w-full mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-5 font-lime'>Guion</h2>

        <Projects projects={scriptProjects} />
      </div>
    </section>
  )
}

export default Script
