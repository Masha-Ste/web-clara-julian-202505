import { useState } from 'react'
import Project from './Project'

function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentProject = projects[currentIndex]

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id='Projects' className='bg-black text-white px-6 py-16s min-h-screen flex flex-col items-center justify-center'>
      {/* <div className='max-w-5xl mx-auto'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div> */}

      {/* Project card */}
      <div className='w-full flex-shrink'>
        <Project project={currentProject} />
      </div>

      {/* Navigation buttons */}
      <div className='mt-8 flex justify-center gap-8'>
        <button onClick={goPrev} className='text-yellow-400 hover:text-yellow-300 text-2xl'>
          ⬅︎
        </button>
        <button onClick={goNext} className='text-yellow-400 hover:text-yellow-300 text-2xl'>
          ➡︎
        </button>
      </div>
    </section>
  )
}

export default Projects
