import React from 'react'
import { ArrowUpRight } from 'lucide-react';



function Header() {
  return (
    <div className='flex justify-between items-center '>
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