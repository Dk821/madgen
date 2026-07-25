import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useService } from '../../hooks/useService'
import ServiceSEO from '../../components/Service/ServiceSEO'
import ServiceHero from '../../components/Service/ServiceHero'
import FeatureGrid from '../../components/Service/FeatureGrid'
import TechnologySection from '../../components/Service/TechnologySection'
import DevelopmentProcess from '../../components/Service/DevelopmentProcess'
import FAQSection from '../../components/Service/FAQSection'
import CTA from '../../components/CTA'
import RelatedServices from '../../components/Service/RelatedServices'
import Footer from '../../components/Footer'

gsap.registerPlugin(ScrollTrigger)

function ServiceScrollReveals() {
  useEffect(() => {

    document.querySelectorAll('.reveal').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })
    })

    gsap.utils.toArray('.sv-hero-visual').forEach((el: unknown) => {
      const target = el as gsap.TweenTarget
      gsap.fromTo(target, { opacity: 0, scale: 0.92 }, {
        opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el as HTMLElement, start: 'top 85%' },
      })
    })

    gsap.utils.toArray('.svc-grid').forEach((grid: unknown) => {
      const el = grid as HTMLElement
      gsap.fromTo(el.children, { opacity: 0, y: 34 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    })

    gsap.utils.toArray('.do-layout').forEach((grid: unknown) => {
      const el = grid as HTMLElement
      gsap.fromTo(el.children, { opacity: 0, y: 34 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    })

    gsap.fromTo('.stats-bar', { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.stats-bar', start: 'top 85%' },
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return null
}

export default function ServiceDetails() {
  const { service, slug } = useService()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="sv-not-found">
        <ServiceScrollReveals />
        <div className="wrap" style={{ paddingTop: 200, paddingBottom: 120, textAlign: 'center' }}>
          <h1 style={{ fontSize: 72, marginBottom: 16 }}>404</h1>
          <h2 style={{ marginBottom: 24 }}>Service Not Found</h2>
          <p style={{ color: 'var(--ink-dim)', marginBottom: 32, fontSize: 16 }}>
            The service you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="sv-page">
      <ServiceSEO data={service.seo} />
      <ServiceScrollReveals />
      <ServiceHero data={service.hero} />
      <div className="wrap"><div className="divider"></div></div>
      <TechnologySection technologies={service.technologies} />
      <div className="wrap"><div className="divider"></div></div>
      <FeatureGrid
        features={service.features}
        heading={service.overview.heading}
        description={service.overview.description}
      />
      <DevelopmentProcess steps={service.developmentProcess} />
      <RelatedServices currentSlug={service.slug} />
      <CTA />
      <FAQSection faqs={service.faq} />
      <Footer />
    </div>
  )
}
