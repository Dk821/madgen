import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const handleLinkClick = () => onClose()

  return (
    <div
      ref={panelRef}
      className={`mobile-nav-dropdown ${open ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <nav className="mobile-nav-links">
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#services" onClick={handleLinkClick}>Services</a>
        <a href="#why" onClick={handleLinkClick}>Why Us</a>
        <a href="#process" onClick={handleLinkClick}>Process</a>
        <a href="#work" onClick={handleLinkClick}>Work</a>
      </nav>

      <div className="mobile-nav-actions">
        <button
          className="mobile-nav-theme"
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={toggleTheme}
        >
          <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
          </svg>
          <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 12.6A9 9 0 1 1 11.4 3a7 7 0 0 0 9.6 9.6z" />
          </svg>
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <a href="#cta" className="btn btn-primary mobile-nav-cta" onClick={handleLinkClick}>
          Start a Project
        </a>
      </div>
    </div>
  )
}
