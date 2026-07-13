import { useEffect, useRef } from 'react'

export default function SignalHeroBg() {
  const starsRef = useRef<HTMLDivElement>(null)
  const streaksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (starsRef.current) {
      const starCount = 70
      let html = ''
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 100
        const y = Math.random() * 100
        const s = (Math.random() * 1.6 + 0.4).toFixed(2)
        const o = (Math.random() * 0.6 + 0.15).toFixed(2)
        const delay = (Math.random() * 6).toFixed(2)
        html += `<div class="sh-star" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;--o:${o};animation-delay:${delay}s;"></div>`
      }
      starsRef.current.innerHTML = html
    }

    if (streaksRef.current && !reduceMotion) {
      const streaks = [
        { x: 44.5, len: 22, dur: 4.6, delay: 0 },
        { x: 49.7, len: 30, dur: 5.4, delay: 1.6 },
        { x: 54.5, len: 26, dur: 5.0, delay: 3.1 },
      ]
      let html = ''
      streaks.forEach(s => {
        html += `<div class="sh-streak" style="left:${s.x}%;--len:${s.len}vh;animation-duration:${s.dur}s;animation-delay:-${s.delay}s;"></div>`
      })
      streaksRef.current.innerHTML = html
    }
  }, [])

  return (
    <>
      <div className="sh-haze" aria-hidden="true">
        <span className="h1" />
        <span className="h2" />
      </div>

      <div className="sh-stars" id="shStars" ref={starsRef} aria-hidden="true" />

      <div className="sh-streaks" id="shStreaks" ref={streaksRef} aria-hidden="true" />

      <div className="sh-corners" aria-hidden="true">
        <div className="sh-corner-wrap tl">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <defs>
              <linearGradient id="sh-grad-tl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--comet-start)" stopOpacity="0" />
                <stop offset="55%" stopColor="var(--comet-mid)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--comet-end)" stopOpacity="1" />
              </linearGradient>
              <filter id="sh-soft-tl" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4.2" /></filter>
            </defs>
            <path d="M0 18 H126 Q144 18 152 8" stroke="var(--line-dim)" strokeWidth="1" />
            <path className="sh-comet sh-comet-bloom" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-tl)" strokeWidth="7" strokeLinecap="round" filter="url(#sh-soft-tl)" style={{ animationDelay: '0s' }} />
            <path className="sh-comet sh-comet-core" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-tl)" strokeWidth="1.4" strokeLinecap="round" style={{ animationDelay: '0s' }} />
          </svg>
        </div>
        <div className="sh-corner-wrap tr">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <defs>
              <linearGradient id="sh-grad-tr" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--comet-start)" stopOpacity="0" />
                <stop offset="55%" stopColor="var(--comet-mid)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--comet-end)" stopOpacity="1" />
              </linearGradient>
              <filter id="sh-soft-tr" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4.2" /></filter>
            </defs>
            <path d="M0 18 H126 Q144 18 152 8" stroke="var(--line-dim)" strokeWidth="1" />
            <path className="sh-comet sh-comet-bloom" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-tr)" strokeWidth="7" strokeLinecap="round" filter="url(#sh-soft-tr)" style={{ animationDelay: '-2.5s' }} />
            <path className="sh-comet sh-comet-core" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-tr)" strokeWidth="1.4" strokeLinecap="round" style={{ animationDelay: '-2.5s' }} />
          </svg>
        </div>
        <div className="sh-corner-wrap bl">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <defs>
              <linearGradient id="sh-grad-bl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--comet-start)" stopOpacity="0" />
                <stop offset="55%" stopColor="var(--comet-mid)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--comet-end)" stopOpacity="1" />
              </linearGradient>
              <filter id="sh-soft-bl" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4.2" /></filter>
            </defs>
            <path d="M0 18 H126 Q144 18 152 8" stroke="var(--line-dim)" strokeWidth="1" />
            <path className="sh-comet sh-comet-bloom" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-bl)" strokeWidth="7" strokeLinecap="round" filter="url(#sh-soft-bl)" style={{ animationDelay: '-5s' }} />
            <path className="sh-comet sh-comet-core" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-bl)" strokeWidth="1.4" strokeLinecap="round" style={{ animationDelay: '-5s' }} />
          </svg>
        </div>
        <div className="sh-corner-wrap br">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <defs>
              <linearGradient id="sh-grad-br" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--comet-start)" stopOpacity="0" />
                <stop offset="55%" stopColor="var(--comet-mid)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--comet-end)" stopOpacity="1" />
              </linearGradient>
              <filter id="sh-soft-br" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4.2" /></filter>
            </defs>
            <path d="M0 18 H126 Q144 18 152 8" stroke="var(--line-dim)" strokeWidth="1" />
            <path className="sh-comet sh-comet-bloom" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-br)" strokeWidth="7" strokeLinecap="round" filter="url(#sh-soft-br)" style={{ animationDelay: '-7.5s' }} />
            <path className="sh-comet sh-comet-core" d="M0 18 H126 Q144 18 152 8" pathLength="100" stroke="url(#sh-grad-br)" strokeWidth="1.4" strokeLinecap="round" style={{ animationDelay: '-7.5s' }} />
          </svg>
        </div>
      </div>
    </>
  )
}
