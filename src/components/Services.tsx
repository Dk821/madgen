import { useTheme } from '../context/ThemeContext'

const services = [
  {
    index: '01',
    name: 'AI Automation',
    desc: "Custom workflows and AI agents that take repetitive work off your team's plate — quietly, in the background, every day.",
    tags: ['Workflow design', 'AI agents', 'Integrations'],
    icon: [<path key="a" d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />, <circle key="b" cx="12" cy="12" r="3.2" />],
    bg: '/service-image/dark/AI-Automation.webp',
    bgLight: '/service-image/light/AI-Automation.webp',
  },
  {
    index: '02',
    name: 'Website Development',
    desc: 'Fast, accessible, conversion-minded sites — built on modern stacks and designed to be edited without calling us every time.',
    tags: ['Marketing sites', 'E-commerce', 'CMS builds'],
    icon: [<rect key="a" x="3" y="4" width="18" height="14" rx="2" />, <path key="b" d="M3 9h18M8 21h8" />],
    bg: '/service-image/dark/web-development.webp',
    bgLight: '/service-image/light/web-development.webp',
  },
  {
    index: '03',
    name: 'App Development',
    desc: 'iOS, Android and cross-platform products — from first prototype through to something real users open every day.',
    tags: ['Mobile apps', 'Cross-platform', 'MVP builds'],
    icon: [<rect key="a" x="6" y="2" width="12" height="20" rx="2.5" />, <path key="b" d="M11 18h2" />],
    bg: '/service-image/dark/App-Development.webp',
    bgLight: '/service-image/light/App-Development.webp',
  },
  {
    index: '04',
    name: 'Digital Marketing',
    desc: 'Paid, organic and lifecycle campaigns tied to real revenue targets — not vanity metrics on a monthly slide deck.',
    tags: ['Paid media', 'SEO', 'Email & CRM'],
    icon: [<path key="a" d="M3 11l18-7-7 18-3-8-8-3z" />],
    bg: '/service-image/dark/Digital-Marketing.webp',
    bgLight: '/service-image/light/Digital-Marketing.webp',
  },
  {
    index: '05',
    name: 'Branding',
    desc: 'Identity systems — name, mark, voice and guidelines — built to hold up across a product, not just a pitch deck.',
    tags: ['Identity', 'Brand systems', 'Design language'],
    icon: [<path key="a" d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />],
    bg: '/service-image/dark/Branding.webp',
    bgLight: '/service-image/light/Branding.webp',
  },
]

export default function Services() {
  const { theme } = useTheme()
  return (
    <section className="sec-pad" id="services">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow reveal">// OUR SERVICES</div>
          <h2 className="reveal">Five disciplines. One team.</h2>
          <p className="reveal">Everything a growing business needs to look sharp, run smart, and get found — built to work together, not stitched together after the fact.</p>
        </div>
        <div className="svc-grid">
          {services.map((svc) => (
            <div className="svc-card reveal" key={svc.index} style={{ '--card-bg': `url(${theme === 'light' ? svc.bgLight : svc.bg})` } as React.CSSProperties}>
              <span className="svc-index">{svc.index}</span>
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {svc.icon.map((node: React.ReactNode) => node)}
                </svg>
              </div>
              <h3>{svc.name}</h3>
              <p>{svc.desc}</p>
              <div className="svc-tags">
                {svc.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="svc-card reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(160deg,var(--surface-2),var(--bg-2))' }}>
            <h3 style={{ marginBottom: 12 }}>Not sure what you need?</h3>
            <p style={{ marginBottom: 20 }}>Tell us the problem, not the service — we&apos;ll map the right mix in a 20-minute call.</p>
            <a href="#cta" className="btn btn-ghost" style={{ width: 'fit-content' }}>Talk it through →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
