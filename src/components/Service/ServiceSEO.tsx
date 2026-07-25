import { useEffect } from 'react'
import { type ServiceSEO as SEOData } from '../../utils/getServiceBySlug'

interface ServiceSEOProps {
  data: SEOData
}

export default function ServiceSEO({ data }: ServiceSEOProps) {
  useEffect(() => {
    document.title = data.metaTitle

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', data.metaDescription)
    setMeta('keywords', data.metaKeywords)

    let ogEl = document.querySelector('meta[property="og:title"]') as HTMLElement | null
    if (!ogEl) { ogEl = document.createElement('meta'); ogEl.setAttribute('property', 'og:title'); document.head.appendChild(ogEl) }
    ogEl.setAttribute('content', data.metaTitle)

    ogEl = document.querySelector('meta[property="og:description"]') as HTMLElement | null
    if (!ogEl) { ogEl = document.createElement('meta'); ogEl.setAttribute('property', 'og:description'); document.head.appendChild(ogEl) }
    ogEl.setAttribute('content', data.metaDescription)

    ogEl = document.querySelector('meta[property="og:url"]') as HTMLElement | null
    if (!ogEl) { ogEl = document.createElement('meta'); ogEl.setAttribute('property', 'og:url'); document.head.appendChild(ogEl) }
    ogEl.setAttribute('content', data.canonicalURL)

    let twEl = document.querySelector('meta[name="twitter:title"]') as HTMLElement | null
    if (!twEl) { twEl = document.createElement('meta'); twEl.setAttribute('name', 'twitter:title'); document.head.appendChild(twEl) }
    twEl.setAttribute('content', data.metaTitle)

    twEl = document.querySelector('meta[name="twitter:description"]') as HTMLElement | null
    if (!twEl) { twEl = document.createElement('meta'); twEl.setAttribute('name', 'twitter:description'); document.head.appendChild(twEl) }
    twEl.setAttribute('content', data.metaDescription)

    let linkEl = document.querySelector('link[rel="canonical"]') as HTMLElement | null
    if (!linkEl) { linkEl = document.createElement('link'); linkEl.setAttribute('rel', 'canonical'); document.head.appendChild(linkEl) }
    linkEl.setAttribute('href', data.canonicalURL)

    return () => {
      document.title = 'Madgen — Digital Foundry'
    }
  }, [data])

  return null
}
