import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Sidebar from './Sidebar'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const el = headerRef.current
      if (!el) return
      el.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={headerRef} id="siteHeader">
      <div className="navbar">
        <div className="nav-shell">
          <a href="#hero" className="logo">
            <img src="/madgen-logo.svg" alt="MADGEN" className="logo-img" />
          </a>
          <nav className="links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              className="theme-toggle"
              id="themeToggle"
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={toggleTheme}
            >
              <svg className="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
              </svg>
              <svg className="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 12.6A9 9 0 1 1 11.4 3a7 7 0 0 0 9.6 9.6z" />
              </svg>
            </button>
            <a href="#cta" className="btn btn-primary">Start a Project</a>
            <button
              className={`hamburger ${sidebarOpen ? 'open' : ''}`}
              type="button"
              aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(v => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  )
}
