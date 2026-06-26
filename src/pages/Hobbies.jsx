import hobbies from '../data/hobbies.js'
import Media from '../components/Media.jsx'
import Icon from '../components/Icon.jsx'
import './Hobbies.css'

export default function Hobbies() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Hobbies</span>
          <h1>Music I make</h1>
          <p>
            Outside of code, I play cello and piano. Here are a few recordings — press play, or
            open any of them on the original site.
          </p>
        </div>
      </header>

      {hobbies.map((group) => (
        <section className="section-pad hobby-section" key={group.name}>
          <div className="container">
            <div className="hobby-head">
              <span className="hobby-icon">
                <Icon name="music" size={22} />
              </span>
              <div>
                <h2>{group.name}</h2>
                <p>{group.blurb}</p>
              </div>
            </div>

            <div className="video-grid">
              {group.videos.map((video) => (
                <figure className="video-card" key={video.id}>
                  <Media media={video} label={video.title} />
                  <figcaption>
                    <span className="video-title">{video.title}</span>
                    <a href={video.href} target="_blank" rel="noreferrer" className="video-link">
                      Watch on {video.type === 'youtube' ? 'YouTube' : 'GanJing World'}
                      <Icon name="external" size={14} />
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
