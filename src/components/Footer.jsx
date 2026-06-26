import { Link } from 'react-router-dom'
import { profile, navItems } from '../data/site.js'
import Icon from './Icon.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand-mark">PY</div>
          <p className="footer-tag">
            Building thoughtful software — and playing a little music along the way.
          </p>
          <div className="footer-social">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="social-btn">
              <Icon name="mail" size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-btn"
            >
              <Icon name="github" size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-btn"
            >
              <Icon name="linkedin" size={18} />
            </a>
          </div>
        </div>

        <nav className="footer-nav">
          <h4>Explore</h4>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <h4>Get in touch</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container">
          <span>© {year} Peter Yan. All rights reserved.</span>
          <span>Built with React · Deployed with Docker</span>
        </div>
      </div>
    </footer>
  )
}
