import experience from '../data/experience.js'
import Icon from '../components/Icon.jsx'
import './Experience.css'

export default function Experience() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Work Experiences</span>
          <h1>Where I've worked</h1>
          <p>
            A mix of software, teaching, and the hands-on jobs that taught me to show up and get
            things done — listed most recent first.
          </p>
        </div>
      </header>

      <section className="section-pad">
        <div className="container">
          <ol className="timeline">
            {experience.map((job) => (
              <li className="timeline-item" key={`${job.org}-${job.period}`}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card card">
                  <div className="timeline-period">
                    <Icon name="calendar" size={15} />
                    {job.period}
                  </div>
                  <h3>{job.role}</h3>
                  <div className="timeline-org">
                    <strong>{job.org}</strong>
                    <span className="timeline-loc">
                      <Icon name="pin" size={14} /> {job.location}
                    </span>
                  </div>
                  <ul className="timeline-bullets">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {job.tags?.length > 0 && (
                    <div className="timeline-tags">
                      {job.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
