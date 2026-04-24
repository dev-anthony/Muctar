import React from 'react'
import { Code2, Mail, Share2, MessageCircle, Users, ArrowUpRight } from 'lucide-react'

function Footer() {
  const socialLinks = [
    { icon: Code2, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Share2, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Users, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className='mt-20 text-left'>
      <h1 className='font-serif italic text-slate-900 text-2xl wavy-underline'>Connect</h1>
      
      <div className='mt-8 font-ptserif text-slate-900 text-[18px]'>
        <div className='flex items-center gap-2'>
          <span>You can contact me at</span>
          <a
            href='#'
            className='inline-flex items-center gap-2 px-4 py-2 border border-slate-900 rounded-3xl hover:bg-slate-50 transition-colors'
          >
            <span>here</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className='mt-8 flex gap-6'>
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className='text-slate-900 hover:text-slate-600 transition-colors'
            >
              <Icon size={24} />
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
