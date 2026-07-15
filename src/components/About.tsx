export default function About() {
  return (
    <section className="sec-pad" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <div className="eyebrow reveal">// ABOUT US</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-0.01em', marginBottom: 22 }} className="reveal">
            A studio that builds like an in-house team.
          </h2>
          <p className="reveal"><strong>Madgen started in a spare bedroom with two laptops and a stubborn belief:</strong> small businesses deserve the same calibre of engineering and design that funded startups get.</p>
          <p className="reveal">Today we&apos;re a full-stack digital partner — one team handling the automation, the software, the site and the story, so nothing falls into the gaps between agencies.</p>
          <p className="reveal">We keep client rosters deliberately small. Every project gets senior hands, not a rotating cast of juniors learning on your budget.</p>
        </div>
        <div className="about-panel reveal">
          <ul className="about-list">
            <li><span className="k">Founded</span><span className="v">2025</span></li>
            <li><span className="k">Team</span><span className="v">14 specialists</span></li>
            <li><span className="k">Focus</span><span className="v">AI · Web · App · Growth</span></li>
            <li><span className="k">Based</span><span className="v">Remote-first, global</span></li>
            <li><span className="k">Avg. engagement</span><span className="v">3–9 months</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
