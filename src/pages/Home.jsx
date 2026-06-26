import { Link } from 'react-router-dom'
import { profile, navItems } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Hi, I'm</span>
            <h1>Peter Yan</h1>
            <p className="hero-role">
              Computer Science student at the University of Toronto Scarborough
            </p>
            <p className="hero-lead">
              I build at the boundary where software meets the physical world — embedded
              firmware, autonomous robots, and full-stack web apps — and I care about writing
              clean, reliable code. Away from the keyboard, you will usually find me playing
              cello or piano.
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                View my work <Icon name="arrowRight" size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in touch
              </Link>
            </div>
            <div className="hero-social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Icon name="mail" size={20} />
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-frame">
              <img
                src={profile.photo}
                alt="Peter Yan"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'grid'
                }}
              />
              <div className="portrait-fallback" style={{ display: 'none' }}>
                <span>PY</span>
                <small>Add public/images/peter.jpg</small>
              </div>
            </div>
            <div className="portrait-badge">
              <Icon name="pin" size={15} /> {profile.location}
            </div>
          </div>
        </div>
      </section>

      {/* Explore / intro cards */}
      <section className="section-pad bg-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Explore</span>
            <h2>A quick tour</h2>
            <p>A short introduction to each part of this site — follow any card to dive in.</p>
          </div>

          <div className="intro-grid">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="intro-card card">
                <span className="intro-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3>{item.label}</h3>
                <p>{item.blurb}</p>
                <span className="intro-more">
                  Explore <Icon name="arrowRight" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
