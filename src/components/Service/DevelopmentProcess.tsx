import { type ServiceProcess } from '../../utils/getServiceBySlug'

const svgIcons: Record<string, React.ReactNode> = {
  spark: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>,
  pen: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>,
  gear: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1 1.55V21a2 2 0 01-4 0v-.09a1.7 1.7 0 00-1-1.55 1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.55-1H3a2 2 0 010-4h.09a1.7 1.7 0 001.55-1 1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.34H9a1.7 1.7 0 001-1.55V3a2 2 0 014 0v.09a1.7 1.7 0 001 1.55 1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87V9a1.7 1.7 0 001.55 1H21a2 2 0 010 4h-.09a1.7 1.7 0 00-1.55 1z"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
}

const processIcons: Record<string, string> = {
  idea: 'spark',
  bolt: 'pen',
  code: 'gear',
  rocket: 'target',
}

interface DevelopmentProcessProps {
  steps: ServiceProcess[]
}

export default function DevelopmentProcess({ steps }: DevelopmentProcessProps) {
  return (
    <section className="pad" id="sv-process">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">// How We Work</div>
            <h2 className="reveal">A simple process. Powerful results.</h2>
          </div>
          <a href="#cta" className="btn btn-ghost reveal">Our process
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </a>
        </div>
        <div className="sv-process-grid">
          {steps.map((step, i) => (
            <div key={i} className="p-step glass reveal">
              <span className="p-num">{step.step}</span>
              <div className="p-icon">{svgIcons[processIcons[step.icon]] || svgIcons.spark}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
              {i < steps.length - 1 && <div className="p-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
