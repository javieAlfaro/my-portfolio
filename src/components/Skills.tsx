import { Award, Binary, Braces, Layers3, Terminal } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const skillIcons = [Braces, Layers3, Binary, Terminal]

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      tabIndex={-1}
      className="section page-container"
    >
      <Reveal>
        <SectionHeading
          number="02"
          label="Skills"
          title="An evolving toolkit."
          description="The languages, technologies, and tools behind the work."
        />
        {portfolio.skills.every((category) => category.skills.length === 0) && (
          <p className="content-note">
            Add the skills you actually use. These categories are ready for your
            toolkit.
          </p>
        )}
      </Reveal>
      <div className="skills-grid">
        {portfolio.skills.map((category, index) => {
          const Icon = skillIcons[index % skillIcons.length]
          return (
            <Reveal key={category.id} className="skill-category">
              <Icon
                size={23}
                strokeWidth={1.4}
                className="text-accent"
                aria-hidden="true"
              />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              {category.skills.length ? (
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <span className="skill-placeholder">[ Add your skills ]</span>
              )}
            </Reveal>
          )
        })}
      </div>
      <Reveal className="certifications">
        <h3>Certifications</h3>
        <p className="content-note">A space for my earned certifications.</p>
        <div className="certification-grid">
          {[1, 2].map((number) => (
            <article className="certification-card" key={number}>
              <Award size={25} className="text-accent" aria-hidden="true" />
              <p className="content-label">CERTIFICATION TO ADD</p>
              <h4>[Certification name]</h4>
              <p>[Issuing organization · Date earned]</p>
              <p className="content-note">[Credential link or certificate]</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
