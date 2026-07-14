import { useState } from 'react'

const projects = [
  { tag: 'Website', glyph: '01', title: 'SENTHUR VFX', desc: 'Client portfolio — full-service agency site built with care.', tint: 'var(--teal)', pos: '50% 50%', url: 'https://senthur-ytta.vercel.app/', img: '/our-work/SENTHUR-VFX.png' },
  { tag: 'Website', glyph: '02', title: 'Only Moringa', desc: 'wellness application with a clean interface, interactive features, and scalable architecture', tint: 'var(--teal)', pos: '50% 50%', url: 'https://wellness-sand.vercel.app/', img: '/our-work/Only-moringa.png' },
  { tag: 'Website', glyph: '02', title: 'suvaicatering', desc: 'Designed an engaging Instagram carousel for Suvai Catering to showcase menu offerings and strengthen brand presence', tint: 'var(--teal)', pos: '50% 50%', url: 'https://www.instagram.com/p/Dak0bnNklTY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', img: '/our-work/suvaicatering-carousel.png' },
  { tag: 'Logo', glyph: '03', title: 'PMT Logo', desc: 'Logo design — click to view full image.', tint: 'var(--amber)', pos: '50% 50%', img: '/our-work/pmt-logo.jpg' },
  { tag: 'Logo', glyph: '04', title: 'Branproz Final', desc: 'Logo design — click to view full image.', tint: 'var(--amber)', pos: '50% 50%', img: '/our-work/Branproz-Logo.png' },
]

export default function Work() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section className="sec-pad" id="work">
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="full size" className="lightbox-image" onClick={e => e.stopPropagation()} />
        </div>
      )}
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow reveal">// OUR WORK</div>
          <h2 className="reveal">Selected builds.</h2>
          <p className="reveal">A sample of recent engagements across automation, product and brand.</p>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => {
            const Wrapper = p.url ? 'a' : p.img ? 'button' : 'div'
            const wrapperProps = p.url
              ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' as const }
              : p.img
              ? { onClick: () => setLightbox(p.img), style: { cursor: 'pointer', border: 'none', textAlign: 'left' as const, width: '100%', background: 'transparent', color: 'inherit', padding: 0, font: 'inherit' } }
              : {}
            return (
              <Wrapper {...wrapperProps} className="work-card reveal" key={i}>
                <div className="work-thumb" style={{ ...(p.img ? {} : { '--tint': p.tint, '--pos': p.pos }) } as React.CSSProperties}>
                  {p.img ? <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} /> : null}
                  <span className="tag">{p.tag}</span>
                  <span className="work-glyph">{p.glyph}</span>
                </div>
                <div className="work-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Wrapper>
            )
          })}
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
