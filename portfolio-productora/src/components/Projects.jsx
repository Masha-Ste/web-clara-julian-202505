import Project from './Project'
import { useEffect, useState } from 'react'

function Projects({ projects }) {
  return (
    <section id='Projects' className='bg-black text-white px-6 py-16 min-w-full'>
      <div className='max-w-5xl mx-auto'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
