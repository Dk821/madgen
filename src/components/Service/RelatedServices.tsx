import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { getRelatedServices, type ServiceData } from '../../utils/getServiceBySlug'

const serviceIcons: Record<string, React.ReactNode[]> = {
  'ai-automation': [
    <path key="a" d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />,
    <circle key="b" cx="12" cy="12" r="3.2" />,
  ],
  'website-development': [
    <rect key="a" x="3" y="4" width="18" height="14" rx="2" />,
    <path key="b" d="M3 9h18M8 21h8" />,
  ],
  'app-development': [
    <rect key="a" x="6" y="2" width="12" height="20" rx="2.5" />,
    <path key="b" d="M11 18h2" />,
  ],
  'digital-marketing': [
    <path key="a" d="M3 11l18-7-7 18-3-8-8-3z" />,
  ],
  'branding': [
    <path key="a" d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />,
  ],
}

const serviceBgs: Record<string, { dark: string; light: string }> = {
  'ai-automation': { dark: '/service-image/dark/AI-Automation.webp', light: '/service-image/light/AI-Automation.webp' },
  'website-development': { dark: '/service-image/dark/web-development.webp', light: '/service-image/light/web-development.webp' },
  'app-development': { dark: '/service-image/dark/App-Development.webp', light: '/service-image/light/App-Development.webp' },
  'digital-marketing': { dark: '/service-image/dark/Digital-Marketing.webp', light: '/service-image/light/Digital-Marketing.webp' },
  'branding': { dark: '/service-image/dark/Branding.webp', light: '/service-image/light/Branding.webp' },
}

const serviceTags: Record<string, string[]> = {
  'ai-automation': ['Workflow design', 'AI agents', 'Integrations'],
  'website-development': ['Marketing sites', 'E-commerce', 'CMS builds'],
  'app-development': ['Mobile apps', 'Cross-platform', 'MVP builds'],
  'digital-marketing': ['Paid media', 'SEO', 'Email & CRM'],
  'branding': ['Identity', 'Brand systems', 'Design language'],
}

interface RelatedServicesProps {
  currentSlug: string
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related: ServiceData[] = getRelatedServices(currentSlug, 3)
  const { theme } = useTheme()
  const navigate = useNavigate()

  const handleCardClick = useCallback((e: React.MouseEvent, slug: string) => {
    e.preventDefault()
    // Navigate and force a full page scroll-to-top + re-render
    navigate(`/services/${slug}`)
    window.scrollTo(0, 0)
  }, [navigate])

  return (
    <section className="sec-pad" id="sv-related">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow reveal">// RELATED SERVICES</div>
          <h2 className="reveal">Explore more of what we do.</h2>
          <p className="reveal">Other capabilities that pair well with this service.</p>
        </div>
        <div className="svc-grid">
          {related.map((svc) => {
            const bg = serviceBgs[svc.slug]
            const bgSrc = bg ? (theme === 'light' ? bg.light : bg.dark) : undefined
            const tags = serviceTags[svc.slug] || []

            return (
              <a
                href={`/services/${svc.slug}`}
                className="svc-card reveal"
                key={svc.id}
                onClick={(e) => handleCardClick(e, svc.slug)}
              >
                {bgSrc && (
                  <img className="svc-card-bg" src={bgSrc} alt={svc.title} loading="lazy" />
                )}
                <div className="svc-card-top">
                  <span className="svc-index">{String(svc.id).padStart(2, '0')}</span>
                  <div className="svc-view-more">
                    <span className="svc-view-more-text">View More</span>
                    <div className="svc-view-more-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="svc-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {serviceIcons[svc.slug]?.map((node) => node)}
                  </svg>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.shortDescription}</p>
                {tags.length > 0 && (
                  <div className="svc-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
