import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface HashLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string          // e.g. "#about" or "/#about"
  children: React.ReactNode
}

/**
 * A link component that handles hash-based navigation correctly across pages.
 * - On the home page: scrolls smoothly to the target section.
 * - On other pages: navigates to "/" first, then scrolls to the section.
 */
export default function HashLink({ to, children, onClick, ...rest }: HashLinkProps) {
  const location = useLocation()
  const navigate = useNavigate()

  // Normalise: "/#about", "#about", "/" all become hash = "about" or ""
  const hash = to.replace(/^\/?#/, '').replace(/^\/$/, '')
  const isHome = location.pathname === '/'

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      onClick?.(e)

      const scrollToTarget = () => {
        if (hash === 'hero' || hash === '' || hash === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const el = document.getElementById(hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }

      if (isHome) {
        scrollToTarget()
      } else {
        navigate('/' + (hash ? `#${hash}` : ''))
        requestAnimationFrame(() => {
          setTimeout(scrollToTarget, 100)
        })
      }
    },
    [isHome, hash, navigate, onClick],
  )

  return (
    <a href={hash ? `/#${hash}` : '/'} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
