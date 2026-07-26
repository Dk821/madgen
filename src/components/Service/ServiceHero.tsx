import { useTheme } from '../../context/ThemeContext'
import { type ServiceHero as HeroData } from '../../utils/getServiceBySlug'

const chipIcons: Record<string, React.ReactNode> = {
  spark: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" /></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" /></svg>,
  zap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /></svg>,
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
  smartphone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>,
  trending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
}

interface ServiceHeroProps {
  data: HeroData
}

export default function ServiceHero({ data }: ServiceHeroProps) {
  const { theme } = useTheme()
  const imgSrc = theme === 'light' && data.heroImageLight ? data.heroImageLight : data.heroImage

  return (
    <section className="sv-hero" id="sv-hero">
      <div className="wrap">
        <div className="sv-hero-grid">
          <div>
            <div className="">{data.eyebrow}</div>
            <h1 className="reveal" dangerouslySetInnerHTML={{ __html: data.heading }} />
            <p className="sv-hero-lead reveal">{data.lead}</p>
            <div className="sv-chips reveal">
              {data.chips.map((chip, i) => (
                <div className="chip glass" key={i}>
                  <div className="ic">{chipIcons[chip.icon] || chipIcons.spark}</div>
                  <div><strong>{chip.label}</strong><span>{chip.sub}</span></div>
                </div>
              ))}
            </div>
            <div className="sv-hero-actions reveal">
              {data.actions.map((action, i) => (
                <a key={i} href={action.href} className={`btn btn-${action.variant}`}>
                  {action.label}
                  {action.variant === 'primary' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="sv-hero-visual reveal">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            {imgSrc ? (
              <img src={imgSrc} alt="" className="sv-hero-image" loading="lazy" />
            ) : (
              <>
                <div className="device device-browser glass">
                  <div className="sweep"></div>
                  <div className="browser-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
                  <div className="browser-body">
                    <div className="ghost-line w1"></div>
                    <div className="ghost-line w2"></div>
                    <div className="ghost-line w3"></div>
                    <div className="browser-glow"></div>
                  </div>
                </div>
                <div className="device device-phone glass">
                  <div className="sweep"></div>
                  <div className="phone-notch"></div>
                  <div className="phone-body">
                    <div className="ghost-line w1"></div>
                    <div className="ghost-line w2"></div>
                    <div className="phone-glow"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
