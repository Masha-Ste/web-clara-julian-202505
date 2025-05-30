import Project from './Project'

function Projects({ projects }) {
  return (
    <section id='Projects' className=' text-white  min-w-screen'>
      <div className='relative overflow-x-auto  scrollbar-hidden'>
        <div className='flex gap-8 px-4 snap-x snap-mandatory w-fit'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                flex-shrink-0 snap-center transition-transform duration-500

              `}
              style={{ width: 'min(90vw, 400px)' }}
            >
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
