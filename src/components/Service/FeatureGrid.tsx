import { useState, useEffect, useRef } from 'react'
import { type ServiceFeature } from '../../utils/getServiceBySlug'

const featureIcons: Record<string, string> = {
  'Custom Website Development': 'grid',
  'Web Application Development': 'spark',
  'E-commerce Development': 'cart',
  'UI/UX Design': 'pen',
  'CMS Development': 'globe',
  'Maintenance & Support': 'gear',
  'Native iOS Development': 'smartphone',
  'Native Android Development': 'smartphone',
  'Cross-Platform Development': 'grid',
  'MVP Development': 'spark',
  'Search Engine Optimization': 'trending',
  'Paid Media': 'target',
  'Email & CRM Marketing': 'mail',
  'Brand Strategy': 'spark',
  'Visual Identity': 'pen',
  'Brand Guidelines': 'globe',
}

const svgIcons: Record<string, React.ReactNode> = {
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
  spark: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>,
  cart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h4l2.6 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>,
  pen: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>,
  globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>,
  gear: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1 1.55V21a2 2 0 01-4 0v-.09a1.7 1.7 0 00-1-1.55 1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.55-1H3a2 2 0 010-4h.09a1.7 1.7 0 001.55-1 1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.34H9a1.7 1.7 0 001-1.55V3a2 2 0 014 0v.09a1.7 1.7 0 001 1.55 1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87V9a1.7 1.7 0 001.55 1H21a2 2 0 010 4h-.09a1.7 1.7 0 00-1.55 1z"/></svg>,
  smartphone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>,
  trending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
}

interface FeatureGridProps {
  features: ServiceFeature[]
  heading: string
  description: string
}

export default function FeatureGrid({ features, heading, description }: FeatureGridProps) {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeRef = useRef(0)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % features.length
      activeRef.current = next
      setFading(true)
      setTimeout(() => {
        setActive(next)
        setFading(false)
      }, 180)
    }, 3000)
  }

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [features.length])

  const handleClick = (i: number) => {
    if (i === active) return
    activeRef.current = i
    if (timerRef.current) clearInterval(timerRef.current)
    setFading(true)
    setTimeout(() => {
      setActive(i)
      setFading(false)
      startTimer()
    }, 180)
  }

  const current = features[active]

  return (
    <section className="pad" id="sv-services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">// What We Do</div>
            <h2 className="reveal">{heading}</h2>
          </div>
          <p className="reveal">{description}</p>
        </div>
        <div className="do-layout reveal">
          <div className="do-left">
            <div className="do-list-label">Service Index</div>
            <ul className="do-list" role="tablist" onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current) }} onMouseLeave={startTimer}>
              {features.map((f, i) => (
                <li key={i}>
                  <button
                    className={`do-item ${i === active ? 'active' : ''}`}
                    onClick={() => handleClick(i)}
                    role="tab"
                    aria-selected={i === active}
                  >
                    <span className="do-dot-wrap"><span className="do-dot"></span></span>
                    <span className="do-index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="do-name-col">
                      <span className="do-name">{f.title}</span>
                      <span className="do-bar"><span className="do-bar-fill"></span></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="do-right">
            <div className="do-card glass">
              <div className={`do-card-body${fading ? ' fade' : ''}`}>
                <div className="do-card-top">
                  <div className="do-badge">{String(active + 1).padStart(2, '0')}</div>
                  <div className="do-icon-btn glass">
                    {svgIcons[featureIcons[current?.title] || 'grid']}
                  </div>
                </div>
                <div className="do-tag">// {current?.tag}</div>
                <h3>{current?.title}</h3>
                <p>{current?.description}</p>
                <div className="do-chips">
                  {current?.chips.map((chip, i) => (
                    <span key={i} className="do-chip">{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
