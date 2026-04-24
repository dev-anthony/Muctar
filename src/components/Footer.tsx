import { Mail, ArrowUpRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function GithubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.35 7-7 7-11.55A4.34 4.34 0 0023 3z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.668 14.126c-.387-.194-2.29-1.13-2.646-1.256-.357-.129-.616-.193-.874.193-.258.387-.998 1.255-1.223 1.512-.225.258-.45.29-.837.097-.387-.194-1.633-.602-3.112-1.92-1.15-1.025-1.927-2.29-2.152-2.677-.226-.387-.024-.596.169-.789.174-.173.387-.452.581-.677.193-.226.258-.387.387-.645.129-.258.065-.483-.032-.677-.097-.194-.874-2.096-1.194-2.867-.314-.753-.634-.652-.874-.664-.226-.01-.483 0-.741 0-.258 0-.677.097-1.032.483-.355.387-1.354 1.322-1.354 3.226 0 1.903 1.387 3.74 1.581 4.008.194.258 2.73 4.163 6.612 5.837.923.398 1.643.636 2.204.815.927.296 1.77.254 2.434.153.742-.111 2.29-.936 2.612-1.838.322-.902.322-1.677.225-1.838-.097-.162-.355-.258-.741-.452z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.615C6.292 22.615 1.385 17.708 1.385 12 1.385 6.292 6.292 1.385 12 1.385 17.708 1.385 22.615 6.292 22.615 12c0 5.708-4.907 10.615-10.615 10.615z"/>
    </svg>
  )
}

function Footer() {
  const { ref, isVisible } = useScrollAnimation()

  const socialLinks = [
    { icon: GithubIcon, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email', isLucide: true },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: WhatsappIcon, href: '#', label: 'WhatsApp' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer
      ref={ref}
      className={`mt-20 text-left transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <h1 className='font-serif italic text-slate-900 text-2xl wavy-underline'>Connect</h1>
      
      <div className='mt-4 font-ptserif text-slate-900 text-[18px]'>
        <div className='flex items-center gap-2'>
          <span>You can contact me at</span>
          <a
            href='#'
            className='inline-flex items-center gap-1 px-2 py-1 border border-slate-900 rounded-xl hover:bg-slate-50 transition-colors'
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
              {link.isLucide ? <Icon size={24} /> : <Icon />}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
