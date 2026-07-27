import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HashLink from '../components/HashLink'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | Madgen'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="grain" />
      <div className="glow-cursor" id="glowCursor" />
      <Header />

      <main style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 160, paddingBottom: 100 }}>
        <section className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 16 }}>
            // ERROR 404
          </div>

          <div style={{
            fontSize: 'clamp(5rem, 12vw, 9.5rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, var(--ink) 30%, var(--amber) 70%, var(--ink-dim) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 16
          }}>
            404
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            marginBottom: 16,
            letterSpacing: '-0.01em',
            color: 'var(--ink)'
          }}>
            Page Not Found
          </h1>

          <p style={{
            color: 'var(--ink-dim)',
            maxWidth: 520,
            margin: '0 auto 36px',
            fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
            lineHeight: 1.6
          }}>
            The page you are looking for doesn't exist, may have been removed, or the link you followed was broken.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
            <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Back to Home
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
            <HashLink to="#services" className="btn btn-ghost">
              Explore Our Services
            </HashLink>
          </div>

          <div style={{
            maxWidth: 640,
            margin: '0 auto',
            padding: '28px 32px',
            borderRadius: 20,
            background: 'linear-gradient(160deg, var(--surface-2), var(--bg-2))',
            border: '1px solid var(--line)',
            textAlign: 'left'
          }}>
            <h2 style={{ fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 18 }}>
              POPULAR SERVICES
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
              <Link to="/services/ai-automation" style={{ color: 'var(--ink-dim)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }} className="svc-link">
                → AI Automation
              </Link>
              <Link to="/services/website-development" style={{ color: 'var(--ink-dim)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }} className="svc-link">
                → Website Development
              </Link>
              <Link to="/services/app-development" style={{ color: 'var(--ink-dim)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }} className="svc-link">
                → App Development
              </Link>
              <Link to="/services/digital-marketing" style={{ color: 'var(--ink-dim)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }} className="svc-link">
                → Digital Marketing
              </Link>
              <Link to="/services/branding" style={{ color: 'var(--ink-dim)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }} className="svc-link">
                → Branding
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
