import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import HashLink from './HashLink'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'madgenmedia@gmail.com'
const contactInstagram = import.meta.env.VITE_CONTACT_INSTAGRAM || 'https://www.instagram.com/madgen.media/'
const contactLinkedIn = import.meta.env.VITE_CONTACT_LINKEDIN || ''
const contactWhatsapp = import.meta.env.VITE_CONTACT_WHATSAPP || 'https://wa.me/917904760181'
const waMessage = encodeURIComponent(
  "Hi Madgen! I came across your work and wanted to know more about your services."
)

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
        <HashLink to="#about" onClick={handleLinkClick}>About</HashLink>
        <HashLink to="#services" onClick={handleLinkClick}>Services</HashLink>
        <HashLink to="#why" onClick={handleLinkClick}>Why Us</HashLink>
        <HashLink to="#process" onClick={handleLinkClick}>Process</HashLink>
        <HashLink to="#work" onClick={handleLinkClick}>Work</HashLink>
      </nav>

      <div className="mobile-nav-contact">
        {contactWhatsapp ? (
          <a href={contactWhatsapp.includes('?') ? `${contactWhatsapp}&text=${waMessage}` : `${contactWhatsapp}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" className="mobile-nav-contact-link" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        ) : null}
        {contactEmail ? (
          <a href={`mailto:${contactEmail}`} className="mobile-nav-contact-link" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
        ) : null}
        {contactInstagram ? (
          <a href={contactInstagram} target="_blank" rel="noopener noreferrer" className="mobile-nav-contact-link" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        ) : null}
        {contactLinkedIn ? (
          <a href={contactLinkedIn} target="_blank" rel="noopener noreferrer" className="mobile-nav-contact-link" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        ) : null}
      </div>

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


        <HashLink to="#cta" className="btn btn-primary mobile-nav-cta" onClick={handleLinkClick}>
          Start a Project
        </HashLink>
      </div>
    </div>
  )
}

