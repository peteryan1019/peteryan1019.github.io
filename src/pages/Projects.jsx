import projects from '../data/projects.js'
import Section from '../components/Section.jsx'

export default function Projects() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Software Projects</span>
          <h1>Things I've built</h1>
          <p>
            From bare-metal firmware to full-stack web apps — a few projects that show how I like
            to work across the stack.
          </p>
        </div>
      </header>

      <div className="container">
        {projects.map((project, i) => (
          <Section key={project.title} item={project} flip={i % 2 === 1} />
        ))}
      </div>
    </>
  )
}
