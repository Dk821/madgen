import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getServiceBySlug, type ServiceData } from '../utils/getServiceBySlug'

export function useService(): { service: ServiceData | undefined; slug: string | undefined } {
  const { slug } = useParams<{ slug: string }>()
  const service = useMemo(() => (slug ? getServiceBySlug(slug) : undefined), [slug])
  return { service, slug }
}
