import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Header() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`flex justify-between items-center transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
        <div className=' rounded-full w-12 h-12 overflow-hidden'>
            <img src="/Savage.jpg" alt="" />
        </div>

        <a href="" className='text-[12px] text-slate-900 flex items-center justify-between py-1 px-4 rounded-4xl border border-gray-800 font-ptserif  '>
            Available for work
            <ArrowUpRight  className=' w-4'/>
        </a>

    </div>
  )
}

export default Header