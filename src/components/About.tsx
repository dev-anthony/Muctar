import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`flex-col items-end justify-between mt-4 text-[14px] font-ptserif text-slate-900 gap- transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
        <p className="leading-relaxed">
            Hi there, I’m Muctar also known as Savage. I’m a fullstack software engineer with over 6+ years of experience. I build both web, and mobile applications with focus on the achitecture of how every systems works, and are developed for better user and developer experience.
        </p>
       <p className="leading-relaxed mt-4">
        
            I'm a versatile Fullstack engineer with expertise in React, Next.js, and the modern web ecosystem. With experience across databases, APIs, and cloud platforms. Building  scalable and maintainable soulutions.
    </p>
    <p className="leading-relaxed mt-4 font-semibold">
        Bring in your works let's change the world together!
    </p>
    </div>
  )
}

export default About