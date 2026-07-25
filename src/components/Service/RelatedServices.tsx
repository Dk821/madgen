import { Link } from 'react-router-dom'
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

interface RelatedServicesProps {
  currentSlug: string
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related: ServiceData[] = getRelatedServices(currentSlug, 3)

  return (
    <section className="pad" id="sv-related">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">// Related Services</div>
            <h2 className="reveal">Explore more of what we do.</h2>
          </div>
        </div>
        <div className="svc-grid">
          {related.map((svc) => (
            <Link to={`/services/${svc.slug}`} className="svc-card reveal" key={svc.id}>
              <span className="svc-index">{String(svc.id).padStart(2, '0')}</span>
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {serviceIcons[svc.slug]?.map((node) => node)}
                </svg>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
