import React, { useEffect, useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of your first project',
    tech: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of your second project',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of your third project',
    tech: ['Vue', 'Express', 'PostgreSQL']
  }
]

interface ProjectItemProps {
  project: Project
}

function ProjectItem({ project }: ProjectItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`p-4 border border-slate-200 rounded-lg transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className='font-serif italic text-slate-900 text-lg'>{project.title}</h3>
      <p className='text-slate-600 text-sm mt-2'>{project.description}</p>
      <div className='flex gap-2 mt-3 flex-wrap'>
        {project.tech.map((tech) => (
          <span key={tech} className='text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded'>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function Works() {
  return (
    <div className='flex-col mt-20 text-left'>
        <h1 className='font-serif italic text-slate-900 text-2xl wavy-underline'>Check out some of my works</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
    </div>
  )
}

export default Works