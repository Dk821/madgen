import { useEffect } from 'react'
import { type ServiceSEO as SEOData } from '../../utils/getServiceBySlug'

const BASE = 'https://madgen-three.vercel.app'

interface ServiceSEOProps {
  data: SEOData
  slug?: string
}

export default function ServiceSEO({ data, slug }: ServiceSEOProps) {
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

    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', prop)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', data.metaDescription)
    setMeta('keywords', data.metaKeywords)

    setProp('og:title', data.metaTitle)
    setProp('og:description', data.metaDescription)
    setProp('og:url', data.canonicalURL)

    const ogImage = slug
      ? `${BASE}/og-image/og-image-${slug}.png`
      : `${BASE}/og-image/og-image.png`
    setProp('og:image', ogImage)

    setMeta('twitter:title', data.metaTitle)
    setMeta('twitter:description', data.metaDescription)
    setMeta('twitter:image', ogImage)

    let linkEl = document.querySelector('link[rel="canonical"]') as HTMLElement | null
    if (!linkEl) { linkEl = document.createElement('link'); linkEl.setAttribute('rel', 'canonical'); document.head.appendChild(linkEl) }
    linkEl.setAttribute('href', data.canonicalURL)

    return () => {
      document.title = 'Madgen — Digital Foundry'
    }
  }, [data, slug])

  return null
}
