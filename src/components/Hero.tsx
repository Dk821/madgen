import { useEffect } from 'react'
import gsap from 'gsap'
import SignalHeroBg from './SignalHeroBg'
import GridCanvas from './GridCanvas'

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to('.hero .status-pill', { opacity: 1, y: 0, duration: 0.6 }, 0)
      .to('.hero .eyebrow', { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .fromTo('.hero h1', { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.9 }, 0.15)
      .fromTo('.hero p.lede', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, 0.35)
      .fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
      .fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.65)

    gsap.set('.hero .eyebrow', { opacity: 0, y: 14 })
    gsap.set('.hero .status-pill', { opacity: 0, y: 14 })
  }, [])

  return (
    <section className="hero" id="hero">
      <GridCanvas />
      <SignalHeroBg />

      <div className="wrap hero-inner">
        <div className="status-pill" style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', display: 'inline-flex' }}>
          <span className="dot" />AVAILABLE FOR NEW PROJECTS
        </div>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>// MADGEN — DIGITAL FOUNDRY</div>
        <h1 className="reveal-hero">
          We build the systems <span className="accent">your business</span> runs on.
        </h1>
        <p className="lede reveal-hero">
          AI automation, websites, apps, marketing and brand — engineered as one connected system instead of five disconnected vendors.
        </p>
        <div className="hero-ctas reveal-hero">
          <a href="#cta" className="btn btn-amber">Start a Project ↗</a>
          <a href="#work" className="btn btn-ghost">See Our Work</a>
        </div>
        <div className="hero-stats reveal-hero">
          <div className="hero-stat"><b>20+</b><span>Projects shipped</span></div>
          <div className="hero-stat"><b>6+</b><span>Automations live</span></div>
          <div className="hero-stat"><b>4.9/5</b><span>Client rating</span></div>
          
        </div>
      </div>
      <div className="scroll-cue"><span>Scroll</span><div className="line" /></div>
    </section>
  )
}
