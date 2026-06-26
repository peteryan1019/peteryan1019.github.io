import Media from './Media.jsx'
import Icon from './Icon.jsx'
import './Section.css'

/*
 * A landing-style section: media on one side, copy on the other,
 * alternating sides as you scroll down (controlled by `flip`).
 *
 * item = {
 *   title, meta, tags: [], description, bullets: [],
 *   links: [{ label, href, internal? }],
 *   media: { type, ... },
 *   mediaTo,   // internal route -> makes the image clickable (clubs)
 *   mediaHref, // external link -> makes the image clickable
 * }
 */
export default function Section({ item, flip = false }) {
  const {
    title,
    meta,
    tags = [],
    description,
    bullets = [],
    links = [],
    media,
    mediaTo,
    mediaHref,
  } = item

  const paragraphs = Array.isArray(description) ? description : [description]

  return (
    <article className={`feature ${flip ? 'feature-flip' : ''}`}>
      <div className="feature-media">
        <Media media={media} label={title} to={mediaTo} href={mediaHref} />
      </div>

      <div className="feature-copy">
        {meta && (
          <div className="feature-meta">
            <Icon name="calendar" size={15} />
            <span>{meta}</span>
          </div>
        )}
        <h3>{title}</h3>

        {tags.length > 0 && (
          <div className="feature-tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        {paragraphs.filter(Boolean).map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {bullets.length > 0 && (
          <ul className="feature-bullets">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {links.length > 0 && (
          <div className="feature-links">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                {l.label}
                <Icon name="external" size={16} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
