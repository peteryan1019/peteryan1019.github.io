import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
        <span className="eyebrow">404</span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)' }}>Page not found</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 420, margin: '0 auto 2rem' }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <Icon name="arrowRight" size={16} className="flip" /> Back home
        </Link>
      </div>
    </section>
  )
}
