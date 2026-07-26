import { Link } from 'react-router-dom'
import HashLink from '../HashLink'

interface BreadcrumbProps {
  serviceTitle: string
}

export default function Breadcrumb({ serviceTitle }: BreadcrumbProps) {
  return (
    <div className="sv-breadcrumb reveal">
      <Link to="/">Home</Link>
      <span className="sv-bc-sep">›</span>
      <HashLink to="#services">Services</HashLink>
      <span className="sv-bc-sep">›</span>
      <span>{serviceTitle}</span>
    </div>
  )
}

