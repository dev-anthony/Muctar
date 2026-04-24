import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`w-full text-left mt-12 transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
        <h2 className='font-serif italic text-slate-900 text-2xl wavy-underline'>Muctar Muhammad</h2>
        <p className='font-ptserif text-slate-900 text-[18px] leading-relaxed tracking-wider mt-3'>Software engineer</p>
    </div>
  )
}

export default Hero