import { profile } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import './Contact.css'

const methods = [
  {
    name: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
    cta: 'Send an email',
  },
  {
    name: 'LinkedIn',
    value: 'in/peter-yan',
    href: profile.linkedin,
    icon: 'linkedin',
    cta: 'Connect',
    external: true,
  },
  {
    name: 'GitHub',
    value: '@peteryan1019',
    href: profile.github,
    icon: 'github',
    cta: 'See my code',
    external: true,
  },
]

export default function Contact() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let's get in touch</h1>
          <p>
            Whether it's an opportunity, a project, or just to say hello — I'd love to hear from
            you. Here's where to find me.
          </p>
        </div>
      </header>

      <section className="section-pad">
        <div className="container contact-grid">
          {/* Portrait */}
          <div className="contact-portrait">
            <div className="contact-photo">
              <img
                src={profile.photo}
                alt="Peter Yan"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'grid'
                }}
              />
              <div className="contact-photo-fallback" style={{ display: 'none' }}>
                <span>PY</span>
                <small>Add public/images/peter.jpg</small>
              </div>
            </div>
            <h3>{profile.name}</h3>
            <p className="contact-role">{profile.role}</p>
            <p className="contact-loc">
              <Icon name="pin" size={15} /> {profile.location}
            </p>
          </div>

          {/* Contact methods */}
          <div className="contact-methods">
            {methods.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target={m.external ? '_blank' : undefined}
                rel={m.external ? 'noreferrer' : undefined}
                className="contact-method card"
              >
                <span className="contact-method-icon">
                  <Icon name={m.icon} size={22} />
                </span>
                <div className="contact-method-text">
                  <span className="contact-method-name">{m.name}</span>
                  <span className="contact-method-value">{m.value}</span>
                </div>
                <span className="contact-method-cta">
                  {m.cta} <Icon name="arrowRight" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
