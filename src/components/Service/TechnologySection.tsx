interface TechnologySectionProps {
  technologies: string[]
}

export default function TechnologySection({ technologies }: TechnologySectionProps) {
  return (
    <section className="pad" id="sv-tech">
      <div className="wrap">
        
        <div className="tech-marquee reveal">
          <div className="tm-row">
            <div className="tm-track" id="tmTrack1">
              {[...Array(3)].map((_, copy) =>
                technologies.map((tech, i) => (
                  <span key={`${copy}-${i}`} className="tech-pill glass">
                    <span className="dot2"></span>{tech}
                  </span>
                ))
              )}
            </div>
          </div>
          <div className="tm-row">
            <div className="tm-track" id="tmTrack2">
              {[...Array(3)].map((_, copy) =>
                [...technologies].reverse().map((tech, i) => (
                  <span key={`${copy}-${i}`} className="tech-pill glass">
                    <span className="dot2"></span>{tech}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
