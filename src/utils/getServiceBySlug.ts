import services from '../data/services.json'

export interface ServiceFeature {
  title: string
  tag: string
  description: string
  chips: string[]
}

export interface ServiceProcess {
  step: string
  title: string
  icon: string
  description: string
}

export interface ServiceStat {
  value: number
  suffix: string
  decimal?: number
  label: string
  sub: string
}

export interface ServiceFAQ {
  question: string
  answer: string
  meta: string
}

export interface ServiceHero {
  eyebrow: string
  heading: string
  lead: string
  chips: { icon: string; label: string; sub: string }[]
  actions: { label: string; variant: string; href: string }[]
  heroImage?: string
  heroImageLight?: string
}

export interface ServiceCTA {
  eyebrow: string
  heading: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
}

export interface ServiceSEO {
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  canonicalURL: string
}

export interface ServiceData {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string
  hero: ServiceHero
  overview: { heading: string; description: string }
  features: ServiceFeature[]
  technologies: string[]
  developmentProcess: ServiceProcess[]
  statistics: ServiceStat[]
  faq: ServiceFAQ[]
  cta: ServiceCTA
  seo: ServiceSEO
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return (services as ServiceData[]).find(s => s.slug === slug)
}

export function getAllServices(): ServiceData[] {
  return services as ServiceData[]
}

export function getRelatedServices(currentSlug: string, count = 3): ServiceData[] {
  return (services as ServiceData[]).filter(s => s.slug !== currentSlug).slice(0, count)
}
