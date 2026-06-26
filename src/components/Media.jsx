import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import './Media.css'

/*
 * Renders the visual for a section. Supports:
 *   { type: 'image',   src, alt }      -> <img> (falls back to a styled placeholder)
 *   { type: 'video',   src }           -> native <video> (e.g. an .mp4 URL)
 *   { type: 'youtube', id }            -> YouTube iframe
 *   { type: 'ganjing', id, href }      -> GanJing World iframe
 * If `to` (internal route) or `href` (external) is given, an image becomes clickable.
 */
function Placeholder({ label }) {
  return (
    <div className="media-placeholder" role="img" aria-label={`${label} (image placeholder)`}>
      <div className="media-placeholder-grid" />
      <div className="media-placeholder-inner">
        <Icon name="code" size={26} />
        <span>{label}</span>
        <small>Add an image at public/images/</small>
      </div>
    </div>
  )
}

export default function Media({ media = {}, label = 'Preview', to, href }) {
  const [errored, setErrored] = useState(false)
  const type = media.type || 'image'

  if (type === 'video' && media.src) {
    return (
      <div className="media-frame media-16x9">
        <video controls preload="metadata" poster={media.poster || undefined}>
          <source src={media.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    )
  }

  if (type === 'youtube' && media.id) {
    return (
      <div className="media-frame media-16x9">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${media.id}`}
          title={label}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (type === 'ganjing' && media.id) {
    return (
      <div className="media-frame media-16x9">
        <iframe
          src={`https://www.ganjingworld.com/embed/${media.id}`}
          title={label}
          loading="lazy"
          allow="encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  // image / placeholder
  const showImage = media.src && !errored
  const visual = showImage ? (
    <img src={media.src} alt={media.alt || label} onError={() => setErrored(true)} loading="lazy" />
  ) : (
    <Placeholder label={label} />
  )

  const inner = <div className="media-frame media-photo">{visual}</div>

  if (to) {
    return (
      <Link to={to} className="media-link" aria-label={`${label} — read more`}>
        {inner}
        <span className="media-link-hint">
          <Icon name="arrowRight" size={16} /> Read the story
        </span>
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="media-link">
        {inner}
      </a>
    )
  }
  return inner
}
