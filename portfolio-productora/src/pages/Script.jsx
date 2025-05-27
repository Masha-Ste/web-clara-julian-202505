import Projects from '../components/Projects'
import projects from '../data/projects.json'

function Script() {
  const scriptProjects = projects.filter((project) => project.section === 'guion')

  return (
    <section id='Guion' className='bg-black text-white px-6 py-16 min-w-full'>
      <div className='max-w-5xl mx-auto space-y-12'>
        <h2 className='text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-10'>Guion</h2>

        <Projects projects={scriptProjects} />
      </div>
    </section>
  )
}

export default Script
