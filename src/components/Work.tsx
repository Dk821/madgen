const projects = [
  { tag: 'AI Automation', glyph: '01', title: 'Ledgerline — Ops Copilot', desc: 'Cut manual reconciliation time by 71% for a finance team of 12.', tint: 'var(--amber)', pos: '30% 20%' },
  { tag: 'Website', glyph: '02', title: 'Hearth & Co.', desc: 'Headless commerce rebuild — 2.3x conversion within a quarter.', tint: 'var(--teal)', pos: '70% 20%' },
  { tag: 'App', glyph: '03', title: 'Ferry — Field Service App', desc: 'Cross-platform dispatch app now running 400+ jobs a week.', tint: 'var(--amber)', pos: '30% 80%' },
  { tag: 'Marketing', glyph: '04', title: 'Northloop Fitness', desc: 'Lifecycle email + paid rebuild dropped CAC by 34%.', tint: 'var(--teal)', pos: '60% 40%' },
  { tag: 'Branding', glyph: '05', title: 'Solace Clinics', desc: 'Full identity and design system across nine clinic locations.', tint: 'var(--amber)', pos: '40% 30%' },
]

export default function Work() {
  return (
    <section className="sec-pad" id="work">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow reveal">// OUR WORK</div>
          <h2 className="reveal">Selected builds.</h2>
          <p className="reveal">A sample of recent engagements across automation, product and brand.</p>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <div className="work-card reveal" key={i}>
              <div className="work-thumb" style={{ '--tint': p.tint, '--pos': p.pos } as React.CSSProperties}>
                <span className="tag">{p.tag}</span>
                <span className="work-glyph">{p.glyph}</span>
              </div>
              <div className="work-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
          <div className="work-card reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 22px', textAlign: 'center' }}>
            <div>
              <h3 style={{ marginBottom: 10 }}>More in the archive</h3>
              <p style={{ marginBottom: 18 }}>Case studies for every discipline, on request.</p>
              <a href="#cta" className="btn btn-ghost" style={{ width: 'fit-content', margin: '0 auto' }}>Request access →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
