import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      tabIndex={-1}
      className="section page-container"
    >
      <Reveal>
        <SectionHeading
          number="01"
          label="Experience"
          title="Learning through experience."
          description="My work history and education."
        />
      </Reveal>
      <div className="experience-list">
        {portfolio.workExperience.map((experience) => (
          <Reveal key={experience.id} className="experience-entry">
            <BriefcaseBusiness
              size={23}
              className="text-accent"
              aria-hidden="true"
            />
            <div>
              <h3>{experience.role}</h3>
              <p>{experience.organization}</p>
              <p className="content-label">{experience.dates}</p>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        <Reveal className="experience-entry">
          <GraduationCap size={23} className="text-accent" aria-hidden="true" />
          <div>
            <h3>Education</h3>
            <p>{portfolio.education ?? '[Degree · Institution · Dates]'}</p>
            <p>{portfolio.educationHonors.join(' · ')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
