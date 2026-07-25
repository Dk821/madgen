import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  serviceTitle: string
}

export default function Breadcrumb({ serviceTitle }: BreadcrumbProps) {
  return (
    <div className="sv-breadcrumb reveal">
      <Link to="/">Home</Link>
      <span className="sv-bc-sep">›</span>
      <Link to="/services">Services</Link>
      <span className="sv-bc-sep">›</span>
      <span>{serviceTitle}</span>
    </div>
  )
}
