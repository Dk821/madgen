import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Work from './components/Work'
import CTA from './components/CTA'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let target = window.scrollY
    let current = window.scrollY
    const ease = 0.09
    let running = false

    function setHeight() {
      document.body.style.height = document.documentElement.scrollHeight + 'px'
    }

    function raf() {
      current += (target - current) * ease
      if (Math.abs(target - current) < 0.05) current = target
      window.scrollTo(0, current)
      if (Math.abs(target - current) > 0.05) requestAnimationFrame(raf)
      else running = false
    }

    function kick() {
      if (!running) { running = true; requestAnimationFrame(raf) }
    }

    const onWheel = (e: WheelEvent) => {
      target = Math.min(Math.max(0, target + e.deltaY), document.documentElement.scrollHeight - window.innerHeight)
      e.preventDefault()
      kick()
    }

    const onResize = () => { target = window.scrollY; current = window.scrollY }

    const onClickAnchor = (e: MouseEvent) => {
      const a = (e.currentTarget as HTMLAnchorElement)
      const id = a.getAttribute('href')
      if (id && id.length > 1) {
        const el = document.querySelector(id)
        if (el) {
          e.preventDefault()
          target = el.getBoundingClientRect().top + window.scrollY - 90
          kick()
        }
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('resize', onResize)

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(a => a.addEventListener('click', onClickAnchor as EventListener))

    setHeight()

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', onResize)
      anchors.forEach(a => a.removeEventListener('click', onClickAnchor as EventListener))
      document.body.style.height = ''
    }
  }, [])

  return null
}

function ScrollReveals() {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })
    })

    gsap.utils.toArray('.svc-grid').forEach((grid) => {
      gsap.fromTo((grid as HTMLElement).children, { opacity: 0, y: 34 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: grid as HTMLElement, start: 'top 85%' },
      })
    })

    gsap.utils.toArray('.work-grid').forEach((grid) => {
      gsap.fromTo((grid as HTMLElement).children, { opacity: 0, y: 34 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: grid as HTMLElement, start: 'top 85%' },
      })
    })

    gsap.fromTo('.why-grid .why-cell', { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.07,
      scrollTrigger: { trigger: '.why-grid', start: 'top 85%' },
    })
  }, [])

  return null
}

function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('glowCursor')
    if (!glow) return
    const onMove = (e: MouseEvent) => {
      glow.style.setProperty('--gx', e.clientX + 'px')
      glow.style.setProperty('--gy', e.clientY + 'px')
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <ScrollReveals />
      <CursorGlow />

      <div className="grain" />
      <div className="glow-cursor" id="glowCursor" />

      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Work />
        <CTA />
      </main>

      <Footer />
    </ThemeProvider>
  )
}
