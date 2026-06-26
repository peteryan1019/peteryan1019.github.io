import clubs from '../data/clubs.js'
import Section from '../components/Section.jsx'

export default function Clubs() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Club Activities</span>
          <h1>Communities I'm part of</h1>
          <p>
            Placeholder sections for now — each one is laid out like the projects page, and the
            picture is clickable, opening a full write-up.
          </p>
        </div>
      </header>

      <div className="container">
        {clubs.map((club, i) => (
          <Section
            key={club.slug}
            item={{ ...club, mediaTo: `/blog/${club.slug}` }}
            flip={i % 2 === 1}
          />
        ))}
      </div>
    </>
  )
}
