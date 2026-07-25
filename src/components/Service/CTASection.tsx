import { type ServiceCTA } from '../../utils/getServiceBySlug'

interface CTASectionProps {
  data: ServiceCTA
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section className="pad">
      <div className="wrap">
        <div className="cta-panel glass reveal">
          <div>
            <div className="eyebrow">{data.eyebrow}</div>
            <h3>{data.heading}</h3>
            <p>{data.description}</p>
          </div>
          <div className="cta-actions">
            <a href={data.primaryAction.href} className="btn btn-primary">
              {data.primaryAction.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
            </a>
            <a href={data.secondaryAction.href} className="btn btn-ghost">
              {data.secondaryAction.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0122 16.92z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
